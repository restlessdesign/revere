/*global tstbklt*/
(function tumblrShareBookmarklet(doc, win, undefined) {
    var getWindowSelection = win.getSelection,
        getDocumentSelection = doc.getSelection,
        document_selection = doc.selection,
        selection = (getWindowSelection ? getWindowSelection() : (getDocumentSelection) ? getDocumentSelection() : (document_selection ? document_selection.createRange().text : 0)),
        share_url = 'http://www.tumblr.com/share',
        location = doc.location,
        encode = encodeURIComponent,
        share_params = '?v=3&u=' + encode(location.href) + '&t=' + encode(doc.title) + '&s=' + encode(selection),
        url = share_url + share_params,
        share_width = 450,
        share_height = 430;

    try {
        if (!/^(.*\.)?tumblr[^.]*$/.test(location.host)) {
            throw (0);
        }

        // Global function on Tumblr which verifies successful installation
        tstbklt();
    }
    catch (err) {
        /**
         * @param {boolean} do_center If "true", the share window will appear
         *     centered in the browser window. Otherwise, it will appear in
         *     the top-left corner of the browser.
         *
         * @return {Object} The x and y coordinates to be used for the pop-up.
         */
        function calculatePosition(do_center) {
            var corner_padding = 10,
                coordinates = {
                    x: 0,
                    y: 0
                };

            coordinates.x = window.screenLeft;
            coordinates.y = window.screenTop;

            if (do_center) {
                coordinates.x += ((document.clientWidth / 2) - (share_width / 2));
                coordinates.y += ((document.clientHeight / 2) - (share_height / 2));
            }
            else {
                coordinates.x += corner_padding;
                coordinates.y += corner_padding;
            }

            return coordinates;
        }

        function openShareWindow() {
            var position = calculatePosition(true);
            if (!win.open(url, 't', 'toolbar=0,resizable=0,status=1,width=' + share_width + ',height=' + share_height + ',left=' + position.x + ',top=' + position.y)) {
                location.href = url;
            }
        }

        if (/Firefox/.test(navigator.userAgent)) {
            setTimeout(openShareWindow, 0);
        }
        else {
            openShareWindow();
        }
    }
})(document, window);