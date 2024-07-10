<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
	<div class="bg-white p-8 rounded shadow-md w-full max-w-md">
		<h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
		<form method="POST" action="/login" class="space-y-6">
			<div>
				<label for="username" class="block text-sm font-medium text-gray-700">Username</label>
				<input type="text" name="username" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#536DFE] focus:border-[#536DFE] sm:text-sm" required />
			</div>
			<div>
				<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
				<input type="password" name="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#536DFE] focus:border-[#536DFE] sm:text-sm" required />
			</div>
			
			{#if form?.error}
				<div class="block text-sm font-medium text-[#F50057] cursor-default">
					{data.errMsg}
				</div>
			{/if}

			<div>
				<button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#536DFE] hover:bg-[#536dfeef] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Log In </button>
			</div>
		</form>
	</div>
</div>
