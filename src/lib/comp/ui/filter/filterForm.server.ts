import { error, fail, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { filterSchema } from '$lib/utils/schema'


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
			return fail(400, { form })
		}

        // update database value
        console.log("Database updated")
        console.log(form.data.filters)

		return { success: true, form };
	}
}