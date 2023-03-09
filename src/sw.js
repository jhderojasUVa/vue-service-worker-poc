self.addEventListener('install', function (event) {
  console.log('installed');
});

self.addEventListener('fetch', function (event) {
  console.log('fetched service');
});
