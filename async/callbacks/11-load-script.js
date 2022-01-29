const loadScript = (url, callback) => {
  const script = document.createElement('script');
  script.src = url;

  script.addEventListener('load', () => callback());

  script.addEventListener('error', () => {
    callback(new Error(`Failed to load script by url: ${url}`));
  });

  document.body.append(script);
};

loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js',
  (err) => {
    if (err) {
      console.dir(err.message);
      return;
    }

    console.log('lodash is loaded', window._);
  },
);
