<script lang="ts">
	import visibility_icon from '$lib/assets/visibility.svg';
	import edit_icon from '$lib/assets/edit.svg';
	import delete_icon from '$lib/assets/delete.svg';

	import { PUBLIC_LOCAL_API_KEY, PUBLIC_SERVER_API_KEY } from '$env/static/public'

	import { workerSearchData, workerView, workerList_id, workerModify, workerModifyData } from '../../stores/WorkerStore';
	import { listToggle, deleteToggle } from '../Shared/EmployeeFunction.svelte';

	const modifyPost = async (value: any) => {

		if (process.env.NODE_ENV === 'production') {
			// For production
			const response = await fetch(`${PUBLIC_SERVER_API_KEY}/api/employeeModify`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ idNo: value })
			});
			const data = await response.json();
			console.log(data);

			// Update the store with the fetched data
			workerModifyData.set(data);
		} else {
			// For development
			const response = await fetch(`${PUBLIC_LOCAL_API_KEY}/api/employeeModify`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ idNo: value })
			});
			const data = await response.json();
			console.log(data);

			// Update the store with the fetched data
			workerModifyData.set(data);
		}
	};

	const modifyToggle = (value: any) => {
		// console.log(value);
		modifyPost(value);
		// alert("Testing");
		workerList_id.update(() => value);
		workerView.update((currentValue) => !currentValue);
		workerModify.update((currentValue) => !currentValue);
	};
</script>

<div class="text-black">
	<div class="h-[50px] text-[14px] flex flex-row w-[100%] font-bold ">
		<div class="col1 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Select</div>
		<div class="col2 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">No</div>
		<div class="col3 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Name</div>
		<div class="col4 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Passport No</div>
		<div class="col5 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Passport Type</div>
		<div class="col6 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Gender</div>
		<div class="col7 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Date of Birth</div>
		<div class="col7 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Age</div>

		<div class="col7 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Date of Issue</div>
		<div class="col7 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Date of Expire</div>
		<div class="col7 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Place of Birth</div>
		<div class="col7 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Authority</div>

		<div class="col14 flex flex-row justify-center items-center py-0 px-[15px] border-[#e9e9e9] border-solid border-r">Actions</div>
	</div>
	<div class="w-[100%] h-[2px] bg-[#e9e9e9]" />
	<ul>
		{#each $workerSearchData as data, index}
			<div class={index % 2 === 0 ? 'row-alt' : 'row'}>
				<div class="col1">
					<input class="m-0" type="checkbox" />
				</div>
				<div class="col2">{index + 1}</div>
				<div class="col3">{data.name}</div>
				<div class="col4">{data.passportNo}</div>
				<div class="col5">{data.passportType}</div>
				<div class="col6">{data.gender}</div>
				<div class="col7">{data.dobString}</div>
				<div class="col7">{data.age}</div>
				<div class="col7">{data.ppIssueDateString}</div>
				<div class="col7">{data.ppExpireDateString}</div>
				<div class="col7">{data.pob}</div>
				<div class="col7">{data.authority}</div>
				<div class="col14">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => listToggle(data._id)}>
						<img class="visibility" src={visibility_icon} alt="" width="22px" height="22px" />
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => modifyToggle(data._id)}>
						<img class="edit" src={edit_icon} alt="" width="22px" height="22px" />
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => deleteToggle(data._id)}>
						<img class="delete" src={delete_icon} alt="" width="22px" height="22px" />
					</div>
				</div>
			</div>
			<div class="w-[100%] h-[2px] bg-[#e9e9e9]" />
		{/each}
	</ul>
</div>

<style>
	.row-alt,
	.row {
		font-size: 14px;
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	.row-alt {
		height: 52px;
		background-color: white;
	}
	.row {
		height: 52px;
		background-color: #f5f5f5;
	}
	.row > div,
	.row-alt > div {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 15px;
		border-right: 1px solid #e9e9e9;
	}
	.col1,
	.col2,
	.col3,
	.col4,
	.col5,
	.col6,
	.col7 {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col1 {
		width: 100px;
	}
	.col2 {
		width: 50px;
	}
	.col3 {
		width: 200px;
	}
	.col4 {
		width: 120px;
	}
	.col5 {
		width: 120px;
	}
	.col6 {
		width: 100px;
	}
	.col7 {
		width: 120px;
	}
	.col14 {
		border-right: 0 !important;
		display: flex;
		flex-direction: row;
		gap: 8px;
		width: 120px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.visibility,
	.edit,
	.delete {
		cursor: pointer;
		transition: 0.3s;
	}
	.visibility:hover,
	.edit:hover,
	.delete:hover {
		opacity: 0.6;
	}
</style>
