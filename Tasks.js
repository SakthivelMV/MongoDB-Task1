1. Find all the information about each products:

> db.products.find().pretty()

//

2. Find the product name and product material of each products:

> db.products.find({},{product_price:1,product_material:1,_id:0}).pretty()

//

3.Find the product with a row id of 10:

db.products.find({"id":"10"}).pretty()
{
        "_id" : ObjectId("64c542913928457a1e1c0fe0"),
        "id" : "10",
        "product_name" : "Generic Wooden Pizza",
        "product_price" : 84,
        "product_material" : "Frozen",
        "product_color" : "indigo"
}

//
4. Find the product price which are between 400 to 800:

> db.products.find({product_price:{$gte:400,$lte:800}})

//

5.Find the product price which are not between 400 to 600:

> db.products.find({$or:[{product_price:{$lte:400}},{product_price:{$gte:800}}]}).pretty()

//

6. List the four product which are grater than 500 in price:

> db.products.find({product_price:{$gt:500}}).limit(4)

//

7. Find only the product name and product material:

> db.products.find({},{product_price:1,product_material:1,_id:0}).pretty()

//

8. Find all products which contain the value of soft in product material:

> db.products.find({"product_material":"Soft"})

//

9. Find products which contain product color indigo  and product price 492.00:

> db.products.find({$and:[{"product_color":"indigo"},{"product_price":"492.00"}]}).pretty()

//

10. Delete the products which product price value are same:
db.products.deleteMany({product_price:36})
{ "acknowledged" : true, "deletedCount" : 2 }






