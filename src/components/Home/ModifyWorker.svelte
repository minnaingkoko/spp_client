<script lang="ts">
	import { goto } from '$app/navigation';

	import { HPage1, HPage2, HPage3, HPage4 } from '../../stores/MainStores';
	import { workerModifyData, workerData, workerView, workerModify } from '../../stores/WorkerStore';
	import { modifyToggle, Next, Previous } from '../Shared/EmployeeFunction.svelte';

	import close_icon from '$lib/assets/close.svg';

	$: worker = $workerModifyData;

	const modifyRequest = async (value: any) => {
		// const response = await fetch('https://shan-pyae-phyo.onrender.com/api/employeeModifyRequest', {
		const response = await fetch('http://localhost:3000/api/employeeModifyRequest', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(worker)
		});
		if (response.status === 200) {
			const another_response = await fetch('http://localhost:3000/api/employeeInfo');
			const data = await another_response.json();
			workerData.update(() => data);
			workerView.update((currentValue) => !currentValue);
			workerModify.update((currentValue) => !currentValue);
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

				<label class="mg" for="gender">Gender:</label>
				<select class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={worker.gender}>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>

				<label class="mg" for="dob">Date of Birth:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="date" bind:value={worker.dob} name="dob" id="dob" />

				<label class="mg" for="ppIssueDate">Date of Issue:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="date" bind:value={worker.ppIssueDate} name="ppIssueDate" id="ppIssueDate" />

				<label class="mg" for="ppExpireDate">Date of Expire:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="date" bind:value={worker.ppExpireDate} name="ppExpireDate" id="ppExpireDate" />

				<label class="mg" for="pob">Place of Birth:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.pob} name="pob" id="pob" />

				<label class="mg" for="authority">Authority:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.authority} name="authority" id="authority" />
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
