<script lang="ts">
	import { employeeData, employeeView, HPage1, HPage2, HPage3, HPage4, employeeAdd } from '../../stores/MainStores';
	import close_icon from '$lib/images/close.svg';
	import { goto } from '$app/navigation';
	import { employeeDataType } from './AddData.svelte';
	import { addToggle, Next, Previous } from '../Shared/EmployeeFunction.svelte';

	const addRequest = async () => {
		console.log(employeeData);
		// const response = await fetch('https://shan-pyae-phyo.onrender.com/api/employeeUpload', {
		const response = await fetch('http://localhost:3000/api/employeeUpload', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(employeeDataType)
		});
		if (response.status === 200) {
			const another_response = await fetch('http://localhost:3000/api/employeeInfo');
			const data = await another_response.json();
			employeeData.update(() => data);
			employeeView.update((currentValue) => !currentValue);
			employeeAdd.update((currentValue) => !currentValue);
		}
	};

	const handleFileChange = (event: any, value: any) => {
		const files = event.target.files;
		if (files && files.length > 0) {
			const file = files[0];
			if (file) {
				const reader = new FileReader();
				reader.onloadend = () => {
					const base64String = reader.result;
					value.filename = file.name;
					value.contentType = file.type;
					value.data = base64String;
					// Use the base64String as needed (e.g., send it in a request)
				};

				reader.readAsDataURL(file);
			}
		}
	};

</script>

