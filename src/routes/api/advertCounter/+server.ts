import { adCounter } from '$lib/comp/ui/advert/advertCounter.server.js';

export const POST = async (event) => {
    return adCounter(event)
};