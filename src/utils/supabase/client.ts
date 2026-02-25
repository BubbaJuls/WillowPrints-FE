import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!

/** Create a Supabase client for use in Client Components. */
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseKey)
}
