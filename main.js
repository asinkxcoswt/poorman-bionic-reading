function setUpContextMenus() {
  chrome.contextMenus.create({
    id: "bionify",
    title: "bionify",
    contexts: ["selection"],
  });
}

chrome.runtime.onInstalled.addListener(function () {
  // When the app gets installed, set up the context menus
  setUpContextMenus();
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ["bionify.js"],
  });
});
