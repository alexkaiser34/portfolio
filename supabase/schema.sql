-- ---------------------------------------------------------------------------
-- Portfolio content schema
-- ---------------------------------------------------------------------------
-- Single source of truth for all portfolio content, consumed by both the
-- website and the AI assistant (both read via the publishable key + RLS).
--
-- Columns are camelCase (quoted) to match the model fields exactly, so rows
-- cast straight into models with no field mapping. Table names stay
-- snake_case. `id` / `sortOrder` are DB-only and stripped during parsing.
--
-- Apply in the Supabase SQL editor, or via `supabase db push` with the CLI.
-- Row Level Security is enabled with public SELECT-only policies. The app only
-- ever reads, so the publishable key is sufficient; writes are done through the
-- Supabase dashboard / a secret key, never from the client.
-- ---------------------------------------------------------------------------

-- Profile (single row) ------------------------------------------------------
create table if not exists profile (
  id           smallint primary key default 1,
  "name"       text not null,
  "title"      text not null,
  "location"   text not null,
  "email"      text not null,
  "linkedin"   text not null,
  "github"     text not null,
  "resumeUrl"  text not null,
  constraint profile_singleton check (id = 1)
);

-- About (single row) + stats -----------------------------------------------
create table if not exists about (
  id            smallint primary key default 1,
  "paragraphs"  text[] not null default '{}',
  constraint about_singleton check (id = 1)
);

create table if not exists about_stats (
  id           bigint generated always as identity primary key,
  "value"      text not null,
  "label"      text not null,
  "sortOrder"  int not null default 0
);

-- Expertise -----------------------------------------------------------------
create table if not exists expertise (
  id             bigint generated always as identity primary key,
  "title"        text not null,
  "description"  text not null,
  "icon"         text not null,
  "sortOrder"    int not null default 0
);

-- Skills --------------------------------------------------------------------
create table if not exists skill_groups (
  id           bigint generated always as identity primary key,
  "label"      text not null,
  "items"      text[] not null default '{}',
  "sortOrder"  int not null default 0
);

create table if not exists soft_skills (
  id             bigint generated always as identity primary key,
  "title"        text not null,
  "description"  text not null,
  "icon"         text not null,
  "sortOrder"    int not null default 0
);

-- Recommendations -----------------------------------------------------------
create table if not exists recommendations (
  id             bigint generated always as identity primary key,
  "initials"     text not null,
  "name"         text not null,
  "title"        text not null,
  "description"  text not null,
  "fileKey"      text not null,
  "sortOrder"    int not null default 0
);

-- Resume: work + education --------------------------------------------------
create table if not exists work_experience (
  id             bigint generated always as identity primary key,
  "company"      text not null,
  "role"         text not null,
  "period"       text not null,
  "location"     text not null,
  "description"  text not null,
  "points"       text[] not null default '{}',
  "tech"         text[] not null default '{}',
  "sortOrder"    int not null default 0
);

create table if not exists education (
  id           bigint generated always as identity primary key,
  "school"     text not null,
  "degree"     text not null,
  "period"     text not null,
  "location"   text not null,
  "link"       text not null,
  "points"     text[] not null default '{}',
  "sortOrder"  int not null default 0
);

-- Projects ------------------------------------------------------------------
create table if not exists projects (
  "id"                text primary key,
  "title"             text not null,
  "role"              text not null,
  "category"          text not null,
  "alignment"         text not null,
  "timeline"          text not null,
  "image"             text not null,
  "shortDescription"  text not null,
  "longDescription"   text not null,
  "contributions"     text[] not null default '{}',
  "responsibilities"  text[] not null default '{}',
  "company"           text,
  "sortOrder"         int not null default 0
);

-- Personal (single row) — narrative content for the AI assistant ------------
create table if not exists personal (
  id                 smallint primary key default 1,
  "headline"         text not null,
  "bio"              text not null,
  "origin"           text not null,
  "interests"        text[] not null default '{}',
  "availability"     text not null,
  "workPreferences"  text[] not null default '{}',
  constraint personal_singleton check (id = 1)
);

-- ---------------------------------------------------------------------------
-- Row Level Security: public read-only on every content table
-- ---------------------------------------------------------------------------
do $$
declare
  t text;
  content_tables text[] := array[
    'profile', 'about', 'about_stats', 'expertise', 'skill_groups',
    'soft_skills', 'recommendations', 'work_experience', 'education',
    'projects', 'personal'
  ];
begin
  foreach t in array content_tables loop
    execute format('alter table %I enable row level security;', t);
    execute format('drop policy if exists "public_read_%1$s" on %1$I;', t);
    execute format(
      'create policy "public_read_%1$s" on %1$I for select to anon, authenticated using (true);',
      t
    );
  end loop;
end $$;
