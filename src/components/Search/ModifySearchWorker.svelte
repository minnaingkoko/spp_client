<script lang="ts">
	import { HPage1, HPage2, HPage3, HPage4 } from '../../stores/MainStores';
	import { workerModifyData, workerSearchData, workerView, workerModify } from '../../stores/WorkerStore';

	import { PUBLIC_LOCAL_API_KEY, PUBLIC_SERVER_API_KEY } from '$env/static/public';

	import close_icon from '$lib/assets/close.svg';

	import { goto } from '$app/navigation';

	import { modifyToggle, Next, Previous } from '../Shared/EmployeeFunction.svelte';
	// import ModifyTextData from './ModifyTextData.svelte';

	$: worker = $workerModifyData;

	const modifyRequest = async (value: any) => {

		if (process.env.NODE_ENV === 'production') {
			// For production
			console.log(PUBLIC_SERVER_API_KEY);
		} else {
			// For development
			const response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeModifyRequest`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(worker)
			});
			console.log(response.status);
			if (response.status === 200) {
				const another_response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeModify`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ idNo: worker._id })
				});
				const data = await another_response.json();
				workerSearchData.update(() => [data]);
				workerView.update((currentValue) => !currentValue);
				workerModify.update((currentValue) => !currentValue);
			}
		}
	};
</script>

{#if worker}
	<div class="absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px]" style="display: {$workerModify ? 'block' : 'none'};">
		<div class="addForm-heading">
			<div class="text">Modify Worker</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="cursor-pointer" on:click={modifyToggle}>
				<img src={close_icon} alt="" width="24px" height="24px" />
			</div>
		</div>
		<hr />
		<form class="addForm flex flex-col mt-[20px] mb-[95px]" on:submit|preventDefault={() => modifyRequest(worker._id)}>
			{#if $HPage1}
				<label class="mg" for="name">Name:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.name} name="name" id="name" required />

				<label class="mg" for="passportNo">Passport No:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.passportNo} name="passportNo" id="passportNo" required />

				<label class="mg" for="passportType">Passport Type</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.passportType} name="passportType" id="passportType" required />

				<label class="mg" for="fatherName">Father Name:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.fatherName} name="fatherName" id="fatherName" required />

				<label class="mg" for="name">Mother Name:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.motherName} name="motherName" id="motherName" required />
			{/if}

			<div class="addForm-bot absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px] flex justify-end items-center gap-[12px] rounded-[4px]">
				<button class="flex justify-center items-center w-[100px] h-[33px] cursor-pointer border-none bg-[#4aa84d] text-white" type="submit">Submit</button>
			</div>
		</form>
	</div>
{/if}

<style>
	input {
		border: 1px solid gray;
	}
	.mg {
		margin: 0 30px;
	}
	input,
	select {
		border: 1px solid gray;
	}
	.addForm-heading {
		@apply w-[100%] h-[66px] flex flex-row justify-between items-center text-[18px] font-[500] text-black;
		border-radius: 4px 4px 0 0;
		padding: 0 30px;
	}
	.addForm-bot {
		border-radius: 0 0 4px 4px;
		padding: 0 30px;
	}
	.mg {
		margin: 0 30px;
	}
</style>
