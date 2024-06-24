<script lang="ts">
	import { HPage1, HPage2, HPage3, HPage4, fullImg, fullImgUrl, fullImgName, fullImgType } from '../../stores/MainStores';
	import { workerData, workerView, workerList, workerList_id } from '../../stores/WorkerStore';

	console.log(workerData);
	import close_icon from '$lib/assets/close.svg';
	import { listToggle, Next, Previous } from '../Shared/EmployeeFunction.svelte';

	import WorkerTextData from './WorkerTextData.svelte';
	import WorkerScanData from './WorkerScanData.svelte';
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
	{#each $workerData as data, index}
		{#if data._id === $workerList_id}
			<form class="flex flex-col gap-[16px] mt-[20px] mb-[30px]">
				<!-- {#if $HPage1} -->
				<WorkerTextData text="Name:" value={data.name} />
				<WorkerTextData text="Passport No:" value={data.passportNo} />
				<WorkerTextData text="Passport Type:" value={data.passportType} />
				<WorkerTextData text="Gender:" value={data.gender} />
				<WorkerTextData text="Date of Birth:" value={data.dobString} /> 
				<WorkerTextData text="Age:" value={data.age} />
				<WorkerTextData text="Date of Birth:" value={data.ppIssueDateString} />
				<WorkerTextData text="Date of Birth:" value={data.ppExpireDateString} />
				<WorkerTextData text="Place of Birth:" value={data.pob} />
				<WorkerTextData text="Authority:" value={data.authority} />
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
	.addForm-bot {
		padding: 0 30px;
		border-radius: 0 0 4px 4px;
	}
</style>
