$(function() {
    controlMerge()

    if ($('.js-discussion')[0]) {
        new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                controlMerge();
            });
        }).observe($('.js-discussion')[0], { childList: true });
    }

    function isWipPR() {
        return $('.sidebar-labels-style')
            .filter ((_, e) => e.text.includes("Waiting for QA"))
            .length >= 1
    }

    function controlMerge() {
        isWip = isWipPR()

        $('.btn-group-merge>.js-details-target').prop('disabled', isWip);
        $('.btn-group-merge>.js-menu-target').prop('disabled', isWip);

        if (isWip) {
            $('.btn-group-merge>.js-details-target').html('Waiting for QA!');
        } else {
            $('.btn-group-merge>.js-details-target').html('Merge pull request');
        }
    }
})
