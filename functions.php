<?php

//require MYSql connection
require "database/DBController.php";

//require product class
require "database/Product.php";

//require cart class
require "database/Cart.php";
  
//object of DB
$db = new DBController();

//product object
$product = new Product($db);
$product_shuffle = $product->getdata();

//cart object
$cart = new Cart($db);


