import { scan } from '$lib/comp/ui/scanner/scanner.server.js';

export const POST = async (event) => {
    return scan(event)
};