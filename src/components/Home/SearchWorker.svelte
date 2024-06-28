<script lang="ts">
	import { workerSearch, workerSearchData } from '../../stores/WorkerStore';
	import close_icon from '$lib/assets/close.svg';
	import { goto } from '$app/navigation';
	import { searchToggle } from '../Shared/EmployeeFunction.svelte';

	import { PUBLIC_LOCAL_API_KEY, PUBLIC_SERVER_API_KEY } from '$env/static/public';

	$: condition1Name = '';
	$: condition1Value = '';

	const searchRequest = async () => {
		if (process.env.NODE_ENV === 'production') {
			// For production
			
			// const response = await fetch(`${PUBLIC_SERVER_API_KEY}/api/searchEmployee`, {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify({ [condition1Name]: condition1Value })
			// });

			// const data = await response.json();
			// console.log(data);
			// workerSearchData.set(data);
			// searchToggle();
			// goto('/search_result');
		} else {
			// For development
			const response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/searchEmployee`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ [condition1Name]: condition1Value })
			});

			const data = await response.json();
			console.log(data);
			workerSearchData.set(data);
			searchToggle();
			goto('/search_result');
		}
	};
</script>

<div class="add-form" style="display: {$workerSearch ? 'block' : 'none'};">
	<div class="addForm-heading">
		<div class="text">Search Worker</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="close" on:click={searchToggle}>
			<img src={close_icon} alt="" width="24px" height="24px" />
		</div>
	</div>
	<hr />
	<form class="addForm" on:submit|preventDefault={() => searchRequest()}>
		<label class="mg" for="conditionCount">Condition Count:</label>
		<select class="add_input" value="1">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>

		<label class="mg" for="condition1Name">Searched By (Condition 1):</label>
		<select class="add_input" bind:value={condition1Name}>
			<option value="name">Name</option>
			<option value="passportNo">Passport No</option>
		</select>

		<label class="mg" for="condition1Value">Condition 1 Value:</label>
		<input class="add_input" type="text" bind:value={condition1Value} name="condition1Value" id="condition1Value" />

		<div class="addForm-bot">
			<!-- {#if $HPage1 === true}
				<div />
			{:else if $HPage1 === false}
				<div class="bg-[#42a5f5] text-white" on:click={Previous}>Previous</div>
			{/if} -->
			<!-- {#if $HPage4 === true} -->
			<button class="submit-btn bg-[#00BFA6] hover:bg-[#00bfa6da]" type="submit">Search</button>
			<!-- {:else if $HPage4 === false}
				<div class="next-btn" on:click={Next}>Next</div>
			{/if} -->
		</div>
	</form>
</div>

<style>
	.close {
		@apply cursor-pointer;
	}
	input,
	select {
		border: 1px solid gray;
	}
	.add_input {
		@apply ml-[30px] mr-[30px] mb-[15px] h-[34px];
	}
	.add-form {
		@apply absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px];
	}
	.cancel-btn {
		@apply bg-white;
	}
	.submit-btn,
	.next-btn {
		@apply text-white;
	}
	.submit-btn {
		@apply flex justify-center items-center w-[100px] h-[33px] cursor-pointer;
		border: none;
	}
	.addForm-heading {
		@apply w-[100%] h-[66px] flex flex-row justify-between items-center text-[18px] font-[500] text-black;
		border-radius: 4px 4px 0 0;
		padding: 0 30px;
	}
	.addForm-bot {
		@apply flex justify-end items-center gap-[12px] rounded-[4px];
		padding: 0 30px;
	}
	.addForm-bot div {
		@apply flex justify-center items-center w-[100px] h-[33px] cursor-pointer;
	}
	.addForm-bot {
		@apply absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px];
		border-radius: 0 0 4px 4px;
	}
	.addForm {
		@apply flex flex-col mt-[20px] mb-[95px];
	}
	.mg {
		margin: 0 30px;
	}
</style>
