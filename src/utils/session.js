const session = {
  set: (key, val) => window.localStorage.setItem(key, JSON.stringify(val)),
  get: key => JSON.parse(window.localStorage.getItem(key)),
  unset: key => window.localStorage.removeItem(key)
};

export default session;
