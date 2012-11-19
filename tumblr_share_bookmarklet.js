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
        function centerShareWindow() {

        }

        function openShareWindow() {
            if (!win.open(url, 't', 'toolbar=0,resizable=0,status=1,width=' + share_width + ',height=' + share_height)) {
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