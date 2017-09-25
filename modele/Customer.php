<?php
require_once 'modele/Modele.php';

class Customer extends Modele {

  //attributes


  // get customer list
  public function getCustomers() {
    $sql = '';
    $customers = $this->executerRequete($sql);
    return $customers;
  }

  // get informations on a customer
  public function getCustomer($idCustomer) {
    $sql = '';
    $customer = $this->executerRequete($sql, array($idProduct));
    if ($customer->rowCount() == 1)
      return $customer->fetch();  
    else
      throw new Exception("Aucune information ne correspond à l'identifiant '$id'");
    }

  // create a customer
  public function addCustomer($att1, $att2 ,.... $attn) {
    $sql = 'insert into T_XXX(date, att_1, att_2, att_3)'
      . ' values(?, ?, ?, ?)';
    $date = date(DATE_W3C);  //
    $this->executerRequete($sql, array($date, $att1, $att2, $att3));
  }

  
}
?>