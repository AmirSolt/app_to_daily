// npx supabase gen types typescript --project-id "kibduavyrbusgbrjjylc" --schema public > ./src/lib/utils/database.types.ts

import { SupabaseClient, Session } from '@supabase/supabase-js'
import type { Database } from '$lib/utils/database.types.js'

declare global {
  namespace App {
    interface Locals {
      supabaseAuthServer: SupabaseClient<Database>
      getSession(): Promise<Session | null>
    }
    interface PageData {
      // session: Session | null
      userData: UserData | null
      adContents:Database["public"]["Tables"]["advert_content"]["Row"][]
      forms:any
    }
    // interface Error {}
    // interface Platform {}
  }
}