<script lang="ts">
    import { lightboxMedia } from "$lib/components/lightbox/lightboxStore";

    const bestWork: Media[] = [
        // UNREAL ENGINE
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20173910.png", alt: "UE5 Blueprints" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20173758.png", alt: "UE5 Blueprints" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20173345.png", alt: "UE5 Blueprints" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20173714.png", alt: "UE5 Scene Development" },

        // WEB UI
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20181332.png", alt: "Dashboard UI" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20181357.png", alt: "Web App UI" },
        { url: "https://delayne.b-cdn.net/assets/Client%20and%20Payment%20Management%20Dashboard.png", alt: "SaaS Dashboard" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-04-04%20160609.png", alt: "SaaS Dashboard" },

        // PCB
        { url: "https://delayne.b-cdn.net/assets/Microcontroller%20Circuit%20Diagram%20with%20LCD%20and%20Ultrasonic%20Sensor.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets/Screenshot%202025-05-12%20114852.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets/Screenshot%202025-05-12%20114948.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets/20250415_141848.jpg", alt: "PCB" },

        // MORE PCB
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20165644.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20165734.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20165750.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20165903.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20165924.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20170013.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20170043.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20170121.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20170217.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20170259.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20170330.png", alt: "PCB" },
        { url: "https://delayne.b-cdn.net/assets-organized/projects/Screenshot%202025-11-10%20170419.png", alt: "PCB" },
    ];

    const aboutMe: Media[] = [
        { url: "https://delayne.b-cdn.net/assets-organized/about/Playing%20Virtual%20Tennis%20Outdoors.jpg", alt: "Playing virtual tennis outdoors" },
        // { url: "https://delayne.b-cdn.net/assets-organized/about/I%20don't%20know%20who%20these%20people%20are_.jpg", alt: "My mother and I" },
        { url: "https://delayne.b-cdn.net/assets-organized/about/20250202_120532.jpg", alt: "Wrestling that gator" },

        // HOBBIES
        // { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20241223_163859.jpg", alt: "Fixing my car" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/IMG_20240419_182545.jpg", alt: "It just keeps happening" },
        // { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20220928_091056.jpg", alt: "Modern-day mining" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20150615_194544.jpg", alt: "Taking apart the MacBook" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20241213_205115.jpg", alt: "Conquering the West" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/IMG_20210119_181749.jpg", alt: "Learning the inner workings of a TV" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/IMG_20230802_204140.jpg", alt: "Putting the brakes on the brakes" },

        // SETUPS / PERSONAL LIFE
        { url: "https://delayne.b-cdn.net/assets-organized/about/20221028_123951.jpg", alt: "My battlestation" },
        { url: "https://delayne.b-cdn.net/assets-organized/about/20240711_100621.jpg", alt: "Freaky Freya" },
    ];

    const quickLinks = [
        { label: "Work", href: "#work" },
        { label: "Projects", href: "#projects" },
        { label: "Tools", href: "#tools" },
        { label: "Contact", href: "#contact" },
    ];

    const highlights = [
        { stat: "5+", label: "years building web, game, and hardware projects" },
        { stat: "3", label: "main lanes: SvelteKit, Unreal Engine, embedded systems" },
        { stat: "1:1", label: "tutoring and build sessions tailored to the person" },
    ];

    const services = [
        {
            title: "Product Websites",
            text: "Clean, fast SvelteKit and WordPress builds with thoughtful structure, useful content, and a finish that feels client-ready.",
            accent: "from-red-500 to-orange-400",
        },
        {
            title: "Interactive Systems",
            text: "VR, Unreal Engine, dashboards, and workflow tools built around practical use instead of shiny dead ends.",
            accent: "from-cyan-400 to-emerald-400",
        },
        {
            title: "Technical Tutoring",
            text: "Hands-on guidance for students and builders who want to understand the work, not just copy the steps.",
            accent: "from-amber-300 to-lime-300",
        },
    ];

    const projects = [
        {
            title: "Tutors & Services",
            tag: "SvelteKit / Firebase / SaaS Platform",
            text: "A full SaaS platform integrating authentication, invoicing, client management, tutor management, and automated workflows used by real contractors across the U.S.",
            links: [
                { label: "Visit Site", href: "https://www.tutorsandservices.com/" },
            ],
        },
        {
            title: "RDE-USA",
            tag: "SvelteKit / Web Development",
            text: "Responsive website with optimized SEO, smooth product pages, and clean layout hierarchy for industrial hardware manufacturing.",
            links: [
                { label: "Visit Site", href: "https://www.rde-usa.com/" },
            ],
        },
        {
            title: "VR Simulated EMS Response",
            tag: "Unreal Engine / Virtual Reality / Education",
            text: "A VR EMS field training module designed to teach real-world medical emergency response techniques through interactive simulation.",
            links: [],
            note: "Under NDA",
        },
        {
            title: "Escape Room Experience",
            tag: "SteamVR / Unreal Engine / Physics Sim",
            text: "A room-scale VR escape experience linking physical movement to virtual spacecraft navigation with real-time environment tracking.",
            links: [
                { label: "View Demo", href: "https://delayne.b-cdn.net/assets-organized/videos/VID_20210523_170812.mp4" },
            ],
        },
        {
            title: "Accordios",
            tag: "SaaS / SvelteKit / Business Automation",
            text: "A business productivity and automation suite designed to streamline collaboration, scheduling, client onboarding, and communication workflows.",
            links: [
                { label: "View Site", href: "https://accordios.com/" },
            ],
        },
        {
            title: "Mind on AI",
            tag: "SvelteKit / Survey Platform / Public Research",
            text: "A public research platform studying how people understand and emotionally respond to emerging AI technology.",
            links: [
                { label: "View Site", href: "https://mind-on-ai-2.vercel.app/" },
                { label: "View Project", href: "https://github.com/Teesitin/mind-on-ai-2" },
            ],
        },
        {
            title: "Pong Ping",
            tag: "Unreal Engine / Blueprint Only / Steam Release",
            text: "A simple arcade-style game built in Unreal Engine using Blueprints. Created to learn game production and publishing workflows on Steam.",
            links: [
                { label: "View on Steam", href: "https://store.steampowered.com/app/2252930/Pong_Ping/" },
            ],
        },
        {
            title: "Portfolio Website",
            tag: "SvelteKit / Component Design / UI/UX",
            text: "This site, built in SvelteKit, showcasing projects, UI design, animations, and technical work.",
            links: [
                { label: "View Site", href: "https://delayne.vercel.app/" },
                { label: "View Project", href: "https://github.com/Teesitin/delayne" },
            ],
        },
        {
            title: "Visually Unique Arts",
            tag: "WordPress / Small Business Website",
            text: "A business website built for my father to showcase his services and establish an online presence.",
            links: [
                { label: "Visit Site", href: "https://dorranrussell.wordpress.com/" },
            ],
        },
    ];

    const software = [
        // GAME DEVELOPMENT
        "Unreal Engine 5",
        "Blueprint Visual Scripting",
        "Love2D",
        "Oculus VR Developer Tools",

        // WEB DEVELOPMENT
        "SvelteKit",
        "TailwindCSS",
        "WordPress",
        "Elementor",
        "Node.js",
        "PHP",
        "Firebase",
        "Google Cloud",
        "Google Cloud Console",
        "BunnyCDN",
        "Telnyx",

        // PROGRAMMING LANGUAGES
        "JavaScript",
        "TypeScript",
        "Python",

        // SOFTWARE & APPLICATIONS
        "VS Code",
        "Visual Studio",
        "GitHub",
        "Trello",
        "Android Studio",
        "Fusion 360",
        "Affinity Photo",
        "Photoshop",
        "Figma",
        "Canva",
        "HandBrake",

        // HARDWARE / ENGINEERING
        "MSP430 Embedded Systems",
        "Soldering and Prototyping",

        // AUTOMATION & WORKFLOW
        "Google Sheets",
        "Apps Script",
        "Google CLI",
        "PowerShell",
        "Google Ads"
    ];

    const featuredWork = bestWork.slice(0, 8);
    const aboutPreview = aboutMe.slice(0, 4);
