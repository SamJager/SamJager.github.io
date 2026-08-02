# SamJager.github.io

## Adding a project

The "Projects" section on the homepage is data-driven, so adding one doesn't
require writing any HTML:

1. Create a folder `assets/images/small-projects/<slug>/` and drop in
   1-4 photos (jpg/png).
2. Open `assets/js/small-projects-data.js` and add an entry to the
   `PROJECTS` array (newest first):
   ```js
   {
       slug: "unique-id",
       title: "Project Title",
       date: "Mon Year",
       tags: ["Tag One", "Tag Two"],
       description: "A couple sentences about what it is and why you built it.",
       images: [
           "assets/images/small-projects/unique-id/1.jpg",
           "assets/images/small-projects/unique-id/2.jpg"
       ],
       link: null // optional: { url: "https://...", label: "GitHub Repo" }
   }
   ```
3. Commit and push - the card and photo lightbox render automatically.

For a project that deserves its own full write-up page, copy
`projects/project-template.html` instead, then set the entry's `link` to
point at it (e.g. `{ url: "projects/your-project.html", label: "Full Write-Up" }`).
