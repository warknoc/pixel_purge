document.addEventListener("DOMContentLoaded", () => {
  chrome.declarativeNetRequest.getEnabledRulesets((rulesets) => {
    const active = rulesets.includes("ruleset_1");
    const badge = document.getElementById("shield-status");
    if (active) {
      badge.textContent = "ACTIVE";
      badge.style.backgroundColor = "#238636";
    } else {
      badge.textContent = "OFF";
      badge.style.backgroundColor = "#da3633";
    }
  });
});
