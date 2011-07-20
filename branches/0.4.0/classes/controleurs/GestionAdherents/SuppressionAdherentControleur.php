<?php
//****************************************************************
//
// Createur : Julien PIERRE
// Date de creation : 02/02/2010
// Fichier : SuppressionAdherentControleur.php
//
// Description : Classe SuppressionAdherentControleur
//
//****************************************************************
// Inclusion des classes
include_once(CHEMIN_CLASSES_MANAGERS . "AdherentManager.php");
include_once(CHEMIN_CLASSES_MANAGERS . "StockManager.php");
include_once(CHEMIN_CLASSES_MANAGERS . "OperationManager.php");
include_once(CHEMIN_CLASSES_MANAGERS . "GroupeCommandeManager.php");
include_once(CHEMIN_CLASSES_VR . "TemplateVR.php" );
include_once(CHEMIN_CLASSES_VR . "VRerreur.php" );
include_once(CHEMIN_CLASSES_RESPONSE . "ModifierAdherentResponse.php" );

/**
 * @name SuppressionAdherentControleur
 * @author Julien PIERRE
 * @since 02/02/2010
 * @desc Classe controleur d'une Suppression d'adherent
 */
class SuppressionAdherentControleur
{
	/**
	* @name supprimerAdherent($pParam)
	* @desc Passe l'adhérent en état supprimé
	*/
	public function supprimerAdherent($pParam) {
		$lId = $pParam['id_adherent'];		
		$lAdherent = AdherentManager::select( $lId );
		
		if($lAdherent->getSuperZeybu() == 0) {			
			// Change l'état
			$lAdherent->setEtat(2);
			AdherentManager::update( $lAdherent );
			
			// Supression des stocks de réservation de l'adherent
			$lListeStock = StockManager::selectByIdCompte( $lAdherent->getIdCompte() );
			foreach ( $lListeStock as $lStock ) {
				if($lStock->getType() == 0) {
					StockManager::delete( $lStock->getId() );
				}
			}
			
			// Supression des réservations de l'adherent
			$lListeGpc = GroupeCommandeManager::selectByIdCompte( $lAdherent->getIdCompte() );
			foreach ( $lListeGpc as $lGpc ) {
				if($lGpc->getEtat() == 0) {
					GroupeCommandeManager::delete( $lGpc->getId() );
				}
			}
			
			// Supression des opérations de réservation de l'adherent
			$lListeOperation = OperationManager::selectByIdCompte( $lAdherent->getIdCompte() );
			foreach ( $lListeOperation as $lOperation ) {
				if($lOperation->getType() == 0) {
					OperationManager::delete( $lOperation->getId() );
				}
			}
			
			$lResponse = new ModifierAdherentResponse();
			$lResponse->setNumero($lAdherent->getNumero());
			
			return $lResponse;
		}	
		$lVr = new TemplateVR();
		$lVr->setValid(false);
		$lVr->getLog()->setValid(false);
		$lErreur = new VRerreur();
		$lErreur->setCode(MessagesErreurs::ERR_231_CODE);
		$lErreur->setMessage(MessagesErreurs::ERR_231_MSG);
		$lVr->getLog()->addErreur($lErreur);
		$lVr->setValid(false);
		return $lVr;
	}
}
?>