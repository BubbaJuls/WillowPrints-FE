import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!

/**
 * Create a Supabase client for Server Components / Server Actions.
 * In Next 15+, cookies() is async: await cookies() then pass the result here.
 */
export function createClient(cookieStore: Awaited<ReturnType<typeof cookies>>) {
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // Ignore when setAll is called from a Server Component (e.g. during render)
        }
      },
    },
  })
}
