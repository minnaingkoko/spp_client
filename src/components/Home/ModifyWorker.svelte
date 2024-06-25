<script lang="ts">
	import { HPage1, HPage2 } from '../../stores/MainStores';
	import { workerModifyData, workerData, workerView, workerModify } from '../../stores/WorkerStore';
	import { modifyToggle, Next, Previous } from '../Shared/EmployeeFunction.svelte';

	import { PUBLIC_LOCAL_API_KEY, PUBLIC_SERVER_API_KEY } from '$env/static/public';

	import close_icon from '$lib/assets/close.svg';

	$: worker = $workerModifyData;

	const modifyRequest = async (value: any) => {
		if (process.env.NODE_ENV === 'production') {
			// For production
			const response = await fetch(`${PUBLIC_SERVER_API_KEY}/api/employeeModifyRequest`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(worker)
			});
			if (response.status === 200) {
				const another_response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeInfo`);
				const data = await another_response.json();
				workerData.update(() => data);
				workerView.update((currentValue) => !currentValue);
				workerModify.update((currentValue) => !currentValue);
			}
		} else {
			// For development
			const response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeModifyRequest`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(worker)
			});
			if (response.status === 200) {
				const another_response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeInfo`);
				const data = await another_response.json();
				workerData.update(() => data);
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

				<label class="mg" for="passportType">Passport Type:</label>
				<select class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={worker.passportType}>
					<option value="PJ">PJ</option>
					<option value="PV">PV</option>
				</select>

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

			{#if $HPage2}
				<label class="mg" for="fatherName">Father Name:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.fatherName} name="fatherName" id="fatherName" />

				<label class="mg" for="motherName">Mother Name:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.motherName} name="motherName" id="motherName" />

				<label class="mg" for="address">Address:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.address} name="address" id="address" />

				<label class="mg" for="nrcNo">NRC No:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.nrcNo} name="nrcNo" id="nrcNo" />

				<label class="mg" for="phNo">Phone Number:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.phNo} name="phNo" id="phNo" />

				<label class="mg" for="agent">Agent:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.agent} name="agent" id="agent" />

				<label class="mg" for="companyName">Company Name:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.companyName} name="companyName" id="companyName" />

				<label class="mg" for="airPlaneNo">Airplane No:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={worker.airPlaneNo} name="airPlaneNo" id="airPlaneNo" />

				<label class="mg" for="departureDate">Departure Date:</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="date" bind:value={worker.departureDate} name="departureDate" id="departureDate" />
			{/if}

			<div class="addForm-bot absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px] flex justify-end items-center gap-[12px] rounded-[4px]">
				{#if $HPage1 === true}
					<div />
				{:else if $HPage1 === false}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="bg-[#42a5f5] text-white" on:click={Previous}>Previous</div>
				{/if}
				{#if $HPage2 === true}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<button class="bg-[#00BFA6] hover:bg-[#00bfa6da] text-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer border-none" type="submit">Submit</button>
				{:else if $HPage2 === false}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="next-btn" on:click={Next}>Next</div>
				{/if}
			</div>
		</form>
	</div>
{/if}

<style>
	input,
	select {
		border: 1px solid gray;
	}
	.next-btn {
		@apply bg-[#4aa84d] text-white;
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
