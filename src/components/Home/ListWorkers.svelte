<script lang="ts">
	import { workerData, workerList, workerList_id } from '../../stores/WorkerStore';

	import close_icon from '$lib/assets/close.svg';

	import { listToggle, } from '../Shared/EmployeeFunction.svelte';
	import WorkerTextData from './WorkerTextData.svelte';
</script>

<div class="absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px]" style="display: {$workerList ? 'block' : 'none'};">
	<div class="addForm-heading w-[100%] h-[66px] flex flex-row justify-between items-center text-[18px] font-[500] text-black">
		<div class="text">Worker's Data</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="cursor-pointer" on:click={listToggle}>
			<img src={close_icon} alt="" width="24px" height="24px" />
		</div>
	</div>
	<hr />
	{#each $workerData as data}
		{#if data._id === $workerList_id}
			<form class="flex flex-col gap-[16px] mt-[20px] mb-[30px]">
				<!-- {#if $HPage1} -->
				<WorkerTextData text="Name:" value={data.name} />
				<WorkerTextData text="Passport No:" value={data.passportNo} />
				<WorkerTextData text="Passport Type:" value={data.passportType} />
				<WorkerTextData text="Gender:" value={data.gender} />
				<WorkerTextData text="Date of Birth:" value={data.dobString} /> 
				<WorkerTextData text="Age:" value={data.age} />
				<WorkerTextData text="Date of Issue:" value={data.ppIssueDateString} />
				<WorkerTextData text="Date of Expire:" value={data.ppExpireDateString} />
				<WorkerTextData text="Place of Birth:" value={data.pob} />
				<WorkerTextData text="Authority:" value={data.authority} />

				<WorkerTextData text="Father Name:" value={data.fatherName} />
				<WorkerTextData text="Mother Name:" value={data.motherName} />
				<WorkerTextData text="Address:" value={data.address} />
				<WorkerTextData text="NRC No:" value={data.nrcNo} />
				<WorkerTextData text="Phone Number:" value={data.phNo} />
				<WorkerTextData text="Agent:" value={data.agent} />
				<WorkerTextData text="Company Name:" value={data.companyName} />
				<WorkerTextData text="Airplane No:" value={data.airPlaneNo} />
				<WorkerTextData text="Departure Date:" value={data.departureDateString} />
			</form>
		{:else}
			<div />
		{/if}
	{/each}
</div>

<style>
	.addForm-heading {
		border-radius: 4px 4px 0 0;
		padding: 0 30px;
	}
</style>
