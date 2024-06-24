<script lang="ts">
	import { goto } from '$app/navigation';

	import { HPage1, HPage2, HPage3, HPage4 } from '../../stores/MainStores';
	import { workerData, workerView, workerAdd } from '../../stores/WorkerStore';
	import { addToggle, Next, Previous } from '../Shared/EmployeeFunction.svelte';

	import close_icon from '$lib/assets/close.svg';

	import { workerDataType } from './AddData.svelte';
	
	const addRequest = async () => {

		const response = await fetch('http://localhost:3000/api/employeeUpload', {
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
			const another_response = await fetch('http://localhost:3000/api/employeeInfo');
			const data = await another_response.json();
			workerData.update(() => data);
			workerView.update((currentValue) => !currentValue);
			workerAdd.update((currentValue) => !currentValue);
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

		<div class="addForm-bot">
			<button class="bg-[#00BFA6] hover:bg-[#00bfa6da] text-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer border-none" type="submit">Submit</button>
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
