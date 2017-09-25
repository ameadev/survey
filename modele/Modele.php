<?php
abstract class Modele 
{

  // Objet PDO d'accès à la BD
  private $bdd;

  // Exécute une requête SQL éventuellement paramétrée
  protected function executerRequete($sql, $params = null) 
  {
    if ($params == null) 
    {
      $resultat = $this->getBdd()->query($sql);    // exécution directe
    }
    else 
    {
      $resultat = $this->getBdd()->prepare($sql);  // requête préparée
      $resultat->execute($params);
    }
    return $resultat;
  }

  // Renvoie un objet de connexion à la BD en initialisant la connexion au besoin   http://bpesquet.developpez.com/tutoriels/php/evoluer-architecture-mvc/
  private function getBdd() 
  {
    if ($this->bdd == null) 
    {
      try 
      {
           // Création de la connexion
           $this->bdd = new PDO('mysql:host=host;dbname=dbMName;charset=utf8',
           'user', 'pwd', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
      }
      catch (Exception $e)
      {
        
      }
    }
    return $this->bdd;
  }

}

?>