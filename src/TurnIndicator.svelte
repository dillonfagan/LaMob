<script>
    export let mobber;
    export let nextMobber;
    export let color;
    export let hidden;
</script>

<div class="w-full flex overflow-hidden py-2 px-4 bg-{color}-600 border-2 border-{color}-900 rounded-full" class:hidden>
    <div class="text-xl text-white">{mobber}</div>
    <button on:click class="text-{color}-900 hover:text-white mx-2 rounded-full">
        <svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
    </button>
    <div class="text-xl text-white">{nextMobber}</div>
</div>

<style>
    .hidden {
        @apply hidden;
    }
</style>