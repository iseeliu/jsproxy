navigator.serviceWorker.register('/sw.js').then(reg => {
  // sometime later…
  reg.update();
});
