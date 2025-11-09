/*
  # Create Event Documents Table

  1. New Tables
    - `event_documents`
      - `id` (uuid, primary key) - Unique identifier for each document
      - `title` (text) - Document title/name
      - `description` (text) - Document description
      - `pdf_url` (text) - URL to the PDF file
      - `category` (text) - Document category (brochure, catalogue, etc.)
      - `display_order` (integer) - Order for displaying documents
      - `created_at` (timestamptz) - Creation timestamp
      
  2. Security
    - Enable RLS on `event_documents` table
    - Add policy for public read access (no authentication required)
*/

CREATE TABLE IF NOT EXISTS event_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  pdf_url text NOT NULL,
  category text DEFAULT 'general',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE event_documents ENABLE ROW LEVEL SECURITY;

-- Public read access for all users (no authentication required)
CREATE POLICY "Anyone can view event documents"
  ON event_documents
  FOR SELECT
  USING (true);