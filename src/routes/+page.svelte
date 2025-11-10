<script lang="ts">

</script>

<section class="max-w-5xl mx-auto my-20 flex flex-col md:flex-row gap-6 items-center">
    <div class="md:w-1/2">
        <h1 class="text-red-500 font-bold text-3xl">DeLayne Russell</h1>
        <h2 class="font-semibold text-lg mt-1">Software Engineer • Tutor • Creator</h2>

        <p class="mt-3 leading-relaxed font-light">
            I'm a tutor and freelance developer specializing in Unreal Engine, SvelteKit, and modern web tools. 
            I help clients and students build skills through hands-on sessions tailored to their goals. 
            Based in Orlando, I work remotely with people worldwide—focusing on practical results, collaboration, 
            and creative problem-solving.
        </p>
    </div>

    <div class="md:w-1/2 grid grid-cols-4 gap-2">
        {#each [0,1,2,3,4,5,6,7] as img}
            <img
                src="https://delayne.b-cdn.net/assets/delayne-russell.jpg"
                alt="DeLayne Russell"
                class="object-cover aspect-square rounded shadow-xl hover:scale-[104%] transition"
            />
        {/each}
    </div>
</section>

<section class="max-w-5xl mx-auto my-20 px-4 text-center">
    <h2 class="text-red-500 font-bold text-3xl mb-4">Projects</h2>
    <p class=" text-sm max-w-md mx-auto leading-relaxed">
        A selection of development and design projects showcasing creative problem-solving, technical depth, and real-world application.
    </p>

    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="relative border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-[102%] transition ">
            <h3 class="font-semibold text-lg mb-1">Tutors & Services</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">SvelteKit • Firebase • SaaS Platform</span>
            <p class="text-sm font-light">
                A full-stack web platform integrating Firebase for authentication, real-time data, 
                and email automation. Designed for 
                <a href="https://www.tutorsandservices.com/" target="_blank" class="text-blue-500 hover:underline">Tutors & Services</a> 
                to manage clients, tutors, and invoices efficiently.
            </p>
        </div>

        <div class="relative border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-[102%] transition ">
            <h3 class="font-semibold text-lg mb-1">RDE-USA</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">SvelteKit • Web Development</span>
            <p class="text-sm font-light">
                A custom SvelteKit website built for 
                <a href="https://www.rde-usa.com/" target="_blank" class="text-blue-500 hover:underline">RDE-USA</a>, 
                focusing on responsive design, SEO performance, and seamless product presentation.
            </p>
        </div>

        <div class="relative border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-[102%] transition ">
            <h3 class="font-semibold text-lg mb-1">VR Simulated EMS Response</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">Unreal Engine • Virtual Reality • Education</span>
            <p class="text-sm font-light">
                An immersive EMS training simulator developed in Unreal Engine for the Oculus Quest, 
                designed to teach emergency response procedures through interactive VR scenarios.
            </p>
        </div>

        <div class="relative border border-gray-200 rounded-lg p-4 hover:shadow-xl hover:scale-[102%] transition ">
            <h3 class="font-semibold text-lg mb-1">Escape Room Spaceship Experience</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">SteamVR • Unreal Engine • Real-World Integration</span>
            <p class="text-sm font-light">
                A full-scale VR escape room simulator using SteamVR tracking and base-station pucks 
                to synchronize real-world movement with a virtual spacecraft. Players physically navigate a custom-built room, 
                dodging asteroids and steering into a black hole during the experience.
            </p>
        </div>

        <div class="relative border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-[102%] transition ">
            <h3 class="font-semibold text-lg mb-1">Accordios</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">SaaS • SvelteKit • Business Automation</span>
            <p class="text-sm font-light">
                A modern SaaS platform built for streamlined team collaboration and automated client workflows. 
                <a href="https://accordios.com/" target="_blank" class="text-blue-500 hover:underline">ACCORDIOS</a> 
                integrates scheduling, messaging, and analytics into one cohesive system designed to simplify business operations.
            </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-[102%] transition ">
            <h3 class="font-semibold text-lg mb-1">Mind on AI</h3>
            <span class="block text-xs text-red-500 font-medium mb-2">SvelteKit • Survey Platform • Public Research</span>
            <p class="text-sm font-light">
                <a href="https://mind-on-ai-2.vercel.app/" target="_blank" class="text-blue-500 hover:underline">Mind on AI</a> 
                is a public survey platform exploring how people perceive artificial intelligence. 
                It invites users to share honest opinions on AI's influence in society, helping researchers and developers better understand 
                public sentiment and concerns about the future of technology.
            </p>
        </div>
    </div>
</section>

<section class="max-w-5xl mx-auto my-20 px-4 text-center">
    <h2 class="text-red-500 font-bold text-3xl mb-4">About Me</h2>
    <p class="text-sm font-light leading-relaxed max-w-2xl mx-auto text-gray-700">
        I'm a Computer Engineering student at the University of Central Florida, pursuing my degree since 2020. 
        Through both academic work and hands-on experience, I've developed strong skills in software development, 
        hardware integration, and problem-solving.
    </p>

    <p class="text-sm font-light leading-relaxed max-w-2xl mx-auto text-gray-700 mt-4">
        Before transitioning fully into engineering, I worked as an after-school care manager where I led a team 
        of five to ten staff members. That experience strengthened my leadership, communication, and teamwork 
        abilities—qualities that continue to guide my approach to engineering projects today.
    </p>

    <p class="text-sm font-light leading-relaxed max-w-2xl mx-auto text-gray-700 mt-4">
        As a freelance software engineer and IT professional, I've collaborated with multiple clients on both 
        new and ongoing projects, providing solutions in web development, systems integration, and technical 
        troubleshooting. Beyond client work, I'm passionate about personal projects involving PCB design, 
        software engineering, and website development, where I continually explore new ways to merge creativity 
        with technology.
    </p>
</section>