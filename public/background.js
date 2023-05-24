chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "copy") {
    chrome.runtime.sendMessage({ type: "copiedText", text: request.text });
  }
});
