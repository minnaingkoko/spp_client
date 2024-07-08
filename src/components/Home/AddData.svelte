<script lang="ts" context="module">
	interface Work {
		name: string;
		passportNo: string;
		passportType: string;
		gender: string;
		dob: null;
		ppIssueDate: null;
		ppExpireDate: null;
		pob: string;
		authority: string;
		fatherName: string;
		motherName: string;
		address: string;
		nrcNo: string;
		phNo: string;
		agent: string;
		companyName: string;
		airPlaneNo: string;
		departureDate: null;
	}

	export let workerDataType: Work = {
		name: '',
		passportNo: '',
		passportType: '',
		gender: '',
		dob: null,
		ppIssueDate: null,
		ppExpireDate: null,
		pob: '',
		authority: '',
		fatherName: '',
		motherName: '',
		address: '',
		nrcNo: '',
		phNo: '',
		agent: '',
		companyName: '',
		airPlaneNo: '',
		departureDate: null
	};
</script>
