// All portfolio images are served directly from BunnyCDN.
export const categories = [
  {
    "id": "web-and-design",
    "label": "Web & design"
  },
  {
    "id": "electronics-and-hardware",
    "label": "Electronics & hardware"
  },
  {
    "id": "3d-and-cad",
    "label": "3D & CAD"
  },
  {
    "id": "games-and-vr",
    "label": "Games & VR"
  }
] as const;

export type GalleryCategory = (typeof categories)[number]['id'];

export interface PortfolioImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface GalleryImage extends PortfolioImage {
  category: GalleryCategory;
}

// Curated strongest-first within each category, interleaved for a balanced All work view.
// Lead with finished interfaces, recent hardware, polished renders, and implementation depth.
export const gallery: GalleryImage[] = [
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/model-aircraft-website-homepage.png",
    "width": 1496,
    "height": 1066,
    "alt": "Model aircraft website homepage with product imagery and features",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/sensor-matrix-board-3d-perspective.png",
    "width": 1620,
    "height": 1006,
    "alt": "3D perspective of a sensor matrix circuit board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/tropical-resort-courtyard-render.png",
    "width": 600,
    "height": 301,
    "alt": "3D render of a tropical resort courtyard with arches and palms",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/vr-environment-level-editor.png",
    "width": 3831,
    "height": 2085,
    "alt": "VR environment under development in the Unreal Engine level editor",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/client-and-payment-management-dashboard.png",
    "width": 1749,
    "height": 918,
    "alt": "Client and payment management dashboard with status and workflow views",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-mainboard-3d-render.png",
    "width": 1548,
    "height": 1021,
    "alt": "3D render of a microcontroller mainboard",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/fantasy-library-interior-render.png",
    "width": 600,
    "height": 301,
    "alt": "Rendered fantasy library interior with bookshelves and seating",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/gameplay-blueprint-interaction-logic.png",
    "width": 3832,
    "height": 2085,
    "alt": "Unreal Engine Blueprint logic for gameplay interactions",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/laundry-machine-leasing-website-editor.png",
    "width": 3829,
    "height": 2023,
    "alt": "Laundry machine leasing website in a visual page editor",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/msp430-lcd-breadboard-prototype.png",
    "width": 4000,
    "height": 3000,
    "alt": "MSP430 breadboard prototype with a working LCD display",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/ventilated-electronics-enclosure-3d-model.png",
    "width": 3837,
    "height": 2085,
    "alt": "CAD model of a ventilated electronics enclosure",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/level-blueprint-comment-groups.png",
    "width": 3834,
    "height": 2084,
    "alt": "Unreal Engine level Blueprint organized into comment groups",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/service-invoice-and-payment-confirmation.png",
    "width": 2207,
    "height": 1177,
    "alt": "Service invoice interface and payment confirmation design",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-lcd-board-3d-render.png",
    "width": 2140,
    "height": 1432,
    "alt": "3D render of a microcontroller circuit board with an LCD",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/red-convertible-sports-car-render.png",
    "width": 1194,
    "height": 699,
    "alt": "3D render of a red convertible sports car",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/vr-spacecraft-navigation-controller-demo.png",
    "width": 4032,
    "height": 3024,
    "alt": "Handheld controller demonstration for a VR spacecraft environment",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/model-aircraft-product-cards.png",
    "width": 1581,
    "height": 1304,
    "alt": "Product card layout for a model aircraft website",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/sensor-matrix-board-routing-detail.png",
    "width": 1015,
    "height": 963,
    "alt": "Detailed trace routing for a sensor matrix circuit board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/medieval-tavern-interior-render.png",
    "width": 600,
    "height": 328,
    "alt": "Medieval tavern environment with timber framing and tables",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/aircraft-animation-timeline.png",
    "width": 600,
    "height": 338,
    "alt": "Aircraft model and animation timeline in Unreal Engine",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/energy-consumption-comparison-charts.png",
    "width": 1625,
    "height": 929,
    "alt": "Charts comparing energy consumption across several scenarios",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-sensor-matrix-schematic.png",
    "width": 1549,
    "height": 772,
    "alt": "Microcontroller circuit schematic connected to a sensor matrix",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/electronics-enclosure-ribbed-base.png",
    "width": 3838,
    "height": 2088,
    "alt": "CAD model of an electronics enclosure with a ribbed base",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/gameplay-blueprint-branch-logic.png",
    "width": 3835,
    "height": 2084,
    "alt": "Unreal Engine Blueprint branches for gameplay behavior",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/purple-tech-business-card-designs.png",
    "width": 2140,
    "height": 941,
    "alt": "Technology business card designs with a purple accent",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/circuit-board-soldering-and-multimeter-testing.png",
    "width": 4000,
    "height": 3000,
    "alt": "Assembling and testing a circuit board with a multimeter",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/angled-electronics-enclosure-3d-model.png",
    "width": 3836,
    "height": 2085,
    "alt": "CAD model of an angled electronics enclosure",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/gameplay-blueprint-function-flow.png",
    "width": 3833,
    "height": 2086,
    "alt": "Unreal Engine Blueprint function flow for gameplay",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/crest-logo-business-card-variations.png",
    "width": 2449,
    "height": 1610,
    "alt": "Business card concepts with a crest logo in light and dark variations",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/sensor-array-board-with-connector-3d-render.png",
    "width": 3837,
    "height": 2085,
    "alt": "3D render of a sensor array board with its connector",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/electronics-mounting-bracket-3d-model.png",
    "width": 3835,
    "height": 2085,
    "alt": "CAD model of an electronics mounting bracket",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/block-spawning-blueprint-logic.png",
    "width": 1813,
    "height": 496,
    "alt": "Unreal Engine Blueprint logic for spawning blocks",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/web-application-source-code.png",
    "width": 3837,
    "height": 2085,
    "alt": "Web application source code in a code editor",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/sensor-matrix-and-mainboard-assembly-diagram.png",
    "width": 1302,
    "height": 859,
    "alt": "Assembly diagram showing the sensor matrix and mainboard connection",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/aircraft-cad-workshop-display.png",
    "width": 4000,
    "height": 1868,
    "alt": "Aircraft CAD model displayed beside a physical model in the workshop",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/complex-material-function-node-graph.png",
    "width": 600,
    "height": 328,
    "alt": "Unreal Engine material function with connected shader nodes",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/web-component-source-code.png",
    "width": 3835,
    "height": 2086,
    "alt": "Web component source code in a code editor",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/battery-powered-lcd-circuit-board-prototype.png",
    "width": 3000,
    "height": 4000,
    "alt": "Battery-powered circuit board prototype with an LCD display",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/aircraft-and-vehicle-asset-library.png",
    "width": 600,
    "height": 328,
    "alt": "Aircraft and vehicle assets in the Unreal Engine content browser",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/material-editor-node-graph.png",
    "width": 600,
    "height": 328,
    "alt": "Material editor node graph and shader preview in Unreal Engine",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/featured-products-and-articles-layout.png",
    "width": 1553,
    "height": 1146,
    "alt": "Website layout for featured products and articles",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-mainboard-trace-layout.png",
    "width": 1936,
    "height": 991,
    "alt": "Microcontroller mainboard component and trace layout",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/delayne-russell-aircraft-model-workshop.png",
    "width": 4000,
    "height": 1868,
    "alt": "DeLayne Russell demonstrating an aircraft model in the workshop",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/blueprint-visual-scripting-node-graph.png",
    "width": 600,
    "height": 338,
    "alt": "Unreal Engine Blueprint visual scripting node graph",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/web-and-design/fantasy-game-website-designs.png",
    "width": 1919,
    "height": 1079,
    "alt": "Fantasy game website concepts with navigation and interface elements",
    "category": "web-and-design"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/electronics-lab-bench-oscilloscope-testing.png",
    "width": 4000,
    "height": 1868,
    "alt": "Electronics lab bench with a breadboard and oscilloscope",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/3d-and-cad/aircraft-model-workshop-team.png",
    "width": 4000,
    "height": 1868,
    "alt": "Model aircraft workshop team beside an aircraft build",
    "category": "3d-and-cad"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/gameplay-blueprint-event-flow.png",
    "width": 3838,
    "height": 2088,
    "alt": "Unreal Engine Blueprint event flow for gameplay",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/sensor-matrix-board-top-layout.png",
    "width": 1038,
    "height": 1024,
    "alt": "Top component layout for a sensor matrix circuit board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/gameplay-blueprint-sequence-logic.png",
    "width": 3837,
    "height": 2084,
    "alt": "Unreal Engine Blueprint sequence for gameplay events",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-lcd-ultrasonic-sensor-schematic.png",
    "width": 2607,
    "height": 1298,
    "alt": "Microcontroller schematic with LCD and ultrasonic sensor connections",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/vr-environment-level-overview.png",
    "width": 3831,
    "height": 2084,
    "alt": "Overview of a VR environment layout in Unreal Engine",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-interface-board-schematic.png",
    "width": 3835,
    "height": 2086,
    "alt": "Circuit schematic for a microcontroller interface board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/games-and-vr/vr-environment-level-alternate-view.png",
    "width": 3829,
    "height": 2086,
    "alt": "Alternate view of a VR environment in the Unreal Engine level editor",
    "category": "games-and-vr"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-interface-board-3d-top-view.png",
    "width": 3837,
    "height": 2085,
    "alt": "3D top view of a microcontroller interface board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/oscilloscope-sine-wave-measurement.png",
    "width": 4000,
    "height": 1868,
    "alt": "Oscilloscope displaying measured sine wave signals",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-development-board-color-display.png",
    "width": 3000,
    "height": 4000,
    "alt": "Microcontroller development board with a color display",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-lcd-board-copper-traces.png",
    "width": 1549,
    "height": 1615,
    "alt": "Copper traces for a microcontroller and LCD circuit board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/sensor-array-board-copper-routing.png",
    "width": 3835,
    "height": 2084,
    "alt": "Copper routing for a sensor array circuit board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/led-array-circuit-board-layout.png",
    "width": 1096,
    "height": 1334,
    "alt": "Circuit board layout for an LED array",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-interface-board-3d-bottom-view.png",
    "width": 3836,
    "height": 2084,
    "alt": "3D underside view of a microcontroller interface board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/sensor-array-board-3d-top-view.png",
    "width": 3836,
    "height": 2086,
    "alt": "3D top view of a sensor array circuit board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/sensor-array-board-3d-bottom-view.png",
    "width": 3835,
    "height": 2084,
    "alt": "3D underside view of a sensor array circuit board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-interface-board-routing.png",
    "width": 3839,
    "height": 2085,
    "alt": "Copper routing for a microcontroller interface board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/sensor-array-board-trace-layout.png",
    "width": 3835,
    "height": 2084,
    "alt": "Sensor array circuit board trace layout",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/microcontroller-lcd-board-layout.png",
    "width": 1537,
    "height": 1605,
    "alt": "Component layout for a microcontroller and LCD circuit board",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/oscilloscope-digital-signal-measurement.png",
    "width": 4000,
    "height": 1868,
    "alt": "Oscilloscope measuring digital signal waveforms",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/breadboard-jumper-wire-prototype.png",
    "width": 4000,
    "height": 3000,
    "alt": "Breadboard circuit prototype connected with jumper wires",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/breadboard-circuit-probe-testing.png",
    "width": 4000,
    "height": 1868,
    "alt": "Testing a breadboard circuit with measurement probes",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/fpga-development-board-seven-segment-display.png",
    "width": 4000,
    "height": 2252,
    "alt": "FPGA development board with switches and seven-segment displays",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/phototransistor-sensor-circuit-schematic.png",
    "width": 552,
    "height": 658,
    "alt": "Phototransistor sensor circuit schematic",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/electronics-project-enclosure-prototype.png",
    "width": 4000,
    "height": 2252,
    "alt": "Physical electronics enclosure prototype on a workbench",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/circuit-board-manufacturing-preview.png",
    "width": 1920,
    "height": 1080,
    "alt": "Circuit board manufacturing preview showing copper routing",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/circuit-board-gerber-layer-preview.png",
    "width": 1920,
    "height": 1080,
    "alt": "Circuit board Gerber layers in a manufacturing preview",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/msp430-waveform-design-whiteboard.png",
    "width": 4000,
    "height": 2252,
    "alt": "Whiteboard notes and waveform sketches for an MSP430 project",
    "category": "electronics-and-hardware"
  },
  {
    "url": "https://delayne.b-cdn.net/master/projects/electronics-and-hardware/electronics-control-board-wall-installation.png",
    "width": 3000,
    "height": 4000,
    "alt": "Electronics control board mounted for installation",
    "category": "electronics-and-hardware"
  }
];

export const portrait: PortfolioImage = {
  "url": "https://delayne.b-cdn.net/master/about/delayne-russell-professional-headshot.png",
  "width": 3000,
  "height": 3001,
  "alt": "DeLayne Russell"
};

export const aboutImages: PortfolioImage[] = [
  {
    "url": "https://delayne.b-cdn.net/master/hobbies/macbook-disassembly-workbench.png",
    "alt": "Exploring MacBook hardware",
    "width": 2560,
    "height": 1440
  },
  {
    "url": "https://delayne.b-cdn.net/master/hobbies/hybrid-battery-pack-rebuild-workbench.png",
    "alt": "Rebuilding a hybrid battery pack",
    "width": 4000,
    "height": 2252
  },
  {
    "url": "https://delayne.b-cdn.net/master/about/delayne-russell-outdoor-motion-controlled-tennis.png",
    "alt": "Playing motion-controlled tennis outdoors",
    "width": 600,
    "height": 414
  },
  {
    "url": "https://delayne.b-cdn.net/master/about/delayne-russell-alligator-encounter.png",
    "alt": "An alligator encounter",
    "width": 4000,
    "height": 1868
  }
];
