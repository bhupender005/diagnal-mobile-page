const getResponse = (page) => {
  if (![1, 2, 3].includes(page)) page = 1;
  return require(`./dummy/response-${page}.json`);
};

const fetchMovieList = (page = 1) =>
  new Promise((resolve, reject) => {
    // dummy api time
    const responseTime = 100 * Math.floor(Math.random() * 10) + 100; // 100 - 1000 secs
    setTimeout(() => {
      resolve(getResponse(page));
    }, responseTime);
  });

export { fetchMovieList };
