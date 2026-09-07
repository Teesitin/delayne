<script lang="ts">
    import { lightboxMedia } from './lightboxStore';

    let visibleMedia: Media | null = null;
    let loading = true;
    let failed = false;
    let closing = false;

    function closePreview() {
        lightboxMedia.set(null);
    }

    function manageDialog(dialog: HTMLDialogElement, media: Media | null) {
        let returnFocus: HTMLElement | null = null;
        let alreadyLocked = false;
        let locked = false;
        let closeTimer: ReturnType<typeof setTimeout> | undefined;

        function restorePage() {
            if (!locked) return;
            if (!alreadyLocked) document.body.classList.remove('overflow-hidden');
            locked = false;
            if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
        }

        function update(nextMedia: Media | null) {
            clearTimeout(closeTimer);
            if (nextMedia) {
                if (visibleMedia?.url !== nextMedia.url) {
                    loading = true;
                    failed = false;
                }
                visibleMedia = nextMedia;
                closing = false;
                if (!dialog.open) {
                    returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                    alreadyLocked = document.body.classList.contains('overflow-hidden');
                    document.body.classList.add('overflow-hidden');
                    locked = true;
                    dialog.showModal();
                }
            } else if (dialog.open) {
                closing = true;
                const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 140;
                closeTimer = setTimeout(() => {
                    dialog.close();
                    visibleMedia = null;
                    restorePage();
                }, duration);
            }
        }

        update(media);
        return {
            update,
            destroy() {
                clearTimeout(closeTimer);
                if (dialog.open) dialog.close();
                restorePage();
            }
        };
    }
</script>

<dialog
    use:manageDialog={$lightboxMedia}
    class="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent px-6 pt-18 pb-6 text-white opacity-100 transition-opacity duration-140 ease-out open:grid open:place-items-center starting:open:opacity-0 data-[closing=true]:opacity-0 backdrop:bg-[#090c11]/94 backdrop:opacity-100 backdrop:transition-opacity backdrop:duration-140 starting:open:backdrop:opacity-0 data-[closing=true]:backdrop:opacity-0 motion-reduce:transition-none motion-reduce:backdrop:transition-none max-[640px]:px-3 max-[640px]:pb-4"
    data-closing={closing}
    aria-label="Image preview"
    aria-describedby={visibleMedia ? 'image-preview-caption' : undefined}
    on:cancel={(event) => {
        event.preventDefault();
        closePreview();
    }}
    on:click={(event) => {
        if (event.target === event.currentTarget) closePreview();
    }}
>
    <button class="absolute top-4 right-4 grid size-11 place-items-center rounded-full border border-white/25 bg-white/8 text-white transition-colors duration-140 hover:bg-white/18 focus-visible:outline-white motion-reduce:transition-none" on:click={closePreview} aria-label="Close image preview">
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
            <path d="m6 6 12 12M18 6 6 18" />
        </svg>
    </button>

    {#if visibleMedia}
        <figure class="m-0 w-fit max-w-full">
            <div class="relative grid min-h-40 min-w-[min(18rem,80vw)] place-items-center" aria-busy={loading}>
                {#if loading}
                    <p class="absolute text-center text-[15px] text-gray-300" role="status">Loading image…</p>
                {/if}
                {#if failed}
                    <div class="absolute text-center text-[15px] text-gray-300" role="status">
                        <p>This image couldn’t be loaded.</p>
                        <a class="mt-3 inline-block underline underline-offset-[0.2em] focus-visible:outline-white" href={visibleMedia.url} target="_blank" rel="noreferrer">Open the original image</a>
                    </div>
                {:else}
                    {#key visibleMedia.url}
                        <img
                            src={visibleMedia.url}
                            alt={visibleMedia.alt}
                            class="block h-auto max-h-[calc(100dvh-10rem)] w-auto max-w-full object-contain opacity-0 transition-opacity duration-160 ease-out data-[loaded=true]:opacity-100 motion-reduce:transition-none max-[640px]:max-h-[calc(100dvh-11rem)]"
                            data-loaded={!loading}
                            decoding="async"
                            on:load={() => { loading = false; }}
                            on:error={() => { loading = false; failed = true; }}
                        />
                    {/key}
                {/if}
            </div>
            <figcaption class="mx-auto mt-4 max-w-[70ch] text-center text-sm leading-normal text-gray-300" id="image-preview-caption">{visibleMedia.alt}</figcaption>
        </figure>
    {/if}
</dialog>
