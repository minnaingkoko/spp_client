<script lang='ts'>
    import { fullImg, fullImgUrl, fullImgName } from '../../stores/MainStores';
    import download_icon from '$lib/images/download.svg';
	import visibility_icon from '$lib/images/visibility.svg';
    export let text:String, value:any;

    const fullImage = (url: any, name: any) => {
		fullImg.update((currentValue) => !currentValue);
		fullImgUrl.update(() => url)
		fullImgName.update(() => name)
	}
</script>

<div class="flex pl-[30px] pr-[30px] w-[100%] justify-between text-[14px] flex-row">
    <label class="w-[130px]" for="text">{text}</label>
    <div class="flex flex-row gap-[16px] w-[160px]">
        <div class="flex flex-row justify-between items-center cursor-pointer">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img src={visibility_icon} alt="" width="22px" height="22px" on:click={() => fullImage(value.s3URL,value.filename)} >
        </div>
        <div class="flex flex-row justify-between items-center cursor-pointer">
            <a href={value.s3URL} download={value.filename}>
                <img src={download_icon} alt="" width="24px" height="24px" />
            </a>
        </div>
    </div>
</div>