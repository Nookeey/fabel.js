$(() => {
    var fabelEls = [];
    var fabelAnchors = [];

    initFabel();

    $(window).on('scroll', function() {
        for (let i = 0; i < fabelEls.length; i++) {
            fabel(fabelEls[i], fabelAnchors[i]);
        }
    });

    function initFabel() {
        $("[data-fabel-el]").each(function() {
            fabelEls.push($(this));
        });
    
        $("[data-fabel-anchor]").each(function() {
            fabelAnchors.push($(this));
        });
    }

    function fabel(el, anchor) {
        var scrollTop = $(window).scrollTop();
        var anchorOT = anchor.offset().top;

        scrollTop >= anchorOT ? el.css({'position':'fixed', 'top':'0', 'bottom':''}) : el.css({'position':'', 'top':''});

        scrollTop >= ((anchor.height() - el.height())+anchorOT) ? el.css({'position':'absolute', 'top':'', 'bottom':'0'}) : null;
    }
});