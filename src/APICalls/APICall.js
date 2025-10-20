export const apiCall = async (url, config) => {
  config = {
    ...config,
    "X-CSRF-Token": sessionStorage.getItem("antiforgeryToken"),
  };
  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error(response);
  }
  const data = await response.json();
  return data;
};
