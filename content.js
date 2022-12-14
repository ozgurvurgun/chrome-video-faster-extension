chrome.runtime.onMessage.addListener(
    function () {
        /* play video twice as fast */
        document.querySelector('video').defaultPlaybackRate = 2.0;
        document.querySelector('video').play();
        /* now play three times as fast just for the heck of it */
        document.querySelector('video').playbackRate = 16.0;
        window.onbeforeunload = function(){
            return '';
        };
    }
);
