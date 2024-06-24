// src/lib/session.js
import jwt from 'jsonwebtoken';
import { SECRET_SESSION } from '$env/static/private';

export function createToken(payload) {
	return jwt.sign(payload, SECRET_SESSION, { expiresIn: '1h' });
}

export function verifyToken(token) {
	try {
		return jwt.verify(token, SECRET_SESSION);
	} catch (error) {
		return null;
	}
}
