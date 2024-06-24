<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { toggleImg, assignEmployee, searchToggle, addToggle } from '../../components/Shared/CompanyFunction.svelte';
	import { employeeData, companyData, companyModifyData, companyView, employeeView, companyAdd, companySearch, CPage1, CPage2, CPage3, assign, fullImg, fullImgUrl, fullImgName } from '../../stores/MainStores';

	import CompanyData from '../../components/Company/CompanyData.svelte';
	import AddCompany from '../../components/Company/AddCompany.svelte';
	import RemoveCompany from '../../components/Company/RemoveCompany.svelte';
	import ListCompany from '../../components/Company/ListCompany.svelte';
	import ModifyCompany from '../../components/Company/ModifyCompany.svelte';
	import AssignEmployee from '../../components/Company/AssignEmployee.svelte';
	import ListEmployee from '../../components/Home/ListWorkers.svelte';

	import close_icon from '$lib/assets/close.svg';
	import download_icon from '$lib/assets/download.svg';
	import add_icon from '$lib/assets/add_circle.svg';
	import search_icon from '$lib/assets/search.svg';
	import edit_icon from '$lib/assets/edit_alt.svg';

	const manageEmployees = () => {
		goto('/');
	};

	onMount(async () => {
		// Fetch data from MongoDB
		// const response1 = await fetch('https://shan-pyae-phyo.onrender.com/api/companyInfo');
		const response1 = await fetch('https://localhost:3000/api/companyInfo');
		const data1 = await response1.json();
		companyData.set(data1);

		// const response = await fetch('https://shan-pyae-phyo.onrender.com/api/employeeInfo');
		const response = await fetch('https://localhost:3000/api/employeeInfo');
		const data = await response.json();
		employeeData.set(data);
	});
	$: image = $fullImg;
</script>

{#if image === true}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="toggle-img" on:click={toggleImg}>
		<img src={close_icon} alt="" width="24px" height="24px" />
		<a href={$fullImgUrl} download={fullImgName}>
			<img src={download_icon} alt="" width="24px" height="24px" />
		</a>
	</div>
	<div class="overlay-img" />
	<div class="mid-align">
		<!-- svelte-ignore a11y-missing-attribute -->
		<iframe class="fullImg" width="600" height="800" src="https://shanpyaephyo.s3.ap-south-1.amazonaws.com/passport/Final+Company+Profile+(2).docx" />
	</div>
{:else if image === false}
	<div class="overlay" style="display: {$companyView ? 'flex' : 'none'};">
		<AddCompany />

		<RemoveCompany />

		{#if $companyModifyData}
			<ModifyCompany />
		{/if}

		<ListCompany />
	</div>

	<div class="overlay" style="display: {$employeeView ? 'flex' : 'none'};">
		<ListEmployee />
	</div>

	<nav class="nav-bar">
		<div class="heading">
			{#if $assign}
				Assign <b>Employees</b>
			{:else}
				Manage <b>Companies</b>
			{/if}
		</div>
		<div class="nav-btns">
			{#if !$assign}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="flex justify-center items-center gap-[5px] w-[164px] h-[33px] text-white duration-300 bg-[#F9A826] rounded-[4px] text-[13px] cursor-pointer" on:click={manageEmployees}>
					<img class="edit" src={edit_icon} alt="" width="20px" height="20px" />
					<span>Manage Employees</span>
				</div>
			{/if}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="search-btn" on:click={searchToggle}>
				<img class="edit" src={search_icon} alt="" width="20px" height="20px" />
				<span>Search Company</span>
			</div>
			{#if $assign}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="add-btn" on:click={assignEmployee}>
					<img class="edit" src={add_icon} alt="" width="20px" height="20px" />
					<span>Finish Assign</span>
				</div>
			{:else}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="add-btn" on:click={addToggle}>
					<img class="edit" src={add_icon} alt="" width="20px" height="20px" />
					<span>Add New Company</span>
				</div>
			{/if}
		</div>
	</nav>
	{#if $assign}
		<AssignEmployee />
	{:else}
		<CompanyData />
	{/if}
	<div class="bot-nav">
		<div class="bot-left">
			Showing <b>5</b> out of <b>25</b> entries
		</div>
		<div class="bot-right">
			<div class="bn1">Previous</div>
			<div class="bn2">1</div>
			<div class="bn3">2</div>
			<div class="bn4">3</div>
			<div class="bn5">4</div>
			<div class="bn6">5</div>
			<div class="bn7">Next</div>
		</div>
	</div>
{/if}

<style>
	.nav-btns {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}
	.search-btn {
		@apply flex justify-center items-center gap-[5px] w-[164px] h-[33px] text-white duration-300 bg-[#42a5f5] rounded-[4px] text-[13px] cursor-pointer;
	}
	.mid-align {
		z-index: 15;
		margin-top: 8px;
		margin-bottom: 32px;
		height: auto;
		width: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.toggle-img {
		position: sticky;
		top: 32px;
		max-width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 32px;
		margin-left: 32px;
		margin-right: 32px;
		cursor: pointer;
		z-index: 15;
	}
	.overlay-img {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
		background: rgba(0, 0, 0, 0.3);
		transition: 0.3s;
	}
	.fullImg {
		display: block;
		z-index: 15;
	}
	.overlay {
		position: fixed;
		display: none;
		justify-content: center;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0.3);
		transition: 0.3s;
	}
	.nav-bar {
		@apply flex bg-[#435e7c] w-[100%] h-[65px] justify-between items-center;
		padding: 16px 30px;
	}
	.heading {
		color: white;
		font-size: 24px;
	}
	.add-btn {
		@apply flex justify-center items-center gap-[5px] w-[164px] h-[33px] text-white duration-300 bg-[#4aa84d] rounded-[4px] text-[13px] cursor-pointer;
	}
	.add-btn:hover {
		@apply bg-[#3b923e];
	}
	.bot-nav {
		@apply flex flex-row justify-between absolute bottom-0 w-[100%] h-[72px];
		padding: 0 25px;
	}
	.bot-left {
		@apply h-[32px] mt-[10px];
	}
	.bot-right {
		@apply flex flex-row gap-[2px] h-[32px];
		margin: 20px 0;
	}
	.bot-right div {
		@apply flex justify-center items-center h-[32px] rounded-[2px] cursor-pointer duration-300;
		border: 1px solid #ddd;
	}
	.bn1 {
		@apply w-[76px];
	}
	.bn2 {
		@apply bg-[#337ab7] text-white;
	}
	.bn2,
	.bn3,
	.bn4,
	.bn5,
	.bn6 {
		@apply w-[33px];
	}
	.bn1:hover,
	.bn2:hover,
	.bn3:hover,
	.bn4:hover,
	.bn5:hover,
	.bn6:hover,
	.bn7:hover {
		border: 1px solid rgb(158, 157, 157);
	}
	.bn7 {
		@apply w-[52px];
	}
</style>
