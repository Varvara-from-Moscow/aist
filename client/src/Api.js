
//${BASE_URL}
//export const BASE_URL = '/api';
export const BASE_URL = '//localhost:8000/api';

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
//213.184.131.218
//`${BASE_URL}/signup`

export const postBackCall = ( {name, phone_number} ) => {
  return fetch(`${BASE_URL}/callbacks/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      phone_number: phone_number,
      })
  }).then((res) => {
    console.log(res);
    return checkResponse(res);
  });
};

export const getAllProducts = () => {
  return fetch(`${BASE_URL}/products/`, 
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
  return fetch(`${BASE_URL}/products/?category=${category}&available=${available}`, 
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
  return fetch(`${BASE_URL}/products/?category=${category}&available=${available}`, 
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
  return fetch(`${BASE_URL}/products/?category=${category}&available=${available}`, 
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
  return fetch(`${BASE_URL}/products/?is_popular=${is_popular}&available=${available}`, 
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
  return fetch(`${BASE_URL}/products/?available=${available}`, 
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
  return fetch(`${BASE_URL}/subcategories/?category=${category}`, 
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
  return fetch(`${BASE_URL}/subcategories/?category=${category}`, 
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