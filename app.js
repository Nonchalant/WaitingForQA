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

        $('.BtnGroup>.js-details-target').prop('disabled', isWip);
        $('.BtnGroup>.js-menu-target').prop('disabled', isWip);

        if (isWip) {
            $('.BtnGroup>.js-details-target').html('Waiting for QA!');
        } else {
            $('.BtnGroup>.js-details-target').html('Merge pull request');
        }
    }
})
