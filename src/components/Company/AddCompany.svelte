<script lang="ts">
	import { companyView, CPage1, CPage2, CPage3, companyAdd, assign, assignData } from '../../stores/MainStores';
	import close_icon from '$lib/images/close.svg';
	import { goto } from '$app/navigation';
	import { companyData } from './AddData.svelte';
	import { addToggle, assignEmployee, Next, Previous } from '../Shared/CompanyFunction.svelte';

	const addRequest = async () => {
		companyData.employees = $assignData;
		console.log(companyData.employees);
		// const response = await fetch('https://shan-pyae-phyo.onrender.com/api/companyUpload', {
		const response = await fetch('https://localhost:3000/api/companyUpload', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(companyData)
		});
		if (response.status === 200) {
			goto('/company');
			location.reload();
		} else {
			console.log('error');
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

<div class="add-form absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px]" style="display: {$companyAdd ? 'block' : 'none'};">
	<div class="addForm-heading w-[100%] h-[66px] flex flex-row justify-between items-center text-[18px] font-[500] text-black">
		<div class="text">Add Company</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="cursor-pointer" on:click={addToggle}>
			<img src={close_icon} alt="" width="24px" height="24px" />
		</div>
	</div>
	<hr />
	<form class="addForm flex flex-col mt-[20px] mb-[95px]" action="/api/companyUpload" on:submit|preventDefault={() => addRequest()}>
		{#if $CPage1}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="add-employee" on:click={assignEmployee}>Add Employee</div>
			<label class="mg" for="companyName">Company Name:</label>
			<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={companyData.companyName} name="companyName" id="companyName" required />

			<label class="mg" for="companyAddress">Company Address:</label>
			<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={companyData.companyAddress} name="companyAddress" id="companyAddress" required />

			<label class="mg" for="postCode">Post Code:</label>
			<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={companyData.postCode} name="postCode" id="postCode" required />

			<label class="mg" for="demandMale">Demand Male:</label>
			<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={companyData.demandMale} name="demandMale" id="demandMale" required />

			<label class="mg" for="demandFemale">Demand Female:</label>
			<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={companyData.demandFemale} name="demandFemale" id="demandFemale" required />

			<label class="mg" for="companyPhNo">Company Phone Number:</label>
			<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" bind:value={companyData.companyPhNo} name="companyPhNo" id="companyPhNo" required />

			<label class="mg" for="demandLetterScan">Demand Letter Scan:</label>
			<input type="file" on:change={(event) => handleFileChange(event, companyData.demandLetterScan)} class="form-control mg" name="demandLetterScan" id="demandLetterScan" required />

			<label class="mg" for="KSMScan">KSM Scan:</label>
			<input type="file" on:change={(event) => handleFileChange(event, companyData.KSMScan)} class="form-control mg" name="KSMScan" id="formFile" multiple />

			<label class="mg" for="companyProfileScan">Company Profile Scan:</label>
			<input type="file" on:change={(event) => handleFileChange(event, companyData.companyProfileScan)} class="form-control mg" name="companyProfileScan" id="formFile" multiple />
		{/if}

		{#if $CPage2}
			<label class="mg" for="callingCopyScan">Calling Copy Scan:</label>
			<input type="file" on:change={(event) => handleFileChange(event, companyData.callingCopyScan)} class="form-control mg" name="callingCopyScan" id="formFile" multiple />

			<label class="mg" for="callingOrgScan">Calling Original Scan:</label>
			<input type="file" on:change={(event) => handleFileChange(event, companyData.callingOrgScan)} class="form-control mg" name="callingOrgScan" id="formFile" multiple />

			<label class="mg" for="notaryScan">Notary Scan:</label>
			<input type="file" on:change={(event) => handleFileChange(event, companyData.notaryScan)} class="form-control mg" name="notaryScan" id="formFile" multiple />
		{/if}

		<div class="addForm-bot absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px] flex justify-end items-center gap-[12px] rounded-[4px]">
			{#if $CPage1 === true}
				<div />
			{:else if $CPage1 === false}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="bg-[#42a5f5] text-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer" on:click={Previous}>Previous</div>
			{/if}
			{#if $CPage2 === true}
				<button class="bg-[#4aa84d] text-white border-none flex justify-center items-center w-[100px] h-[33px] cursor-pointer" type="submit">Submit</button>
			{:else if $CPage2 === false}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="bg-[#4aa84d] text-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer" on:click={Next}>Next</div>
			{/if}
		</div>
	</form>
</div>

<style>
	.addForm-bot {
		border-radius: 0 0 4px 4px;
	}
	.addForm-bot {
		padding: 0 30px;
	}
	input {
		border: 1px solid gray;
	}
	.mg {
		margin: 0 30px;
	}
	input {
		border: 1px solid gray;
	}
	.add-form {
		height: calc(100vh - 60px);
	}
	.addForm-heading {
		border-radius: 4px 4px 0 0;
		padding: 0 30px;
	}
</style>
