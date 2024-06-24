// src/lib/auth.js
import { parse } from 'cookie';
import { verifyToken } from './session';

export function isAuthenticated(request) {
	const cookieHeader = request.headers.get('cookie');
	if (!cookieHeader) return false;

	const cookies = parse(cookieHeader);
	const sessionToken = cookies.session_token;

	if (!sessionToken) return false;

	const user = verifyToken(sessionToken);
	return user !== null;
}
