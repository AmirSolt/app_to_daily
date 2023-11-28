import type { User, AdContent } from '@prisma/client'

declare global {
  namespace App {
    interface Locals {}
    interface PageData {
      user: User
      adContents:AdContent[]
      forms:any
    }
    // interface Error {}
    // interface Platform {}
  }
}