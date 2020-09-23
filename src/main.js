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
  actions: [new chrome.declarativeContent.ShowPageAction(), createContextMenuItems()]
};
chrome.runtime.onInstalled.addListener(function (details) {
  console.log(details)
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([rule2]);
  });
});
function searchOnBrainly(info, tab) {
  chrome.tabs.create({
    url: "https://brainly.com.br/app/ask?q=" + info.selectionText
  });
}
function searchOnGoogle(info, tab) {
  chrome.tabs.create({
    url: "https://google.com/search?q=" + info.selectionText
  });
}
function createContextMenuItems() {
  chrome.contextMenus.create({
    title: "Pesquisar no Brainly",
    contexts: ["selection"],
    onclick: searchOnBrainly
  });
  chrome.contextMenus.create({
    title: "Pesquisar no Google",
    contexts: ["selection"],
    onclick: searchOnGoogle
  });
}

