import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Property = {
  id: string;
  title: string;
  description: string;
  property_type: 'house' | 'apartment' | 'land' | 'commercial';
  status: 'for_sale' | 'for_rent' | 'sold' | 'rented';
  price: number;
  bedrooms: number;
  bathrooms: number;
  area_sqm: number;
  location: string;
  featured: boolean;
  images: string[];
  amenities: string[];
  created_at: string;
  updated_at: string;
};

export type Inquiry = {
  id: string;
  property_id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  inquiry_type: 'property_inquiry' | 'general_inquiry';
  status: 'new' | 'contacted' | 'closed';
  created_at: string;
};
