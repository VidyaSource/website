// Runs before first paint. Keep it tiny, synchronous, and free of dependencies.
// A stored choice (`light` or `dark`) goes into the color-scheme meta tag. With no stored
// choice the tag keeps `light dark` and the system setting decides, in CSS, with no script.
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var meta = document.querySelector('meta[name="color-scheme"]');
    if (meta && (stored === 'light' || stored === 'dark')) {
      meta.content = stored;
    }
  } catch (e) {
    // Storage can be blocked. The page then follows the system setting.
  }
})();
