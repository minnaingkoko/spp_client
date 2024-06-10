<script lang="ts">
	import visibility_icon from '$lib/images/visibility.svg';
	import done_icon from '$lib/images/done.svg';
	import { employeeData } from '../../stores/MainStores';
	import { listToggle, assignToggle } from '../Shared/CompanyFunction.svelte';
</script>

<div class="employees_data">
	<div class="e_heading">
		<div class="col1">Select</div>
		<div class="col2">Name</div>
		<div class="col3">Passport No</div>
		<div class="col4">NRC No</div>
		<div class="col5">Gender</div>
		<div class="col6">Birthday</div>
		<div class="col7">Age</div>
		<div class="col8">Address</div>
		<div class="col9">Phone Number</div>
		<!-- <div class="col10">Father Name</div> -->
		<!-- <div class="col11">Religion</div> -->
		<div class="col12">Education</div>
		<!-- <div class="col13">Agent</div> -->
		<div class="col14">Actions</div>
	</div>
	<div class="w-[100%] h-[2px] bg-[#e9e9e9]" />
	<ul>
		{#each $employeeData as data, index}
			<div class={index % 2 === 0 ? 'row-alt' : 'row'}>
				<div class="col1">
					<input class="cb" type="checkbox" />
				</div>
				<div class="col2">{data.name}</div>
				<div class="col3">{data.passport}</div>
				<div class="col4">{data.nrcNo}</div>
				<div class="col5">{data.gender}</div>
				<div class="col6">{data.dobString}</div>
				<div class="col7">{data.age}</div>
				<div class="col8">{data.address}</div>
				<div class="col9">{data.phNo}</div>
				<!-- <div class="col10">{data.fatherName}</div> -->
				<!-- <div class="col11">{data.religion}</div> -->
				<div class="col12">{data.education}</div>
				<!-- <div class="col13">{data.agent}</div>-->
				<div class="col14">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => listToggle(data._id)}>
						<img class="visibility" src={visibility_icon} alt="" width="22px" height="22px" />
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => assignToggle(data._id)}>
						<img class="visibility" src={done_icon} alt="" width="22px" height="22px" />
					</div>
				</div>
			</div>
			<div class="w-[100%] h-[2px] bg-[#e9e9e9]" />
		{/each}
	</ul>
</div>

<style>
	.employees_data {
		color: black;
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
		min-width: 100px;
	}
	.col2 {
		min-width: 200px;
	}
	.col3 {
		min-width: 120px;
	}
	.col4 {
		min-width: 180px;
	}
	.col5 {
		min-width: 80px;
	}
	.col6 {
		min-width: 120px;
	}
	.col7 {
		min-width: 60px;
	}
	.col8 {
		min-width: 200px;
	}
	.col9 {
		min-width: 140px;
	}
	.col10 {
		min-width: 220px;
	}
	.col11 {
		min-width: 100px;
	}
	.col12 {
		min-width: 130px;
	}
	.col13 {
		min-width: 100px;
	}
	.col14 {
		border-right: 0 !important;
		display: flex;
		flex-direction: row;
		gap: 8px;
		min-width: 120px;
	}
	.visibility {
		cursor: pointer;
		transition: 0.3s;
	}
	.visibility:hover{
		opacity: 0.6;
	}
</style>
