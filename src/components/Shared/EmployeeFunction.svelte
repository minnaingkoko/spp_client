<script lang="ts" context="module">
	import { HPage1, HPage2, HPage3, HPage4, fullImg, fullImgUrl, fullImgName, fullImgType } from '../../stores/MainStores';

	import { PUBLIC_LOCAL_API_KEY, PUBLIC_SERVER_API_KEY } from '$env/static/public'

	import { workerView, workerAdd, workerSearch, workerList_id, workerModify, workerModifyData, workerList, workerRemove_id, workerRemove } from '../../stores/WorkerStore';

	let Page1: any, Page2: any, Page3: any, Page4: any;

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
		workerView.update((currentValue: any) => !currentValue);
		workerSearch.update((currentValue: any) => !currentValue);
	};

	export const addToggle: () => void = () => {
		resetPage();
		workerView.update((currentValue: any) => !currentValue);
		workerAdd.update((currentValue: any) => !currentValue);
	};

	export const toggleImg = () => {
		fullImg.update(() => false);
		fullImgUrl.update(() => '');
	};

	export const listToggle = (value: any) => {
		resetPage();
		workerList_id.update(() => value);
		workerView.update((currentValue) => !currentValue);
		workerList.update((currentValue) => !currentValue);
	};

	const modifyPost = async (value: any) => {

		if (process.env.NODE_ENV === 'production') {
			// For production
			console.log(PUBLIC_SERVER_API_KEY)
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

	export const modifyToggle = (value: any) => {
		// console.log(value);
		resetPage();
		modifyPost(value);
		workerList_id.update(() => value);
		workerView.update((currentValue) => !currentValue);
		workerModify.update((currentValue) => !currentValue);
	};

	export const deleteToggle = (value: any) => {
		workerRemove_id.update(() => value);
		workerView.update((currentValue) => !currentValue);
		workerRemove.update((currentValue) => !currentValue);
	};

	export const fullImage = (url: any, name: any, typ: any) => {
		fullImg.update((currentValue) => !currentValue);
		fullImgUrl.update(() => url);
		fullImgName.update(() => name);
		fullImgType.update(() => typ);
	};

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
