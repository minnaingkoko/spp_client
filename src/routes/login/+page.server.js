import { createToken } from '$lib/session';
import bcrypt from 'bcryptjs'; // Assuming you're using bcrypt for password hashing
import { redirect } from '@sveltejs/kit';
import { SECRET_USERNAME, SECRET_PASSWORD, SECRET_SESSION } from '$env/static/private';

let errMsg = '';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { errMsg };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		// TODO log the user in
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		// Fetch user from the database (this is an example, replace with your DB logic)
		const user = await getUserByUsername(username);
		
		if (user) {
			if(bcrypt.compareSync(password, user.password)) {
				const sessionToken = createToken({ username: user.username });

				cookies.set('session_token', sessionToken, { path: '/' });
				throw redirect(302, '/');
			}
			errMsg = 'Password is incorrect!'
			return { error: true };	
		}
		errMsg = 'Username is incorrect!'
		return { error: true };	
	}
};

// Example function to simulate fetching a user from a database
async function getUserByUsername(username) {
	// Replace with your actual user fetching logic, e.g., from a database
	const users = [
		{
			username: SECRET_USERNAME,
			password: `$2a$12$${SECRET_PASSWORD}` // This should be a bcrypt hashed password
		}
	];

	return users.find((user) => user.username === username) || null;
}
