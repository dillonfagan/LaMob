<script>
    export let value;
    export let placeholder;
    export let color;
    export let hidden;
</script>

<div class="flex overflow-hidden mb-4 py-2 px-4 bg-{color}-500 border-2 border-{color}-800 rounded-full" class:hidden>
    <input type="text" placeholder={placeholder} bind:value class="text-xl text-white placeholder-{color}-800 bg-transparent outline-none" />
    <button on:click class="text-{color}-800 hover:text-white rounded-full">
        <svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
            <slot name="icon" />
        </svg>
    </button>
</div>

<style>
    .hidden {
        @apply hidden;
    }
</style>