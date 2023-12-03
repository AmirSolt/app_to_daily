import type { Profile, AdContent } from '@prisma/client'

declare global {
  namespace App {
    interface Locals {
      profileId: string
    }
    interface PageData {
      profile: Profile
      adContents:AdContent[]
      forms:any
    }
    // interface Error {}
    // interface Platform {}
  }
}