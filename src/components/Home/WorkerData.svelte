<script lang="ts">
	import visibility_icon from '$lib/assets/visibility.svg';
	import edit_icon from '$lib/assets/edit.svg';
	import delete_icon from '$lib/assets/delete.svg';
	import { workerData } from '../../stores/WorkerStore';
	import { listToggle, modifyToggle, deleteToggle } from '../Shared/EmployeeFunction.svelte';
</script>

<div class="employees_data">
	<div class="e_heading">
		<div class="col1">Select</div>
		<div class="col2">No</div>
		<div class="col3">Name</div>
		<div class="col4">Passport No</div>
		<div class="col5">Passport Type</div>
		<div class="col6">Gender</div>
		<div class="col7">Date of Birth</div>
		<div class="col14">Actions</div>
	</div>
	<div class="hr" />
	<ul>
		{#each $workerData as data, index}
			<div class={index % 2 === 0 ? 'row-alt' : 'row'}>
				<div class="col1">
					<input class="cb" type="checkbox" />
				</div>
				<div class="col2">{index + 1}</div>
				<div class="col3">{data.name}</div>
				<div class="col4">{data.passportNo}</div>
				<div class="col5">{data.passportType}</div>
				<div class="col6">{data.gender}</div>
				<div class="col7">{data.dobString}</div>
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
			<div class="hr" />
		{/each}
	</ul>
</div>

<style>
	.employees_data {
		color: black;
	}
	.hr {
		width: 100%;
		height: 2px;
		background-color: #e9e9e9;
	}
	.cb {
		margin: 0;
	}
	.e_heading,
	.row-alt,
	.row {
		font-size: 14px;
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	.e_heading {
		height: 50px;
		font-weight: bold;
	}
	.row-alt {
		height: 52px;
		background-color: white;
	}
	.row {
		height: 52px;
		background-color: #f5f5f5;
	}
	.e_heading > div,
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
		width: 180px;
	}
	.col6 {
		width: 180px;
	}
	.col7 {
		width: 180px;
	}
	/* .col7 {
		width: 60px;
		white-space: nowrap; 
  		overflow: hidden;
		text-overflow: ellipsis;
	} */
	.col8 {
		width: 200px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col9 {
		width: 140px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col10 {
		width: 220px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col11 {
		width: 100px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col12 {
		width: 130px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col13 {
		width: 100px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
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
	.delete,
	.close {
		cursor: pointer;
		transition: 0.3s;
	}
	.visibility:hover,
	.edit:hover,
	.delete:hover {
		opacity: 0.6;
	}
</style>
