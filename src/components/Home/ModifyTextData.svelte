<script lang="ts">
    export let text:any, value:any, dataF:any;
</script>

<label class="mg" for={value}>{text}</label>
<input class="ml-[30px] mr-[30px] mb-[15px] h-[34px]" type="text" bind:value={dataF} name={value} id={value} required />

<style>
    input {
		border: 1px solid gray;
	}
    .mg {
		margin: 0 30px;
	}
</style>