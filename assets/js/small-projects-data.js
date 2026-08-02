/*
 * Projects data
 * -----------------------------------------------------------------
 * To add a new project:
 *   1. Create a folder: assets/images/small-projects/<slug>/
 *   2. Drop 1-4 images in it (jpg/png, landscape works best).
 *   3. Copy the template object below, fill it in, add it to the
 *      PROJECTS array (newest first is a nice convention).
 * That's it - no new HTML page needed. The card + photo lightbox
 * are generated automatically by small-projects.js.
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
        description: "A one-piece aerobar setup designed and built from scratch: an aluminum frame with 3D printed forearm cups, custom-fitted to my riding position.",
        images: [
            "assets/images/aerobars/bike-installed.jpg",
            "assets/images/aerobars/cad-render-1.jpg",
            "assets/images/aerobars/cad-render-2.jpg"
        ],
        link: null
    },
    {
        slug: "large-format-3d-printer",
        title: "High Temp Large Format 3D Printer",
        description: "A custom-built 3D printer with a metal motion system, triple ball screw Z axes, and 2-axis bed tilt, built for engineering-grade materials and future 5-axis printing.",
        images: [
            "assets/images/printer/FunctionalFront.jpg",
            "assets/images/printer/FunctionalTop.jpg",
            "assets/images/printer/FrameAndMotionSystem.jpg",
            "assets/images/printer/WithBuildPlate.jpg"
        ],
        link: null
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
            "assets/images/small-projects/Moving Hex Arena/5.png",
            "assets/images/small-projects/Moving Hex Arena/6.jpg",
            "assets/images/small-projects/Moving Hex Arena/7.jpg"
        ],
        link: null
    },
    {
        slug: "well-plate-robot",
        title: "Well Plate Robot",
        description: "An automated system that cycles 56 well plates onto an imaging platform over a 24-hour period.",
        images: [
            "assets/images/small-projects/Well plate robot/1.png",
            "assets/images/small-projects/Well plate robot/2.png",
            "assets/images/small-projects/Well plate robot/3.jpg",
            "assets/images/small-projects/Well plate robot/4.jpg",
            "assets/images/small-projects/Well plate robot/5.jpg"
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
            "assets/images/small-projects/Fly VR/3.jpg",
            "assets/images/small-projects/Fly VR/4.png",
            "assets/images/small-projects/Fly VR/5.jpg",
            "assets/images/small-projects/Fly VR/6.jpg"
        ],
        link: null
    },
    {
        slug: "Torque-joystick",
        title: "Torque Sensing Joystick",
        description: "Two joysticks that can be actuated with a stepper motor, control reistance with a brake, measure torque with a torque sensor, and have multiple degrees of manual adjustability.",
        images: [
            "assets/images/small-projects/Torque Sensing Joystick/1.jpg",
            "assets/images/small-projects/Torque Sensing Joystick/2.jpg",
            "assets/images/small-projects/Torque Sensing Joystick/3.jpg"
        ],
        link: null
    },
    {
        slug: "Well-illum",
        title: "Well Plate Illuminator",
        description: "A simple Frame to hold Fiber optic cables, illuminating a well plate from below.",
        images: [
            "assets/images/small-projects/Well Plate Illuminator/1.jpg",
            "assets/images/small-projects/Well Plate Illuminator/2.jpg"
        ],
        link: null
    },
    {
        slug: "Small-Printer",
        title: "Small Volume Resin Printer",
        description: "A custom build plate and vat for a resin printer allowing printing with very small resin volumes",
        images: [
            "assets/images/small-projects/Small Volume Printer/1.jpg",
            "assets/images/small-projects/Small Volume Printer/2.jpg",
            "assets/images/small-projects/Small Volume Printer/3.jpg"
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
];
