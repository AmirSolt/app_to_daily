// npx prisma migrate dev --name init

// notes:
    // to reproduce this database you need to add a postgres function + trigger
    // to sync (long and lat) with geometry field
    // create function to sync long and lat with geometry field and
    //  trigger on update and before_insert

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default prisma

