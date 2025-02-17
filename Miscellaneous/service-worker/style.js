if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => {
      console.log("Service worker register successfully");
    })
    .catch(() => {
      console.log("Error in service worker registration");
    });
}
