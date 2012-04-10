<?php
//****************************************************************
//
// Createur : Julien PIERRE
// Date de creation : 10/04/2012
// Fichier : ListeAchatMarcheControleur.php
//
// Description : Classe ListeAchatMarcheControleur
//
//****************************************************************

// Inclusion des classes
/*
include_once(CHEMIN_CLASSES_VIEW_MANAGER . "GestionCommandeListeReservationViewManager.php");
include_once(CHEMIN_CLASSES_RESPONSE . MOD_GESTION_COMMANDE . "/EditerCommandeResponse.php" );
include_once(CHEMIN_CLASSES_RESPONSE . MOD_GESTION_COMMANDE . "/ListeAchatEtReservationResponse.php" );
include_once(CHEMIN_CLASSES_RESPONSE . MOD_GESTION_COMMANDE . "/DetailProduitResponse.php" );
include_once(CHEMIN_CLASSES_SERVICE . "MarcheService.php");
include_once(CHEMIN_CLASSES_SERVICE . "AchatService.php");
include_once(CHEMIN_CLASSES_SERVICE . "ReservationService.php");
include_once(CHEMIN_CLASSES_VALIDATEUR . MOD_GESTION_COMMANDE . "/EditerCommandeValid.php" );
include_once(CHEMIN_CLASSES_VIEW_MANAGER . "ReservationViewManager.php");
include_once(CHEMIN_CLASSES_VIEW_MANAGER . "AdherentViewManager.php");
include_once(CHEMIN_CLASSES_VIEW_MANAGER . "ModeleLotViewManager.php");
include_once(CHEMIN_CLASSES_VALIDATEUR . MOD_GESTION_COMMANDE . "/ExportListeReservationValid.php" );
include_once(CHEMIN_CLASSES_VALIDATEUR . MOD_GESTION_COMMANDE . "/ModifierMarcheValid.php" );
include_once(CHEMIN_CLASSES_VALIDATEUR . MOD_GESTION_COMMANDE . "/ProduitMarcheValid.php" );
include_once(CHEMIN_CLASSES_VALIDATEUR . MOD_GESTION_COMMANDE . "/CommandeCompleteValid.php" );
include_once(CHEMIN_CLASSES_UTILS . "CSV.php");
include_once(CHEMIN_CLASSES_UTILS . "phpToPDF.php");
include_once(CHEMIN_CLASSES_TOVO . "ProduitCommandeToVO.php");

include_once(CHEMIN_CLASSES_VIEW_MANAGER . "ListeFermeViewManager.php");
include_once(CHEMIN_CLASSES_VIEW_MANAGER . "ListeNomProduitViewManager.php");
include_once(CHEMIN_CLASSES_VIEW_MANAGER . "ModeleLotViewManager.php");  
include_once(CHEMIN_CLASSES_RESPONSE . MOD_GESTION_COMMANDE . "/ListeFermeResponse.php" );
include_once(CHEMIN_CLASSES_RESPONSE . MOD_GESTION_COMMANDE ."/ListeProduitResponse.php" );
include_once(CHEMIN_CLASSES_RESPONSE . MOD_GESTION_COMMANDE ."/ModelesLotResponse.php" );
include_once(CHEMIN_CLASSES_VALIDATEUR . MOD_GESTION_COMMANDE . "/FermeValid.php");
include_once(CHEMIN_CLASSES_VALIDATEUR . MOD_GESTION_COMMANDE . "/NomProduitCatalogueValid.php" );
include_once(CHEMIN_CLASSES_SERVICE . "AbonnementService.php" );
include_once(CHEMIN_CLASSES_RESPONSE . MOD_GESTION_COMMANDE . "/AutorisationSupprimerLotResponse.php" );*/
include_once(CHEMIN_CLASSES_VALIDATEUR . MOD_GESTION_COMMANDE . "/EditerCommandeValid.php" );
include_once(CHEMIN_CLASSES_SERVICE . "MarcheService.php");
include_once(CHEMIN_CLASSES_SERVICE . "AchatService.php");
include_once(CHEMIN_CLASSES_SERVICE . "ReservationService.php");
include_once(CHEMIN_CLASSES_UTILS . "CSV.php");
include_once(CHEMIN_CLASSES_UTILS . "phpToPDF.php");
include_once(CHEMIN_CLASSES_VIEW_MANAGER . "AdherentViewManager.php");
include_once(CHEMIN_CLASSES_RESPONSE . MOD_GESTION_COMMANDE . "/ListeAchatEtReservationResponse.php" );


