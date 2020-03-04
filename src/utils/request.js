const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};

const handleResponse = (url, res) => {
  if (res.status === 200) {
    return res.json();
  } else {
    console.error(`Request failed. Url = ${url}`);
    return Promise.reject({
      error: { message: 'Request failed due to server error' }
    });
  }
};

const get = url => {
  return fetch(url, {
    method: 'GET',
    headers
  })
    .then(res => {
      return handleResponse(url, res);
    })
    .catch(err => {
      console.error(`Request failed. Url = ${url}. Message=${err}`);
      return Promise.reject({ error: { message: 'Request failed' } });
    });
};

const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers
  })
    .then(res => {
      return handleResponse(url, res);
    })
    .catch(err => {
      console.error(`Request failed. Url = ${url}. Message=${err}`);
      return Promise.reject({ error: { message: 'Request failed' } });
    });
};

export { get, post };
