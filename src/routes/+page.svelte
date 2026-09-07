<script lang="ts">
    import ThemeToggle from '$lib/components/theme/ThemeToggle.svelte';
    import { categories, gallery, portrait, aboutImages } from '$lib/data/gallery';
    import ImageCard from '$lib/components/portfolio/ImageCard.svelte';
    import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
    import SectionHeading from '$lib/components/portfolio/SectionHeading.svelte';
    import { projects } from '$lib/data/projects';

    const tabs = [{ id: 'all', label: 'All work' }, ...categories];
    let activeCategory = $state('all');
    let visibleCount = $state(12);
    const filteredImages = $derived(activeCategory === 'all' ? gallery : gallery.filter((image) => image.category === activeCategory));
    const visibleImages = $derived(filteredImages.slice(0, visibleCount));

    function selectCategory(id: string) {
        if (activeCategory === id) return;
        activeCategory = id;
        visibleCount = 12;
    }

    function navigateTabs(event: KeyboardEvent, index: number) {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        selectCategory(tabs[next].id);
        document.getElementById(`tab-${tabs[next].id}`)?.focus();
    }

    const skills = [
        { title: 'Software development', tools: 'TypeScript, JavaScript, Python, SvelteKit, Node.js, PHP' },
        { title: 'Platforms & workflows', tools: 'Firebase, Google Cloud, Git, API integrations, automation' },
        { title: 'Interactive systems', tools: 'Unreal Engine, Blueprint visual scripting, SteamVR, Oculus VR' },
        { title: 'Hardware & design', tools: 'MSP430, embedded systems, PCB design, Fusion 360, prototyping' }
    ];
</script>

<svelte:head>
    <title>DeLayne Russell | Software Engineer</title>
    <meta name="description" content="DeLayne Russell is a software engineer and UCF Computer Engineering candidate in Orlando. Explore full-stack applications, interactive systems, and embedded engineering projects." />
    <meta property="og:title" content="DeLayne Russell | Software Engineer" />
    <meta property="og:description" content="Full-stack software, interactive systems, and embedded engineering. Based in Orlando, Florida." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://delayne.dev/" />
    <meta property="og:image" content="https://delayne.b-cdn.net/master/about/delayne-russell-professional-headshot.png" />
    <meta property="og:image:alt" content="DeLayne Russell, Software Engineer and Computer Engineering Candidate" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="DeLayne Russell | Software Engineer" />
    <meta name="twitter:description" content="Full-stack software, interactive systems, and embedded engineering." />
    <meta name="twitter:image" content="https://delayne.b-cdn.net/master/about/delayne-russell-professional-headshot.png" />
    <link rel="preconnect" href="https://delayne.b-cdn.net" />
</svelte:head>

<a class="fixed -top-[100px] left-4 z-100 border border-[#dde2e8] bg-white px-[18px] py-3 focus:top-3 [.dark_&]:border-[#303947] [.dark_&]:bg-[#11151b]" href="#main-content">Skip to content</a>
<header class="border-b border-[#dde2e8] [.dark_&]:border-[#303947]">
    <div class="mx-auto w-[calc(100%-36px)] min-[701px]:w-[min(1160px,calc(100%-64px))] flex min-h-[86px] items-center gap-8 max-[700px]:flex-wrap max-[700px]:gap-4 max-[700px]:py-[15px]">
        <a class="flex items-center gap-[13px] text-[21px] font-[650] tracking-[-0.06em] max-[700px]:mr-auto" href="#main-content" aria-label="DeLayne Russell, home">DR<span class="text-sm tracking-[-0.01em] max-[1000px]:hidden">DeLayne Russell</span></a>
        <nav aria-label="Main navigation" class="ml-auto flex gap-[26px] text-sm text-[#566171] [.dark_&]:text-[#abb5c3] max-[700px]:order-3 max-[700px]:m-0 max-[700px]:w-full max-[700px]:justify-between max-[700px]:gap-4">
            <a class="underline-offset-[5px] hover:text-[#244c77] hover:underline [.dark_&]:hover:text-[#a5c7ec] max-[700px]:py-1.5" href="#projects">Projects</a>
            <a class="underline-offset-[5px] hover:text-[#244c77] hover:underline [.dark_&]:hover:text-[#a5c7ec] max-[700px]:py-1.5" href="#work">Gallery</a>
            <a class="underline-offset-[5px] hover:text-[#244c77] hover:underline [.dark_&]:hover:text-[#a5c7ec] max-[700px]:py-1.5" href="#about">About</a>
            <a class="underline-offset-[5px] hover:text-[#244c77] hover:underline [.dark_&]:hover:text-[#a5c7ec] max-[700px]:py-1.5" href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
    </div>
