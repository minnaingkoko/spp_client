<script lang="ts">
	import { companyData, companyView, companyList, companyList_id, CPage1, CPage2, CPage3, assignSingle } from '../../stores/MainStores';
	import close_icon from '$lib/images/close.svg';
	import CompanyScanData from './CompanyScanData.svelte';
	import CompanyTextData from './CompanyTextData.svelte';

	$: assign = $assignSingle;

	const resetPage = () => {
		CPage1.update(() => true);
		CPage2.update(() => false);
		CPage3.update(() => false);
	};

	const listToggle = (value: any) => {
		resetPage();
		companyList_id.update(() => value);
		companyView.update((currentValue) => !currentValue);
		companyList.update((currentValue) => !currentValue);
	};
</script>

{#if assign}
	<div class="list-data absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px]" style="display: {$companyList ? 'block' : 'none'};">
		<div class="addForm-heading w-[100%] h-[66px] flex flex-row justify-between items-center text-[18px] font-[500] text-black">
			<div class="text">Company's Data</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="cursor-pointer" on:click={listToggle}>
				<img src={close_icon} alt="" width="24px" height="24px" />
			</div>
		</div>
		<hr />
		{#each $companyData as data, index}
			{#if data._id === $companyList_id}
				<form class="flex flex-col gap-[16px] mt-[20px] mb-[95px]">
					{#if $CPage1}
						<CompanyTextData text="Company Name:" value={data.companyName} />
						<CompanyTextData text="Post Code:" value={data.postCode} />

						<div class="flex pl-[30px] pr-[30px] w-[100%] justify-between text-[14px]">
							<label class="w-[130px]" for="demandTotal">Demand Total:</label>
							<div class="w-[160px]">M-{data.demandTotal.male}/ F-{data.demandTotal.female}</div>
						</div>

						<CompanyTextData text="Company Phone Number:" value={data.companyPhNo} />
						<CompanyTextData text="Employees:" value={assign.companyName} />
						<CompanyScanData text="Demand Letter Scan:" value={data.demandLetterScanData} />
						<CompanyScanData text="KSM Scan:" value={data.KSMScanData} />
						<CompanyScanData text="Company Profile Scan:" value={data.companyProfileScanData} />
						<CompanyScanData text="Calling Copy Scan:" value={data.callingCopyScanData} />
						<CompanyScanData text="Calling Original Scan:" value={data.callingOrgScanData} />
						<CompanyScanData text="Notary Scan:" value={data.notaryScanData} />
						<div class="addForm-bot absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px] flex justify-end items-center gap-[12px] rounded-[4px]">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div class="bg-white flex justify-center items-center w-[100px] h-[33px] cursor-pointer" on:click={listToggle}>Cancel</div>
						</div>
					{/if}
				</form>
			{:else}
				<div />
			{/if}
		{/each}
	</div>
{/if}

<style>
	.list-data {
		height: calc(100vh - 60px);
	}
	.addForm-heading {
		border-radius: 4px 4px 0 0;
		padding: 0 30px;
	}
	.addForm-bot {
		border-radius: 0 0 4px 4px;
		padding: 0 30px;
	}
</style>
