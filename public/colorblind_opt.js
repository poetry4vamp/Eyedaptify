// Colorblind options
window.selectedFilter = null;

function setSelected(value) {
  // Set the selected value directly in the DOM
  document.getElementById(value).checked = true;
}

function injectFilter(fileName, tabId) {
  // Inject the filter directly into the DOM
  const script = document.createElement('script');
  script.src = fileName;
  document.head.appendChild(script);
}

async function getCurrentTab() {
  return { id: 1 };
}

document.querySelectorAll('[id^="radio"]').forEach((radioButton) => {
  const filter = radioButton.parentElement.id.replace("option-", "");
  radioButton.addEventListener("click", async function () {
    const tab = await getCurrentTab();
    // Page-specific filters (direct manipulation of the DOM)
    setSelected(radioButton.id);
    injectFilter(`filters/${filter}.js`, tab.id);
    // Popup-specific filters (assuming applyFilter is defined)
    applyFilter((window.selectedFilter = filter));
  });
});