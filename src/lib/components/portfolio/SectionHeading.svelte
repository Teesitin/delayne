<script lang="ts">
    let { id, eyebrow, title, description }: {
        id: string;
        eyebrow: string;
        title: string;
        description: string;
    } = $props();
</script>

<div class="mb-8 max-w-[660px]">
    <p class="mb-3 text-xs font-[650] tracking-widest text-[#244c77] uppercase [.dark_&]:text-[#a5c7ec]">{eyebrow}</p>
    <h2 {id} class="text-[clamp(28px,3vw,36px)] leading-[1.22] font-semibold tracking-[-0.03em]">{title}</h2>
    <p class="mt-[15px] text-[15px] leading-[1.8] text-[#566171] [.dark_&]:text-[#abb5c3]">{description}</p>
</div>
