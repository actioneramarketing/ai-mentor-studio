-- Create plans table
create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  studio_id uuid not null references public.studios(id) on delete cascade,
  name text not null,
  price text not null default '0',
  description text default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table public.plans enable row level security;

-- Create index for faster lookups by studio
create index if not exists plans_studio_id_idx on public.plans(studio_id);
