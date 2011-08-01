<?php
//****************************************************************
//
// Createur : Julien PIERRE
// Date de creation : 03/01/2011
// Fichier : BonDeCommandeVue.php
//
// Description : Edition du bon de commande
//
//****************************************************************

// Vérification de la bonne connexion de l'adherent dans le cas contraire redirection vers le formulaire de connexion
if( isset($_SESSION[DROIT_ID]) && ( isset($_SESSION[MOD_GESTION_COMMANDE]) || isset($_SESSION[DROIT_SUPER_ZEYBU]) ) ) {
	
	if(isset($_POST['pParam'])) {
		$lParam = json_decode($_POST["pParam"],true);
		if(isset($lParam["fonction"])) {
			include_once(CHEMIN_CLASSES_CONTROLEURS . MOD_GESTION_COMMANDE . "/BonDeCommandeControleur.php");
			$lControleur = new BonDeCommandeControleur();
			
			switch($lParam["fonction"]) {					
				case "afficher":
						echo $lControleur->getInfoCommande($lParam)->exportToJson();
						$lLogger->log("Affichage de la vue BonDeCommande par le compte de l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					break;
			
				case "afficherProducteur":
						echo $lControleur->getListeProduitCommande($lParam)->exportToJson();
						$lLogger->log("Affichage de la vue BonDeCommande -> Liste des produits par le compte de l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					break;
					
				case "enregistrer":
						echo $lControleur->enregistrerBonDeCommande($lParam)->exportToJson();
						$lLogger->log("Affichage de la vue BonDeCommande -> Liste des produits par le compte de l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					break;

				default:
					$lLogger->log("Demande d'accés à BonDeCommande sans identifiant commande par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					header('location:./index.php');
					break;
			}
		} else {
			$lLogger->log("Demande d'accés à BonDeCommande sans identifiant commande par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
			header('location:./index.php');
		}
	} else if(isset($_POST['fonction'])) {
		if(isset($_POST['id_commande']) && isset($_POST['format'])) {
			include_once(CHEMIN_CLASSES_CONTROLEURS . MOD_GESTION_COMMANDE . "/BonDeCommandeControleur.php");						
			$lControleur = new BonDeCommandeControleur();
			
			switch($_POST['fonction']) {					
				case "export":
						$lParam = array();
						$lParam['id_commande'] = $_POST['id_commande'];
						
						if($_POST['format'] == 0) {					
							echo $lControleur->getBComPdf($lParam);
						} else if ($_POST['format'] == 1) {					
							echo $lControleur->getBComCSV($lParam);						
						} else {
							$lLogger->log("Demande d'accés à BonDeCommande pour export sans format valide par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
							header('location:./index.php');
						}
					break;
	
				default:
					$lLogger->log("Demande d'accés à BonDeCommande sans identifiant commande par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					header('location:./index.php');
					break;
			}
		} else {
			$lLogger->log("Demande d'accés à BonDeCommande pour export sans identifiant par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
			header('location:./index.php');
		}
	} else {
		$lLogger->log("Demande d'accés à BonDeCommande sans identifiant commande par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
		header('location:./index.php');		
	}
} else {
	$lLogger->log("Demande d'accés sans autorisation à BonDeCommande",PEAR_LOG_INFO);	// Maj des logs
	header('location:./index.php?cx=1');
}



/*if(isset($lParam["id_commande"]) && isset($lParam["export_type"])) {	
			if($lParam["export_type"] == 0) {
				include_once(CHEMIN_CLASSES_CONTROLEURS . MOD_GESTION_COMMANDE . "/BonDeCommandeControleur.php");
				$lControleur = new BonDeCommandeControleur();

				if(isset($lParam["id_compte_producteur"]))	{
					if(isset($lParam["produits"])){
						echo $lControleur->enregistrerBonDeCommande($lParam)->exportToJson();
						$lLogger->log("Affichage de la vue BonDeCommande -> Liste des produits par le compte de l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					} else {
						echo $lControleur->getListeProduitCommande($lParam)->exportToJson();
						$lLogger->log("Affichage de la vue BonDeCommande -> Liste des produits par le compte de l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					}				
				} else {					
					echo $lControleur->getInfoCommande($lParam)->exportToJson();
					$lLogger->log("Affichage de la vue BonDeCommande par le compte de l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
				}
			} else {
				$lLogger->log("Demande d'accés à BonDeCommande sans identifiant commande par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
				header('location:./index.php');
			}
		} else if($_POST['pParam'] == 1) {
			if(isset($_POST['id_commande']) && isset($_POST['export_type']) && isset($_POST['format'])) {
				if($_POST['export_type'] == 1) {
					include_once(CHEMIN_CLASSES_CONTROLEURS . MOD_GESTION_COMMANDE . "/BonDeCommandeControleur.php");
					$pParam = array();
					$pParam['id_commande'] = $_POST['id_commande'];
								
					$lControleur = new BonDeCommandeControleur();
					
					if($_POST['format'] == 0) {					
						echo $lControleur->getBComPdf($pParam);
					} else if ($_POST['format'] == 1) {					
						echo $lControleur->getBComCSV($pParam);						
					} else {
						$lLogger->log("Demande d'accés à BonDeCommande pour export sans format valide par : " . $_SESSION['id'],PEAR_LOG_INFO);	// Maj des logs
						header('location:./index.php');
					}
				} else {
					$lLogger->log("Demande d'accés à BonDeCommande pour export sans identifiant par : " . $_SESSION['id'],PEAR_LOG_INFO);	// Maj des logs
					header('location:./index.php');
				}				
			} else {
				$lLogger->log("Demande d'accés à BonDeCommande pour export sans identifiant par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
				header('location:./index.php');
			}
		} else {
			$lLogger->log("Demande d'accés à BonDeCommande sans identifiant commande par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
			header('location:./index.php');
		}*/
?>