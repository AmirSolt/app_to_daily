// npx supabase gen types typescript --project-id "kibduavyrbusgbrjjylc" --schema public > ./src/lib/utils/database.types.ts

import { SupabaseClient, Session } from '@supabase/supabase-js'
import type { Database } from "./generated.types";


declare namespace App {
    interface Locals {
		supabaseAuthServer: SupabaseClient<Database>
		getSession(): Promise<Session | null>
	}
	interface PageData {
		session: Session | null
		profile: Profile | null
		ads:AdvertContent[]
		forms:any
	}
	// interface Error {}
	// interface Platform {}
}
