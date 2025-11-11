<script lang="ts">
    import { fade } from "svelte/transition";
    import { lightboxMedia } from "./lightboxStore";
</script>

{#if $lightboxMedia}
    <div class="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center z-50" transition:fade>
        <img src="{$lightboxMedia.url}?width=1920&quality=50" alt="{$lightboxMedia.alt}" class="max-h-[92vh] max-w-[95vw] rounded">
    
        <button class="absolute top-2 right-2 bg-white rounded-full hover:scale-105 transition cursor-pointer" on:click={() => $lightboxMedia = null} aria-label="close">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-gray-800"viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </button>

        <button class="fixed inset-0 cursor-alias -z-10" on:click={() => $lightboxMedia = null} aria-label="close">
        </button>

        <div class="absolute bottom-2 left-2 backdrop-blur-3xl text-white font-bold px-2 py-1 rounded-full">
            {$lightboxMedia.alt}
        </div>
    </div>
{/if}