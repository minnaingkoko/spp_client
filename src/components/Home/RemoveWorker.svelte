<script lang="ts">
	import close_icon from '$lib/assets/close.svg';
	import { message } from '../../stores/MainStores';
	import { totalPages, currentPage, workerData, workerView, workerRemove, workerRemove_id } from '../../stores/WorkerStore';

	import { PUBLIC_LOCAL_API_KEY, PUBLIC_SERVER_API_KEY } from '$env/static/public';

	const fetchWorkers = async (page = 1) => {
		const response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeInfo?page=${page}$limit=12`);
		const data = await response.json();
		workerData.set(data.workers);
		totalPages.set(data.totalPages);
		currentPage.set(data.currentPage);
	};

	const deleteToggle = (value: any) => {
		workerRemove_id.update(() => value);
		workerView.update((currentValue) => !currentValue);
		workerRemove.update((currentValue) => !currentValue);
	};

	const deleteRequest = async (value: any) => {
		if (process.env.NODE_ENV === 'production') {
			// For production
			
			const response = await fetch(`${PUBLIC_SERVER_API_KEY}/api/employeeDelete`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ idNo: value })
			});
			if (response.status === 200) {
				const another_response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeInfo`);
				const data = await another_response.json();
				workerData.update(() => data);
				workerView.update((currentValue) => !currentValue);
				workerRemove.update((currentValue) => !currentValue);
			}
		} else {
			// For development
			const response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeDelete`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ idNo: value })
			});
			if (response.status === 200) {
				fetchWorkers($currentPage);

				workerView.update((currentValue) => !currentValue);
				workerRemove.update((currentValue) => !currentValue);

				message.update(() => 'delete');

				const timer = setTimeout(() => {
					message.update(() => '');
				}, 3000);

				// Cleanup the timer if the component is destroyed before the timer completes
				return () => clearTimeout(timer);
			}
		}
	};
</script>

<div class="absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px] h-[240px]" style="display: {$workerRemove ? 'block' : 'none'};">
	<div class="removeForm-heading w-[100%] h-[66px] flex flex-row justify-between items-center text-[18px] font-[500] text-black">
		<div class="text">Delete Worker</div>
		<!-- svelte-ignore a11y-click-events-have-key-events  -->
		<div class="cursor-pointer" on:click={deleteToggle}>
			<img src={close_icon} alt="" width="24px" height="24px" />
		</div>
	</div>
	<hr />
	<div class="remove-content flex flex-col gap-[10px]">
		<div>Are you sure you want to delete these Records?</div>
		<div class="text-[12px] text-[#8a6d3b]">This action cannot be undone.</div>
	</div>
	<form class="flex flex-col mt-[20px] mb-[95px]" on:submit|preventDefault={() => deleteRequest($workerRemove_id)}>
		<div class="removeForm-bot flex flex-row justify-end gap-[12px] items-center absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px]">
			<input type="hidden" name="idNo" value={$workerRemove_id} />
			<!-- svelte-ignore a11y-click-events-have-key-events  -->
			<div class="remove_btn1 flex justify-center items-center bg-white w-[100px] h-[33px] text-[14px] cursor-pointer rounded-[4px]" on:click={deleteToggle}>Cancel</div>
			<button class="remove_btn2 bg-[#d9534f] text-white w-[100px] h-[33px] text-[14px] cursor-pointer rounded-[4px]" type="submit">Delete</button>
		</div>
	</form>
</div>

<style>
	input {
		border: 1px solid gray;
	}
	.remove-content {
		margin: 20px 30px;
	}
	.removeForm-heading {
		border-radius: 4px 4px 0 0;
		padding: 0 30px;
	}
	.removeForm-bot {
		border-radius: 0 0 4px 4px;
		padding: 0 30px;
	}
	.remove_btn1 {
		border: 1px solid transparent;
		border-color: #adadad;
	}
	.remove_btn2 {
		border-color: #d43f3a;
		border: 1px solid transparent;
	}
</style>
