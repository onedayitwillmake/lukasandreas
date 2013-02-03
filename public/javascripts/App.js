;(function() {
    window.LA = {};
    window.LA.UUID = 0;
    LA.processURL = function(aURL, type, container) {
        if( type == 'image') {
            LA.processImage(aURL, container);
        } else {
            LA.processVimeoLink(aURL, container)
        }
    }

    LA.processImage = function (aURL, container) {
        var imgContainer = document.createElement('div');
        imgContainer.id = 'media_'+window.LA.UUID++;

        var maxSize = 150;
        var img = document.createElement('img');
        img.src = "/"+aURL;
        img.style.display = "none";
        img.onload = function(){

            var ratio = maxSize / this.width;
            var oWidth = this.width;
            var oHeight = this.height;
            this.style.width = maxSize + "px";
            this.style.height = Math.round(oHeight*ratio) + "px";
            this.style.display = "inline";
        }
        imgContainer.appendChild(img);
        container.appendChild(imgContainer);
    };

    LA.processVimeoLink = function (aURL, container) {
        var parts = aURL.split("/");
        var videoId = parts[ parts.length - 1 ];

        var iframe  = document.createElement("IFRAME");
        iframe.src = "http://player.vimeo.com/video/"+videoId;
        iframe.style.border = "none";
        iframe.style.width = "600px";
        iframe.style.height = "400px";
        container.appendChild(iframe);
    };
})();