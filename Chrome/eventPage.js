chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        "id": "ShareX",
        "title": "Upload with ShareX",
        "contexts": ["selection", "image", "video", "audio"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "ShareX") {
        chrome.runtime.sendNativeMessage("com.getsharex.sharex", {
            MediaType: info.mediaType,
            URL: info.srcUrl,
            Text: info.selectionText
        });
    }
});