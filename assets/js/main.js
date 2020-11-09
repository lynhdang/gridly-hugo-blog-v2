window.addEventListener(
    'load',
    function () {
        /** Lazy Images loading ***/
        loadImgSRC();
    },
    false
);

window.addEventListener(
    'resize',
    function () {
        /** Lazy Images loading ***/
        loadImgSRC();
    },
    false
);

function loadImgSRC() {
    var width = window.innerWidth || document.documentElement.clientWidth;
    var srcKey = 'data-src';
    if (width < 769) {
        srcKey = 'mobile-data-src';
    }
    /** Lazy Images loading ***/
    var allimages = document.getElementsByTagName('img');
    for (var i = 0; i < allimages.length; i++) {
        var srcImg = allimages[i].getAttribute(srcKey) || allimages[i].getAttribute('data-src');

        if (srcImg) {
            allimages[i].setAttribute('src', srcImg);
        }
    }
}
