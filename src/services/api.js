// const BASE_URL = 'https://62a75be897b6156bff8d22e4.mockapi.io';
const BASE_URL_ConnectionsAPI = 'https://connections-api.herokuapp.com';

const fetchData = async (endpoint, options = {}) => {
  const res = await fetch(`${BASE_URL_ConnectionsAPI}/${endpoint}`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const getData = (endpoint, options = {}) => fetchData(endpoint, { ...options });

const addItem = (endpoint, item, options = {}) => {
  const finalOptions = {
    method: 'POST',
    body: JSON.stringify(item),
    ...options,
  };
  return fetchData(endpoint, finalOptions);
};

const editItem = (endpoint, item, options = {}) => {
  const finalItem = {
    name: item.name,
    number: item.number,
  };
  console.log('finalItem', finalItem);
  const finalOptions = {
    method: 'PATCH',
    body: JSON.stringify(finalItem),
    ...options,
  };
  console.log('finalOptions.body', finalOptions.body);
  return fetchData(`${endpoint}/${item.id}`, finalOptions);
};

const deleteItem = (endpoint, id, options = {}) =>
  fetchData(`${endpoint}/${id}`, { method: 'DELETE', ...options });

export { getData, addItem, editItem, deleteItem };
