function getSelectionText() {
    let text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function openNewBackgroundTab(url){
    chrome.runtime.sendMessage({"message": "open_new_tab", "url": url});
}

$(document).mousedown(function(e){
    if (e.which == 1 && e.metaKey) {
        let highlightedText = getSelectionText();
        if (highlightedText.length){
            let url = 'https://www.google.com/search?q=' + highlightedText;
            return openNewBackgroundTab(url);
        }
    }
});