<script lang="ts">
    import type { projects } from '$lib/data/projects';

    let { project }: { project: (typeof projects)[number] } = $props();
</script>

<article class="flex flex-col rounded-md border border-[#dde2e8] p-[25px] [.dark_&]:border-[#303947]">
    <h3 class="text-[19px] leading-[1.35] font-semibold tracking-[-0.015em]">{project.title}</h3>
    <p class="mt-2.5 text-[11px] leading-[1.7] font-medium text-[#244c77] [.dark_&]:text-[#a5c7ec]">{project.tag}</p>
    <p class="mt-[17px] flex-1 text-sm leading-[1.8] text-[#566171] [.dark_&]:text-[#abb5c3]">{project.text}</p>
    <div class="mt-[22px] flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] font-[550]">
        {#each project.links as link}
            <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label}: ${project.title}`}
                class="py-1.5 text-[#244c77] underline-offset-4 hover:underline [.dark_&]:text-[#a5c7ec]"
            >{link.label} <span aria-hidden="true">↗</span></a>
        {:else}
            <span class="py-1.5 font-normal text-[#566171] [.dark_&]:text-[#abb5c3]">{project.note}</span>
        {/each}
    </div>
</article>
