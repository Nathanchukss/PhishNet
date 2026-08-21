-- PhishNet — Supabase Database Schema

create table if not exists organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  admin_email text not null unique,
  created_at timestamptz default now()
);

create table if not exists employees (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organizations(id) on delete cascade,
  name text not null,
  email text not null,
  department text,
  created_at timestamptz default now(),
  unique(org_id, email)
);

create table if not exists campaigns (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references organizations(id) on delete cascade,
  name text not null,
  sender_name text not null,
  sender_email text not null,
  subject text not null,
  body text not null,
  red_flags jsonb default '[]',
  status text not null default 'draft' check (status in ('draft', 'sent', 'completed')),
  created_at timestamptz default now()
);

create table if not exists email_logs (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references campaigns(id) on delete cascade,
  employee_id uuid not null references employees(id) on delete cascade,
  token text unique not null,
  sent_at timestamptz,
  clicked_at timestamptz,
  reported_at timestamptz,
  outcome text not null default 'pending' check (outcome in ('pending', 'clicked', 'reported')),
  unique(campaign_id, employee_id)
);

-- Row Level Security
alter table organizations enable row level security;
alter table employees enable row level security;
alter table campaigns enable row level security;
alter table email_logs enable row level security;

-- Indexes
create index if not exists idx_employees_org on employees(org_id);
create index if not exists idx_campaigns_org on campaigns(org_id);
create index if not exists idx_email_logs_campaign on email_logs(campaign_id);
create index if not exists idx_email_logs_token on email_logs(token);
