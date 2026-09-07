<script lang="ts">
    import { lightboxMedia } from '$lib/components/lightbox/lightboxStore';
    import type { PortfolioImage } from '$lib/data/gallery';

    let { media, personal = false }: { media: PortfolioImage; personal?: boolean } = $props();
</script>

<button
    type="button"
    class="overflow-hidden rounded-[5px] border border-[#dde2e8] bg-white text-left transition-colors duration-150 hover:border-[#566171] motion-reduce:transition-none [.dark_&]:border-[#303947] [.dark_&]:bg-[#11151b] [.dark_&]:hover:border-[#abb5c3]"
    onclick={() => { $lightboxMedia = media; }}
    aria-label={`View ${media.alt}`}
>
    <div class={['flex items-center justify-center bg-[#e9edf2] [.dark_&]:bg-[#242b35]', personal ? 'aspect-4/3' : 'aspect-16/10']}>
        <img
            src={media.url}
            width={media.width}
            height={media.height}
            alt={media.alt}
            loading="lazy"
            decoding="async"
            class={['h-full w-full', personal ? 'object-cover' : 'object-contain']}
        />
    </div>
    <span class="flex items-start justify-between gap-3.5 px-[15px] py-3.5 text-xs leading-[1.6]">
        {media.alt}<span class="shrink-0 text-[#566171] [.dark_&]:text-[#abb5c3]" aria-hidden="true">↗</span>
    </span>
</button>
