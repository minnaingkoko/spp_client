<script lang="ts">
	import { onMount } from 'svelte';

	import { addToggle, searchToggle } from '../components/Shared/EmployeeFunction.svelte';
	import { fullImg, message, messageText, isLoading } from '../stores/MainStores';
	import { workerData, totalPages, currentPage, workerModifyData, workerView } from '../stores/WorkerStore';

	import WorkerData from '../components/Home/WorkerData.svelte';
	import AddWorker from '../components/Home/AddWorker.svelte';
	import ListWorkers from '../components/Home/ListWorkers.svelte';
	import ModifyWorker from '../components/Home/ModifyWorker.svelte';
	import RemoveWorker from '../components/Home/RemoveWorker.svelte';
	import SearchWorker from '../components/Home/SearchWorker.svelte';

	import closeAlt_icon from '$lib/assets/close_alt.svg';
	import add_icon from '$lib/assets/add_circle.svg';
	import search_icon from '$lib/assets/search.svg';

	import { PUBLIC_LOCAL_API_KEY, PUBLIC_SERVER_API_KEY } from '$env/static/public';

	const fetchWorkers = async (page = 1) => {
		const response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeInfo?page=${page}$limit=12`);
		const data = await response.json();
		console.log(data.workers);
		workerData.set(data.workers);
		totalPages.set(data.totalPages);
		currentPage.set(data.currentPage);
	};

	onMount(async () => {
		if (process.env.NODE_ENV === 'production') {
			// For production
			const response = await fetch(`${PUBLIC_SERVER_API_KEY}/api/employeeInfo`);
			const data = await response.json();

			// Update the store with the fetched data
			workerData.set(data);
		} else {
			// For development
			fetchWorkers();

			const timer = setTimeout(() => {
				isLoading.update(() => false);
			}, 1000);

				// Cleanup the timer if the component is destroyed before the timer completes
			return () => clearTimeout(timer);
		}
	});

	const goToPage = (page) => {
		fetchWorkers(page);
	};

	const toggleMessage = () => {
		message.update(() => '');
		messageText.update(() => '');
	};

	$: image = $fullImg;
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

	<AddWorker />

	<RemoveWorker />

	{#if workerModifyData}
		<ModifyWorker />
	{/if}

	<ListWorkers />
</div>

<nav class="px-[30px] py-[16px] flex bg-[#536DFE] w-[100%] h-[65px] justify-between items-center">
	<div class="text-[white] text-[24px]">
		Manage <b>Workers</b>
	</div>
	<div class="flex flex-row gap-[16px]">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex justify-center items-center gap-[5px] w-[164px] h-[33px] text-white duration-300 bg-[#00B0FF] hover:bg-[#00aeffde] rounded-[4px] text-[13px] cursor-pointer" on:click={searchToggle}>
			<img class="edit" src={search_icon} alt="" width="20px" height="20px" />
			<span>Search Worker</span>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex justify-center items-center gap-[5px] w-[164px] h-[33px] text-white duration-300 bg-[#00BFA6] hover:bg-[#00bfa6da] rounded-[4px] text-[13px] cursor-pointer" on:click={addToggle}>
			<img class="edit" src={add_icon} alt="" width="20px" height="20px" />
			<span>Add New Worker</span>
		</div>
	</div>
</nav>
<WorkerData />
<div class="pagination absolute bottom-[30px] right-[60px] flex justify-center mt-8">
	<button on:click={() => goToPage($currentPage - 1)} class="px-4 py-2 mx-1 border rounded bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed" disabled={$currentPage === 1}>Previous</button>
	{#if $totalPages === 0}
		<span class="px-4 py-2 mx-1">Page 1 of 1</span>
	{:else}
		<span class="px-4 py-2 mx-1">Page {$currentPage} of {$totalPages}</span>
	{/if}
	<button on:click={() => goToPage($currentPage + 1)} class="px-4 py-2 mx-1 border rounded bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed" disabled={$currentPage === $totalPages}>Next</button>
</div>
