// npx prisma migrate dev --name init

// notes:
    // to reproduce this database you need to add a postgres function + trigger
    // to sync (long and lat) with geometry field
    // create function to sync long and lat with geometry field and
    //  trigger on update and before_insert

import { PrismaClient } from '@prisma/client'
import type { Region, Profile, Report } from '@prisma/client';


class PrismaClientCustom extends PrismaClient{

    constructor(){
        super();
    }

    async scanReports(long:number, lat:number, radius:number):Promise<Report[]>{
        return await this.$queryRaw<Report[]>`scan_reports(${long}, ${lat}, ${radius})`
    }
    async zoneReportNotif(new_report_ids:string[], region:Region):Promise<Profile[]>{
        return await this.$queryRaw<Profile[]>`insert_report_on_zone(${new_report_ids}, ${region})`
    }

}


const prisma = new PrismaClientCustom()



export default prisma

