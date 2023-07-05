






document.addEventListener("DOMContentLoaded", function () {
    var gallery = document.querySelector(".image-gallery");
    var masonry;

    function initMasonry() {
        masonry = new Masonry(gallery, {
            // itemSelector: ".image-gallery img",
            // columnWidth: ".image-gallery img",
            percentPosition: true,
            transitionDuration: "0.1s",
            gutter: 1 /* Adjust the gutter size to match the CSS gap value */
        });
    }

    function refreshMasonry() {
        if (masonry) {
            masonry.layout();
        }
    }

    function handleImagesLoaded() {
        refreshMasonry();
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function onResize() {
        debounce(refreshMasonry, 200)();
    }

    // Initialize Masonry on DOMContentLoaded event
    initMasonry();

    // Refresh Masonry layout on images loaded
    imagesLoaded(gallery).on("progress", handleImagesLoaded);

    // Refresh Masonry layout on window resize
    window.addEventListener("resize", onResize);
});
