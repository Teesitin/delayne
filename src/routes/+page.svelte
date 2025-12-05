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
        // { url: "https://delayne.b-cdn.net/assets-organized/about/Screenshot%202025-11-10%20185106.png", alt: "Right in the chest" },
        { url: "https://delayne.b-cdn.net/assets-organized/about/I%20don't%20know%20who%20these%20people%20are_.jpg", alt: "My mother and I" },
        { url: "https://delayne.b-cdn.net/assets-organized/about/20250202_120532.jpg", alt: "Wrestling that gator" },

        // HOBBIES
        // { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20230520_111240.jpg", alt: "Airsoft is a sport" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20241223_163859.jpg", alt: "Fixing my car" },
        // { url: "https://delayne.b-cdn.net/assets-organized/hobbies/IMG_20230923_165829.jpg", alt: "Fixing my car again" },
        // { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20240719_185107.jpg", alt: "What isn't broken" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/IMG_20240419_182545.jpg", alt: "It just keeps happening" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20220928_091056.jpg", alt: "Modern-day mining" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20150615_194544.jpg", alt: "Taking apart the MacBook" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/20241213_205115.jpg", alt: "Conquering the West" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/IMG_20210119_181749.jpg", alt: "Learning the inner workings of a TV" },
        { url: "https://delayne.b-cdn.net/assets-organized/hobbies/IMG_20230802_204140.jpg", alt: "Putting the brakes on the brakes" },

        // SETUPS / PERSONAL LIFE
        { url: "https://delayne.b-cdn.net/assets-organized/about/20221028_123951.jpg", alt: "My battlestation" },
        { url: "https://delayne.b-cdn.net/assets-organized/about/20240711_100621.jpg", alt: "Freaky Freya" },
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

</script>

<section class="max-w-5xl mx-auto my-20 px-4 text-center flex flex-col items-center">
    <img src="https://delayne.b-cdn.net/assets/delayne-russell.jpg" alt="DeLayne Russell" class="w-60 h-60 rounded-full mb-4">
    
    <h1 class="text-red-500 font-bold text-3xl">DeLayne Russell</h1>
    <h2 class="font-semibold text-lg mt-1">Software Engineer • Tutor • Creator</h2>

    <p class="mt-4 leading-relaxed font-light max-w-xl">
        I'm a tutor and freelance developer specializing in Unreal Engine, SvelteKit, and modern web tools. 
        I help clients and students build skills through hands-on sessions tailored to their goals. 
        Based in Orlando, I work remotely with people worldwide focusing on practical results, collaboration, 
        and creative problem-solving.
    </p>
</section>

