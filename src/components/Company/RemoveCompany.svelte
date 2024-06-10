<script lang="ts">
	import close_icon from '$lib/images/close.svg';
	import { companyView, companyRemove, companyRemove_id } from '../../stores/MainStores';
	import { goto } from '$app/navigation';

	const deleteToggle = (value: any) => {
		companyRemove_id.update(() => value);
		companyView.update((currentValue) => !currentValue);
		companyRemove.update((currentValue) => !currentValue);
	};

	const deleteRequest = async (value: any) => {
		// const response = await fetch('https://shan-pyae-phyo.onrender.com/api/companyDelete', {
		const response = await fetch('https://localhost:3000/api/companyDelete', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ idNo: value })
		});
		if (response.status === 200) {
			goto('/company');
			location.reload();
		}
	};
</script>

<div class="remove-form" style="display: {$companyRemove ? 'block' : 'none'};">
	<div class="removeForm-heading">
		<div class="text">Delete company</div>
		<!-- svelte-ignore a11y-click-events-have-key-events  -->
		<div class="close" on:click={deleteToggle}>
			<img src={close_icon} alt="" width="24px" height="24px" />
		</div>
	</div>
	<hr />
	<div class="remove-content">
		<div class="warning-text">Are you sure you want to delete these Records?</div>
		<div class="another-text">This action cannot be undone.</div>
	</div>
	<form class="removeForm" on:submit|preventDefault={() => deleteRequest($companyRemove_id)}>
		<div class="removeForm-bot">
			<input type="hidden" name="idNo" value={$companyRemove_id} />
			<!-- svelte-ignore a11y-click-events-have-key-events  -->
			<div class="remove_btn1" on:click={deleteToggle}>Cancel</div>
			<button class="remove_btn2" type="submit">Delete</button>
		</div>
	</form>
</div>

<style>
	.close {
		@apply cursor-pointer;
	}
	input {
		border: 1px solid gray;
	}
	.remove-form {
		@apply absolute top-[30px] w-[400px] bg-white z-[12] rounded-[4px];
		height: calc(100vh - 60px);
	}
	.remove-form {
		height: 240px !important;
	}
	.remove-content {
		@apply flex flex-col gap-[10px];
		margin: 20px 30px;
	}
	.another-text {
		@apply text-[12px] text-[#8a6d3b];
	}
	.removeForm-heading {
		@apply w-[100%] h-[66px] flex flex-row justify-between items-center text-[18px] font-[500] text-black;
		border-radius: 4px 4px 0 0;
		padding: 0 30px;
	}
	.removeForm-bot {
		@apply flex flex-row justify-end gap-[12px] items-center;
		padding: 0 30px;
	}
	.remove_btn1,
	.remove_btn2 {
		@apply w-[100px] h-[33px] text-[14px] cursor-pointer rounded-[4px];
	}
	.remove_btn1 {
		@apply flex justify-center items-center bg-white;
		border: 1px solid transparent;
		border-color: #adadad;
	}
	.remove_btn2 {
		@apply bg-[#d9534f] text-white;
		border-color: #d43f3a;
		border: 1px solid transparent;
	}
	.removeForm-bot {
		@apply absolute bottom-0 bg-[#e5e5e5] w-[100%] h-[75px];
		border-radius: 0 0 4px 4px;
	}
	.removeForm {
		@apply flex flex-col mt-[20px] mb-[95px];
	}
</style>
