// if ("serviceWorker" in navigator) {
//   console.log("podemos usarlo");
// }
//confirmar si podemos usar el service worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js");
}
