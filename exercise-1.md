# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

GET /stock = retrieves stock list
GET /stock/:id = retrieves specific stock item (i.e. milk, coffee beans)
POST /stock = adds new item to stock list
PUT /stock/:id = updates stock by id
DELETE /stock/:id = removes stock by id

GET /sales = retrieves sales data
GET sales/:id = retrieves sale data by id
POST /sales = adds a new sale
PUT /sales/:id = updates sale by id (ie. if wrong item was punched)
DELETE sales/:id = removes sale by id

GET /customer = retrieves data of all customers
GET /customer/:id = retrieves data of customer by id
POST /customer = adds new customer
PUT /customer/:id = changes customer contact info
DELETE /customer/:id = removes customer by id

GET /seating = retrieves seating plan
GET /seat/:id = retrieves seat by id
POST /seat = adds new seat
PUT /seat/:id = updates specific seat (ie. if someone is sitting)
DELETE /seat/:id = removes seat by id
