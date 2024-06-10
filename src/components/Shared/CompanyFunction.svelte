<script lang="ts" context="module">
	import { companyView, companyAdd, companySearch, CPage1, CPage2, CPage3, assign, fullImg, fullImgUrl, companyModifyData, companyModify, companyRemove_id, companyRemove, employeeData, employeeView, employeeList, employeeList_id, assignData } from '../../stores/MainStores';

	let Page1:any, Page2:any, Page3:any, Page4:any;

	CPage1.subscribe((value) => {
		Page1 = value;
	});
	CPage2.subscribe((value) => {
		Page2 = value;
	});
	CPage3.subscribe((value) => {
		Page3 = value;
	});

	let assignValue:any;
	assignData.subscribe((value) => {
		assignValue = value;
	});

	const resetPage = () => {
		CPage1.update(() => true);
		CPage2.update(() => false);
		CPage3.update(() => false);
	};

    export const toggleImg = () => {
		fullImg.update(() => false);
		fullImgUrl.update(() => '');
	};

	export const assignEmployee = async () => {
		resetPage();
		assign.update((assign) => !assign);
		companyView.update((currentValue) => !currentValue);
		companyAdd.update((currentValue) => !currentValue);
	};

	export const searchToggle = () => {
		resetPage();
		companyView.update((currentValue) => !currentValue);
		companySearch.update((currentValue) => !currentValue);
	};

	export const addToggle = () => {
		resetPage();
		companyView.update((currentValue) => !currentValue);
		companyAdd.update((currentValue) => !currentValue);
	};

	const modifyPost = async (value: any) => {
		// const response = await fetch('https://shan-pyae-phyo.onrender.com/api/companyModify', {
		const response = await fetch('https://localhost:3000/api/companyModify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ idNo: value })
		});
		const data = await response.json();

		// Update the store with the fetched data
		companyModifyData.set(data);
	};

	export const modifyToggle = (value: any) => {
		resetPage();
		modifyPost(value);
		companyView.update((currentValue) => !currentValue);
		companyModify.update((currentValue) => !currentValue);
	};

	export const deleteToggle = (value: any) => {
		companyRemove_id.update(() => value);
		companyView.update((currentValue) => !currentValue);
		companyRemove.update((currentValue) => !currentValue);
	};

	export const listToggle = (value: any) => {
		employeeList_id.update(() => value);
		employeeView.update((currentValue) => !currentValue);
		employeeList.update((currentValue) => !currentValue);
	};

	export const assignToggle = (value: any) => {
		if (assignValue.includes(value)) {
			return;
  		}
		assignData.update(() => [...assignValue, value]);
	};

	export const Next = () => {
		if (Page1 === true && Page2 === false && Page3 === false) {
			CPage1.update(() => false);
			CPage2.update(() => true);
		} else if (Page1 === false && Page2 === true && Page3 === false) {
			CPage2.update(() => false);
			CPage3.update(() => true);
		}
	};

	export const Previous = () => {
		if (Page1 === false && Page2 === true) {
			CPage1.update(() => true);
			CPage2.update(() => false);
		}
	};
</script>