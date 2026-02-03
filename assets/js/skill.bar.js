(function ($) {
    "use strict";

    function animateSkillBars() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();

        $('.skillbar').each(function () {
            var $this = $(this);
            var $bar = $this.find('.skillbar-bar');
            var offsetTop = $this.offset().top;

            // Trigger when the element is well within the viewport
            if (scrollPos + windowHeight > offsetTop + 50) {
                var percent = $this.attr('data-percent');
                $bar.css('width', percent);
            }
        });
    }

    // Attach to scroll and resize
    $(window).on('scroll resize', animateSkillBars);

    // Initial check on load
    $(document).ready(function () {
        // Delay slightly to ensure layout is ready
        setTimeout(animateSkillBars, 500);
    });

}(jQuery));
