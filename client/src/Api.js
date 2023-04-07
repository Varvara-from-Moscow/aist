
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
//localhost:8000/api/cupons/VALID
export const checkPromo = (promoCode) => {
  return fetch(`${BASE_URL}/cupons/${promoCode}`, 
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

export const postUserDataAndOrder = ({phone_order, first_name, order_price, email, cupon}) => {
  return fetch(`${BASE_URL}/orders/`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone_order: phone_order,
        first_name: first_name,
        order_price: order_price,
        email: email,
        cupon: cupon,
      })
    }).then((res) => {
      return checkResponse(res)
  })
};

export const postOrderItems = ([]) => {
  return fetch(`${BASE_URL}/ordersitems/`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify([
        
      ])
    }).then((res) => {
      return checkResponse(res)
  })
};


//http://localhost:8000/api/ordersitems/
/*

[{
"order": 30,
"product": 19,
"price": 78000,
"quanity": 2
},{
"order": 30,
"product": 18,
"price": 78000,
"quantity": 2
},{
"order": 30,
"product": 27,
"price": 78000,
"quantity": 2
}]




//http://localhost:8000/api/orders/
в ответе 201
параметры + id
{
        "phone_order": "+972533024444",
        "first_name": "dfcz",
        "order_price": 15000,//финальная цена со скидкой или без = итоговая
        "email": "valliv2007@ya.ru",
        "cupon": 7

    }
*/

//`/api/recipes/?page=${page}&limit=${limit}${author ? `&author=${author}` : ''}${is_favorited ? `&is_favorited=${is_favorited}` : ''}${is_in_shopping_cart ? `&is_in_shopping_cart=${is_in_shopping_cart}` : ''}${tagsString}`,