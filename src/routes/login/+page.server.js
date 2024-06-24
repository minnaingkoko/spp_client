import { createToken } from '$lib/session';
import bcrypt from 'bcrypt'; // Assuming you're using bcrypt for password hashing
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		// TODO log the user in
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		// Fetch user from the database (this is an example, replace with your DB logic)
		const user = await getUserByUsername(username);

		if (user && bcrypt.compareSync(password, user.password)) {
			const sessionToken = createToken({ username: user.username });

			cookies.set('session_token', sessionToken, { path: '/' });
			throw redirect(302, '/');
		}
		return { success: false };
	}
};

// Example function to simulate fetching a user from a database
async function getUserByUsername(username) {
	// Replace with your actual user fetching logic, e.g., from a database
	const users = [
		{
			username: 'shanpyaephyo',
			password: '$2a$12$bu.wBFrNYAUNdqNLxi8EFur2bw4toL8z9OYc8eEpMu/7rmD87HzEO' // This should be a bcrypt hashed password
		}
	];

	return users.find((user) => user.username === username) || null;
}
