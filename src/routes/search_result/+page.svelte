<script lang="ts">
	import SearchData from '../../components/Search/SearchData.svelte';
	import { addToggle, searchToggle, toggleImg }  from '../../components/Shared/EmployeeFunction.svelte';
	import { goto } from '$app/navigation';
	import close_icon from '$lib/images/close.svg';
	import download_icon from '$lib/images/download.svg';
	import { employeeModifyData, employeeView, fullImg, fullImgUrl, fullImgName, fullImgType } from '../../stores/MainStores';
	import ListEmployee from '../../components/Home/ListEmployee.svelte';
	import RemoveEmployee from '../../components/Home/RemoveEmployee.svelte';
	import SearchWorker from '../../components/Home/SearchWorker.svelte';
	import add_icon from '$lib/images/add_circle.svg';
	import search_icon from '$lib/images/search.svg';
	import edit_icon from '$lib/images/edit_alt.svg';
	import ModifySearchWorker from '../../components/Search/ModifySearchWorker.svelte';
	

	const manageWorkers = () => {
		goto('/');
	}

	$: image = $fullImg;

</script>

{#if image === true}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="top-[32px] sticky max-w-[100%] flex flex-row justify-between mt-[32px] ml-[32px] mr-[32px] cursor-pointer z-[15]" on:click={toggleImg}>
		<img src={close_icon} alt="" width="24px" height="24px" />
		<a href={$fullImgUrl} download={fullImgName}>
			<img src={download_icon} alt="" width="24px" height="24px" />
		</a>
	</div>
	<div class="fixed top-[0] right-[0] bottom-[0] left-[0] flex justify-center items-center z-[10] duration-300" style="background: rgba(0, 0, 0, 0.3);">
	</div>
	<div class="z-[15] mt-[8px] mb-[32px] w-[auto] h-[auto] flex justify-center items-center">
		{#if $fullImgType == 'image/jpeg' || $fullImgType == 'image/jpg' || $fullImgType == 'image/png'}
			<img  class="block z-[15]" src={$fullImgUrl} alt="">
		{:else}
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe src="https://docs.google.com/gview?url={$fullImgUrl}&embedded=true" frameborder="0"></iframe>
		{/if}
		
	</div>
{:else if image === false}
	<div class="fixed hidden justify-center top-[0] right-[0] bottom-[0] left-[0] z-[10] duration-300" style="display: {$employeeView ? 'flex' : 'none'}; background: rgba(0, 0, 0, 0.3);">
		<SearchWorker />

		<RemoveEmployee />

		{#if employeeModifyData}
			<ModifySearchWorker />
		{/if}

		<ListEmployee />
	</div>

	<nav class="px-[30px] py-[16px] flex bg-[#435e7c] w-[100%] h-[65px] justify-between items-center">
		<div class="text-[white] text-[24px] ">
			Searched <b>Workers</b>
		</div>
		<div class="flex flex-row gap-[16px]">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="flex justify-center items-center gap-[5px] w-[164px] h-[33px] text-white duration-300 bg-[#F9A826] rounded-[4px] text-[13px] cursor-pointer" on:click={manageWorkers}>
				<img class="edit" src={edit_icon} alt="" width="20px" height="20px" />
				<span>List All Workers</span>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="flex justify-center items-center gap-[5px] w-[164px] h-[33px] text-white duration-300 bg-[#42a5f5] rounded-[4px] text-[13px] cursor-pointer" on:click={searchToggle}>
				<img class="edit" src={search_icon} alt="" width="20px" height="20px" />
				<span>Search Employee</span>
			</div>
		</div>
	</nav>
	<SearchData />
	<!-- <div class="py-[0] px-[25px] flex flex-row justify-between absolute bottom-0 w-[100%] h-[72px]">
		<div class="h-[32px] mt-[10px]">
			Showing <b>5</b> out of <b>25</b> entries
		</div>
		<div class="flex flex-row gap-[2px] h-[32px] my-[20px] mx-[0]">
			<div class=" w-[76px] flex justify-center items-center h-[32px] rounded-[2px] cursor-pointer duration-300">Previous</div>
			<div class="w-[33px] bg-[#337ab7] text-white flex justify-center items-center h-[32px] rounded-[2px] cursor-pointer duration-300 border-[1px] border-[#ddd]">1</div>
			<div class="w-[33px] flex justify-center items-center h-[32px] rounded-[2px] cursor-pointer duration-300 border-[1px] border-[#ddd]">2</div>
			<div class="w-[33px] flex justify-center items-center h-[32px] rounded-[2px] cursor-pointer duration-300 border-[1px] border-[#ddd]">3</div>
			<div class="w-[33px] flex justify-center items-center h-[32px] rounded-[2px] cursor-pointer duration-300 border-[1px] border-[#ddd]">4</div>
			<div class="w-[33px] flex justify-center items-center h-[32px] rounded-[2px] cursor-pointer duration-300 border-[1px] border-[#ddd]">5</div>
			<div class=" w-[52px] flex justify-center items-center h-[32px] rounded-[2px] cursor-pointer duration-300 border-[1px] border-[#ddd]">Next</div>
		</div>
	</div> -->
{/if}
