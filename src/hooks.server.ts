// src/hooks.server.ts
import type {  Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {

    event.locals.userId = "user1"

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}