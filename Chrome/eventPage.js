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

    chrome.contextMenus.create({
        "id": "ShareX_Shorten_URL",
        "title": "Shorten URL with ShareX",
        "contexts": ["link"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    let application = "com.getsharex.sharex";

    switch (info.menuItemId) {
        case "ShareX_Upload_Image":
            chrome.runtime.sendNativeMessage(application, {
                ContentType: "Image",
                URL: info.srcUrl
            });
            break;
        case "ShareX_Upload_Video":
            chrome.runtime.sendNativeMessage(application, {
                ContentType: "Video",
                URL: info.srcUrl
            });
            break;
        case "ShareX_Upload_Audio":
            chrome.runtime.sendNativeMessage(application, {
                ContentType: "Audio",
                URL: info.srcUrl
            });
            break;
        case "ShareX_Upload_Text":
            chrome.runtime.sendNativeMessage(application, {
                ContentType: "Text",
                Text: info.selectionText
            });
            break;
        case "ShareX_Shorten_URL":
            chrome.runtime.sendNativeMessage(application, {
                ContentType: "Link",
                URL: info.linkUrl
            });
            break;
    }
});