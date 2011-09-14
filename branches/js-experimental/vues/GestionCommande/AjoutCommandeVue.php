<?php
//****************************************************************
//
// Createur : Julien PIERRE
// Date de creation : 31/03/2010
// Fichier : AjoutCommandeVue.php
//
// Description : À REMPLIR
//
//****************************************************************

// Vérification de la bonne connexion de l'adherent dans le cas contraire redirection vers le formulaire de connexion
if( isset($_SESSION[DROIT_ID]) && ( isset($_SESSION[MOD_GESTION_COMMANDE]) || isset($_SESSION[DROIT_SUPER_ZEYBU]) ) ) {

	// Inclusion des classes
	include_once(CHEMIN_CLASSES_CONTROLEURS . MOD_GESTION_COMMANDE . "/AjoutCommandeControleur.php");

	if(isset($_POST['form'])) {
		if($_POST['form'] == 2 && isset($_POST['commande'])) {
			$lLogger->log("Demande d'ajout d'une nouvelle commande par l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
			// Récupération des données au format json et conversion en tableau associatif
			$lDataCommande = json_decode($_POST['commande'],true);			
			$lControleur = new AjoutCommandeControleur();			
			$lVr = $lControleur->AjouterCommande($lDataCommande);
			
			echo $lVr->exportToJson();
			
			if($lVr->getValid()) {
				$lLogger->log("Création d'une nouvelle commande.",PEAR_LOG_INFO);	// Maj des logs
			} else {				
				$lLogger->log("Echec de la création d'une nouvelle commande.",PEAR_LOG_INFO);	// Maj des logs
			}
		} else {
			$lLogger->log("Demande d'accés au form de AjoutCommande avec un mauvais form par l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
			header('location:./index.php');
		}
	} else if(isset($_POST['pParam'])) { 
		$lParam = json_decode($_POST['pParam'],true);		
		
		if($lParam['form'] == 1) {
			$lLogger->log("Demande d'ajout d'un nouveau produit par l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
			
			$lControleur = new AjoutCommandeControleur();					
			$lResponse = $lControleur->AjouterProduit($lParam);
		
			echo $lResponse->exportToJson();
			if($lResponse->getValid()) {
				$lLogger->log("Création d'un nouveau produit.",PEAR_LOG_INFO);	// Maj des logs
			} else {				
				$lLogger->log("Echec de la création d'un nouveau produit.",PEAR_LOG_INFO);	// Maj des logs
			}
			$lLogger->log("Ajout d'un nouveau produit : " . $lResponse->getNom() . " par l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs			
		} else {
			$lLogger->log("Demande d'accés au form de AjoutCommande avec un mauvais form par l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
			header('location:./index.php');
		}	
	} else {
		$lControleur = new AjoutCommandeControleur();
		echo $lControleur->getInfoAjoutCommande()->exportToJson();
		$lLogger->log("Affichage de la vue AjoutCommande par le compte de l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
	}
} else {
	$lLogger->log("Demande d'accés sans autorisation à AjoutCommande",PEAR_LOG_INFO);	// Maj des logs
	header('location:./index.php?cx=1');
}
?>