</header>

<main id="main-content">
    <section class="mx-auto w-[calc(100%-36px)] min-[701px]:w-[min(1160px,calc(100%-64px))] grid grid-cols-[minmax(0,1fr)_340px] items-center gap-[88px] pt-[76px] pb-16 max-[1000px]:grid-cols-[minmax(0,1fr)_280px] max-[1000px]:gap-10 max-[700px]:grid-cols-1 max-[700px]:gap-[30px] max-[700px]:py-[42px]" aria-labelledby="intro-title">
        <div>
            <p class="mb-[25px] flex items-center gap-2 text-[13px] text-[#566171] [.dark_&]:text-[#abb5c3]"><span class="size-[7px] rounded-full bg-[#427a60]"></span>Open to engineering opportunities</p>
            <h1 class="text-[clamp(38px,4.6vw,58px)] leading-[1.08] font-[650] tracking-[-0.045em]" id="intro-title">DeLayne Russell</h1>
            <p class="mt-5 text-[clamp(21px,2.1vw,27px)] leading-[1.4] font-[450] tracking-[-0.02em]">Software engineer.<br />Computer engineering candidate.</p>
            <p class="mt-5 max-w-[590px] text-base leading-[1.8] text-[#566171] [.dark_&]:text-[#abb5c3] max-[700px]:text-[15px]">I build web applications, interactive experiences, and embedded systems. Based in Orlando, with experience delivering software for clients and bringing hardware projects from design to prototype.</p>
            <div class="mt-7 flex flex-wrap items-center gap-3">
                <a class="inline-flex min-h-11 items-center justify-center gap-[15px] rounded-[5px] border border-transparent px-[18px] py-[11px] text-sm font-[550] transition-colors duration-150 motion-reduce:transition-none bg-[#17212f] text-white hover:bg-[#244c77] [.dark_&]:bg-[#eef1f5] [.dark_&]:text-[#11151b] [.dark_&]:hover:bg-[#a5c7ec]" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
                <a class="inline-flex min-h-11 items-center justify-center gap-[15px] rounded-[5px] border px-[18px] py-[11px] text-sm font-[550] transition-colors duration-150 motion-reduce:transition-none border-[#dde2e8] bg-white hover:border-[#566171] hover:bg-[#edf2f7] [.dark_&]:border-[#303947] [.dark_&]:bg-[#11151b] [.dark_&]:hover:border-[#abb5c3] [.dark_&]:hover:bg-[#222d3c]" href="mailto:delayne.russell99@gmail.com">Get in touch</a>
                <a class="px-1.5 py-3 text-sm font-[550] text-[#244c77] underline-offset-4 hover:underline [.dark_&]:text-[#a5c7ec]" href="https://github.com/Teesitin" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
        </div>
        <figure class="max-[700px]:w-[230px]">
            <img class="block h-[340px] w-full rounded-[7px] object-cover max-[1000px]:h-[280px] max-[700px]:h-[230px]" src={portrait.url} width={portrait.width} height={portrait.height} alt="DeLayne Russell" fetchpriority="high" />
            <figcaption class="mt-3.5 text-xs leading-[1.7] text-[#566171] [.dark_&]:text-[#abb5c3]">Orlando, Florida <span class="block">Software & computer engineering</span></figcaption>
        </figure>
    </section>

    <div class="mx-auto w-[calc(100%-36px)] min-[701px]:w-[min(1160px,calc(100%-64px))] grid grid-cols-[1fr_1fr_1.3fr] border-y border-[#dde2e8] py-[27px] [.dark_&]:border-[#303947] max-[700px]:grid-cols-1 max-[700px]:gap-5">
        <div class="flex flex-col gap-[7px] border-l border-[#dde2e8] px-7 first:border-l-0 first:pl-0 [.dark_&]:border-[#303947] max-[700px]:border-0 max-[700px]:p-0"><strong class="text-base font-semibold">7+ years</strong><span class="text-xs leading-[1.6] text-[#566171] [.dark_&]:text-[#abb5c3]">Building software and technical projects</span></div>
        <div class="flex flex-col gap-[7px] border-l border-[#dde2e8] px-7 first:border-l-0 first:pl-0 [.dark_&]:border-[#303947] max-[700px]:border-0 max-[700px]:p-0"><strong class="text-base font-semibold">Full-stack & embedded</strong><span class="text-xs leading-[1.6] text-[#566171] [.dark_&]:text-[#abb5c3]">Experience across software and hardware</span></div>
        <div class="flex flex-col gap-[7px] border-l border-[#dde2e8] px-7 first:border-l-0 first:pl-0 [.dark_&]:border-[#303947] max-[700px]:border-0 max-[700px]:p-0"><strong class="text-base font-semibold">University of Central Florida</strong><span class="text-xs leading-[1.6] text-[#566171] [.dark_&]:text-[#abb5c3]">B.S. Computer Engineering · Expected Fall 2026</span></div>
    </div>

    <section class="mx-auto w-[calc(100%-36px)] min-[701px]:w-[min(1160px,calc(100%-64px))] py-[76px] max-[700px]:py-[50px]" id="projects" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" eyebrow="Projects" title="Software built for real use." description="Client platforms, published games, and engineering projects. Explore the work and the technologies behind it." />
        <div class="grid grid-cols-1 gap-[18px] min-[640px]:grid-cols-2 min-[1001px]:grid-cols-3">
            {#each projects as project}
                <ProjectCard {project} />
            {/each}
        </div>
    </section>

    <section class="border-y border-[#dde2e8] bg-[#f7f8fa] [.dark_&]:border-[#303947] [.dark_&]:bg-[#181e27] py-[76px] max-[700px]:py-[50px]" id="work" aria-labelledby="gallery-title">
        <div class="mx-auto w-[calc(100%-36px)] min-[701px]:w-[min(1160px,calc(100%-64px))]">
            <SectionHeading id="gallery-title" eyebrow="Gallery" title="A closer look at the work." description="Browse interfaces, prototypes, and development screenshots. Select an image to view it at full resolution." />
            <div class="mb-[25px] flex flex-wrap gap-[7px]" role="tablist" aria-label="Filter project images">
                {#each tabs as tab, index}
                    <button class="flex min-h-11 items-center gap-[9px] rounded-[5px] border border-[#dde2e8] bg-transparent px-3.5 py-2.5 text-[13px] text-[#566171] transition-colors duration-150 hover:bg-[#edf2f7] aria-selected:border-[#17212f] aria-selected:bg-[#17212f] aria-selected:text-white motion-reduce:transition-none [.dark_&]:border-[#303947] [.dark_&]:text-[#abb5c3] [.dark_&]:hover:bg-[#222d3c] [.dark_&]:aria-selected:border-[#eef1f5] [.dark_&]:aria-selected:bg-[#eef1f5] [.dark_&]:aria-selected:text-[#11151b] max-[639px]:px-2.5 max-[639px]:py-[9px] max-[639px]:text-xs" type="button" role="tab" id={`tab-${tab.id}`} aria-selected={activeCategory === tab.id} aria-controls="gallery-panel" tabindex={activeCategory === tab.id ? 0 : -1} onclick={() => selectCategory(tab.id)} onkeydown={(event) => navigateTabs(event, index)}>
                        {tab.label}<span class="text-[11px] opacity-80">{tab.id === 'all' ? gallery.length : gallery.filter((image) => image.category === tab.id).length}</span>
                    </button>
                {/each}
            </div>
            <div id="gallery-panel" role="tabpanel" aria-labelledby={`tab-${activeCategory}`} tabindex="0">
                {#key activeCategory}
                    <div class="grid grid-cols-1 gap-5 opacity-100 transition-opacity duration-180 ease-linear starting:opacity-0 motion-reduce:transition-none min-[640px]:grid-cols-2 min-[1001px]:grid-cols-3">
                        {#each visibleImages as media (media.url)}
                            <ImageCard {media} />
                        {/each}
                    </div>
                {/key}
            </div>
            <div class="mt-7 flex items-center justify-between gap-4 max-[639px]:items-start">
                <p class="text-xs text-[#566171] [.dark_&]:text-[#abb5c3]" role="status" aria-live="polite">Showing {Math.min(visibleCount, filteredImages.length)} of {filteredImages.length} images</p>
                {#if visibleCount < filteredImages.length}
                    <button class="inline-flex min-h-11 items-center justify-center gap-[15px] rounded-[5px] border px-[18px] py-[11px] text-sm font-[550] transition-colors duration-150 motion-reduce:transition-none border-[#dde2e8] bg-white hover:border-[#566171] hover:bg-[#edf2f7] [.dark_&]:border-[#303947] [.dark_&]:bg-[#11151b] [.dark_&]:hover:border-[#abb5c3] [.dark_&]:hover:bg-[#222d3c] max-[639px]:text-xs" type="button" onclick={() => { visibleCount += 12; }}>Show more images</button>
                {/if}
            </div>
        </div>
    </section>

    <section class="mx-auto w-[calc(100%-36px)] min-[701px]:w-[min(1160px,calc(100%-64px))] py-[76px] max-[700px]:py-[50px] grid grid-cols-[1.15fr_1fr] gap-[90px] max-[1000px]:gap-10 max-[700px]:grid-cols-1 max-[700px]:gap-3" id="about" aria-labelledby="about-title">
        <div>
            <p class="mb-3 text-xs font-[650] tracking-widest text-[#244c77] uppercase [.dark_&]:text-[#a5c7ec]">About</p>
            <h2 class="text-[clamp(28px,3vw,36px)] leading-[1.22] font-semibold tracking-[-0.03em]" id="about-title">An engineer who values<br class="max-[700px]:hidden" /> clarity and collaboration.</h2>
            <div class="mt-[23px] space-y-[17px] text-[15px] leading-[1.85] text-[#566171] [.dark_&]:text-[#abb5c3]">
                <p>I'm a Computer Engineering student at the University of Central Florida and a freelance software engineer. My work spans web development, systems integration, and technical troubleshooting for clients.</p>
                <p>Before moving into engineering, I managed an after-school care team of five to ten staff members. That experience shaped how I communicate, support a team, and explain technical ideas clearly.</p>
                <p>I enjoy understanding how things work, whether I'm developing an application, designing a circuit board, or repairing electronics.</p>
            </div>
        </div>
        <div class="pt-[29px]" id="tools">
            <h3 class="mb-[23px] text-[19px] font-semibold">Technical toolkit</h3>
            {#each skills as skill}
                <div class="border-t border-[#dde2e8] py-4 [.dark_&]:border-[#303947]"><h4 class="text-[13px] font-semibold">{skill.title}</h4><p class="mt-1.5 text-[13px] leading-[1.8] text-[#566171] [.dark_&]:text-[#abb5c3]">{skill.tools}</p></div>
            {/each}
        </div>
        <div class="col-span-full -mt-11 grid grid-cols-4 gap-[18px] max-[1000px]:mt-0 max-[700px]:mt-3.5 max-[700px]:grid-cols-2">
            {#each aboutImages as media}
                <ImageCard {media} personal />
            {/each}
        </div>
    </section>

    <section class="mx-auto w-[calc(100%-36px)] min-[701px]:w-[min(1160px,calc(100%-64px))] flex items-center justify-between gap-9 border-t border-[#dde2e8] pt-[54px] pb-[65px] [.dark_&]:border-[#303947] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-[25px] max-[700px]:py-10" id="contact" aria-labelledby="contact-title">
        <div>
            <p class="mb-3 text-xs font-[650] tracking-widest text-[#244c77] uppercase [.dark_&]:text-[#a5c7ec]">Contact</p>
            <h2 class="text-[clamp(28px,3vw,36px)] leading-[1.22] font-semibold tracking-[-0.03em]" id="contact-title">Let's connect.</h2>
            <p class="mt-[17px] text-sm leading-[1.8] text-[#566171] [.dark_&]:text-[#abb5c3]">Open to software and computer engineering roles.<br />I'd welcome a conversation about your team and the work you're building.</p>
        </div>
        <div class="flex flex-col gap-4 text-sm">
            <a class="flex min-h-[30px] items-center gap-[15px] text-sm font-[550] text-[#244c77] underline-offset-4 hover:underline [.dark_&]:text-[#a5c7ec]" href="mailto:delayne.russell99@gmail.com">delayne.russell99@gmail.com <span aria-hidden="true">↗</span></a>
            <a class="flex min-h-[30px] items-center gap-[15px] underline-offset-[5px] hover:text-[#244c77] hover:underline [.dark_&]:hover:text-[#a5c7ec]" href="tel:+17729407545">772-940-7545</a>
        </div>
    </section>
</main>

<footer class="mx-auto w-[calc(100%-36px)] min-[701px]:w-[min(1160px,calc(100%-64px))] flex justify-between border-t border-[#dde2e8] py-[25px] text-xs text-[#566171] [.dark_&]:border-[#303947] [.dark_&]:text-[#abb5c3]"><p>© {new Date().getFullYear()} DeLayne Russell</p><a class="underline-offset-[5px] hover:text-[#244c77] hover:underline [.dark_&]:hover:text-[#a5c7ec]" href="https://github.com/Teesitin" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></footer>
