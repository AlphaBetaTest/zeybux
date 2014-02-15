<?php
//****************************************************************
//
// Createur : Julien PIERRE
// Date de creation : 13/02/2014
// Fichier : RechargementCompteVR.php
//
// Description : Classe RechargementCompteVR
//
//****************************************************************
// Inclusion des classes
include_once(CHEMIN_CLASSES_VR . "VRelement.php" );
include_once(CHEMIN_CLASSES_UTILS . "MessagesErreurs.php" );
include_once(CHEMIN_CLASSES_VR . "TemplateVR.php" );

/**
 * @name RechargementCompteVR
 * @author Julien PIERRE
 * @since 13/02/2014
 * @desc Classe représentant une RechargementCompteVR
 */
class RechargementCompteVR extends TemplateVR
{
	/**
	 * @var VRelement
	 * @desc L'Id de l'objet
	 */
	protected $mId;

	/**
	 * @var VRelement
	 * @desc Montant de la RechargementCompteVR
	 */
	protected $mMontant;

	/**
	 * @var VRelement
	 * @desc TypePaiement de la RechargementCompteVR
	 */
	protected $mTypePaiement;

	/**
	 * @var VRelement
	 * @desc ChampComplementaireObligatoire de la RechargementCompteVR
	 */
	protected $mChampComplementaireObligatoire;

	/**
	 * @var VRelement
	 * @desc ChampComplementaire de la RechargementCompteVR
	 */
	protected $mChampComplementaire;

	/**
	* @name RechargementCompteVR()
	* @return bool
	* @desc Constructeur
	*/
	function RechargementCompteVR() {
		parent::__construct();	
		$this->mValid = true;
		$this->mLog = new VRelement();
		$this->mId = new VRelement();
		$this->mMontant = new VRelement();
		$this->mTypePaiement = new VRelement();
		$this->mChampComplementaireObligatoire = new VRelement();
		$this->mChampComplementaire = new VRelement();
	}

	/**
	* @name getId()
	* @return VRelement
	* @desc Renvoie le VRelement Id
	*/
	public function getId() {
		return $this->mId;
	}

	/**
	* @name setId($pId)
	* @param VRelement
	* @desc Remplace le VRelement Id par $pId
	*/
	public function setId($pId) {
		$this->mId = $pId;
	}

	/**
	* @name getMontant()
	* @return VRelement
	* @desc Renvoie le VRelement mMontant
	*/
	public function getMontant() {
		return $this->mMontant;
	}

	/**
	* @name setMontant($pMontant)
	* @param VRelement
	* @desc Remplace le mMontant par $pMontant
	*/
	public function setMontant($pMontant) {
		$this->mMontant = $pMontant;
	}

	/**
	* @name getTypePaiement()
	* @return VRelement
	* @desc Renvoie le VRelement mTypePaiement
	*/
	public function getTypePaiement() {
		return $this->mTypePaiement;
	}

	/**
	* @name setTypePaiement($pTypePaiement)
	* @param VRelement
	* @desc Remplace le mTypePaiement par $pTypePaiement
	*/
	public function setTypePaiement($pTypePaiement) {
		$this->mTypePaiement = $pTypePaiement;
	}

	/**
	* @name getChampComplementaireObligatoire()
	* @return VRelement
	* @desc Renvoie le VRelement mChampComplementaireObligatoire
	*/
	public function getChampComplementaireObligatoire() {
		return $this->mChampComplementaireObligatoire;
	}

	/**
	* @name setChampComplementaireObligatoire($pChampComplementaireObligatoire)
	* @param VRelement
	* @desc Remplace le mChampComplementaireObligatoire par $pChampComplementaireObligatoire
	*/
	public function setChampComplementaireObligatoire($pChampComplementaireObligatoire) {
		$this->mChampComplementaireObligatoire = $pChampComplementaireObligatoire;
	}

	/**
	* @name getChampComplementaire()
	* @return VRelement
	* @desc Renvoie le VRelement mChampComplementaire
	*/
	public function getChampComplementaire() {
		return $this->mChampComplementaire;
	}

	/**
	* @name setChampComplementaire($pChampComplementaire)
	* @param VRelement
	* @desc Remplace le mChampComplementaire par $pChampComplementaire
	*/
	public function setChampComplementaire($pChampComplementaire) {
		$this->mChampComplementaire = $pChampComplementaire;
	}
}
?>