# myRetail Restful Service
 Restful service that can retrieve product and price details by ID.
 
 1. HTTP GET request at /product/{id} - Delivers product data as JSON by retrieving product name from External API and price info from database(MongoDB)
 
 Example : http://casestudy-myretail-target.herokuapp.com/products/13860428       [GET REQUEST]
 
 Response :
 {
    "id": "13860428",
    "title": "The Big Lebowski (Blu-ray)",
    "current_price": {
        "value": 13.49,
        "currency_code": "USD"
    }
}

 
 
