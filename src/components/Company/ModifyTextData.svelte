<script lang="ts">
	export let text: any, value: any, dataF: any;
</script>

<label class="mg" for={value}>{text}</label>
<input class="add_input" bind:value={dataF} name={value} id={value} required />

<style>
	.mg {
		margin: 0 30px;
	}
	input {
		border: 1px solid gray;
	}
	.add_input {
		@apply ml-[30px] mr-[30px] mb-[15px] h-[34px];
	}
</style>
