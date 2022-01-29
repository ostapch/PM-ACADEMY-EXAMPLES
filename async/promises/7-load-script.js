const loadScript = (url) => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.src = url;

  script.addEventListener('load', () => resolve());

  script.addEventListener('error', () => {
    reject(new Error(`Failed to load script by url: ${url}`));
  });

  document.body.append(script);
});

loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js',
)
  .then(() => {
    console.log('lodash is loaded', window._);
  })
  .catch((err) => {
    console.dir(err.message);
  });
