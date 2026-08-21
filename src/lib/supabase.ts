import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Campaign = {
  id: string
  org_id: string
  name: string
  sender_name: string
  sender_email: string
  subject: string
  body: string
  status: 'draft' | 'sent' | 'completed'
  created_at: string
}

export type Employee = {
  id: string
  org_id: string
  name: string
  email: string
  department: string
}

export type EmailLog = {
  id: string
  campaign_id: string
  employee_id: string
  token: string
  sent_at: string | null
  clicked_at: string | null
  reported_at: string | null
  outcome: 'clicked' | 'reported' | 'pending'
}
