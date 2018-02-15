// script to enable collapsible headers

function getLevel(el) {
    levelStr = el.attr('data-level');
    return parseInt(levelStr.substr(0, levelStr.indexOf(".")));
}


require(['gitbook', 'jQuery'], function(gitbook, $) {
    // Load
    gitbook.events.bind("page.change", function(e, config) {
        // get level of active chapter
        activeChapter = $('ul.summary li.active');
        activeLevel = getLevel(activeChapter);

        // hide all chapter names with a different level
        $('ul.summary li.chapter').each(function(index) {
            if ( getLevel( $(this) ) != activeLevel) {
                $(this).css({
                    display: 'none'
                })
            }
        })

        // make headers clickable
        $('ul.summary li.header').css({
            cursor: 'pointer'
        }).click(function() {
            console.log($(this).next('.chapter:has(a)').children());
            $(this).next('.chapter:has(a)').children()[0].click();
        })
    });
});
