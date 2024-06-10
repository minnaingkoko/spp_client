<script lang="ts">
	import visibility_icon from '$lib/images/visibility.svg';
	import edit_icon from '$lib/images/edit.svg';
	import delete_icon from '$lib/images/delete.svg';
	import { employeeData } from '../../stores/MainStores';
	import { listToggle, modifyToggle, deleteToggle } from '../Shared/EmployeeFunction.svelte';
</script>

<div class="employees_data">
	<div class="e_heading">
		<div class="col1">Select</div>
		<div class="col2">Name</div>
		<div class="col3">Passport No</div>
		<div class="col4">Passport Type</div>
		<div class="col5">Father Name</div>
		<div class="col6">Mother Name</div>
		<!-- <div class="col4">NRC No</div> -->
		<!-- <div class="col5">Gender</div>
		<div class="col6">Birthday</div>
		<div class="col7">Age</div>
		<div class="col8">Address</div>
		<div class="col9">Phone Number</div> -->
		<!-- <div class="col10">Father Name</div> -->
		<!-- <div class="col11">Religion</div> -->
		<!-- <div class="col12">Education</div> -->
		<!-- <div class="col13">Agent</div> -->
		<div class="col14">Actions</div>
	</div>
	<div class="hr" />
	<ul>
		{#each $employeeData as data, index}
			<div class={index % 2 === 0 ? 'row-alt' : 'row'}>
				<div class="col1">
					<input class="cb" type="checkbox" />
				</div>
				<div class="col2">{data.name}</div>
				<div class="col3">{data.passportNo}</div>
				<div class="col4">{data.passportType}</div>
				<div class="col5">{data.fatherName}</div>
				<div class="col6">{data.motherName}</div>
				<!-- <div class="col4">{data.nrcNo}</div>
				<div class="col5">{data.gender}</div>
				<div class="col6">{data.dobString}</div>
				<div class="col7">{data.age}</div>
				<div class="col8">{data.address}</div>
				<div class="col9">{data.phNo}</div> -->
				<!-- <div class="col10">{data.fatherName}</div> -->
				<!-- <div class="col11">{data.religion}</div> -->
				<!-- <div class="col12">{data.education}</div> -->
				<!-- <div class="col13">{data.agent}</div>-->
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
	.col1 {
		width: 100px;
		white-space: nowrap; 
  		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col2 {
		width: 200px;
		white-space: nowrap; 
  		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col3 {
		width: 120px;
		white-space: nowrap; 
  		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col4 {
		width: 180px;
		white-space: nowrap; 
  		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col5 {
		width: 180px;
		white-space: nowrap; 
  		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col6 {
		width: 180px;
		white-space: nowrap; 
  		overflow: hidden;
		text-overflow: ellipsis;
	}
	.col7 {
		width: 60px;
		white-space: nowrap; 
  		overflow: hidden;
		text-overflow: ellipsis;
	}
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
