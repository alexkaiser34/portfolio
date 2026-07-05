import type { z } from 'zod';

/**
 * A content model is the single source of truth for one piece of portfolio
 * content: its Zod schema (which infers the TS type and validates rows), the
 * Supabase table it lives in, and how it renders to markdown for the AI
 * assistant's system prompt.
 *
 * DB columns are named to match the model fields exactly (camelCase), so rows
 * can be cast straight into models via `schema.parse` with no manual mapping.
 */
export interface SingleModel<T> {
  kind: 'single';
  table: string;
  schema: z.ZodType<T>;
  /** Prompt section heading, e.g. `PROFILE`. */
  section: string;
  /** Renders the section body (heading is applied by `renderSection`). */
  render: (item: T) => string;
  /** Empty instance derived from the schema, for initial UI state. */
  empty: T;
}

export interface ListModel<T> {
  kind: 'list';
  table: string;
  schema: z.ZodType<T>;
  section: string;
  /** Renders a single row as one markdown line/block. */
  renderItem: (item: T) => string;
  empty: T[];
}

export type ContentModel = SingleModel<any> | ListModel<any>;

export function defineSingle<T>(config: {
  table: string;
  schema: z.ZodType<T>;
  section: string;
  render: (item: T) => string;
}): SingleModel<T> {
  return { kind: 'single', ...config, empty: emptyOf(config.schema) };
}

export function defineList<T>(config: {
  table: string;
  schema: z.ZodType<T>;
  section: string;
  renderItem: (item: T) => string;
}): ListModel<T> {
  return { kind: 'list', ...config, empty: [] };
}

/**
 * Render a fetched model's data into a complete prompt section (heading + body).
 * List sections render nothing when empty so the prompt stays tidy.
 */
export function renderSection<T>(model: SingleModel<T>, data: T): string;
export function renderSection<T>(model: ListModel<T>, data: T[]): string;
export function renderSection(model: ContentModel, data: unknown): string {
  if (model.kind === 'single') {
    return `${model.section}\n${model.render(data)}`;
  }
  const items = data as unknown[];
  if (items.length === 0) return '';
  return `${model.section}\n${items.map((item) => model.renderItem(item)).join('\n')}`;
}

/**
 * Build an empty instance of a schema for use as initial UI state (before the
 * async fetch resolves). Handles the schema shapes used across the models:
 * objects, arrays, strings, numbers, booleans, and optionals.
 */
export function emptyOf<T>(schema: z.ZodType<T>): T {
  return build(schema as unknown as ZodIntrospect) as T;
}

interface ZodIntrospect {
  def: { type: string; element?: ZodIntrospect; innerType?: ZodIntrospect };
  shape?: Record<string, ZodIntrospect>;
}

function build(schema: ZodIntrospect): unknown {
  switch (schema.def.type) {
    case 'object': {
      const shape = schema.shape ?? {};
      const result: Record<string, unknown> = {};
      for (const key of Object.keys(shape)) {
        result[key] = build(shape[key]);
      }
      return result;
    }
    case 'array':
      return [];
    case 'string':
      return '';
    case 'number':
      return 0;
    case 'boolean':
      return false;
    case 'optional':
    case 'nullable':
      return undefined;
    default:
      return undefined;
  }
}
