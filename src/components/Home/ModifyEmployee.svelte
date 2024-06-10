<script lang="ts">
	import { employeeModifyData, employeeView, HPage1, HPage2, HPage3, HPage4, employeeModify } from '../../stores/MainStores';
	import close_icon from '$lib/images/close.svg';
	import { goto } from '$app/navigation';
	import { modifyToggle, Next, Previous } from '../Shared/EmployeeFunction.svelte';
	import ModifyTextData from './ModifyTextData.svelte';

	$: employee = $employeeModifyData;

	const modifyRequest = async (value: any) => {
		// const response = await fetch('https://shan-pyae-phyo.onrender.com/api/employeeModifyRequest', {
		const response = await fetch('https://localhost:3000/api/employeeModifyRequest', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(employee)
		});
		if (response.status === 200) {
			goto('/');
			location.reload();
		}
	};
</script>

{#if employee}
	<div class="add-form absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px]" style="display: {$employeeModify ? 'block' : 'none'};">
		<div class="addForm-heading">
			<div class="text">Modify Employee</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="cursor-pointer" on:click={modifyToggle}>
				<img src={close_icon} alt="" width="24px" height="24px" />
			</div>
		</div>
		<hr />
		<form class="addForm flex flex-col mt-[20px] mb-[95px]" on:submit|preventDefault={() => modifyRequest(employee._id)}>
			{#if $HPage1}
				<ModifyTextData text="Name:" value="name" dataF={employee.name} />
				<ModifyTextData text="Mother Name:" value="motherName" dataF={employee.motherName} />
				<ModifyTextData text="Father Name:" value="fatherName" dataF={employee.fatherName} />
				<ModifyTextData text="Address:" value="address" dataF={employee.address} />
				<ModifyTextData text="Phone Number:" value="phNo" dataF={employee.phNo} />
				<ModifyTextData text="NRC No:" value="nrcNo" dataF={employee.nrcNo} />
				<ModifyTextData text="Religion:" value="religion" dataF={employee.religion} />
				<ModifyTextData text="Agent:" value="agent" dataF={employee.agent} />

				<label class="mg" for="gender">Gender:</label>
				<select class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={employee.gender}>
					<option value="">Select gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>

				<ModifyTextData text="Passport:" value="passport" dataF={employee.passport} />
			{/if}

			{#if $HPage2}
				<label class="mg" for="dob">Date of Birth:</label>
				<!-- <input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="date" bind:value={dateValue} name="dob" id="dob" /> -->

				<label class="mg" for="weight">Weight (kg):</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="number" bind:value={employee.weight} name="weight" id="weight" step="0.1" placeholder="Optional" />

				<label class="mg" for="height">Height (cm):</label>
				<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="number" bind:value={employee.height} name="height" id="height" step="0.1" placeholder="Optional" />

				<label class="mg" for="marital">Marital Status:</label>
				<select class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={employee.marital}>
					<option value="">Select marital status</option>
					<option value="single">Single</option>
					<option value="married">Married</option>
					<option value="divorced">Divorced</option>
					<option value="widowed">Widowed</option>
				</select>

				<ModifyTextData text="Education:" value="education" dataF={employee.education} />
				<ModifyTextData text="Experience:" value="experience" dataF={employee.experience} />

				<label class="mg" for="workedCountry">Worked Country:</label>
				<select class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={employee.workedCountry}>
					<option value="myanmar" selected>Myanmar</option>
					<option value="malaysia">Malaysia</option>
					<option value="custom">Custom</option>
				</select>

				<label class="mg" for="spokenLanguage">Spoken Language:</label>
				<select class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={employee.spokenLanguage}>
					<option value="basic" selected>English (Basic)</option>
					<option value="intermediate">English (Intermediate)</option>
					<option value="advanced">English (Advanced)</option>
				</select>

				<!-- <label class="mg" for="passportScan">Passport Scan:</label>
				<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.passportScan)} multiple />

				<label class="mg" for="nrcScan">NRC Scan:</label>
				<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.nrcScan)} multiple /> -->
			{/if}

			{#if $HPage3}
				<!-- <label class="mg" for="vaccineNotaryScan">Vaccine Notary Scan:</label>
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
				<input type="file" class="form-control mg" id="formFile" on:change={(event) => handleFileChange(event, employeeData.familyDataScan)} multiple /> -->

				<ModifyTextData text="Deposit:" value="deposit" dataF={employee.deposit} />
				<ModifyTextData text="Apply Date:" value="applyDate" dataF={employee.applyDate} />
				<ModifyTextData text="Passport Expire Date:" value="passportExpireDate" dataF={employee.passportExpireDate} />
			{/if}

			{#if $HPage4}
				<ModifyTextData text="Passport Type:" value="passportType" dataF={employee.passportType} />
				<ModifyTextData text="Medical Online Expire:" value="medicalOnlineExpire" dataF={employee.medicalOnlineExpire} />
				<ModifyTextData text="Smart Card No:" value="smartCardNo" dataF={employee.smartCardNo} />
				<ModifyTextData text="Air Plane No:" value="airPlaneNo" dataF={employee.airPlaneNo} />
				<ModifyTextData text="Departure Date:" value="departureDate" dataF={employee.departureDate} />
			{/if}

			<div class="addForm-bot absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px] flex justify-end items-center gap-[12px] rounded-[4px]">
				{#if $HPage1 === true}
					<div />
				{:else if $HPage1 === false}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="bg-[#42a5f5] text-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer" on:click={Previous}>Previous</div>
				{/if}
				{#if $HPage4 === true}
					<button class="flex justify-center items-center w-[100px] h-[33px] cursor-pointer border-none bg-[#4aa84d] text-white" type="submit">Submit</button>
				{:else if $HPage4 === false}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="bg-[#4aa84d] text-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer" on:click={Next}>Next</div>
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
	.add-form {
		height: calc(100vh - 60px);
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
