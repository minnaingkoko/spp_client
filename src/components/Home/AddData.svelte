<script lang="ts" context='module'>
    interface Scan {
		name: string;
		fatherName: string;
		motherName: string;
		address: string;
		phNo: string;
		nrcNo: string;
		religion: string;
		agent: string;
		gender: string;
		passport: string;
		dob: null;
		weight: null;
		height: null;
		marital: string;
		education: string;
		experience: string;
		workedCountry: string;
		spokenLanguage: string;
		deposit: string;
		applyDate: string;
		passportExpireDate: string;
		passportType: string;
		medicalOnlineExpire: string;
		smartCardNo: string;
		airPlaneNo: string;
		departureDate: string;
		passportScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		nrcScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		vaccineNotaryScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		medicalOnlineScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		trainingScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		airTicketScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		visaScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		smartCardScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		familyDataScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
	}

	export let employeeData: Scan = {
		name: '',
		fatherName: '',
		motherName: '',
		address: '',
		phNo: '',
		nrcNo: '',
		religion: '',
		agent: '',
		gender: '',
		passport: '',
		dob: null,
		weight: null,
		height: null,
		marital: '',
		education: '',
		experience: '',
		workedCountry: '',
		spokenLanguage: '',
		deposit: '',
		applyDate: '',
		passportExpireDate: '',
		passportType: '',
		medicalOnlineExpire: '',
		smartCardNo: '',
		airPlaneNo: '',
		departureDate: '',
		passportScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		nrcScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		vaccineNotaryScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		medicalOnlineScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		trainingScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		airTicketScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		visaScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		smartCardScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		familyDataScan: {
			filename: '',
			contentType: '',
			data: ''
		}
	};
</script>