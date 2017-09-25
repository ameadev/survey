<?php
header ('Content-Type : application/json');
include ('../modele/Product.php');
try 
{
    $product = new Product();

} 
catch (Exception $e) 
{
	$apiReturn["success"] = false;
	$apiReturn["message"] = "";
}

$products = $product.getProducts();
$apiReturn["success"] = true;
$apiReturn["message"] = "";
$apiReturn["results"]["count"] = count($products);
$apiReturn["results"]["products"] = $products;
json_encode($apiReturn);

?>