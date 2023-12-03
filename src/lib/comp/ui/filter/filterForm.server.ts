import { error, fail, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { filterSchema } from '$lib/utils/schema'
import prisma from '$lib/funcs/prisma.server'


export const loadComp = async (event:any) => {
	// const session = await event.locals.getSession()
	// if (!session) {
	// 	throw redirect(302, '/')
	// }
	const form = await superValidate(event, filterSchema)
	return { form }
}

export const actionsComp = {
	default: async (event:any) => {
		const form = await superValidate(event, filterSchema)
		
		if (!form.valid) {
			return fail(500, { form })
		}

		await prisma.profile.update({
			where: {
				id: event.locals.profileId,
			},
			data: {
				crimeTypeFilters:form.data.filters
			},
		})

		return { success: true, form };
	}
}