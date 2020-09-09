var rule2 = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {
        hostEquals: 'docs.google.com', schemes: ['https']
      },
    }),
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {
        hostEquals: 'classroom.google.com', schemes: ['https']
      },
    })
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()]
};
chrome.runtime.onInstalled.addListener(function (details) {
  console.log(details)
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([rule2]);
  });
});
