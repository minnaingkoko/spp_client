<script lang="ts" context='module'>
    interface Scan {
		companyName: string;
		companyAddress: string;
		postCode: string;
		demandMale: string;
		demandFemale: string;
		employees: any[];
		companyPhNo: string;
		demandLetterScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		KSMScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		companyProfileScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		callingCopyScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		callingOrgScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
		notaryScan: {
			filename: string;
			contentType: string;
			data: string | ArrayBuffer | null;
		};
	}

	export let companyData: Scan = {
		companyName: '',
		companyAddress: '',
		postCode: '',
		demandMale: '',
		demandFemale: '',
		employees: [],
		companyPhNo: '',
		demandLetterScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		KSMScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		companyProfileScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		callingCopyScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		callingOrgScan: {
			filename: '',
			contentType: '',
			data: ''
		},
		notaryScan: {
			filename: '',
			contentType: '',
			data: ''
		}
	};
</script>