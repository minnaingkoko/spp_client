// src/hooks.js
import { isAuthenticated } from './lib/auth.js';

export async function handle({ event, resolve }) {
	const isAuth = isAuthenticated(event.request);

	if (!isAuth) {
		if (event.url.pathname !== '/login') {
			return new Response(null, {
				status: 302,
				headers: {
					location: '/login'
				}
			});
		}
	}

	return resolve(event);
}
