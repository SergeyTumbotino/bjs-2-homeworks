function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.find((item) => Object.keys(item)[0] === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache[hash]);
      return "Из кэша: " + objectInCache[hash];
    }

    let result = func(...args);
    cache.push({ [hash]: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }
  return wrapper;
}