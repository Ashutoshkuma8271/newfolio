/*
# Create tables for ZeenatKureshi.com website forms

1. New Tables
- `contact_inquiries`: Stores submissions from the Contact page form (name, email, phone, subject, message)
- `trade_inquiries`: Stores submissions from the Trade & Investment inquiry form (name, email, company, ticket_size, objective, region, message)
- `volunteer_inquiries`: Stores submissions from the Women Leadership volunteer/member form (name, email, phone, role_interest, experience, message)
- `newsletter_subscriptions`: Stores email addresses for newsletter signup

2. Security
- All tables have RLS enabled.
- All policies use `TO anon, authenticated` because this is a public-facing website with no sign-in — the anon-key client must be able to insert form submissions.
- SELECT/UPDATE/DELETE are restricted to `authenticated` only (admin access). Public (anon) can only INSERT.
- This prevents public users from reading or modifying other people's submissions while still allowing form submissions.

3. Important Notes
- No user_id columns or auth.users references — this is a single-tenant public website.
- All tables include created_at timestamps for ordering.
- Email fields are indexed for lookup by admin.
*/

-- Contact page inquiries
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_inquiries;
CREATE POLICY "anon_insert_contact" ON contact_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_contact" ON contact_inquiries;
CREATE POLICY "auth_read_contact" ON contact_inquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_contact" ON contact_inquiries;
CREATE POLICY "auth_update_contact" ON contact_inquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact" ON contact_inquiries;
CREATE POLICY "auth_delete_contact" ON contact_inquiries FOR DELETE
  TO authenticated USING (true);

-- Trade & Investment inquiries
CREATE TABLE IF NOT EXISTS trade_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  ticket_size text,
  objective text,
  region text,
  message text,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE trade_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_trade" ON trade_inquiries;
CREATE POLICY "anon_insert_trade" ON trade_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_trade" ON trade_inquiries;
CREATE POLICY "auth_read_trade" ON trade_inquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_trade" ON trade_inquiries;
CREATE POLICY "auth_update_trade" ON trade_inquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_trade" ON trade_inquiries;
CREATE POLICY "auth_delete_trade" ON trade_inquiries FOR DELETE
  TO authenticated USING (true);

-- Women Leadership volunteer/member inquiries
CREATE TABLE IF NOT EXISTS volunteer_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  role_interest text,
  experience text,
  message text,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE volunteer_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_volunteer" ON volunteer_inquiries;
CREATE POLICY "anon_insert_volunteer" ON volunteer_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_volunteer" ON volunteer_inquiries;
CREATE POLICY "auth_read_volunteer" ON volunteer_inquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_volunteer" ON volunteer_inquiries;
CREATE POLICY "auth_update_volunteer" ON volunteer_inquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_volunteer" ON volunteer_inquiries;
CREATE POLICY "auth_delete_volunteer" ON volunteer_inquiries FOR DELETE
  TO authenticated USING (true);

-- Newsletter subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscriptions;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscriptions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_newsletter" ON newsletter_subscriptions;
CREATE POLICY "auth_read_newsletter" ON newsletter_subscriptions FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_newsletter" ON newsletter_subscriptions;
CREATE POLICY "auth_update_newsletter" ON newsletter_subscriptions FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_newsletter" ON newsletter_subscriptions;
CREATE POLICY "auth_delete_newsletter" ON newsletter_subscriptions FOR DELETE
  TO authenticated USING (true);

-- Indexes for admin lookups
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created ON contact_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_trade_inquiries_email ON trade_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_trade_inquiries_created ON trade_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_volunteer_inquiries_email ON volunteer_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_volunteer_inquiries_created ON volunteer_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_created ON newsletter_subscriptions(created_at DESC);