</script>

<svelte:head>
    <title>DeLayne Russell | Software Engineer, Tutor, Creator</title>
    <meta
        name="description"
        content="Portfolio for DeLayne Russell, a software engineer, tutor, and creator building SvelteKit sites, Unreal Engine projects, dashboards, and embedded systems."
    />
</svelte:head>

<main class="min-h-screen overflow-hidden bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100 transition-all duration-500">
    <nav aria-label="Main navigation" class="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-1 rounded-full border border-neutral-200/70 bg-white/80 p-1 text-xs font-medium text-neutral-700 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/70 dark:text-neutral-200 sm:text-sm md:inset-x-auto md:bottom-auto md:left-1/2 md:top-4 md:-translate-x-1/2">
        {#each quickLinks as link}
            <a
                href="{link.href}"
                class="rounded-full px-3 py-2 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 sm:px-4"
            >
                {link.label}
            </a>
        {/each}
    </nav>

    <section class="relative isolate px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pb-12 lg:pt-28 transition-all duration-500">
        <div class="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#fff7ed_0%,#f8fafc_48%,#ecfeff_100%)] dark:bg-[linear-gradient(135deg,#171717_0%,#0a0a0a_52%,#111827_100%)] transition-all duration-500"></div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-neutral-50 to-transparent dark:from-neutral-950 transition-all duration-500"></div>

        <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div class="text-left">
                <div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm dark:text-emerald-300">
                    <span class="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-pulse"></span>
                    Available for builds, tutoring, and problem-solving
                </div>

                <h1 class="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
                    DeLayne Russell
                </h1>

                <p class="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-2xl">
                    Software engineer, tutor, and creator building useful web tools, VR experiences, dashboards, and hardware-backed experiments.
                </p>

                <p class="mt-5 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg">
                    I help clients and students move from fuzzy ideas to working systems through hands-on sessions, clean interfaces, and practical engineering. Based in Orlando, working remotely with people worldwide.
                </p>

                <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#projects"
                        class="group inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition duration-500 hover:-translate-y-1 hover:bg-red-400 hover:shadow-red-500/40"
                    >
                        See Projects
                        <span class="ml-2 transition duration-500 group-hover:translate-x-1">&rarr;</span>
                    </a>

                    <a
                        href="mailto:delayne.tas@gmail.com"
                        class="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-bold text-neutral-900 shadow-sm backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-200"
                    >
                        Start a Conversation
                    </a>
                </div>

            </div>

            <div class="relative mx-auto w-full max-w-[430px]">
                <div class="group relative rounded-lg border border-neutral-200 bg-white p-3 shadow-2xl shadow-black/10 transition duration-500 hover:-translate-y-2 dark:border-white/10 dark:bg-white/10 dark:shadow-black/40">
                    <img
                        src="https://delayne.b-cdn.net/assets/delayne-russell.jpg?width=1200&quality=90"
                        alt="DeLayne Russell"
                        class="aspect-4/5 w-full rounded-md object-cover transition duration-500 group-hover:scale-[1.02]"
                    />

                    <div class="absolute bottom-6 left-6 right-6 rounded-lg border border-white/20 bg-neutral-950/80 p-4 text-white shadow-xl backdrop-blur-md">
                        <p class="text-sm font-semibold text-cyan-200">Current focus</p>
                        <p class="mt-1 text-xl font-black">Practical software with a real human behind it.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="px-4 pb-16 sm:px-6 lg:px-8">
        <div class="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
            {#each highlights as highlight}
                <div class="rounded-lg border border-neutral-200 bg-white/80 p-4 shadow-sm shadow-black/5 transition duration-500 hover:-translate-y-1 hover:border-red-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-red-400/60">
                    <p class="text-3xl font-black text-red-500">{highlight.stat}</p>
                    <p class="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{highlight.label}</p>
                </div>
            {/each}
        </div>
    </section>

    <section class="px-4 py-16 sm:px-6 lg:px-8" id="work">
        <div class="mx-auto max-w-7xl">
            <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.3em] text-red-500">Selected Work</p>
                    <h2 class="mt-3 text-4xl font-black text-neutral-950 dark:text-white sm:text-5xl">
                        Screenshots with range.
                    </h2>
                </div>

                <p class="max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-400">
                    A tighter first look at game systems, dashboards, PCB work, and client-facing interfaces. Tap any image to open it larger.
                </p>
            </div>

            <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {#each featuredWork as media}
                    <button
                        on:click="{()=> $lightboxMedia = media}"
                        class="group relative cursor-pointer overflow-hidden rounded-lg border border-neutral-200 bg-white text-left shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-2xl hover:shadow-red-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-red-400/60"
                    >
                        <img
                            src="{media.url}?width=1800&quality=100"
                            alt="{media.alt}"
                            class="aspect-video w-full object-cover transition duration-500 group-hover:scale-110"
                        />

                        <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                            <p class="text-sm font-bold">{media.alt}</p>
                        </div>
                    </button>
                {/each}
            </div>
        </div>
    </section>

    <section class="border-y border-neutral-200 bg-white px-4 py-16 transition-colors duration-500 dark:border-white/10 dark:bg-neutral-900/40 sm:px-6 lg:px-8">
        <div class="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {#each services as service}
                <div class="group rounded-lg border border-neutral-200 bg-neutral-50 p-6 shadow-sm shadow-black/5 transition duration-500 hover:-translate-y-2 hover:border-neutral-300 hover:shadow-xl dark:border-white/10 dark:bg-neutral-950/70 dark:hover:border-white/25">
                    <div class="h-1.5 w-20 rounded-full bg-linear-to-r {service.accent} transition-all duration-500 group-hover:w-32"></div>
                    <h3 class="mt-6 text-2xl font-black text-neutral-950 dark:text-white">{service.title}</h3>
                    <p class="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{service.text}</p>
                </div>
            {/each}
        </div>
    </section>

    <section class="px-4 py-20 sm:px-6 lg:px-8" id="projects">
        <div class="mx-auto max-w-7xl">
            <div class="max-w-3xl">
                <p class="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Projects</p>
                <h2 class="mt-3 text-4xl font-black text-neutral-950 dark:text-white sm:text-5xl">
                    Client work, experiments, and shipped ideas.
                </h2>
                <p class="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
                    Each project has a job: reduce friction, teach a skill, prove a workflow, or turn a weird idea into something people can actually use.
                </p>
            </div>

            <div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {#each projects as project}
                    <article class="group flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-2xl hover:shadow-red-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-red-400/60">
                        <div class="flex items-start justify-between gap-4">
                            <div>
                                <h3 class="text-xl font-black text-neutral-950 dark:text-white">{project.title}</h3>
                                <p class="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-red-500">{project.tag}</p>
                            </div>

                            <span class="h-3 w-3 shrink-0 rounded-full bg-cyan-400 transition duration-500 group-hover:scale-150"></span>
                        </div>

                        <p class="mt-5 flex-1 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{project.text}</p>

                        <div class="mt-6 flex flex-wrap gap-2">
                            {#if project.links.length}
                                {#each project.links as link}
                                    <a
                                        href="{link.href}"
                                        target="_blank"
                                        rel="noreferrer"
                                        class="rounded-full border border-neutral-300 px-4 py-2 text-sm font-bold text-neutral-800 transition duration-500 hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-white/15 dark:text-neutral-100 dark:hover:border-red-400 dark:hover:bg-red-500"
                                    >
                                        {link.label}
                                    </a>
                                {/each}
                            {:else}
                                <span class="rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-bold text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400">
                                    {project.note}
                                </span>
                            {/if}
                        </div>
                    </article>
                {/each}
            </div>
        </div>
    </section>

    <section class="border-y border-neutral-200 bg-neutral-100 px-4 py-20 transition-colors duration-500 dark:border-white/10 dark:bg-black/20 sm:px-6 lg:px-8" id="tools">
        <div class="mx-auto max-w-7xl">
            <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">Software & Tools</p>
                    <h2 class="mt-3 text-4xl font-black text-neutral-950 dark:text-white sm:text-5xl">
                        The workshop is broad on purpose.
                    </h2>
                    <p class="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
                        Web, VR, automation, embedded systems, design, and client operations all feed into the same goal: build the thing so it works in real life.
                    </p>
                </div>

                <div class="flex flex-wrap gap-3 text-sm">
                    {#each software as tool}
                        <span class="rounded-full border border-neutral-200 bg-white px-4 py-2 font-semibold text-neutral-700 shadow-sm shadow-black/5 transition duration-500 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:border-cyan-300 dark:hover:text-cyan-200">
                            {tool}
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <section class="px-4 py-20 sm:px-6 lg:px-8">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
                <p class="text-sm font-bold uppercase tracking-[0.3em] text-red-500">About</p>
                <h2 class="mt-3 text-4xl font-black text-neutral-950 dark:text-white sm:text-5xl">
                    Engineer brain, teacher patience, maker habits.
                </h2>

                <div class="mt-6 space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
                    <p>
                        I'm a Computer Engineering student at the University of Central Florida, pursuing my degree since 2020. Through both academic work and hands-on experience, I've developed strong skills in software development, hardware integration, and problem-solving.
                    </p>

                    <p>
                        Before transitioning fully into engineering, I worked as an after-school care manager where I led a team of five to ten staff members. That experience strengthened my leadership, communication, and teamwork abilities, qualities that continue to guide my approach to engineering projects today.
                    </p>

                    <p>
                        As a freelance software engineer and IT professional, I've collaborated with multiple clients on both new and ongoing projects, providing solutions in web development, systems integration, and technical troubleshooting.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                {#each aboutPreview as media}
                    <button
                        on:click="{()=> $lightboxMedia = media}"
                        class="group relative cursor-pointer overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-2 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/60"
                    >
                        <img
                            src="{media.url}?width=1200&quality=90"
                            alt="{media.alt}"
                            class="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                    </button>
                {/each}
            </div>
        </div>
    </section>

    <!-- <section class="grid m-auto grid-cols-1 max-w-[1600px] gap-4 px-4 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {#each aboutMe as media}
            <button
                on:click="{()=> $lightboxMedia = media}"
                class="group relative cursor-pointer overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-2 hover:border-amber-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-amber-300/60"
            >
                <img
                    src="{media.url}?width=1800&quality=100"
                    alt="{media.alt}"
                    class="aspect-video w-full object-cover transition duration-500 group-hover:scale-110"
                />
            </button>
        {/each}
    </section> -->

    <section class="px-4 pb-24 sm:px-6 lg:px-8" id="contact">
        <div class="mx-auto max-w-5xl rounded-lg border border-neutral-200 bg-white p-8 text-center shadow-2xl shadow-black/10 transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 sm:p-12">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Contact</p>
            <h2 class="mt-3 text-4xl font-black text-neutral-950 dark:text-white sm:text-5xl">
                Let's build the useful version.
            </h2>
            <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-400">
                If you'd like to work together, need tutoring, or want a second brain on a technical problem, reach out and tell me what you're trying to make.
            </p>

            <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                    href="mailto:delayne.tas@gmail.com"
                    class="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition duration-500 hover:-translate-y-1 hover:bg-red-400"
                >
                    delayne.tas@gmail.com
                </a>

                <a
                    href="sms:7729407545"
                    class="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition duration-500 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-200"
                >
                    772-940-7545
                </a>
            </div>
        </div>
    </section>
</main>
