/*
 * Projects data
 * -----------------------------------------------------------------
 * To add a new project:
 *   1. Create a folder: assets/images/small-projects/<slug>/
 *   2. Drop 1-4 images in it (jpg/png, landscape works best).
 *   3. Copy the template object below, fill it in, add it to the
 *      PROJECTS array (newest first is a nice convention).
 * That's it - no new HTML page needed. The card + photo lightbox
 * are generated automatically by small-projects.js. If a project has
 * its own full write-up page, add a "link" pointing to it.
 *
 * Template:
 * {
 *     slug: "unique-id",
 *     title: "Project Title",
 *     date: "Mon Year",
 *     tags: ["Tag One", "Tag Two"],
 *     description: "A couple sentences about what it is, why you built it, and anything interesting that happened.",
 *     images: [
 *         "assets/images/small-projects/unique-id/1.jpg",
 *         "assets/images/small-projects/unique-id/2.jpg"
 *     ],
 *     link: null // optional: { url: "https://...", label: "GitHub Repo" }
 * }
 */

const PROJECTS = [
    {
        slug: "custom-aerobars",
        title: "Custom Aerobars Design",
        date: "2025",
        tags: ["CAD Design", "3D Printing", "Machining"],
        description: "A one-piece aerobar setup designed and built from scratch: an aluminum frame with 3D printed forearm cups, custom-fitted to my riding position for a fraction of what pro-level setups cost.",
        images: [
            "assets/images/aerobars/bike-installed.jpg",
            "assets/images/aerobars/cad-render-1.jpg",
            "assets/images/aerobars/cad-render-2.jpg"
        ],
        link: { url: "projects/custom-aerobars.html", label: "Full Write-Up" }
    },
    {
        slug: "large-format-3d-printer",
        title: "High Temp Large Format 3D Printer",
        date: "2024–Present",
        tags: ["CAD Design", "Fabrication", "Software"],
        description: "A custom-built 3D printer with a metal motion system, triple ball screw Z axes, and 2-axis bed tilt, built for engineering-grade materials and future 5-axis printing.",
        images: [
            "assets/images/printer/FunctionalFront.jpg",
            "assets/images/printer/FunctionalTop.jpg",
            "assets/images/printer/FrameAndMotionSystem.jpg",
            "assets/images/printer/WithBuildPlate.jpg"
        ],
        link: { url: "projects/large-format-3D-printer.html", label: "Full Write-Up" }
    },
    {
        slug: "moving-hex-arena",
        title: "Moving Hex Arena",
        description: "A motorized hexagonal arena that automatically reconfigures itself for mouse behavioral studies.",
        images: [
            "assets/images/small-projects/Moving Hex Arena/1.png",
            "assets/images/small-projects/Moving Hex Arena/2.png",
            "assets/images/small-projects/Moving Hex Arena/3.png",
            "assets/images/small-projects/Moving Hex Arena/4.png",
            "assets/images/small-projects/Moving Hex Arena/5.png"
        ],
        link: null
    },
    {
        slug: "well-plate-robot",
        title: "Well Plate Robot",
        description: "An automated system that cycles 56 well plates onto an imaging platform over a 24-hour period.",
        images: [
            "assets/images/small-projects/Well plate robot/1.png",
            "assets/images/small-projects/Well plate robot/2.png"
        ],
        link: null
    },
    {
        slug: "flyris",
        title: "Flyris",
        description: "A motorized arena with an adjustable diameter, built for fly behavior studies.",
        images: [
            "assets/images/small-projects/Flyris/1.png"
        ],
        link: null
    },
    {
        slug: "rat-equip",
        title: "Rat Social Interaction Equipment",
        description: "A revolving door and a seesaw built to help a lab study rat social interaction. The door needed to lock and unlock, and the seesaw needed an adjustable weight bias to one side. Both were designed to be autoclaved and have no pinch points when in motion.",
        images: [
            "assets/images/small-projects/Rat Equip/1.png",
            "assets/images/small-projects/Rat Equip/2.png"
        ],
        link: null
    },
    {
        slug: "fly-vr",
        title: "Projected Fly VR",
        description: "A pair of projector-based fly VR systems, each built around tight space constraints from the microscope used to image the fly, resulting in different layouts to fit the available space while maintaining usability.",
        images: [
            "assets/images/small-projects/Fly VR/1.png",
            "assets/images/small-projects/Fly VR/2.png",
            "assets/images/small-projects/Fly VR/3.png"
        ],
        link: null
    }
];