<section class="grid m-auto grid-cols-1 max-w-[1600px] gap-4 my-20 px-4 md:grid-cols-2 lg:grid-cols-4">
    {#each bestWork as media}
        <button on:click="{()=> $lightboxMedia = media}" class="cursor-pointer">
            <img
                src="{media.url}?width=1800&quality=100"
                alt="{media.alt}"
                class="object-cover aspect-video rounded shadow-xl hover:scale-[104%] transition"
            />
        </button>
    {/each}
</section>

<section class="max-w-5xl mx-auto my-20 px-4 text-center">
    <h2 class="text-red-500 font-bold text-3xl mb-4">Projects</h2>
    <p class="text-sm max-w-md mx-auto leading-relaxed">
        A selection of development and design projects showcasing creative problem-solving, technical depth, and real-world application.
    </p>

    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Tutors & Services -->
        <div class="relative border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full items-center">
            <h3 class="font-semibold text-lg mb-1">Tutors & Services</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">SvelteKit • Firebase • SaaS Platform</span>
            <p class="text-sm font-light mb-4">
                A full SaaS platform integrating authentication, invoicing, client management, tutor management, 
                and automated workflows, used by real contractors across the U.S.
            </p>

            <a href="https://www.tutorsandservices.com/" target="_blank"
               class="mt-auto inline-block bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-md text-white font-semibold text-sm w-36 text-center">
                Visit Site
            </a>
        </div>

        <!-- RDE-USA -->
        <div class="relative border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full items-center">
            <h3 class="font-semibold text-lg mb-1">RDE-USA</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">SvelteKit • Web Development</span>
            <p class="text-sm font-light mb-4">
                Responsive website with optimized SEO, smooth product pages, and clean layout hierarchy for industrial hardware manufacturing.
            </p>

            <a href="https://www.rde-usa.com/" target="_blank"
               class="mt-auto inline-block bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-md text-white font-semibold text-sm w-36 text-center">
                Visit Site
            </a>
        </div>

        <!-- VR EMS Trainer -->
        <div class="relative border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full items-center">
            <h3 class="font-semibold text-lg mb-1">VR Simulated EMS Response</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">Unreal Engine • Virtual Reality • Education</span>
            <p class="text-sm font-light mb-4">
                A VR EMS field training module designed to teach real-world medical emergency response techniques through interactive simulation.
            </p>

            <button disabled
                class="mt-auto inline-block bg-gray-300 text-gray-600 cursor-default px-3 py-1 rounded-md font-semibold text-sm w-36 text-center disabled:cursor-not-allowed">
                Under NDA
            </button>
        </div>

        <!-- Escape Room -->
        <div class="relative border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full items-center">
            <h3 class="font-semibold text-lg mb-1">Escape Room Experience</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">SteamVR • Unreal Engine • Physics SIM</span>
            <p class="text-sm font-light mb-4">
                A room-scale VR escape experience linking physical movement to virtual spacecraft navigation with real-time environment tracking.
            </p>

            <a href="https://delayne.b-cdn.net/assets-organized/videos/VID_20210523_170812.mp4" target="_blank"
               class="mt-auto inline-block bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-md text-white font-semibold text-sm w-36 text-center">
                View Demo
            </a>
        </div>

        <!-- Accordios -->
        <div class="relative border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full items-center">
            <h3 class="font-semibold text-lg mb-1">Accordios</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">SaaS • SvelteKit • Business Automation</span>
            <p class="text-sm font-light mb-4">
                A business productivity and automation suite designed to streamline collaboration, scheduling, client onboarding, and communication workflows.
            </p>

            <a href="https://accordios.com/" target="_blank"
               class="mt-auto inline-block bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-md text-white font-semibold text-sm w-36 text-center">
                View Site
            </a>
        </div>

        <!-- Mind on AI -->
        <div class="relative border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full">
            <h3 class="font-semibold text-lg mb-1 text-center">Mind on AI</h3>
            <span class="block text-xs text-red-500 font-medium mb-2 text-center">SvelteKit • Survey Platform • Public Research</span>
            <p class="text-sm font-light mb-4 text-center">
                A public research platform studying how people understand and emotionally respond to emerging AI technology.
            </p>

            <!-- BUTTON FOOTER ROW -->
            <div class="mt-auto flex justify-center gap-2">
                <!-- Live Site -->
                <a href="https://mind-on-ai-2.vercel.app/" target="_blank"
                    class="inline-block bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-md text-white font-semibold text-sm w-28 text-center">
                    View Site
                </a>

                <!-- GitHub Repo -->
                <a href="https://github.com/Teesitin/mind-on-ai-2" target="_blank"
                    class="inline-block bg-white border border-gray-300 hover:border-gray-400 transition px-3 py-1 rounded-md text-black font-medium text-sm w-28 text-center">
                    View Project
                </a>
            </div>
        </div>

        <!-- Pong Ping (Steam Game) -->
        <div class="relative border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full">
            <h3 class="font-semibold text-lg mb-1 text-center">Pong Ping</h3>
            <span class="block text-xs text-red-500 font-medium mb-2 text-center">Unreal Engine • Blueprint Only • Steam Release</span>
            <p class="text-sm font-light mb-4 text-center">
                A simple arcade-style game built in Unreal Engine using Blueprints.  
                Created to learn game production and publishing workflows on Steam.
            </p>

            <a href="https://store.steampowered.com/app/2252930/Pong_Ping/" target="_blank"
            class="mt-auto inline-block bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-md text-white font-semibold text-sm w-36 text-center mx-auto">
                View on Steam
            </a>
        </div>


        <!-- Personal Portfolio Website -->
        <div class="relative border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full">
            <h3 class="font-semibold text-lg mb-1 text-center">Portfolio Website</h3>
            <span class="block text-xs text-red-500 font-medium mb-2 text-center">SvelteKit • Component Design • UI/UX</span>
            <p class="text-sm font-light mb-4 text-center">
                This site, built in SvelteKit, showcasing projects, UI design, animations, and technical work.
            </p>

            <div class="mt-auto flex justify-center gap-2">
                <!-- Live Site -->
                <a href="https://delayne.vercel.app/"
                    class="inline-block bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-md text-white font-semibold text-sm w-32 text-center">
                    View Site
                </a>

                <!-- GitHub Repo -->
                <a href="https://github.com/Teesitin/delayne" target="_blank"
                    class="inline-block bg-white border border-gray-300 hover:border-gray-400 transition px-3 py-1 rounded-md text-black font-medium text-sm w-32 text-center">
                    View Project
                </a>
            </div>
        </div>

        <!-- Dorran Russell Website -->
        <div class="relative border border-gray-200 dark:border-gray-700 dark:border-gray-700 rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full">
            <h3 class="font-semibold text-lg mb-1 text-center">Visually Unique Arts</h3>
            <span class="block text-xs text-red-500 font-medium mb-2 text-center">WordPress • Small Business Website</span>
            <p class="text-sm font-light mb-4 text-center">
                A business website built for my father to showcase his services and establish an online presence.
            </p>

            <a href="https://dorranrussell.wordpress.com/" target="_blank"
            class="mt-auto inline-block bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-md text-white font-semibold text-sm w-36 text-center mx-auto">
                Visit Site
            </a>
        </div>

    </div>
</section>

<section class="max-w-5xl mx-auto my-20 px-4 text-center">
    <h2 class="text-red-500 font-bold text-3xl mb-4">Software & Tools</h2>
    <p class="text-sm max-w-md mx-auto font-light mb-8">
        Programs, engines, and platforms I work with regularly.
    </p>

    <div class="flex flex-wrap justify-center gap-3 text-sm">
        {#each software as software}
            <span class="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-100 transition">
                {software}
            </span>
        {/each}
    </div>
</section>


<section class="max-w-5xl mx-auto my-20 px-4 text-center">
    <h2 class="text-red-500 font-bold text-3xl mb-4">About Me</h2>
    <p class="text-sm font-light leading-relaxed max-w-2xl mx-auto">
        I'm a Computer Engineering student at the University of Central Florida, pursuing my degree since 2020. 
        Through both academic work and hands-on experience, I've developed strong skills in software development, 
        hardware integration, and problem-solving.
    </p>

    <p class="text-sm font-light leading-relaxed max-w-2xl mx-auto mt-4">
        Before transitioning fully into engineering, I worked as an after-school care manager where I led a team 
        of five to ten staff members. That experience strengthened my leadership, communication, and teamwork 
        abilities—qualities that continue to guide my approach to engineering projects today.
    </p>

    <p class="text-sm font-light leading-relaxed max-w-2xl mx-auto mt-4">
        As a freelance software engineer and IT professional, I've collaborated with multiple clients on both 
        new and ongoing projects, providing solutions in web development, systems integration, and technical 
        troubleshooting. Beyond client work, I'm passionate about personal projects involving PCB design, 
        software engineering, and website development, where I continually explore new ways to merge creativity 
        with technology.
    </p>
</section>

<section class="grid m-auto grid-cols-1 max-w-[1600px] gap-4 my-20 px-4 md:grid-cols-2 lg:grid-cols-4">
    {#each aboutMe as media}
        <button on:click="{()=> $lightboxMedia = media}" class="cursor-pointer">
            <img
                src="{media.url}?width=1800&quality=100"
                alt="{media.alt}"
                class="object-cover aspect-video rounded shadow-xl hover:scale-[104%] transition"
            />
        </button>
    {/each}
</section>

<section class="max-w-3xl mx-auto my-24 px-4 text-center">
    <h2 class="text-red-500 font-bold text-3xl mb-3">Contact</h2>
    <p class="text-sm font-light max-w-md mx-auto">
        If you'd like to work together or have any questions, feel free to reach out.
    </p>

    <div class="flex flex-col text-base font-medium">
        <a href="mailto:delayne.tas@gmail.com" class="hover:text-red-500 transition">
            delayne.tas@gmail.com
        </a>

        <a href="sms:7729407545" class="hover:text-red-500 transition">
            772-940-7545
        </a>
    </div>
</section>