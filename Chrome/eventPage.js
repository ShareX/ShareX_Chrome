chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        "id": "ShareX_Upload_Image",
        "title": "Upload image with ShareX",
        "contexts": ["image"]
    });

    chrome.contextMenus.create({
        "id": "ShareX_Upload_Video",
        "title": "Upload video with ShareX",
        "contexts": ["video"]
    });

    chrome.contextMenus.create({
        "id": "ShareX_Upload_Audio",
        "title": "Upload audio with ShareX",
        "contexts": ["audio"]
    });

    chrome.contextMenus.create({
        "id": "ShareX_Upload_Text",
        "title": "Upload text with ShareX",
        "contexts": ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    let application = "com.getsharex.sharex";

    if (info.menuItemId === "ShareX_Upload_Image" ||
        info.menuItemId === "ShareX_Upload_Video" ||
        info.menuItemId === "ShareX_Upload_Video") {
        chrome.runtime.sendNativeMessage(application, {
            MediaType: info.mediaType,
            URL: info.srcUrl
        });
    }
    else if (info.menuItemId === "ShareX_Upload_Text") {
        chrome.runtime.sendNativeMessage(application, {
            Text: info.selectionText
        });
    }
});