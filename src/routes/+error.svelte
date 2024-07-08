<script>
	import astronaut from '$lib/assets/astronaut.svg';
</script>

<main class="prose dark:prose-invert min-w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#00B0FF] via-[#6C63FF] to-[#F50057] text-center">
	<h1 class="text-7xl font-extrabold text-white mt-12">Oops! Page Not Found</h1>

	<div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-[#536DFE] to-[#536dfeef] rounded-full" />

	<p class="text-2xl text-white mb-8">It looks like you've hit a dead end. But don't worry, you can find your way back home!</p>

	<img class="mx-auto w-48 h-48 mb-8" src={astronaut} alt="Lost astronaut" />

	<a class="btn bg-[#536DFE] hover:bg-[#536dfeef] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg" href="/">Take Me Home</a>
</main>
