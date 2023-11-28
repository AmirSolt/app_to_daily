import { z } from 'zod'
import { CrimeTypes } from './globals'



// =============================
//  filter
export const filterSchema = z.object({
	filters:  z.array(z.nativeEnum(CrimeTypes))
})

// =============================
// zone

export const createZoneSchema = z.object({
	label:z.string().min(3),
	address:z.string().min(3),
	radius:z.number().min(1).max(10),
	long:z.number(),
	lat:z.number(),
})
export const editZoneSchema = z.object({
	id:z.string().min(3),
	label:z.string().min(3),
	address:z.string().min(3),
	radius:z.number().min(1).max(10),
	long:z.number(),
	lat:z.number(),
})
export const removeZoneSchema = z.object({
	id:z.string().min(3),
	confirm: z.boolean()
})
