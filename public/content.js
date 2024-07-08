// Execute the script when the element is clicked (assuming you have an element to click)
document.getElementById("yourElementId").addEventListener("click", execScript);

async function execScript() {
  const tabId = await getTabId();
  
  // Inject the script directly into the DOM
  const script = document.createElement('script');
  script.src = "colorblind_opt.js";
  document.head.appendChild(script);
}

async function getTabId() {
  return { id: 1 };
}