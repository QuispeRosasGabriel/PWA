self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("style.css")) {
    event.respondWith(fetch(null));
  } else {
    event.respondWith(fetch(event.request));
  }
});
