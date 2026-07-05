import type { SupabaseClient } from '@supabase/supabase-js';
import type { ListModel, SingleModel } from './model';

/**
 * Generic model-based Supabase reads. Because DB columns match model fields,
 * `select('*')` returns rows that are validated and cast straight into models
 * by the model's Zod schema — extra DB-only columns (`id`, `sortOrder`) are
 * stripped during parsing. No per-query column lists or field mapping needed.
 */

export async function fetchSingle<T>(
  client: SupabaseClient,
  model: SingleModel<T>
): Promise<T> {
  const { data, error } = await client.from(model.table).select('*').limit(1).single();
  if (error) throw error;
  return model.schema.parse(data);
}

export async function fetchList<T>(
  client: SupabaseClient,
  model: ListModel<T>
): Promise<T[]> {
  const { data, error } = await client.from(model.table).select('*').order('sortOrder');
  if (error) throw error;
  return model.schema.array().parse(data);
}
