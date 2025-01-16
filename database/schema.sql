CREATE TABLE IF NOT EXISTS page_views (
  slug TEXT PRIMARY KEY,
  count INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_slug ON page_views (slug);