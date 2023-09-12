const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  let [resource, options] = args;
  const authLs = localStorage.getItem("auth");
  const auth = authLs ? JSON.parse(authLs) : null;

  const headers = options?.headers || {};

  if (auth) {
    options!.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
      Authorization: `Bearer ${auth.user.businesses[0].secret_key!}`,
    };
  }
  const response = await originalFetch(resource, options);
  return response;
};
