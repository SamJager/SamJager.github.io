/*
 * Small Projects data
 * -----------------------------------------------------------------
 * To add a new small project:
 *   1. Create a folder: assets/images/small-projects/<slug>/
 *   2. Drop 1-4 images in it (jpg/png, landscape works best).
 *   3. Copy the template object below, fill it in, add it to the
 *      SMALL_PROJECTS array (newest first is a nice convention).
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

const SMALL_PROJECTS = [
{
      slug: "Fly VR",
      title: "Projected fly VR",
      description: "These are a couple of projector based fly VR systems I built. Both had tight space constraints due to the microscope used to image the fly, resulting in different layouts to fit in the available space while maintaining usabiility.",
      images: [
          "assets/images/small-projects/Fly VR/1.jpg",
          "assets/images/small-projects/Fly VR/2.jpg",
          "assets/images/small-projects/Fly VR/3.jpg"
      ],
      
      slug: "Rat Equip",
      title: "To help a lab study how rats interact with each other in a social context, I built a revolving door and a seesaw. The door needed to lock and unlock, and the seesaw needed an adjustable weight bias towards one side. Both devices were designed to be autoclaved and have not pinch points when they move.",
      description: "",
      images: [
          "assets/images/small-projects/Rat Equip/1.jpg",
          "assets/images/small-projects/Rat Equip/2.jpg",
          "assets/images/small-projects/Rat Equip/3.jpg"
      ],
      
      slug: "Flyris",
      title: "Motorized adjustable ",
      description: "A motorized adjustable diameter arena for fly behavior",
      images: [
          "assets/images/small-projects/Flyris/1.jpg"
      ],
  }
];
