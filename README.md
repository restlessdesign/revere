# Revere

An improved Tumblr share bookmarklet.

## Installation

Update the URL of your bookmarklet to the following:

```javascript
javascript:var win=window,doc=document,bod=doc.body,getWindowSelection=win.getSelection,getDocumentSelection=doc.getSelection,document_selection=doc.selection,selection=getWindowSelection?getWindowSelection():getDocumentSelection?getDocumentSelection():document_selection?document_selection.createRange().text:0,share_url="http://www.tumblr.com/share",loc=doc.location,encode=encodeURIComponent,share_params="?v=3&u="+encode(loc.href)+"&t="+encode(doc.title)+"&s="+encode(selection),url=share_url+share_params,share_width=
450,share_height=430;
try{if(!/^(.*\.)?tumblr[^.]*$/.test(loc.host))throw 0;tstbklt()}catch(err){var calculatePosition=function(b){var a={x:0,y:0};a.x=win.screenLeft;a.y=win.screenTop;b?(a.x+=bod.clientWidth/2-share_width/2,a.y+=bod.clientHeight/2-share_height/2):(a.x+=10,a.y+=110);return a},openShareWindow=function(){var b=calculatePosition(!0);win.open(url,"t","toolbar=0,resizable=0,status=1,width="+share_width+",height="+share_height+",left="+b.x+",top="+b.y)||(loc.href=url)};/Firefox/.test(navigator.userAgent)?setTimeout(openShareWindow,
0):openShareWindow()}void 0;
```

## Customization

By default, the new share window will appear centered within your current browser window. 
You can set it to open near the top-left corner of the browser window by changing this line of code:

```javascript
var position = calculatePosition(true);
```

to this:

```javascript
var position = calculatePosition();
```

Inside of `calculatePosition()`, you can further edit the offsets to your liking.
