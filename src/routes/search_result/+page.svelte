<script lang="ts">
	import { goto } from '$app/navigation';

	import { addToggle, searchToggle, toggleImg } from '../../components/Shared/EmployeeFunction.svelte';
	import { fullImg, fullImgUrl, fullImgName, fullImgType, message, messageText } from '../../stores/MainStores';
	import { workerModifyData, workerView } from '../../stores/WorkerStore';

	import SearchData from '../../components/Search/SearchData.svelte';
	import ListSearch from '../../components/Search/ListSearch.svelte';
	import SearchWorker from '../../components/Home/SearchWorker.svelte';
	import ModifySearchWorker from '../../components/Search/ModifySearchWorker.svelte';
	import RemoveSearchWorker from '../../components/Search/RemoveSearchWorker.svelte';

	import close_icon from '$lib/assets/close.svg';
	import closeAlt_icon from '$lib/assets/close_alt.svg';
	import download_icon from '$lib/assets/download.svg';
	import search_icon from '$lib/assets/search.svg';
	import edit_icon from '$lib/assets/edit_alt.svg';

	const manageWorkers = () => {
		goto('/');
	};

	const toggleMessage = () => {
		message.update(() => '');
		messageText.update(() => '');
	};

</script>

{#if $message}
	<div class="absolute bottom-[30px] left-[30px] h-[20px] {$message === 'success' ? 'bg-[#00BFA6]' : 'bg-[#F50057]'} gap-[30px] flex flex-row justify-between items-center p-[20px] text-white rounded-md">
		<div class="text-[16px] font-bold cursor-default">{$messageText}</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img on:click={toggleMessage} class="cursor-pointer" src={closeAlt_icon} alt="" width="18px" height="18px" />
	</div>
{/if}

<div class="fixed hidden justify-center top-[0] right-[0] bottom-[0] left-[0] z-[10] duration-300" style="display: {$workerView ? 'flex' : 'none'}; background: rgba(0, 0, 0, 0.3);">
	<SearchWorker />

	<RemoveSearchWorker />

	{#if workerModifyData}
		<ModifySearchWorker />
	{/if}

	<ListSearch />
</div>

<nav class="px-[30px] py-[16px] flex bg-[#536DFE] w-[100%] h-[65px] justify-between items-center">
	<div class="text-[white] text-[24px]">
		Searched <b>Workers</b>
	</div>
	<div class="flex flex-row gap-[16px]">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex justify-center items-center gap-[5px] w-[164px] h-[33px] text-white duration-300 bg-[#F9A826] hover:bg-[#f9a826de] rounded-[4px] text-[13px] cursor-pointer" on:click={manageWorkers}>
			<img class="edit" src={edit_icon} alt="" width="20px" height="20px" />
			<span>List All Workers</span>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex justify-center items-center gap-[5px] w-[164px] h-[33px] text-white duration-300 bg-[#00B0FF] hover:bg-[#00aeffde] rounded-[4px] text-[13px] cursor-pointer" on:click={searchToggle}>
			<img class="edit" src={search_icon} alt="" width="20px" height="20px" />
			<span>Search Worker</span>
		</div>
	</div>
</nav>
<SearchData />

