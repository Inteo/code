$(function () {

    $('[data-fancybox]').fancybox({
        btnTpl: {
            smallBtn:
                '<div class="modal-close" data-fancybox-close><svg width="18" height="18"><use xlink:href="#icon-close"></use></svg></div>'
        }

    });
});

let lazyLoad = function () {
    // lazy load
    const observer = window.lozad();
    observer.observe();
};

$(lazyLoad);

// AppPopup
$(function () {
    const POPUP_SELECTOR = $('[data-popup]'),
        POPUP_SHOW_CLASS = 'show-popup';

    $('[data-popup-link]').on('click', function () {
        const select = $(this).data('popup-link'),
            el = $('[data-popup="' + select + '"]');
        POPUP_SELECTOR.not(el).removeClass(POPUP_SHOW_CLASS);
        el.toggleClass(POPUP_SHOW_CLASS, !el.is($('.' + POPUP_SHOW_CLASS)));
        return false;
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest('.' + POPUP_SHOW_CLASS).length === 0) POPUP_SELECTOR.removeClass(POPUP_SHOW_CLASS);
    });
});
