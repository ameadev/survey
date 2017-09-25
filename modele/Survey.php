<?php
require_once 'Modele/Modele.php';

class Survey extends Modele {

  // attributes

  // constructor
  public function __construct($att1, $att2 ,.... $attn) {
    $this->att1 = $att1;
    $this->att2 = $att2;
    $this->att3 = $att3;
  }

  // get surveys list
  public function getSurveys() {
    $sql = '';
    $products = $this->executerRequete($sql);
    return $products;
  }

  // get informations on a survey
  public function getSurvey($idSurvey) {
    $sql = '';
    $survey = $this->executerRequete($sql, array($idSurvey));
    if ($survey->rowCount() == 1)
      return $survey->fetch();  
    else
      throw new Exception("Aucune information ne correspond à l'identifiant '$id'");
    }

  // create a survey
  public function addSurvey() {
    $sql = 'insert into T_XXX(date, att_1, att_2, att_3)'
      . ' values(?, ?, ?, ?)';
    $date = date(DATE_W3C);  //
    $this->executerRequete($sql, array($date, $this->att1, $this->att2, $this->att3));
  }

  // update a survey
  public function updateSurvey($idSurvey) {
    
  }

  // delete a survey
  public function deleteSurvey($idSurvey) {
    
  }


}
?>