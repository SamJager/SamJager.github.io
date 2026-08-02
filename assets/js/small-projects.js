/*
 * Renders PROJECTS (see small-projects-data.js) into cards and
 * wires up a simple lightbox for browsing each project's photos.
 */

(function () {
    const grid = document.getElementById('small-projects-grid');
    const emptyState = document.getElementById('small-projects-empty');
    if (!grid) return;

    const projects = typeof PROJECTS !== 'undefined' ? PROJECTS : [];

    if (projects.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    let activeProject = null;
    let activeIndex = 0;

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxClose = document.getElementById('lightbox-close');

    function openLightbox(project, index) {
        activeProject = project;
        activeIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        activeProject = null;
    }

    function updateLightbox() {
        if (!activeProject) return;
        const images = activeProject.images;
        lightboxImg.src = images[activeIndex];
        lightboxImg.alt = activeProject.title + ' - photo ' + (activeIndex + 1);
        lightboxTitle.textContent = activeProject.title;
        lightboxDescription.textContent = activeProject.description;
        lightboxCounter.textContent = images.length > 1 ? (activeIndex + 1) + ' / ' + images.length : '';
        const showArrows = images.length > 1;
        lightboxPrev.style.display = showArrows ? 'flex' : 'none';
        lightboxNext.style.display = showArrows ? 'flex' : 'none';
    }

    function showPrev() {
        if (!activeProject) return;
        activeIndex = (activeIndex - 1 + activeProject.images.length) % activeProject.images.length;
        updateLightbox();
    }

    function showNext() {
        if (!activeProject) return;
        activeIndex = (activeIndex + 1) % activeProject.images.length;
        updateLightbox();
    }

    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

    projects.forEach(function (project) {
        const card = document.createElement('div');
        card.className = 'small-project-card';

        const thumb = document.createElement('div');
        thumb.className = 'small-project-thumb';
        const img = document.createElement('img');
        img.src = project.images[0];
        img.alt = project.title;
        thumb.appendChild(img);
        if (project.images.length > 1) {
            const badge = document.createElement('span');
            badge.className = 'photo-count-badge';
            badge.textContent = '📷 ' + project.images.length;
            thumb.appendChild(badge);
        }
        thumb.addEventListener('click', function () {
            openLightbox(project, 0);
        });
        card.appendChild(thumb);

        const info = document.createElement('div');
        info.className = 'small-project-info';

        const title = document.createElement('h3');
        title.textContent = project.title;
        info.appendChild(title);

        if (project.date) {
            const date = document.createElement('p');
            date.className = 'small-project-date';
            date.textContent = project.date;
            info.appendChild(date);
        }

        if (project.tags && project.tags.length) {
            const tagWrap = document.createElement('div');
            tagWrap.className = 'small-project-tags';
            project.tags.forEach(function (tag) {
                const tagEl = document.createElement('span');
                tagEl.className = 'tech-tag';
                tagEl.textContent = tag;
                tagWrap.appendChild(tagEl);
            });
            info.appendChild(tagWrap);
        }

        const desc = document.createElement('p');
        desc.className = 'small-project-description';
        desc.textContent = project.description;
        info.appendChild(desc);

        if (project.link && project.link.url) {
            const link = document.createElement('a');
            link.href = project.link.url;
            if (/^https?:\/\//.test(project.link.url)) {
                link.target = '_blank';
                link.rel = 'noopener';
            }
            link.className = 'project-link';
            link.textContent = (project.link.label || 'View') + ' →';
            info.appendChild(link);
        }

        card.appendChild(info);
        grid.appendChild(card);
    });
})();
