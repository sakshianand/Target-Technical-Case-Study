# myRetail Restful Service
 Restful service that can retrieve product and price details by ID.
 
 1. HTTP GET request at /product/{id} - Returns product data as JSON by retrieving product name from External API and price info from the database(MongoDB)
 
 Example : http://casestudy-myretail-target.herokuapp.com/products/13860428       [GET REQUEST]
 
 Response :
 ```
 {
    "id": "13860428",
    "title": "The Big Lebowski (Blu-ray)",
    "current_price": {
        "value": 13.49,
        "currency_code": "USD"
    }
}
```

2. HTTP PUT request at /products/{id} - Updates the product's price in the Database.
  ```
   Request Body : 
{
    "product_id": "13860428",
    "title": "The Big Lebowski (Blu-ray)",
    "current_price": {
        "value": 40,
        "currency_code": "USD"
    }
}
```




Example: http://casestudy-myretail-target.herokuapp.com/products/13860428   [PUT REQUEST]
  ```
  Request Body
 {
    "product_id": "13860428",
    "title": "The Big Lebowski (Blu-ray)",
    "current_price": {
        "value": 40,
        "currency_code": "USD"
    }
}
```

Response :Success

 
 
