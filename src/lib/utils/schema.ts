import { z } from 'zod'
import { CrimeTypes } from './globals'

export const filterSchema = z.object({
	filters:  z.array(z.nativeEnum(CrimeTypes))
})

