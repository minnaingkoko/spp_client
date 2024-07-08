<script lang="ts">
	import { HPage1, HPage2, message } from '../../stores/MainStores';
	import { totalPages, currentPage, workerData, workerView, workerAdd } from '../../stores/WorkerStore';
	import { addToggle, Next, Previous } from '../Shared/EmployeeFunction.svelte';

	import { PUBLIC_LOCAL_API_KEY, PUBLIC_SERVER_API_KEY } from '$env/static/public';

	import close_icon from '$lib/assets/close.svg';

	import { workerDataType } from './AddData.svelte';

	const fetchWorkers = async (page = 1) => {
		const response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeInfo?page=${page}$limit=12`);
		const data = await response.json();
		workerData.set(data.workers);
		totalPages.set(data.totalPages);
		currentPage.set(data.currentPage);
	};

	const addRequest = async () => {
		if (process.env.NODE_ENV === 'production') {
			// For production
			
			const response = await fetch(`${PUBLIC_SERVER_API_KEY}/api/employeeUpload`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(workerDataType)
			});
			if (response.status === 200) {
				workerDataType.name = '';
				workerDataType.passportNo = '';
				workerDataType.passportType = '';
				workerDataType.gender = '';
				workerDataType.dob = null;
				workerDataType.ppIssueDate = null;
				workerDataType.ppExpireDate = null;
				workerDataType.pob = '';
				workerDataType.authority = '';
				workerDataType.fatherName = '';
				workerDataType.motherName = '';
				workerDataType.address = '';
				workerDataType.nrcNo = '';
				workerDataType.phNo = '';
				workerDataType.agent = '';
				workerDataType.companyName = '';
				workerDataType.airPlaneNo = '';
				workerDataType.departureDate = null;

				const another_response = await fetch(`${PUBLIC_SERVER_API_KEY}/api/employeeInfo`);
				const data = await another_response.json();
				workerData.update(() => data);
				workerView.update((currentValue) => !currentValue);
				workerAdd.update((currentValue) => !currentValue);
			}
		} else {
			
			// For development
			const response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeUpload`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(workerDataType)
			});
			
			if (response.status === 200) {
				
				workerDataType.name = '';
				workerDataType.passportNo = '';
				workerDataType.passportType = '';
				workerDataType.gender = '';
				workerDataType.dob = null;
				workerDataType.ppIssueDate = null;
				workerDataType.ppExpireDate = null;
				workerDataType.pob = '';
				workerDataType.authority = '';

				workerDataType.fatherName = '';
				workerDataType.motherName = '';
				workerDataType.address = '';
				workerDataType.nrcNo = '';
				workerDataType.phNo = '';
				workerDataType.agent = '';
				workerDataType.companyName = '';
				workerDataType.airPlaneNo = '';
				workerDataType.departureDate = null;

				// const another_response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeInfo`);
				fetchWorkers($currentPage);
				// const data = await another_response.json();
				
				// workerData.update(() => data);

				message.update(() => 'add');
				workerView.update((currentValue) => !currentValue);
				workerAdd.update((currentValue) => !currentValue);

				const timer = setTimeout(() => {
					message.update(() => '');
				}, 3000);

				// Cleanup the timer if the component is destroyed before the timer completes
				return () => clearTimeout(timer);	
			}
		}
	};
</script>

<div class="add-form" style="display: {$workerAdd ? 'block' : 'none'};">
	<div class="addForm-heading">
		<div class="text">Add Worker</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="close" on:click={addToggle}>
			<img src={close_icon} alt="" width="24px" height="24px" />
		</div>
	</div>
	<hr />
	<form class="addForm" on:submit|preventDefault={() => addRequest()}>
		{#if $HPage1}
		<label class="mg" for="name">Name:</label>
		<input class="add_input" type="text" bind:value={workerDataType.name} name="name" id="name" required />

		<label class="mg" for="passport">Passport:</label>
		<input class="add_input" type="text" bind:value={workerDataType.passportNo} name="passportNo" id="passportNo" />

		<label class="mg" for="passportType">Passport Type:</label>
		<select class="add_input" bind:value={workerDataType.passportType}>
			<option value="PJ">PJ</option>
			<option value="PV">PV</option>
		</select>

		<label class="mg" for="gender">Gender:</label>
		<select class="add_input" bind:value={workerDataType.gender}>
			<option value="Male">Male</option>
			<option value="Female">Female</option>
		</select>

		<label class="mg" for="dob">Date of Birth:</label>
		<input class="add_input" type="date" bind:value={workerDataType.dob} name="dob" id="dob" />

		<label class="mg" for="ppIssueDate">Date of issue:</label>
		<input class="add_input" type="date" bind:value={workerDataType.ppIssueDate} name="ppIssueDate" id="ppIssueDate" />

		<label class="mg" for="ppIssueDate">Date of expire:</label>
		<input class="add_input" type="date" bind:value={workerDataType.ppExpireDate} name="ppIssueDate" id="ppIssueDate" />

		<label class="mg" for="pob">Place of Birth:</label>
		<input class="add_input" type="text" bind:value={workerDataType.pob} name="pob" id="pob" />

		<label class="mg" for="authority">Authority:</label>
		<input class="add_input" type="text" bind:value={workerDataType.authority} name="authority" id="authority" />
		{/if}

		<!-- more data -->

		{#if $HPage2}
		<label class="mg" for="fatherName">Father Name:</label>
		<input class="add_input" type="text" bind:value={workerDataType.fatherName} name="fatherName" id="fatherName" />

		<label class="mg" for="motherName">Mother Name:</label>
		<input class="add_input" type="text" bind:value={workerDataType.motherName} name="motherName" id="motherName" />

		<label class="mg" for="address">Address:</label>
		<input class="add_input" type="text" bind:value={workerDataType.address} name="address" id="address" />
		
		<label class="mg" for="nrcNo">NRC No:</label>
		<input class="add_input" type="text" bind:value={workerDataType.nrcNo} name="nrcNo" id="nrcNo" />
		
		<label class="mg" for="phNo">Phone Number:</label>
		<input class="add_input" type="text" bind:value={workerDataType.phNo} name="phNo" id="phNo" />
		
		<label class="mg" for="agent">Agent:</label>
		<input class="add_input" type="text" bind:value={workerDataType.agent} name="agent" id="agent" />
		
		<label class="mg" for="companyName">Company Name:</label>
		<input class="add_input" type="text" bind:value={workerDataType.companyName} name="companyName" id="companyName" />
		
		<label class="mg" for="airPlaneNo">Airplane No:</label>
		<input class="add_input" type="text" bind:value={workerDataType.airPlaneNo} name="airPlaneNo" id="airPlaneNo" />
		
		<label class="mg" for="departureDate">Departure Date:</label>
		<input class="add_input" type="date" bind:value={workerDataType.departureDate} name="departureDate" id="departureDate" />
		{/if}

		<div class="addForm-bot">
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
				<div class="next-btn bg-[#00BFA6] hover:bg-[#00bfa6da]" on:click={Next}>Next</div>
			{/if}
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
