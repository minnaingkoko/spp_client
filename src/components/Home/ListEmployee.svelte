<script lang="ts">
	import { employeeData, employeeView, employeeList, employeeList_id, HPage1, HPage2, HPage3, HPage4, fullImg, fullImgUrl, fullImgName, fullImgType } from '../../stores/MainStores';
	import close_icon from '$lib/images/close.svg';
	import EmployeeTextData from './EmployeeTextData.svelte';
	import EmployeeScanData from './EmployeeScanData.svelte';
	import { listToggle, Next, Previous } from '../Shared/EmployeeFunction.svelte';
</script>

<div class="list-data absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px]" style="display: {$employeeList ? 'block' : 'none'};">
	<div class="addForm-heading w-[100%] h-[66px] flex flex-row justify-between items-center text-[18px] font-[500] text-black">
		<div class="text">Employee's Data</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="cursor-pointer" on:click={listToggle}>
			<img src={close_icon} alt="" width="24px" height="24px" />
		</div>
	</div>
	<hr />
	{#each $employeeData as data, index}
		{#if data._id === $employeeList_id}
			<form class="flex flex-col gap-[16px] mt-[20px] mb-[95px]">
				{#if $HPage1}
				<EmployeeTextData text="Name:" value={data.name} />
				<EmployeeTextData text="Mother Name:" value={data.motherName} />
				<EmployeeTextData text="Father Name:" value={data.fatherName} />
				<EmployeeTextData text="Address:" value={data.address} />
				<EmployeeTextData text="Phone Number:" value={data.phNo} />
				<EmployeeTextData text="NRC No:" value={data.nrcNo} />
				<EmployeeTextData text="Religion:" value={data.religion} />
				<EmployeeTextData text="Agent:" value={data.agent} />
				<EmployeeTextData text="Gender:" value={data.gender} />
				<EmployeeTextData text="Passport:" value={data.passport} />
				<EmployeeTextData text="Date of Birth:" value={data.dobString} />
				<EmployeeTextData text="Weight (kg):" value={data.weight} />
				<EmployeeTextData text="Height (cm):" value={data.height} />
				<EmployeeTextData text="Marital Status:" value={data.marital} />
				<EmployeeTextData text="Education:" value={data.education} />
				{/if}

				{#if $HPage2}
				<EmployeeTextData text="Experience:" value={data.experience} />
				<EmployeeTextData text="Worked Country:" value={data.workedCountry} />
				<EmployeeTextData text="Spoken Language:" value={data.spokenLanguage} />
				<EmployeeScanData text="Passport Scan:" value={data.passportScanData} />
				<EmployeeScanData text="NRC Scan:" value={data.nrcScanData} />
				<EmployeeScanData text="Vaccine Notary Scan:" value={data.vaccineNotaryScanData} />
				<EmployeeScanData text="Medical Online Scan:" value={data.medicalOnlineScanData} />
				<EmployeeScanData text="Training Scan:" value={data.trainingScanData} />
				<EmployeeScanData text="AirTicket Scan:" value={data.airTicketScanData} />
				<EmployeeScanData text="Visa Scan:" value={data.visaScanData} />
				<EmployeeScanData text="Smart Card Scan:" value={data.smartCardScanData} />
				<EmployeeScanData text="Family Data Scan:" value={data.familyDataScanData} />
				<EmployeeTextData text="Deposit:" value={data.deposit} />
				<EmployeeTextData text="Apply Date:" value={data.applyDate} />
				<EmployeeTextData text="Passport Expire Date:" value={data.passportExpireDate} />
				{/if}

				{#if $HPage3}
				<EmployeeTextData text="Passport Type:" value={data.passportType} />
				<EmployeeTextData text="Medical Online Expire:" value={data.medicalOnlineExpire} />
				<EmployeeTextData text="Smart Card No:" value={data.smartCardNo} />
				<EmployeeTextData text="AirPlane No:" value={data.airPlaneNo} />
				<EmployeeTextData text="Departure Date:" value={data.departureDate} />
				{/if}

				<div class="addForm-bot flex justify-end items-center gap-[12px] rounded-[4px] absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px]">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					{#if $HPage1 === true}
						<div />
					{:else if $HPage1 === false}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="bg-[#42a5f5] text-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer" on:click={Previous}>Previous</div>
					{/if}
					{#if $HPage3 === true}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="bg-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer" on:click={listToggle}>Cancel</div>
					{:else if $HPage3 === false}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="bg-[#4aa84d] text-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer" on:click={Next}>Next</div>
					{/if}
				</div>
			</form>
		{:else}
			<div />
		{/if}
	{/each}
</div>

<style>
	.list-data {
		height: calc(100vh - 60px);
	}
	.addForm-heading {
		border-radius: 4px 4px 0 0;
		padding: 0 30px;
	}
	.addForm-bot {
		padding: 0 30px;
		border-radius: 0 0 4px 4px;
	}
</style>