/**
 * @name ListeAchatMarcheControleur
 * @author Julien PIERRE
 * @since 27/10/2010
 * @desc Classe controleur d'une EditerCommande
 */
class ListeAchatMarcheControleur
{	
	/**
	* @name getListeAchatEtReservationCSV($pParam)
	* @return Un Fichier CSV
	* @desc Retourne la liste des achats et réservations pour un Marché et la liste de produits demandés
	*/
	public function getListeAchatEtReservationCSV($pParam) {
		$lVr = EditerCommandeValid::validGetInfoCommande($pParam);
		if($lVr->getValid()) {	
			$lMarcheService = new MarcheService();
			$lMarche = $lMarcheService->get($pParam["id_marche"]);
			$lCSV = new CSV();
			$lCSV->setNom('Réservations.csv'); // Le Nom
			
			
			// Les données
			$contenuTableau = array();
			$lLigne = array("","","","");
			// L'entête
			$lEntete = array("N°","Compte","Nom","Prénom");		
			foreach($lMarche->getProduits() as $lProduit) {
				$lNomProduit = $lProduit->getNom();
				if($lProduit->getType() == 1) {
					$lNomProduit .= " (Solidaire)";
				} else if($lProduit->getType() == 2) {
					$lNomProduit .= " (Abonnement)";
				}
				array_push($lEntete,"","","","","",$lNomProduit,"","","","","","");
				array_push($lLigne,"","","Réservation","","","Achat","","","","Solidaire","","");
			}
			$lCSV->setEntete($lEntete);

			
			array_push($contenuTableau,$lLigne);
					
			$lAdherents = AdherentViewManager::selectAll();
			$lReservationService = new ReservationService();
			$lAchatService = new AchatService();
			foreach($lAdherents as $lAdherent) {				
				$lIdReservation = new IdReservationVO();
				$lIdReservation->setIdCompte($lAdherent->getAdhIdCompte());
				$lIdReservation->setIdCommande($pParam["id_marche"]);
				$lReservation = $lReservationService->get($lIdReservation);

				$lIdAchat = new IdAchatVO();
				$lIdAchat->setIdCompte($lAdherent->getAdhIdCompte());
				$lIdAchat->setIdCommande($pParam["id_marche"]);
				$lAchats = $lAchatService->getAll($lIdAchat);	
				$lProduits = array();

				$lNbResa = 0;
				$lDetailsReservation = $lReservation->getDetailReservation();
				if(!empty($lDetailsReservation)) {
					foreach($lDetailsReservation as $lDetail) {
						if(!isset($lProduits[$lDetail->getIdProduit()][0])) {
							$lProduits[$lDetail->getIdProduit()][0] = array($lDetail);
						} else {
							array_push($lProduits[$lDetail->getIdProduit()][0],$lDetail);
						}
						$lNbResa++;
					}
				}
				
				$lNbAchat = 0;
				$lNbAchatSolidaire = 0;
				foreach($lAchats as $lAchat) {
					$lDetailsAchat = $lAchat->getDetailAchat();
					if(!empty($lDetailsAchat)) {
						foreach($lDetailsAchat as $lDetail) {
							if(!isset($lProduits[$lDetail->getIdProduit()][7])) {
								$lProduits[$lDetail->getIdProduit()][7] = array($lDetail);
							} else {
								array_push($lProduits[$lDetail->getIdProduit()][7],$lDetail);
							}
							$lNbAchat++;
						}
					}
					$lDetailsAchat = $lAchat->getDetailAchatSolidaire();
					if(!empty($lDetailsAchat)) {
						foreach($lDetailsAchat as $lDetail) {
							if(!isset($lProduits[$lDetail->getIdProduit()][8])) {
								$lProduits[$lDetail->getIdProduit()][8] = array($lDetail);
							} else {
								array_push($lProduits[$lDetail->getIdProduit()][8],$lDetail);
							}
							$lNbAchatSolidaire++;
						}
					}
				}
				if($lNbAchat < $lNbResa) {$lNbAchat = $lNbResa;}
				if($lNbAchat < $lNbAchatSolidaire) {$lNbAchat = $lNbAchatSolidaire;}
				
				if($lAdherent->getAdhEtat() == 1 || ($lAdherent->getAdhEtat() == 2 && $lNbAchat > 0)) { // Si Adhérent supprimé on vérifi qu'il faut si il a des ahcats/Résa pour l'ajouter
				
					if($lNbAchat == 0) {
						$lLigne = array();
						array_push($lLigne,$lAdherent->getAdhNumero(),$lAdherent->getCptLabel(),$lAdherent->getAdhNom(),$lAdherent->getAdhPrenom());
						array_push($contenuTableau,$lLigne);					
					}
					
					$lI = 0;
					while($lI < $lNbAchat) {
						$lAjoutLigne = false;
						$lLigne = array();
						if($lI == 0) {
							$lAjoutLigne = true;
							array_push($lLigne,$lAdherent->getAdhNumero(),$lAdherent->getCptLabel(),$lAdherent->getAdhNom(),$lAdherent->getAdhPrenom());
						} else {
							array_push($lLigne,"","","","");
						}
						foreach($lMarche->getProduits() as $lProduit) {
							if(isset($lProduits[$lProduit->getId()][0][$lI])) {
								$lAjoutLigne = true;
								$lDetail = $lProduits[$lProduit->getId()][0][$lI];
								array_push($lLigne,$lDetail->getQuantite() * -1,$lProduit->getUnite(),$lDetail->getMontant() * -1,SIGLE_MONETAIRE);
							} else {
								array_push($lLigne,"","","","");
							}
							if(isset($lProduits[$lProduit->getId()][7][$lI])) {
								$lAjoutLigne = true;
								$lDetail = $lProduits[$lProduit->getId()][7][$lI];
								array_push($lLigne,$lDetail->getQuantite() * -1,$lProduit->getUnite(),$lDetail->getMontant() * -1,SIGLE_MONETAIRE);
							} else {
								array_push($lLigne,"","","","");
							}
							if(isset($lProduits[$lProduit->getId()][8][$lI])) {
								$lAjoutLigne = true;
								$lDetail = $lProduits[$lProduit->getId()][8][$lI];
								array_push($lLigne,$lDetail->getQuantite() * -1,$lProduit->getUnite(),$lDetail->getMontant() * -1,SIGLE_MONETAIRE);
							} else {
								array_push($lLigne,"","","","");
							}
						}
						if($lAjoutLigne) {
							array_push($contenuTableau,$lLigne);
						}
						$lI++;
					}
				}
			}
			
			//print_r($contenuTableau);
			$lCSV->setData($contenuTableau);
			
			// Export en CSV
			$lCSV->output();
		} else {
			return $lVr;
		}
	}

