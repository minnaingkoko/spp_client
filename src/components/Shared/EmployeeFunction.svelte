<script lang="ts" context='module'>
    import { employeeView, employeeAdd, employeeSearch, HPage1, HPage2, HPage3, HPage4, fullImg, fullImgUrl, employeeList_id, employeeModify, employeeModifyData, employeeList, employeeRemove_id, employeeRemove, fullImgName, fullImgType } from '../../stores/MainStores';

	let Page1:any, Page2:any, Page3:any, Page4:any;

	HPage1.subscribe((value) => {
		Page1 = value;
	});
	HPage2.subscribe((value) => {
		Page2 = value;
	});
	HPage3.subscribe((value) => {
		Page3 = value;
	});
	HPage4.subscribe((value) => {
		Page4 = value;
	});

    const resetPage = () => {
		HPage1.update(() => true);
		HPage2.update(() => false);
		HPage3.update(() => false);
		HPage4.update(() => false);
	};

    export const searchToggle = () => {
		resetPage();
		employeeView.update((currentValue: any) => !currentValue);
		employeeSearch.update((currentValue: any) => !currentValue);
	};

	export const addToggle: () => void = () => {
		resetPage();
		employeeView.update((currentValue: any) => !currentValue);
		employeeAdd.update((currentValue: any) => !currentValue);
	};

    export const toggleImg = () => {
		fullImg.update(() => false);
		fullImgUrl.update(() => '')
	}

	export const listToggle = (value: any) => {
		resetPage();
		employeeList_id.update(() => value);
		employeeView.update((currentValue) => !currentValue);
		employeeList.update((currentValue) => !currentValue);
	};

	const modifyPost = async (value: any) => {
		// const response = await fetch('https://shan-pyae-phyo.onrender.com/api/employeeModify', {
		const response = await fetch('http://localhost:3000/api/employeeModify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ idNo: value })
		});
		const data = await response.json();

		// Update the store with the fetched data
		employeeModifyData.set(data);
	};

	export const modifyToggle = (value: any) => {
		resetPage();
		modifyPost(value);
		employeeList_id.update(() => value);
		employeeView.update((currentValue) => !currentValue);
		employeeModify.update((currentValue) => !currentValue);
	};

	export const deleteToggle = (value: any) => {
		employeeRemove_id.update(() => value);
		employeeView.update((currentValue) => !currentValue);
		employeeRemove.update((currentValue) => !currentValue);
	};

	export const fullImage = (url: any, name: any, typ:any) => {
		fullImg.update((currentValue) => !currentValue);
		fullImgUrl.update(() => url)
		fullImgName.update(() => name)
		fullImgType.update(() => typ)
	}
	
	export const Next = () => {
		if (Page1 === true && Page2 === false && Page3 === false && Page4 === false) {
			HPage1.update(() => false);
			HPage2.update(() => true);
		} else if (Page1 === false && Page2 === true && Page3 === false && Page4 == false) {
			HPage2.update(() => false);
			HPage3.update(() => true);
		} else if (Page1 === false && Page2 === false && Page3 === true && Page4 == false) {
			HPage3.update(() => false);
			HPage4.update(() => true);
		}
	};

	export const Previous = () => {
		if (Page4 === true && Page1 === false && Page2 === false && Page3 === false) {
			HPage4.update(() => false);
			HPage3.update(() => true);
		} else if (Page3 === true && Page1 === false && Page2 === false && Page4 === false) {
			HPage3.update(() => false);
			HPage2.update(() => true);
		} else if (Page2 === true && Page1 === false && Page3 === false && Page4 === false) {
			HPage2.update(() => false);
			HPage1.update(() => true);
		}
	};
</script>