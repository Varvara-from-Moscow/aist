
//${BASE_URL}
//export const BASE_URL = 'http://localhost:8000';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
    return Promise.reject(`Ошибка: ${res.status}`);
}
//http://localhost:8000/api/products/?is_popular=true
//`http://localhost:8000/api/products/?is_popular=${is_popular}`
//http://localhost:8000/api/subcategories/
//`http://localhost:8000/api/products/?category=${category}&available=${available}`
//?category=services
//complects

export const getAllProducts = () => {
  return fetch(`http://localhost:8000/api/products/`, 
  {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}).then((res) => {
  return checkResponse(res);
});
}; 

export const getComplects = (
  {
    category = 'complects',
    available = true,
  } = {}
) => {
  return fetch(`http://localhost:8000/api/products/?category=${category}&available=${available}`, 
  {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}).then((res) => {
  return checkResponse(res);
});
};

export const getServices = (
  {
    category = 'services',
    available = true,
  } = {}
) => {
  return fetch(`http://localhost:8000/api/products/?category=${category}&available=${available}`, 
  {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}).then((res) => {
  return checkResponse(res);
});
}; 

export const getEquipment = (
  {
    category = 'equipment',
    available = true,
  } = {}
) => {
  return fetch(`http://localhost:8000/api/products/?category=${category}&available=${available}`, 
  {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}).then((res) => {
  return checkResponse(res);
});
}; 

export const getPopular = (
  {
    is_popular = true,
    available = true,
  } = {}
) => {
  return fetch(`http://localhost:8000/api/products/?is_popular=${is_popular}&available=${available}`, 
  {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}).then((res) => {
  return checkResponse(res);
});
}; 

export const getProducts = (
  {
    available = true,
  } = {}
) => {
  return fetch(`http://localhost:8000/api/products/?available=${available}`, 
  {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}).then((res) => {
  return checkResponse(res);
});
}; 

export const getEquipmentCategory = (
  {
    category = 'equipment',
  } = {}
) => {
  return fetch(`http://localhost:8000/api/subcategories/?category=${category}`, 
  {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}).then((res) => {
  return checkResponse(res);
});
}; 

export const getServicesCategory = (
  {
    category = 'services',
  } = {}
) => {
  return fetch(`http://localhost:8000/api/subcategories/?category=${category}`, 
  {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}).then((res) => {
  return checkResponse(res);
});
}; 

//`/api/recipes/?page=${page}&limit=${limit}${author ? `&author=${author}` : ''}${is_favorited ? `&is_favorited=${is_favorited}` : ''}${is_in_shopping_cart ? `&is_in_shopping_cart=${is_in_shopping_cart}` : ''}${tagsString}`,