<div class="add-form" style="display: {$employeeAdd ? 'block' : 'none'};">
	<div class="addForm-heading">
		<div class="text">Add Employee</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="close" on:click={addToggle}>
			<img src={close_icon} alt="" width="24px" height="24px" />
		</div>
	</div>
	<hr />
	<form class="addForm" on:submit|preventDefault={() => addRequest()}>
		<!-- {#if $HPage1} -->
			<label class="mg" for="name">Name:</label>
			<input class="add_input" type="text" bind:value={employeeDataType.name} name="name" id="name" required />

			<label class="mg" for="passport">Passport:</label>
			<input class="add_input" type="text" bind:value={employeeDataType.passportNo} name="passportNo" id="passportNo" />

			<label class="mg" for="passportType">Passport Type:</label>
			<input class="add_input" type="text" bind:value={employeeDataType.passportType} name="passportType" id="passportType" />

			<label class="mg" for="fatherName">Father Name:</label>
			<input class="add_input" type="text" bind:value={employeeDataType.fatherName} name="fatherName" id="fatherName" />

			<label class="mg" for="motherName">Mother Name:</label>
			<input class="add_input" type="text" bind:value={employeeDataType.motherName} name="motherName" id="motherName" />

			<!-- <label class="mg" for="address">Address:</label>
			<input class="add_input" type="text" bind:value={employeeData.address} name="address" id="address" />

			<label class="mg" for="phNo">Phone Number:</label>
			<input class="add_input" type="text" bind:value={employeeData.phNo} name="phNo" id="phNo" />

			<label class="mg" for="nrcNo">NRC No:</label>
			<input class="add_input" type="text" bind:value={employeeData.nrcNo} name="nrcNo" id="nrcNo" />

			<label class="mg" for="religion">Religion:</label>
			<input class="add_input" type="text" bind:value={employeeData.religion} name="religion" id="religion" />

			<label class="mg" for="agent">Agent:</label>
			<input class="add_input" type="text" bind:value={employeeData.agent} name="agent" id="agent" /> -->

			<!-- <label class="mg" for="gender">Gender:</label>
			<select class="add_input" bind:value={employeeData.gender}>
				<option value="">Select gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select> -->

			
		<!-- {/if} -->

		<!-- {#if $HPage2}
			<label class="mg" for="dob">Date of Birth:</label>
			<input class="add_input" type="date" bind:value={employeeData.dob} name="dob" id="dob" />

			<label class="mg" for="weight">Weight (kg):</label>
			<input class="add_input" type="number" bind:value={employeeData.weight} name="weight" id="weight" step="0.1" placeholder="Optional" />

			<label class="mg" for="height">Height (cm):</label>
			<input class="add_input" type="number" bind:value={employeeData.height} name="height" id="height" step="0.1" placeholder="Optional" />

			<label class="mg" for="marital">Marital Status:</label>
			<select class="add_input" bind:value={employeeData.marital}>
				<option value="">Select marital status</option>
				<option value="single">Single</option>
				<option value="married">Married</option>
				<option value="divorced">Divorced</option>
				<option value="widowed">Widowed</option>
			</select>

			<label class="mg" for="education">Education:</label>
			<input class="add_input" type="text" bind:value={employeeData.education} name="education" id="education" />

			<label class="mg" for="experience">Experience:</label>
			<input class="add_input" type="text" bind:value={employeeData.experience} name="experience" id="experience" />

			<label class="mg" for="workedCountry">Worked Country:</label>
			<select class="add_input" bind:value={employeeData.workedCountry}>
				<option value="myanmar" selected>Myanmar</option>
				<option value="malaysia">Malaysia</option>
				<option value="custom">Custom</option>
			</select>

			<label class="mg" for="spokenLanguage">Spoken Language:</label>
			<select class="add_input" bind:value={employeeData.spokenLanguage}>
				<option value="basic" selected>English (Basic)</option>
				<option value="intermediate">English (Intermediate)</option>
				<option value="advanced">English (Advanced)</option>
			</select>

			<label class="mg" for="passportScan">Passport Scan:</label>
			<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.passportScan)} multiple />

			<label class="mg" for="nrcScan">NRC Scan:</label>
			<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.nrcScan)} multiple />
		{/if}

		{#if $HPage3}
			<label class="mg" for="vaccineNotaryScan">Vaccine Notary Scan:</label>
			<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.vaccineNotaryScan)} multiple />

			<label class="mg" for="medicalOnlineScan">Medical Online Scan:</label>
			<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.medicalOnlineScan)} multiple />

			<label class="mg" for="trainingScan">Training Scan:</label>
			<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.trainingScan)} multiple />

			<label class="mg" for="airTicketScan">Air Ticket Scan:</label>
			<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.airTicketScan)} multiple />

			<label class="mg" for="visaScan">Visa Scan:</label>
			<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.visaScan)} multiple />

			<label class="mg" for="smartCardScan">Smart Card Scan:</label>
			<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.smartCardScan)} multiple />

			<label class="mg" for="familyDataScan">Family Data Scan:</label>
			<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.familyDataScan)} multiple />

			<label class="mg" for="deposit">Deposit:</label>
			<input class="add_input" type="text" bind:value={employeeData.deposit} name="deposit" id="deposit" />

			<label class="mg" for="applyDate">Apply Date:</label>
			<input class="add_input" type="text" bind:value={employeeData.applyDate} name="applyDate" id="applyDate" />

			<label class="mg" for="passportExpireDate">Passport Expire Date:</label>
			<input class="add_input" type="text" bind:value={employeeData.passportExpireDate} name="passportExpireDate" id="passportExpireDate" />
		{/if}

		{#if $HPage4}
			<label class="mg" for="passportType">Passport Type:</label>
			<input class="add_input" type="text" bind:value={employeeData.passportType} name="passportType" id="passportType" />

			<label class="mg" for="medicalOnlineExpire">Medical Online Expire:</label>
			<input class="add_input" type="text" bind:value={employeeData.medicalOnlineExpire} name="medicalOnlineExpire" id="medicalOnlineExpire" />

			<label class="mg" for="smartCardNo">Smart Card No:</label>
			<input class="add_input" type="text" bind:value={employeeData.smartCardNo} name="smartCardNo" id="smartCardNo" />

		<label class="mg" for="vaccineData">Vaccine Data:</label>
		<input class="add_input" type='text'  name="vaccineData" id="vaccineData" /> 

			<label class="mg" for="airPlaneNo">Air Plane No:</label>
			<input class="add_input" type="text" bind:value={employeeData.airPlaneNo} name="airPlaneNo" id="airPlaneNo" />

			<label class="mg" for="departureDate">Departure Date:</label>
			<input class="add_input" type="text" bind:value={employeeData.departureDate} name="departureDate" id="departureDate" />
		{/if} -->

		<div class="addForm-bot">
			<!-- {#if $HPage1 === true}
				<div />
			{:else if $HPage1 === false}
				<div class="bg-[#42a5f5] text-white" on:click={Previous}>Previous</div>
			{/if} -->
			<!-- {#if $HPage4 === true} -->
				<button class="submit-btn" type="submit">Submit</button>
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
		@apply bg-[#4aa84d] text-white;
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
