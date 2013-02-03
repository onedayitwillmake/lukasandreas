;(function() {
    window.LA = {};
    window.LA.UUID = 0;
    LA.processURL = function(aURL, type, container, maxWidth) {
        if( type == 'image') {
            LA.processImage(aURL, container, maxWidth);
        } else {
            LA.processVimeoLink(aURL, container, maxWidth)
        }
    }

    LA.processImage = function (aURL, container, maxWidth) {
        var imgContainer = document.createElement('div');
        imgContainer.id = 'media_'+window.LA.UUID++;

        var img = document.createElement('img');
        img.src = "/"+aURL;
        img.style.display = "none";
        img.onload = function(){
            var ratio = maxWidth / this.width;
            var oWidth = this.width;
            var oHeight = this.height;
            this.style.width = maxWidth+ "px";
            this.style.height = Math.round(oHeight*ratio) + "px";
            this.style.display = "inline";
        }
        imgContainer.appendChild(img);
        container.appendChild(imgContainer);
    };

    LA.processVimeoLink = function (aURL, container, maxWidth) {
        var parts = aURL.split("/");
        var videoId = parts[ parts.length - 1 ];

        var iframe  = document.createElement("IFRAME");
        iframe.src = "http://player.vimeo.com/video/"+videoId;
        iframe.style.border = "none";
        iframe.style.width = "700px";
        iframe.style.height = "400px";
        container.appendChild(iframe);
    };
})();