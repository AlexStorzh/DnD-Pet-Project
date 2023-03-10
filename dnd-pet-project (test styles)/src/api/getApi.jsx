const getApiResource = async function (url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("Could not fetch.", console.error());
    return false;
  }
};

export { getApiResource };
