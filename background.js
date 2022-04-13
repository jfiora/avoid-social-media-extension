chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "utils.js"});
});