<?php
require_once 'modele/Modele.php';

class Product extends Modele {

  // attributes
  private $att1;
  private $att2;
  private $att3;

  // get product list
  public function getProducts() {
    $sql = '';
    $products = $this->executerRequete($sql);
    return $products;
  }

  // get informations on a product
  public function getProduct($idProduct) {
    $sql = '';
    $product = $this->executerRequete($sql, array($idProduct));
    if ($product->rowCount() == 1)
      return $product->fetch();  
    else
      throw new Exception("Aucune information ne correspond à l'identifiant '$idProduct'");
    }

  // create a product
  public function addProduct($att1, $att2 ,.... $attn) {
    $sql = 'insert into T_XXX(date, att_1, att_2, att_3)'
      . ' values(?, ?, ?, ?)';
    $date = date(DATE_W3C);  //
    $this->executerRequete($sql, array($date, $att1, $att2, $att3));
  }

  // update a product
  public function updateProduct($idProduct) {
    
  }

  // delete a product
  public function deleteProduct($idProduct) {
    
  }

  // give a note to product
  public function setProductNote($idProduct, $note) {
    
  }

  // get note of a product
  public function getProductNote($idProduct) {
    
  }

}
?>