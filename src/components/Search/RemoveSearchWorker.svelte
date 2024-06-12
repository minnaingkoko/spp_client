<script lang="ts">
	import close_icon from '$lib/images/close.svg';
	import { workerSearchData, employeeView, employeeRemove, employeeRemove_id } from '../../stores/MainStores';
	import { goto } from '$app/navigation';

	const empty:any = [];

	const deleteToggle = (value: any) => {
		employeeRemove_id.update(() => value);
		employeeView.update((currentValue) => !currentValue);
		employeeRemove.update((currentValue) => !currentValue);
	};

	const deleteRequest = async (value: any) => {
		// const response = await fetch('https://shan-pyae-phyo.onrender.com/api/employeeDelete', {
		const response = await fetch('http://localhost:3000/api/employeeDelete', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ idNo: value })
		});
		if (response.status === 200) {
			employeeView.update((currentValue) => !currentValue);
			employeeRemove.update((currentValue) => !currentValue);
			goto('/');
		}
	};
</script>

<div class="absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px] h-[240px]" style="display: {$employeeRemove ? 'block' : 'none'};">
	<div class="removeForm-heading w-[100%] h-[66px] flex flex-row justify-between items-center text-[18px] font-[500] text-black">
		<div class="text">Delete Employee</div>
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
	<form class="flex flex-col mt-[20px] mb-[95px]" on:submit|preventDefault={() => deleteRequest($employeeRemove_id)}>
		<div class="removeForm-bot flex flex-row justify-end gap-[12px] items-center absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px]">
			<input type="hidden" name="idNo" value={$employeeRemove_id} />
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