	/**
	* @name getListeAchatEtReservation($pParam)
	* @param Id du marché
	* @desc Cloture le marché
	*/
	public function getListeAchatEtReservation($pParam) {		
		$lVr = EditerCommandeValid::validGetInfoCommande($pParam);
		if($lVr->getValid()) {
		$lResponse = new ListeAchatEtReservationResponse();
			$lAchatService = new AchatService();			
			
			$lAdherents = AdherentViewManager::selectAll();
			$lReservationService = new ReservationService();
			$lAchatService = new AchatService();
			foreach($lAdherents as $lAdherent) {				
				$lIdReservation = new IdReservationVO();
				$lIdReservation->setIdCompte($lAdherent->getAdhIdCompte());
				$lIdReservation->setIdCommande($pParam["id_marche"]);
				$lReservation = $lReservationService->get($lIdReservation);

				$lIdAchat = new IdAchatVO();
				$lIdAchat->setIdCompte($lAdherent->getAdhIdCompte());
				$lIdAchat->setIdCommande($pParam["id_marche"]);
				$lAchats = $lAchatService->getAll($lIdAchat);	
				
				
				$lListeAchat = new ListeAchatReservationVO();
				$lListeAchat->setAdhId($lAdherent->getAdhId());
				$lListeAchat->setAdhNumero($lAdherent->getAdhNumero());
				$lListeAchat->setAdhIdCompte($lAdherent->getAdhIdCompte());
				$lListeAchat->setCptLabel($lAdherent->getCptLabel());
				$lListeAchat->setAdhNom($lAdherent->getAdhNom());
				$lListeAchat->setAdhPrenom($lAdherent->getAdhPrenom());
				
				$lNbAchat = 0;
				// Reservation en cours ou Achetée
				if(!is_null($lReservation->getEtat()) && ($lReservation->getEtat() == 0 || $lReservation->getEtat() == 7)) {
					$lListeAchat->setReservation('X');
					$lNbAchat++;
				}
				// Si il y a un achat
				if(!empty($lAchats)) {
					$lListeAchat->setAchat('X');
					$lNbAchat++;
				}
				if($lAdherent->getAdhEtat() == 1 || ($lAdherent->getAdhEtat() == 2 && $lNbAchat > 0)) { // Si Adhérent supprimé on vérifie qu'il faut si il a des ahcats/Résa pour l'ajouter
					$lResponse->addListeAchatEtReservation($lListeAchat);
				}
			}
			return $lResponse;
		}
		return $lVr;
	}
}
?>