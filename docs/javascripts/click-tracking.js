// Sends GA4 events for course and affiliate link clicks.
(function () {
  var AFFILIATES = [
    { test: /(^|\.)amazon\.com$|(^|\.)amzn\.to$/, name: "amazon" },
    { test: /(^|\.)xtool\.com$/, name: "xtool" },
    { test: /(^|\.)1laser\.com$/, name: "onelaser" },
    { test: /(^|\.)commarker\.com$/, name: "commarker" }
  ];
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || typeof window.gtag !== "function") return;
    var url;
    try { url = new URL(a.href, location.href); } catch (err) { return; }
    var host = url.hostname.replace(/^www\./, "");
    var params = {
      link_url: url.href.slice(0, 100),
      link_text: (a.textContent || "").trim().slice(0, 100),
      page_path: location.pathname,
      transport_type: "beacon"
    };
    if (host === "course.beardedbuildsco.com") {
      window.gtag("event", "course_click", params);
      return;
    }
    for (var i = 0; i < AFFILIATES.length; i++) {
      if (AFFILIATES[i].test.test(host)) {
        params.affiliate = AFFILIATES[i].name;
        window.gtag("event", "affiliate_click", params);
        return;
      }
    }
  });
})();
