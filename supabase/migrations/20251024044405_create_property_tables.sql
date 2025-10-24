/*
  # Plumtree Property Nest Database Schema

  1. New Tables
    - `properties`
      - `id` (uuid, primary key)
      - `title` (text) - Property title
      - `description` (text) - Detailed description
      - `property_type` (text) - Type: house, apartment, land, commercial
      - `status` (text) - Status: for_sale, for_rent, sold, rented
      - `price` (numeric) - Property price in USD
      - `bedrooms` (integer) - Number of bedrooms
      - `bathrooms` (integer) - Number of bathrooms
      - `area_sqm` (numeric) - Area in square meters
      - `location` (text) - Property location
      - `featured` (boolean) - Featured property flag
      - `images` (jsonb) - Array of image URLs
      - `amenities` (jsonb) - Array of amenities
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `inquiries`
      - `id` (uuid, primary key)
      - `property_id` (uuid, nullable) - Reference to property if specific inquiry
      - `name` (text) - Inquirer name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `message` (text) - Inquiry message
      - `inquiry_type` (text) - Type: property_inquiry, general_inquiry
      - `status` (text) - Status: new, contacted, closed
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for properties (view listings)
    - Public insert access for inquiries (contact forms)
    - Only authenticated users can manage properties and view inquiries
*/

-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  property_type text NOT NULL CHECK (property_type IN ('house', 'apartment', 'land', 'commercial')),
  status text NOT NULL DEFAULT 'for_sale' CHECK (status IN ('for_sale', 'for_rent', 'sold', 'rented')),
  price numeric NOT NULL CHECK (price >= 0),
  bedrooms integer DEFAULT 0 CHECK (bedrooms >= 0),
  bathrooms integer DEFAULT 0 CHECK (bathrooms >= 0),
  area_sqm numeric CHECK (area_sqm >= 0),
  location text NOT NULL,
  featured boolean DEFAULT false,
  images jsonb DEFAULT '[]'::jsonb,
  amenities jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid REFERENCES properties(id) ON DELETE SET NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  inquiry_type text NOT NULL DEFAULT 'property_inquiry' CHECK (inquiry_type IN ('property_inquiry', 'general_inquiry')),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Properties policies: Public can view, only authenticated can manage
CREATE POLICY "Anyone can view properties"
  ON properties FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert properties"
  ON properties FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update properties"
  ON properties FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete properties"
  ON properties FOR DELETE
  TO authenticated
  USING (true);

-- Inquiries policies: Public can submit, only authenticated can view
CREATE POLICY "Anyone can submit inquiries"
  ON inquiries FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update inquiry status"
  ON inquiries FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status);
CREATE INDEX IF NOT EXISTS idx_properties_featured ON properties(featured);
CREATE INDEX IF NOT EXISTS idx_properties_property_type ON properties(property_type);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);