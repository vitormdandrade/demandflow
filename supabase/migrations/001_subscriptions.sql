create table df_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  stripe_customer_id text,
  stripe_subscription_id text unique,
  status text default 'inactive',
  current_period_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index df_subscriptions_email_idx on df_subscriptions (email);
