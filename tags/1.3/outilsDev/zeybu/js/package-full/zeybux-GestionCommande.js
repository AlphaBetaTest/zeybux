;function GestionCommandeTemplate() {	
	this.dialogAjoutProduitAjoutMarche =
		"<div id=\"dialog-ajout-pro\" title=\"Produit\">" +
			"<div id=\"information-detail-producteur\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Le Produit</div>" +

				"<div id=\"pro-idFerme\" class=\"com-float-left\">" +
					"<select name=\"ferme\">" +
						"<option value=\"0\" >== Choisir une ferme ==</option>" +
						"<!-- BEGIN listeFerme -->" +
						"<option value=\"{listeFerme.ferId}\" >{listeFerme.ferNom}</option>" +
						"<!-- END listeFerme -->" +
					"</select>" +
				"</div>" +
				"<div id=\"pro-idCategorie\" class=\"com-float-left\">" +
					"<select name=\"categorie\" disabled=\"disabled\">" +
						"<option value=\"0\" >== Choisir une catégorie ==</option>" +
					"</select>" +
				"</div>" +
				"<div id=\"pro-idProduit\">" +
					"<select name=\"produit\" disabled=\"disabled\">" +
						"<option value=\"0\" >== Choisir un produit ==</option>" +
					"</select>" +
				"</div>" +
			"</div>" +
			"<div id=\"prix-stock-produit\">" +
			"</div>" +
		"</div>";
	
	this.ajoutProduitSelectCategorie =
		"<div id=\"pro-idCategorie\" class=\"com-float-left\">" +
			"<select name=\"categorie\">" +
				"<option value=\"0\" >== Choisir une catégorie ==</option>" +
				"<!-- BEGIN listeCategorie -->" +
				"<option value=\"{listeCategorie.cproId}\" >{listeCategorie.cproNom}</option>" +
				"<!-- END listeCategorie -->" +
			"</select>" +
		"</div>";
	
	this.ajoutProduitSelectProduit =
		"<div id=\"pro-idProduit\">" +
			"<select name=\"produit\">" +
				"<option value=\"0\" >== Choisir un produit ==</option>" +
				"<!-- BEGIN listeProduit -->" +
				"<option value=\"{listeProduit.nproId}\" >{listeProduit.nproNom}</option>" +
				"<!-- END listeProduit -->" +
			"</select>" +
		"</div>";
	
	this.dialogAjoutAchatProduit =
		"<div id=\"dialog-ajout-pro\" title=\"Produit\">" +
			"<div id=\"information-detail-producteur\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Le Produit</div>" +

				"<div id=\"pro-idFerme\" class=\"com-float-left\">" +
					"<select name=\"ferme\">" +
						"<option value=\"0\" >== Choisir une ferme ==</option>" +
						"<!-- BEGIN listeFerme -->" +
						"<option value=\"{listeFerme.ferId}\" >{listeFerme.ferNom}</option>" +
						"<!-- END listeFerme -->" +
					"</select>" +
				"</div>" +
				"<div id=\"pro-idCategorie\" class=\"com-float-left\">" +
					"<select name=\"categorie\" disabled=\"disabled\">" +
						"<option value=\"0\" >== Choisir une catégorie ==</option>" +
					"</select>" +
				"</div>" +
				"<div id=\"pro-idProduit\">" +
					"<select name=\"produit\" disabled=\"disabled\">" +
						"<option value=\"0\" >== Choisir un produit ==</option>" +
					"</select>" +
				"</div>" +
			"</div>" +
			"<div id=\"detail-achat\">" +
			"</div>" +
		"</div>";
	
	this.detailProduitAjoutAchatProduit = 
		"<div id=\"detail-achat\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Achat</div>" +
			"<input type=\"hidden\" id=\"pro-id\" value=\"{idProduit}\"/>" +
			"<div id=\"choixTypeAchat\">" +
				"<input class=\"ui-widget-content ui-corner-all\" type=\"radio\" name=\"typeProduit\" id=\"pro-typeProduitNormal\" value=\"0\" checked=\"checked\"/> Achat" +
				"<input class=\"ui-widget-content ui-corner-all\" type=\"radio\" name=\"typeProduit\" id=\"pro-typeProduitSolidaire\" value=\"1\" /> Achat Solidaire" +
			"</div>" +
			"<table class=\"com-table-form\">" +
				"<tr>" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-quantite\" maxlength=\"13\" id=\"pro-quantite\"/> {unite}" +
					"</td>" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-prix\" maxlength=\"13\" id=\"pro-prix\"/> {sigleMonetaire}" +
					"</td>" +
				"</tr>" +
			"</table>" +
		"</div>";
	
	this.prixAjoutProduit =
		"<div id=\"div-lot\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Les Prix de vente</div>" +
			"<table class=\"com-table-form\" id=\"table-pro-prix\">" +
				"<tr>" +
					"<td class=\"catalogue-entete-lot\">Quantité</td>" +
					"<td class=\"catalogue-entete-lot\">Unité</td>" +
					"<td>Prix</td>" +
					"<td></td>" +
					"<td></td>" +
				"</tr>" +
				"<tr class=\"btn-lot\">" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-quantite\" maxlength=\"13\" id=\"pro-lot-quantite\"/>" +
					"</td>" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all\" type=\"text\" name=\"lot-unite\" maxlength=\"20\" id=\"pro-lot-unite\"/>" +
					"</td>" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-prix\" maxlength=\"13\" id=\"pro-lot-prix\"/> {sigleMonetaire}" +
					"</td>" +
					"<td colspan=\"2\">" +
						"<button type=\"button\" id=\"btn-ajout-lot\" class=\"ui-state-default ui-corner-all com-button com-center\">Ajouter un prix de vente</button>" +
					"</td>" +
				"</tr>" +
			"</table>" +
			"<table class=\"com-table\" id=\"lot-liste\">" +
	
				"<!-- BEGIN modelesLot -->" +
				"<tr class=\"ligne-lot\" id=\"ligne-lot-{modelesLot.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{modelesLot.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" value=\"{modelesLot.id}\" name=\"pro-lot\" id=\"pro-lot-{modelesLot.id}-id\" class=\"modele-lot\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{modelesLot.id} lot-quantite\" id=\"lot-{modelesLot.id}-quantite\">{modelesLot.quantite}</span>"+
						"<input class=\"champ-lot-{modelesLot.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLot.id}-quantite\" maxlength=\"13\" id=\"pro-lot-{modelesLot.id}-quantite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{modelesLot.id} lot-unite\" id=\"lot-{modelesLot.id}-unite\">{modelesLot.unite}</span>" +
						"<input class=\"champ-lot-{modelesLot.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLot.id}-unite\" maxlength=\"20\" id=\"pro-lot-{modelesLot.id}-unite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{modelesLot.id} lot-prix\" id=\"lot-{modelesLot.id}-prix\">{modelesLot.prix}</span>" +
						"<input class=\"champ-lot-{modelesLot.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLot.id}-prix\" maxlength=\"13\" id=\"pro-lot-{modelesLot.id}-prix\"/>" +
						" {modelesLot.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
						"<span class=\"btn-lot com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-lot\" title=\"Modifier\">" +
							"<span class=\"ui-icon ui-icon-pencil\"></span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-valider-lot\" id=\"btn-valider-lot-{modelesLot.id}\" title=\"Valider\">" +
							"<span class=\"ui-icon ui-icon-check\"></span>" +
						"</span>" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-annuler-lot\" id=\"btn-annuler-lot-{modelesLot.id}\" title=\"Annuler\">" +
							"<span class=\"ui-icon ui-icon-closethick\"></span>" +
						"</span>" +
						"<span class=\"btn-lot com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-lot\" title=\"Supprimer\">" +				
							"<span class=\"ui-icon ui-icon-trash\"></span>" +
						"</span>" +
					"</td>" +
				"</tr>" +
				"<!-- END modelesLot -->" +
			
			"</table>" +
		"</div>";
	
	this.prixAbonnementAjoutProduit =
		"<div id=\"div-lot-abonnement\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Les Prix de vente</div>" +
			"<table class=\"com-table-form\" id=\"table-pro-abonnement-prix\">" +
				"<tr>" +
					"<td class=\"catalogue-entete-lot\">Quantité</td>" +
					"<td class=\"catalogue-entete-lot\">Unité</td>" +
					"<td>Prix</td>" +
					"<td></td>" +
					"<td></td>" +
				"</tr>" +
				"<tr class=\"btn-lot-abonnement\">" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-abo-quantite\" maxlength=\"13\" id=\"pro-abo-lot-quantite\"/>" +
					"</td>" +
					"<td>" +
						"<span id=\"pro-abo-lot-unite\">{uniteAbonnement}</span>" +
					"</td>" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-abo-prix\" maxlength=\"13\" id=\"pro-abo-lot-prix\"/> {sigleMonetaire}" +
					"</td>" +
					"<td colspan=\"2\">" +
						"<button type=\"button\" id=\"btn-ajout-lot-abonnement\" class=\"ui-state-default ui-corner-all com-button com-center\">Ajouter un prix de vente</button>" +
					"</td>" +
				"</tr>" +
			"</table>" +
			"<table class=\"com-table\" id=\"lot-liste-abonnement\">" +
	
				"<!-- BEGIN modelesLotAbonnementReservation -->" +
				"<tr class=\"ligne-lot-abonnement\" id=\"ligne-lot-abonnement-{modelesLotAbonnementReservation.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{modelesLotAbonnementReservation.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" checked=\"checked\" disabled=\"disabled\" value=\"{modelesLotAbonnementReservation.id}\" name=\"pro-lot\" id=\"pro-lot-{modelesLotAbonnementReservation.id}-id\" class=\"modele-lot-reservation\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnementReservation.id}-abonnement lot-quantite\" id=\"lot-{modelesLotAbonnementReservation.id}-quantite-abonnement\">{modelesLotAbonnementReservation.quantite}</span>"+
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnementReservation.id}-abonnement lot-unite\" id=\"lot-{modelesLotAbonnementReservation.id}-unite-abonnement\">{modelesLotAbonnementReservation.unite}</span>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{modelesLotAbonnementReservation.id}-abonnement lot-prix\" id=\"lot-{modelesLotAbonnementReservation.id}-prix-abonnement\">{modelesLotAbonnementReservation.prix}</span>" +
						" {modelesLotAbonnementReservation.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
					"</td>" +
				"</tr>" +
				"<!-- END modelesLotAbonnementReservation -->" +
			
				"<!-- BEGIN modelesLotAbonnement -->" +
				"<tr class=\"ligne-lot-abonnement\" id=\"ligne-lot-abonnement-{modelesLotAbonnement.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{modelesLotAbonnement.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" value=\"{modelesLotAbonnement.id}\" name=\"pro-lot\" id=\"pro-lot-{modelesLotAbonnement.id}-id\" class=\"modele-lot\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnement.id}-abonnement lot-quantite\" id=\"lot-{modelesLotAbonnement.id}-quantite-abonnement\">{modelesLotAbonnement.quantite}</span>"+
						"<input class=\"champ-lot-{modelesLotAbonnement.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotAbonnement.id}-quantite\" maxlength=\"13\" id=\"pro-lot-abonnement{modelesLotAbonnement.id}-quantite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnement.id}-abonnement lot-unite\" id=\"lot-{modelesLotAbonnement.id}-unite-abonnement\">{modelesLotAbonnement.unite}</span>" +
						"<input disabled=\"disabled\" class=\"champ-lot-{modelesLotAbonnement.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotAbonnement.id}-unite\" maxlength=\"20\" id=\"pro-lot-abonnement{modelesLotAbonnement.id}-unite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{modelesLotAbonnement.id}-abonnement lot-prix\" id=\"lot-{modelesLotAbonnement.id}-prix-abonnement\">{modelesLotAbonnement.prix}</span>" +
						"<input class=\"champ-lot-{modelesLotAbonnement.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotAbonnement.id}-prix\" maxlength=\"13\" id=\"pro-lot-abonnement{modelesLotAbonnement.id}-prix\"/>" +
						" {modelesLotAbonnement.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
						"<span class=\"btn-lot-abonnement com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-lot-abonnement\" title=\"Modifier\">" +
							"<span class=\"ui-icon ui-icon-pencil\"></span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-valider-lot-abonnement\" id=\"btn-valider-lot-{modelesLotAbonnement.id}-abonnement\" title=\"Valider\">" +
							"<span class=\"ui-icon ui-icon-check\"></span>" +
						"</span>" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-annuler-lot-abonnement\" id=\"btn-annuler-lot-{modelesLotAbonnement.id}-abonnement\" title=\"Annuler\">" +
							"<span class=\"ui-icon ui-icon-closethick\"></span>" +
						"</span>" +
						"<span class=\"btn-lot-abonnement com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-lot-abonnement\" title=\"Supprimer\">" +				
							"<span class=\"ui-icon ui-icon-trash\"></span>" +
						"</span>" +
					"</td>" +
				"</tr>" +
				"<!-- END modelesLotAbonnement -->" +
			
			"</table>" +
		"</div>";
	
	this.stockAjoutProduit = 
		"<div id=\"id-stock\" class=\"{visibleSolidaire} pro-detail\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Stock</div>" +
			"<table class=\"com-table-form\">" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
						"Limite de stock : " +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<input class=\"com-input-text ui-widget-content ui-corner-all\" type=\"radio\" name=\"pro-stock-choix\" value=\"0\" checked=\"checked\"/>Pas de limite" +
					"</td>" +
				"</tr>" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<input class=\"com-input-text ui-widget-content ui-corner-all\" type=\"radio\" name=\"pro-stock-choix\" value=\"1\"/>" +
						"<input disabled=\"disabled\" class=\"com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"pro-stock\" maxlength=\"13\" id=\"pro-qteRestante\"/> <span class=\"unite-stock\">{unite}</span>" +
					"</td>" +
				"</tr>" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
						"Quantité max par adhérent : " +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<input class=\"com-input-text ui-widget-content ui-corner-all\" type=\"radio\" name=\"pro-qte-max-choix\" value=\"0\" checked=\"checked\"/>Pas de limite" +
					"</td>" +
				"</tr>" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<input class=\"com-input-text ui-widget-content ui-corner-all\" type=\"radio\" name=\"pro-qte-max-choix\" value=\"1\" />" +
						"<input disabled=\"disabled\" class=\"com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"pro-qte-max\" maxlength=\"13\" id=\"pro-qteMaxCommande\"/> <span class=\"unite-stock\">{unite}</span>" +
					"</td>" +
				"</tr>" +
			"</table>" +
		"</div>";
	
	this.stockAbonnementAjoutProduit = 
		"<div id=\"id-stock-abonnement\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Stock</div>" +
			"<table class=\"com-table-form\">" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
						"Limite de stock : " +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<span id=\"stock-abonnement\">{stockInitialAbonnement}</span> {uniteAbonnement}" +
					"</td>" +
				"</tr>" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
						"Quantité max par adhérent : " +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<span>{qMaxAbonnement}</span><span id=\"max-abonnement\" class=\"ui-helper-hidden\">{qMaxAbonnementValue}</span>" +
					"</td>" +
				"</tr>" +
			"</table>" +
		"</div>";
	
	this.typeProduitAjoutProduit =
		"<div id=\"pro-typeProduit\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Type de produit</div>" +
			"<input class=\"ui-widget-content ui-corner-all\" type=\"radio\" name=\"typeProduit\" id=\"pro-typeProduitNormal\" value=\"0\" {typeNormalSelected} /> Normal" +
			"<input class=\"ui-widget-content ui-corner-all\" type=\"radio\" name=\"typeProduit\" id=\"pro-typeProduitSolidaire\" value=\"1\" {typeSolidaireSelected}/> Solidaire" +
			"{typeProduitAbonnement}" +
		"</div>";
	
	this.typeProduitAbonnementAjoutProduit =
		"<input class=\"ui-widget-content ui-corner-all\" type=\"radio\" name=\"typeProduit\" id=\"pro-typeProduitAbonnement\" value=\"2\" {typeAbonnementSelected} /> Abonnement";
	
	this.prixEtStockAjoutProduit =
		"<div id=\"prix-stock-produit\">" +
			"{divTypeProduit}" +
			"<div id=\"pro-normal\" class=\"{visibleNormal} pro-detail\">" +
				"{divLot}" +
				"{divStock}" +
			"</div>" +
			"<div id=\"pro-abonnement\" class=\"{visibleAbonnement} pro-detail\">" +
				"{divLotAbonnement}" +
				"{divStockAbonnement}" +
			"</div>" +
		"</div>" ;
	
	this.modeleLot =
		"<tr class=\"ligne-lot\" id=\"ligne-lot-{id}\">" +
			"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{id}</span></td>" +
			"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
				"<input type=\"checkbox\" value=\"{id}\" name=\"pro-lot\" id=\"pro-lot-{id}-id\"/>" +
			"</td>" +
			"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
				"<span class=\"champ-lot-{id} lot-quantite\" id=\"lot-{id}-quantite\">{quantite}</span>"+
				"<input class=\"champ-lot-{id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{id}-quantite\" maxlength=\"13\" id=\"pro-lot-{id}-quantite\"/>" +
			"</td>" +
			"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
				"<span class=\"champ-lot-{id} lot-unite\" id=\"lot-{id}-unite\">{unite}</span>" +
				"<input class=\"champ-lot-{id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{id}-unite\" maxlength=\"20\" id=\"pro-lot-{id}-unite\"/>" +
			"</td>" +
			"<td class=\"com-table-td-med\">" +
				"à " +
				"<span class=\"champ-lot-{id} lot-prix\" id=\"lot-{id}-prix\">{prix}</span>" +
				"<input class=\"champ-lot-{id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{id}-prix\" maxlength=\"13\" id=\"pro-lot-{id}-prix\"/>" +
				" {sigleMonetaire}" +
			"</td>" +
			"<td class=\"com-table-td-med td-edt\">" +
				"<span class=\"btn-lot com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-lot\" title=\"Modifier\">" +
					"<span class=\"ui-icon ui-icon-pencil\"></span>" +
				"</span>" +
				"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-valider-lot\" id=\"btn-valider-lot-{id}\" title=\"Valider\">" +
					"<span class=\"ui-icon ui-icon-check\"></span>" +
				"</span>" +
			"</td>" +
			"<td class=\"com-table-td-fin td-edt\">" +
				"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-annuler-lot\" id=\"btn-annuler-lot-{id}\" title=\"Annuler\">" +
					"<span class=\"ui-icon ui-icon-closethick\"></span>" +
				"</span>" +
				"<span class=\"btn-lot com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-lot\" id=\"btn-supprimer-lot-abonnement-{id}\" title=\"Supprimer\">" +				
					"<span class=\"ui-icon ui-icon-trash\"></span>" +
				"</span>" +
			"</td>" +
		"</tr>" ;
	
	this.modeleLotAbonnement =
		"<tr class=\"ligne-lot-abonnement\" id=\"ligne-lot-abonnement-{id}\">" +
			"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{id}</span></td>" +
			"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
				"<input type=\"checkbox\" value=\"{id}\" name=\"pro-lot\" id=\"pro-lot-{id}-id\"/>" +
			"</td>" +
			"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
				"<span class=\"champ-lot-{id}-abonnement lot-quantite\" id=\"lot-{id}-quantite-abonnement\">{quantite}</span>"+
				"<input class=\"champ-lot-{id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{id}-quantite\" maxlength=\"13\" id=\"pro-lot-abonnement{id}-quantite\"/>" +
			"</td>" +
			"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
				"<span class=\"champ-lot-{id}-abonnement lot-unite\" id=\"lot-{id}-unite-abonnement\">{unite}</span>" +
				"<input disabled=\"disabled\" class=\"champ-lot-{id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{id}-unite\" maxlength=\"20\" id=\"pro-lot-abonnement{id}-unite\"/>" +
			"</td>" +
			"<td class=\"com-table-td-med\">" +
				"à " +
				"<span class=\"champ-lot-{id}-abonnement lot-prix\" id=\"lot-{id}-prix-abonnement\">{prix}</span>" +
				"<input class=\"champ-lot-{id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{id}-prix\" maxlength=\"13\" id=\"pro-lot-abonnement{id}-prix\"/>" +
				" {sigleMonetaire}" +
			"</td>" +
			"<td class=\"com-table-td-med td-edt\">" +
				"<span class=\"btn-lot-abonnement com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-lot-abonnement\" title=\"Modifier\">" +
					"<span class=\"ui-icon ui-icon-pencil\"></span>" +
				"</span>" +
				"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-valider-lot-abonnement\" id=\"btn-valider-lot-{id}-abonnement\" title=\"Valider\">" +
					"<span class=\"ui-icon ui-icon-check\"></span>" +
				"</span>" +
			"</td>" +
			"<td class=\"com-table-td-fin td-edt\">" +
				"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-annuler-lot-abonnement\" id=\"btn-annuler-lot-{id}-abonnement\" title=\"Annuler\">" +
					"<span class=\"ui-icon ui-icon-closethick\"></span>" +
				"</span>" +
				"<span class=\"btn-lot-abonnement com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-lot-abonnement\" id=\"btn-supprimer-lot-abonnement-{id}\" title=\"Supprimer\">" +				
					"<span class=\"ui-icon ui-icon-trash\"></span>" +
				"</span>" +
			"</td>" +
		"</tr>" ;
	
	this.btnValiderAjoutMarche = 
		"<div id=\"btn-gestion-marche\" class=\"com-widget-window ui-widget ui-widget-header ui-corner-all com-center\">" +
			"<button type=\"button\" id=\"btn-modifier-creation-commande\" class=\"com-btn-edt-multiples ui-helper-hidden ui-state-default ui-corner-all com-button com-center\">Modifier</button>" +
			"<button type=\"button\" id=\"btn-creer-marche\" class=\"ui-state-default ui-corner-all com-button com-center\">Valider</button>" +
		"</div>";
	
	this.ajoutMarcheListeProduit = 
		"<div id=\"liste-ferme\">" +
			"<!-- BEGIN fermes -->" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\" id=\"ferme-{fermes.ferId}\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">{fermes.ferNom}</div>" +
				"<!-- BEGIN fermes.categories -->" +
				"<table class=\"com-table\">" +
					"<tr class=\"ui-widget-header\" >" +
						"<td class=\"com-table-td-debut\">{fermes.categories.cproNom}</td>" +
						"<td class=\"com-table-td-med\"></td>" +
						"<td class=\"com-table-td-med\"></td>" +
						"<td class=\"com-table-td-fin\"></td>" +
					"</tr>" +
					"<!-- BEGIN fermes.categories.produits -->" +
					"<tr>" +
						"<td class=\"com-table-td-debut\">{fermes.categories.produits.nproNom}</td>" +
						"<td class=\"com-table-td-med edt-marche-pro-unite\">{fermes.categories.produits.abonnement}</td>" +
						"<td class=\"com-table-td-med td-edt\">" +
							"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-produit\" title=\"Modifier\" id-produit=\"{fermes.categories.produits.nproId}\" typeProduit=\"{fermes.categories.produits.type}\">" +
								"<span class=\"ui-icon ui-icon-pencil\"></span>" +
							"</span>" +
						"</td>" +
						"<td class=\"com-table-td-fin td-edt\">" +
							"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-produit\" title=\"Supprimer\" id-produit=\"{fermes.categories.produits.nproId}\" typeProduit=\"{fermes.categories.produits.type}\">" +				
								"<span class=\"ui-icon ui-icon-trash\"></span>" +
							"</span>" +
						"</td>" +
					"</tr>" +
					"<!-- END fermes.categories.produits -->" +
				"</table>" +
				"<!-- END fermes.categories -->" +
			"</div>"+
			"<!-- END fermes -->" +
		"</div>";
	
	this.flagAbonnement = 
		"<span class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Abonnement</span>";
	
	this.flagSolidaire = 
		"<span class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Solidaire</span>";
	
	this.dialogModifProduitAjoutMarche =
		"<div id=\"dialog-modif-pro\" title=\"Produit\">" +
			"<div id=\"information-detail-producteur\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Le Produit</div>" +

				"<div id=\"pro-idFerme\" class=\"com-float-left\" id-ferme=\"{ferId}\">" +
					"{ferNom}" +
				"</div>" +
				"<div id=\"pro-idCategorie\" class=\"com-float-left\" id-categorie=\"{cproId}\">" +
					"{cproNom}" +
				"</div>" +
				"<div id=\"pro-idProduit\" class=\"com-float-left\" id-produit=\"{nproId}\">" +
					"{nproNom}" +
				"</div>" +
			"</div>" +
			"<div id=\"prix-stock-produit\">" +
				"<div id=\"pro-typeProduit\">" +
					"{typeProduitLabel}" +
				"</div>" +
				"{divLot}" +
				"{divStock}" + 
			"</div>" +
		"</div>";
	
	this.typeProduitLabelNormal =
		"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Type de produit</div>" +
		"Normal";
	
	this.typeProduitLabelSolidaire =
		"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Type de produit</div>" +
		"Solidaire";
	
	this.typeProduitLabelAbonnement =
		"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Type de produit</div>" +
		"Abonnement";
	
	this.typeProduitLabelFormulaire =
		"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Type de produit</div>" +
		"<input class=\"ui-widget-content ui-corner-all\" type=\"radio\" name=\"typeProduit\" id=\"pro-typeProduitNormal\" value=\"0\" {typeNormalSelected} /> Normal" +
		"<input class=\"ui-widget-content ui-corner-all\" type=\"radio\" name=\"typeProduit\" id=\"pro-typeProduitSolidaire\" value=\"1\" {typeSolidaireSelected}/> Solidaire";
		
	
	this.prixModifProduit =
		"<div id=\"div-lot\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Les Prix de vente</div>" +
			"<table class=\"com-table-form\" id=\"table-pro-prix\">" +
				"<tr>" +
					"<td class=\"catalogue-entete-lot\">Quantité</td>" +
					"<td class=\"catalogue-entete-lot\">Unité</td>" +
					"<td>Prix</td>" +
					"<td></td>" +
					"<td></td>" +
				"</tr>" +
				"<tr class=\"btn-lot\">" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-quantite\" maxlength=\"13\" id=\"pro-lot-quantite\"/>" +
					"</td>" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all\" type=\"text\" name=\"lot-unite\" maxlength=\"20\" id=\"pro-lot-unite\"/>" +
					"</td>" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-prix\" maxlength=\"13\" id=\"pro-lot-prix\"/> {sigleMonetaire}" +
					"</td>" +
					"<td colspan=\"2\">" +
						"<button type=\"button\" id=\"btn-ajout-lot\" class=\"ui-state-default ui-corner-all com-button com-center\">Ajouter un prix de vente</button>" +
					"</td>" +
				"</tr>" +
			"</table>" +
			"<table class=\"com-table\" id=\"lot-liste\">" +
				"<!-- BEGIN modelesLotReservation -->" +
				"<tr class=\"ligne-lot\" id=\"ligne-lot-{modelesLotReservation.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{modelesLotReservation.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" checked=\"checked\" disabled=\"disabled\" value=\"{modelesLotReservation.id}\" name=\"pro-lot\" id=\"pro-lot-{modelesLotReservation.id}-id\" {modelesLotReservation.checked} class=\"{modelesLotReservation.modele}\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{modelesLotReservation.id} lot-quantite\" id=\"lot-{modelesLotReservation.id}-quantite\">{modelesLotReservation.quantite}</span>"+
						"<input class=\"champ-lot-{modelesLotReservation.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotReservation.id}-quantite\" maxlength=\"13\" id=\"pro-lot-{modelesLotReservation.id}-quantite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{modelesLotReservation.id} lot-unite\" id=\"lot-{modelesLotReservation.id}-unite\">{modelesLotReservation.unite}</span>" +
						"<input class=\"champ-lot-{modelesLotReservation.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotReservation.id}-unite\" maxlength=\"20\" id=\"pro-lot-{modelesLotReservation.id}-unite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{modelesLotReservation.id} lot-prix\" id=\"lot-{modelesLotReservation.id}-prix\">{modelesLotReservation.prix}</span>" +
						"<input class=\"champ-lot-{modelesLotReservation.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotReservation.id}-prix\" maxlength=\"13\" id=\"pro-lot-{modelesLotReservation.id}-prix\"/>" +
						" {modelesLotReservation.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
						"<span class=\"btn-lot com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-lot\" title=\"Modifier\">" +
							"<span class=\"ui-icon ui-icon-pencil\"></span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-valider-lot\" id=\"btn-valider-lot-{modelesLotReservation.id}\" title=\"Valider\">" +
							"<span class=\"ui-icon ui-icon-check\"></span>" +
						"</span>" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-annuler-lot\" id=\"btn-annuler-lot-{modelesLotReservation.id}\" title=\"Annuler\">" +
							"<span class=\"ui-icon ui-icon-closethick\"></span>" +
						"</span>" +
						"<span class=\"btn-lot com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-lot\"  id=\"btn-supprimer-lot-{modelesLotReservation.id}\" title=\"Supprimer\">" +				
							"<span class=\"ui-icon ui-icon-trash\"></span>" +
						"</span>" +
					"</td>" +
				"</tr>" +
				"<!-- END modelesLotReservation -->" +
	
				"<!-- BEGIN modelesLot -->" +
				"<tr class=\"ligne-lot\" id=\"ligne-lot-{modelesLot.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{modelesLot.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" value=\"{modelesLot.id}\" name=\"pro-lot\" id=\"pro-lot-{modelesLot.id}-id\" {modelesLot.checked} class=\"{modelesLot.modele}\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{modelesLot.id} lot-quantite\" id=\"lot-{modelesLot.id}-quantite\">{modelesLot.quantite}</span>"+
						"<input class=\"champ-lot-{modelesLot.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLot.id}-quantite\" maxlength=\"13\" id=\"pro-lot-{modelesLot.id}-quantite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{modelesLot.id} lot-unite\" id=\"lot-{modelesLot.id}-unite\">{modelesLot.unite}</span>" +
						"<input class=\"champ-lot-{modelesLot.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLot.id}-unite\" maxlength=\"20\" id=\"pro-lot-{modelesLot.id}-unite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{modelesLot.id} lot-prix\" id=\"lot-{modelesLot.id}-prix\">{modelesLot.prix}</span>" +
						"<input class=\"champ-lot-{modelesLot.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLot.id}-prix\" maxlength=\"13\" id=\"pro-lot-{modelesLot.id}-prix\"/>" +
						" {modelesLot.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
						"<span class=\"btn-lot com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-lot\" title=\"Modifier\">" +
							"<span class=\"ui-icon ui-icon-pencil\"></span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-valider-lot\" id=\"btn-valider-lot-{modelesLot.id}\" title=\"Valider\">" +
							"<span class=\"ui-icon ui-icon-check\"></span>" +
						"</span>" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-annuler-lot\" id=\"btn-annuler-lot-{modelesLot.id}\" title=\"Annuler\">" +
							"<span class=\"ui-icon ui-icon-closethick\"></span>" +
						"</span>" +
						"<span class=\"btn-lot com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-lot\"  id=\"btn-supprimer-lot-{modelesLot.id}\" title=\"Supprimer\">" +				
							"<span class=\"ui-icon ui-icon-trash\"></span>" +
						"</span>" +
					"</td>" +
				"</tr>" +
				"<!-- END modelesLot -->" +
	
				"<!-- BEGIN listeModelesLot -->" +
				"<tr class=\"ligne-lot\" id=\"ligne-lot-modele-{listeModelesLot.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{listeModelesLot.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" value=\"{listeModelesLot.id}\" name=\"pro-lot\" id=\"pro-lot-{listeModelesLot.id}-id\" {listeModelesLot.checked} class=\"{listeModelesLot.modele}\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{listeModelesLot.id} lot-quantite\" id=\"lot-{listeModelesLot.id}-quantite\">{listeModelesLot.quantite}</span>"+
						"<input class=\"champ-lot-{listeModelesLot.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{listeModelesLot.id}-quantite\" maxlength=\"13\" id=\"pro-lot-{listeModelesLot.id}-quantite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{listeModelesLot.id} lot-unite\" id=\"lot-{listeModelesLot.id}-unite\">{listeModelesLot.unite}</span>" +
						"<input class=\"champ-lot-{listeModelesLot.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{listeModelesLot.id}-unite\" maxlength=\"20\" id=\"pro-lot-{listeModelesLot.id}-unite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{listeModelesLot.id} lot-prix\" id=\"lot-{listeModelesLot.id}-prix\">{listeModelesLot.prix}</span>" +
						"<input class=\"champ-lot-{listeModelesLot.id} catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{listeModelesLot.id}-prix\" maxlength=\"13\" id=\"pro-lot-{listeModelesLot.id}-prix\"/>" +
						" {listeModelesLot.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
					"</td>" +
				"</tr>" +
				"<!-- END listeModelesLot -->" +
			
			"</table>" +
		"</div>";
	
	this.prixAbonnementModifProduit =
		"<div id=\"div-lot-abonnement\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Les Prix de vente</div>" +
			"<table class=\"com-table-form\" id=\"table-pro-abonnement-prix\">" +
				"<tr>" +
					"<td class=\"catalogue-entete-lot\">Quantité</td>" +
					"<td class=\"catalogue-entete-lot\">Unité</td>" +
					"<td>Prix</td>" +
					"<td></td>" +
					"<td></td>" +
				"</tr>" +
				"<tr class=\"btn-lot-abonnement\">" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-abo-quantite\" maxlength=\"13\" id=\"pro-abo-lot-quantite\"/>" +
					"</td>" +
					"<td>" +
						"<span id=\"pro-abo-lot-unite\">{uniteAbonnement}</span>" +
					"</td>" +
					"<td>" +
						"<input class=\"pro-form-input-lot com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" name=\"lot-abo-prix\" maxlength=\"13\" id=\"pro-abo-lot-prix\"/> {sigleMonetaire}" +
					"</td>" +
					"<td colspan=\"2\">" +
						"<button type=\"button\" id=\"btn-ajout-lot-abonnement\" class=\"ui-state-default ui-corner-all com-button com-center\">Ajouter un prix de vente</button>" +
					"</td>" +
				"</tr>" +
			"</table>" +
			"<table class=\"com-table\" id=\"lot-liste-abonnement\">" +
				"<!-- BEGIN modelesLotAbonnementReservation -->" +
				"<tr class=\"ligne-lot-abonnement\" id=\"ligne-lot-abonnement-{modelesLotAbonnementReservation.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{modelesLotAbonnementReservation.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" checked=\"checked\" disabled=\"disabled\" value=\"{modelesLotAbonnementReservation.id}\" name=\"pro-lot\" id=\"pro-lot-{modelesLotAbonnementReservation.id}-id\" class=\"modele-lot-reservation\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnementReservation.id}-abonnement lot-quantite\" id=\"lot-{modelesLotAbonnementReservation.id}-quantite-abonnement\">{modelesLotAbonnementReservation.quantite}</span>"+
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnementReservation.id}-abonnement lot-unite\" id=\"lot-{modelesLotAbonnementReservation.id}-unite-abonnement\">{modelesLotAbonnementReservation.unite}</span>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{modelesLotAbonnementReservation.id}-abonnement lot-prix\" id=\"lot-{modelesLotAbonnementReservation.id}-prix-abonnement\">{modelesLotAbonnementReservation.prix}</span>" +
						" {modelesLotAbonnementReservation.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
					"</td>" +
				"</tr>" +
				"<!-- END modelesLotAbonnementReservation -->" +
				
				"<!-- BEGIN modelesLotAbonnementReservationModif -->" +
				"<tr class=\"ligne-lot-abonnement\" id=\"ligne-lot-abonnement-{modelesLotAbonnementReservationModif.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{modelesLotAbonnementReservationModif.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" checked=\"checked\" disabled=\"disabled\" value=\"{modelesLotAbonnementReservationModif.id}\" name=\"pro-lot\" id=\"pro-lot-{modelesLotAbonnementReservationModif.id}-id\" {modelesLotAbonnementReservationModif.checked} class=\"{modelesLotAbonnementReservationModif.modele}\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnementReservationModif.id}-abonnement lot-quantite\" id=\"lot-{modelesLotAbonnementReservationModif.id}-quantite-abonnement\">{modelesLotAbonnementReservationModif.quantite}</span>"+
						"<input class=\"champ-lot-{modelesLotAbonnementReservationModif.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotAbonnementReservationModif.id}-quantite\" maxlength=\"13\" id=\"pro-lot-abonnement{modelesLotAbonnementReservationModif.id}-quantite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnementReservationModif.id}-abonnement lot-unite\" id=\"lot-{modelesLotAbonnementReservationModif.id}-unite-abonnement\">{modelesLotAbonnementReservationModif.unite}</span>" +
						"<input disabled=\"disabled\" class=\"champ-lot-{modelesLotAbonnementReservationModif.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotAbonnementReservationModif.id}-unite\" maxlength=\"20\" id=\"pro-lot-abonnement{modelesLotAbonnementReservationModif.id}-unite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{modelesLotAbonnementReservationModif.id}-abonnement lot-prix\" id=\"lot-{modelesLotAbonnementReservationModif.id}-prix-abonnement\">{modelesLotAbonnementReservationModif.prix}</span>" +
						"<input class=\"champ-lot-{modelesLotAbonnementReservationModif.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotAbonnementReservationModif.id}-prix\" maxlength=\"13\" id=\"pro-lot-abonnement{modelesLotAbonnementReservationModif.id}-prix\"/>" +
						" {modelesLotAbonnementReservationModif.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
						"<span class=\"btn-lot-abonnement com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-lot-abonnement\" title=\"Modifier\">" +
							"<span class=\"ui-icon ui-icon-pencil\"></span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-valider-lot-abonnement\" id=\"btn-valider-lot-{modelesLotAbonnementReservationModif.id}-abonnement\" title=\"Valider\">" +
							"<span class=\"ui-icon ui-icon-check\"></span>" +
						"</span>" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-annuler-lot-abonnement\" id=\"btn-annuler-lot-{modelesLotAbonnementReservationModif.id}-abonnement\" title=\"Annuler\">" +
							"<span class=\"ui-icon ui-icon-closethick\"></span>" +
						"</span>" +
						"<span class=\"btn-lot-abonnement com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-lot-abonnement\" id=\"btn-supprimer-lot-abonnement-{modelesLotAbonnementReservationModif.id}\" title=\"Supprimer\">" +				
							"<span class=\"ui-icon ui-icon-trash\"></span>" +
						"</span>" +
					"</td>" +
				"</tr>" +
				"<!-- END modelesLotAbonnementReservationModif -->" +
	
				"<!-- BEGIN modelesLotAbonnement -->" +
				"<tr class=\"ligne-lot-abonnement\" id=\"ligne-lot-abonnement-{modelesLotAbonnement.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{modelesLotAbonnement.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" value=\"{modelesLotAbonnement.id}\" name=\"pro-lot\" id=\"pro-lot-{modelesLotAbonnement.id}-id\" {modelesLotAbonnement.checked} class=\"{modelesLotAbonnement.modele}\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnement.id}-abonnement lot-quantite\" id=\"lot-{modelesLotAbonnement.id}-quantite-abonnement\">{modelesLotAbonnement.quantite}</span>"+
						"<input class=\"champ-lot-{modelesLotAbonnement.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotAbonnement.id}-quantite\" maxlength=\"13\" id=\"pro-lot-abonnement{modelesLotAbonnement.id}-quantite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{modelesLotAbonnement.id}-abonnement lot-unite\" id=\"lot-{modelesLotAbonnement.id}-unite-abonnement\">{modelesLotAbonnement.unite}</span>" +
						"<input disabled=\"disabled\" class=\"champ-lot-{modelesLotAbonnement.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotAbonnement.id}-unite\" maxlength=\"20\" id=\"pro-lot-abonnement{modelesLotAbonnement.id}-unite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{modelesLotAbonnement.id}-abonnement lot-prix\" id=\"lot-{modelesLotAbonnement.id}-prix-abonnement\">{modelesLotAbonnement.prix}</span>" +
						"<input class=\"champ-lot-{modelesLotAbonnement.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{modelesLotAbonnement.id}-prix\" maxlength=\"13\" id=\"pro-lot-abonnement{modelesLotAbonnement.id}-prix\"/>" +
						" {modelesLotAbonnement.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
						"<span class=\"btn-lot-abonnement com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-lot-abonnement\" title=\"Modifier\">" +
							"<span class=\"ui-icon ui-icon-pencil\"></span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-valider-lot-abonnement\" id=\"btn-valider-lot-{modelesLotAbonnement.id}-abonnement\" title=\"Valider\">" +
							"<span class=\"ui-icon ui-icon-check\"></span>" +
						"</span>" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all ui-helper-hidden btn-annuler-lot-abonnement\" id=\"btn-annuler-lot-{modelesLotAbonnement.id}-abonnement\" title=\"Annuler\">" +
							"<span class=\"ui-icon ui-icon-closethick\"></span>" +
						"</span>" +
						"<span class=\"btn-lot-abonnement com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-lot-abonnement\" id=\"btn-supprimer-lot-abonnement-{modelesLotAbonnement.id}\" title=\"Supprimer\">" +				
							"<span class=\"ui-icon ui-icon-trash\"></span>" +
						"</span>" +
					"</td>" +
				"</tr>" +
				"<!-- END modelesLotAbonnement -->" +
				
				"<!-- BEGIN listeModelesLotAbonnement -->" +
				"<tr class=\"ligne-lot-abonnement\" id=\"ligne-lot-abonnement-modele-{listeModelesLotAbonnement.id}\">" +
					"<td class=\"ui-helper-hidden\"><span class=\"ui-helper-hidden lot-id\" id=\"id-lot\">{listeModelesLotAbonnement.id}</span></td>" +
					"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
						"<input type=\"checkbox\" value=\"{listeModelesLotAbonnement.id}\" name=\"pro-lot\" id=\"pro-lot-{listeModelesLotAbonnement.id}-id\" {listeModelesLotAbonnement.checked} class=\"{listeModelesLotAbonnement.modele}\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
						"<span class=\"champ-lot-{listeModelesLotAbonnement.id}-abonnement lot-quantite\" id=\"lot-{listeModelesLotAbonnement.id}-quantite-abonnement\">{listeModelesLotAbonnement.quantite}</span>"+
						"<input class=\"champ-lot-{listeModelesLotAbonnement.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{listeModelesLotAbonnement.id}-quantite\" maxlength=\"13\" id=\"pro-lot-abonnement{listeModelesLotAbonnement.id}-quantite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
						"<span class=\"champ-lot-{listeModelesLotAbonnement.id}-abonnement lot-unite\" id=\"lot-{listeModelesLotAbonnement.id}-unite-abonnement\">{listeModelesLotAbonnement.unite}</span>" +
						"<input disabled=\"disabled\" class=\"champ-lot-{listeModelesLotAbonnement.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all ui-helper-hidden\" type=\"text\" name=\"lot-{listeModelesLotAbonnement.id}-unite\" maxlength=\"20\" id=\"pro-lot-abonnement{listeModelesLotAbonnement.id}-unite\"/>" +
					"</td>" +
					"<td class=\"com-table-td-med\">" +
						"à " +
						"<span class=\"champ-lot-{listeModelesLotAbonnement.id}-abonnement lot-prix\" id=\"lot-{listeModelesLotAbonnement.id}-prix-abonnement\">{listeModelesLotAbonnement.prix}</span>" +
						"<input class=\"champ-lot-{listeModelesLotAbonnement.id}-abonnement catalogue-input-lot com-input-text ui-widget-content ui-corner-all com-numeric ui-helper-hidden\" type=\"text\" name=\"lot-{listeModelesLotAbonnement.id}-prix\" maxlength=\"13\" id=\"pro-lot-abonnement{listeModelesLotAbonnement.id}-prix\"/>" +
						" {listeModelesLotAbonnement.sigleMonetaire}" +
					"</td>" +
					"<td class=\"com-table-td-med td-edt\">" +
					"</td>" +
					"<td class=\"com-table-td-fin td-edt\">" +
					"</td>" +
				"</tr>" +
				"<!-- END listeModelesLotAbonnement -->" +
			
			"</table>" +
		"</div>";
	
	this.stockModifProduit = 
		"<div id=\"id-stock\" class=\"{visibleSolidaire} pro-detail\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Stock</div>" +
			"<table class=\"com-table-form\">" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
						"Limite de stock : " +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<input class=\"com-input-text ui-widget-content ui-corner-all\" type=\"radio\" name=\"pro-stock-choix\" value=\"0\" {nproStockCheckedNoLimit} />Pas de limite" +
					"</td>" +
				"</tr>" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<input class=\"com-input-text ui-widget-content ui-corner-all\" type=\"radio\" name=\"pro-stock-choix\" value=\"1\" {nproStockCheckedLimit} />" +
						"<input {nproStockDisabled} class=\"com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" value=\"{nproStock}\" name=\"pro-stock\" maxlength=\"13\" id=\"pro-qteRestante\"/> <span class=\"unite-stock\">{unite}</span>" +
					"</td>" +
				"</tr>" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
						"Quantité max par adhérent : " +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<input class=\"com-input-text ui-widget-content ui-corner-all\" type=\"radio\" name=\"pro-qte-max-choix\" value=\"0\" {nproQteMaxCheckedNoLimit} />Pas de limite" +
					"</td>" +
				"</tr>" +
				"<tr>" +
					"<th class=\"com-table-form-th\">" +
					"</th>" +
					"<td class=\"com-table-form-td\">" +
						"<input class=\"com-input-text ui-widget-content ui-corner-all\" type=\"radio\" name=\"pro-qte-max-choix\" value=\"1\" {nproQteMaxCheckedLimit} />" +
						"<input {nproQteMaxDisabled} class=\"com-input-text ui-widget-content ui-corner-all com-numeric\" type=\"text\" value=\"{nproQteMax}\" name=\"pro-qte-max\" maxlength=\"13\" id=\"pro-qteMaxCommande\"/> <span class=\"unite-stock\">{unite}</span>" +
					"</td>" +
				"</tr>" +
			"</table>" +
		"</div>";

	this.dialogSupprimerLotModifierMarche =
		"<div id=\"dialog-supp-lot\" title=\"Supprimer le prix de vente\">" +
			"<div id=\"information-detail-producteur\">" +
				"Des réservations sont positionnées sur ce prix de vente.<br/>" +
				"Veuillez préciser le nouveau prix de vente sur lequel se baseront ces réservations." +				
			"</div>" +
			"<div>" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Les Prix de vente</div>" +
				"<table class=\"com-table-100\" id=\"lot-liste\">" +				
					"<!-- BEGIN modelesLot -->" +
					"<tr class=\"ligne-lot\" id=\"ligne-lot-{modelesLot.id}\">" +
						"<td class=\"com-table-td-debut catalogue-ligne-lot-quantite td-edt\">" +
							"<input type=\"radio\" value=\"{modelesLot.id}\" name=\"pro-lot\" id=\"pro-lot-{modelesLot.id}-id\"/>" +
						"</td>" +
						"<td class=\"com-table-td-med catalogue-ligne-lot-quantite\">" +
							"<span class=\"champ-lot-{modelesLot.id} lot-quantite\" id=\"lot-{modelesLot.id}-quantite\">{modelesLot.quantite}</span>"+
						"</td>" +
						"<td class=\"com-table-td-med catalogue-ligne-lot-unite\">" +
							"<span class=\"champ-lot-{modelesLot.id} lot-unite\" id=\"lot-{modelesLot.id}-unite\">{modelesLot.unite}</span>" +
						"</td>" +
						"<td class=\"com-table-td-fin\">" +
							"à " +
							"<span class=\"champ-lot-{modelesLot.id} lot-prix\" id=\"lot-{modelesLot.id}-prix\">{modelesLot.prix}</span>" +
							" {modelesLot.sigleMonetaire}" +
						"</td>" +
					"</tr>" +
					"<!-- END modelesLot -->" +				
				"</table>" +
			"</div>" +
		"</div>";
		
	this.formulaireAjoutMarche = 
		"<div id=\"contenu\">" +
			"<div id=\"formulaire_ajout_commande_ext\">" +		
				"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
					"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Nouveau Marché</div>" +
					"<div class=\"com-widget-content\">" +		
						"<form id=\"formulaire-information-creation-commande\">" +
							"<table class=\"com-table-form\">" +
								"<tr>" +
									"<th class=\"com-table-form-th\">Nom du Marché : </th>" +
									"<td class=\"com-table-form-td\">" +
										"<span id=\"nom-marche-span\" class=\"ui-helper-hidden informations-marche\"></span>" +
										"<input class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" type=\"text\" name=\"nom\" id=\"marche-nom\" maxlength=\"100\" />" +
									"</td>" +
								"</tr>" +								
								"<tr>" +
									"<th class=\"com-table-form-th\">Début des Réservations * : </th>" +
									"<td class=\"com-table-form-td\">" +
										"<span id=\"date-debut-reservation-marche-span\" class=\"ui-helper-hidden informations-marche\"></span>" +
										"<input class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" type=\"text\" name=\"date-debut-reservation\" id=\"marche-dateDebutReservation\" />" +
									"</td>" +
									"<td class=\"com-table-form-td\">" +
										"à " +
										"<span id=\"time-debut-reservation-marche-span\" class=\"ui-helper-hidden informations-marche\"></span>" +
										"<select name=\"heure-debut-reservation\" id=\"marche-timeDebutReservation\" class=\"informations-marche\" >" +
											"<option value=\"00\">00</option>" +
										    "<option value=\"01\">01</option>" +
										    "<option value=\"02\">02</option>" +
										    "<option value=\"03\">03</option>" +
										    "<option value=\"04\">04</option>" +
										    "<option value=\"05\">05</option>" +
										    "<option value=\"06\">06</option>" +
										    "<option value=\"07\">07</option>" +
										    "<option value=\"08\">08</option>" +
										    "<option value=\"09\">09</option>" +
										    "<option value=\"10\">10</option>" +
										    "<option value=\"11\">11</option>" +
										    "<option value=\"12\">12</option>" +
										    "<option value=\"13\">13</option>" +
										    "<option value=\"14\">14</option>" +
										    "<option value=\"15\">15</option>" +
										    "<option value=\"16\">16</option>" +
										    "<option value=\"17\">17</option>" +
										    "<option value=\"18\">18</option>" +
										    "<option value=\"19\">19</option>" +
										    "<option value=\"20\">20</option>" +
										    "<option value=\"21\">21</option>" +
										    "<option value=\"22\">22</option>" +
										    "<option value=\"23\">23</option>" +
										  "</select>" +
					   					"<span class=\"informations-marche\">H</span> <select name=\"minute-debut-reservation\" class=\"informations-marche\">" +
											"<option value=\"00\">00</option>" +
										    "<option value=\"05\">05</option>" +
										    "<option value=\"10\">10</option>" +
										    "<option value=\"15\">15</option>" +
										    "<option value=\"20\">20</option>" +
										    "<option value=\"25\">25</option>" +
										    "<option value=\"30\">30</option>" +
										    "<option value=\"35\">35</option>" +
										    "<option value=\"40\">40</option>" +
										    "<option value=\"45\">45</option>" +
										    "<option value=\"50\">50</option>" +
										    "<option value=\"55\">55</option>" +
										  "</select>" +
									"</td>" +
								"</tr>" +								
								"<tr>" +
									"<th class=\"com-table-form-th\">Fin des Réservations * : </th>" +
									"<td class=\"com-table-form-td\">" +
										"<span id=\"date-fin-reservation-marche-span\" class=\"ui-helper-hidden informations-marche\"></span>" +
										"<input class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" type=\"text\" name=\"date-fin-reservation\" id=\"marche-dateFinReservation\" />" +
									"</td>" +
									"<td class=\"com-table-form-td\">" +
										"à " +
										"<span id=\"time-fin-reservation-marche-span\" class=\"ui-helper-hidden informations-marche\"></span>" +
										"<select name=\"heure-fin-reservation\" id=\"marche-timeFinReservation\" class=\"informations-marche\" >" +
											"<option value=\"00\">00</option>" +
										    "<option value=\"01\">01</option>" +
										    "<option value=\"02\">02</option>" +
										    "<option value=\"03\">03</option>" +
										    "<option value=\"04\">04</option>" +
										    "<option value=\"05\">05</option>" +
										    "<option value=\"06\">06</option>" +
										    "<option value=\"07\">07</option>" +
										    "<option value=\"08\">08</option>" +
										    "<option value=\"09\">09</option>" +
										    "<option value=\"10\">10</option>" +
										    "<option value=\"11\">11</option>" +
										    "<option value=\"12\">12</option>" +
										    "<option value=\"13\">13</option>" +
										    "<option value=\"14\">14</option>" +
										    "<option value=\"15\">15</option>" +
										    "<option value=\"16\">16</option>" +
										    "<option value=\"17\">17</option>" +
										    "<option value=\"18\">18</option>" +
										    "<option value=\"19\">19</option>" +
										    "<option value=\"20\">20</option>" +
										    "<option value=\"21\">21</option>" +
										    "<option value=\"22\">22</option>" +
										    "<option value=\"23\">23</option>" +
										  "</select>" +
					   					"<span class=\"informations-marche\">H</span> <select name=\"minute-fin-reservation\" class=\"informations-marche\">" +
											"<option value=\"00\">00</option>" +
										    "<option value=\"05\">05</option>" +
										    "<option value=\"10\">10</option>" +
										    "<option value=\"15\">15</option>" +
										    "<option value=\"20\">20</option>" +
										    "<option value=\"25\">25</option>" +
										    "<option value=\"30\">30</option>" +
										    "<option value=\"35\">35</option>" +
										    "<option value=\"40\">40</option>" +
										    "<option value=\"45\">45</option>" +
										    "<option value=\"50\">50</option>" +
										    "<option value=\"55\">55</option>" +
										  "</select>" +
									"</td>" +
								"</tr>" +
								"<tr>" +
									"<th class=\"com-table-form-th\">Jour du marché * : </th>" +
									"<td class=\"com-table-form-td\">" +
										"<span id=\"date-debut-marche-span\" class=\"ui-helper-hidden informations-marche\"></span>" +
										"<input class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" type=\"text\" name=\"date-debut\" id=\"marche-dateMarcheDebut\"/>" +
									"</td>" +
									"<td class=\"com-table-form-td\">" +
										"de " +
										"<span id=\"time-debut-marche-span\" class=\"ui-helper-hidden informations-marche\"></span>" +
										"<select name=\"heure-debut\" id=\"marche-timeMarcheDebut\" class=\"informations-marche\">" +
											"<option value=\"00\">00</option>" +
										    "<option value=\"01\">01</option>" +
										    "<option value=\"02\">02</option>" +
										    "<option value=\"03\">03</option>" +
										    "<option value=\"04\">04</option>" +
										    "<option value=\"05\">05</option>" +
										    "<option value=\"06\">06</option>" +
										    "<option value=\"07\">07</option>" +
										    "<option value=\"08\">08</option>" +
										    "<option value=\"09\">09</option>" +
										    "<option value=\"10\">10</option>" +
										    "<option value=\"11\">11</option>" +
										    "<option value=\"12\">12</option>" +
										    "<option value=\"13\">13</option>" +
										    "<option value=\"14\">14</option>" +
										    "<option value=\"15\">15</option>" +
										    "<option value=\"16\">16</option>" +
										    "<option value=\"17\">17</option>" +
										    "<option selected=\"selected\" value=\"18\">18</option>" +
										    "<option value=\"19\">19</option>" +
										    "<option value=\"20\">20</option>" +
										    "<option value=\"21\">21</option>" +
										    "<option value=\"22\">22</option>" +
										    "<option value=\"23\">23</option>" +
										  "</select>" +
					   					"<span class=\"informations-marche\">H</span> <select name=\"minute-debut\" class=\"informations-marche\">" +
											"<option value=\"00\">00</option>" +
										    "<option value=\"05\">05</option>" +
										    "<option value=\"10\">10</option>" +
										    "<option value=\"15\">15</option>" +
										    "<option value=\"20\">20</option>" +
										    "<option value=\"25\">25</option>" +
										    "<option selected=\"selected\" value=\"30\">30</option>" +
										    "<option value=\"35\">35</option>" +
										    "<option value=\"40\">40</option>" +
										    "<option value=\"45\">45</option>" +
										    "<option value=\"50\">50</option>" +
										    "<option value=\"55\">55</option>" +
										  "</select>" +
										"</td>" +
										"<td class=\"com-table-form-td\">" +
											"à " +
											"<span id=\"time-fin-marche-span\" class=\"ui-helper-hidden informations-marche\"></span>" +
											"<select name=\"heure-fin\" id=\"marche-timeMarcheFin\" class=\"informations-marche\">" +
											"<option value=\"00\">00</option>" +
										    "<option value=\"01\">01</option>" +
										    "<option value=\"02\">02</option>" +
										    "<option value=\"03\">03</option>" +
										    "<option value=\"04\">04</option>" +
										    "<option value=\"05\">05</option>" +
										    "<option value=\"06\">06</option>" +
										    "<option value=\"07\">07</option>" +
										    "<option value=\"08\">08</option>" +
										    "<option value=\"09\">09</option>" +
										    "<option value=\"10\">10</option>" +
										    "<option value=\"11\">11</option>" +
										    "<option value=\"12\">12</option>" +
										    "<option value=\"13\">13</option>" +
										    "<option value=\"14\">14</option>" +
										    "<option value=\"15\">15</option>" +
										    "<option value=\"16\">16</option>" +
										    "<option value=\"17\">17</option>" +
										    "<option value=\"18\">18</option>" +
										    "<option selected=\"selected\" value=\"19\">19</option>" +
										    "<option value=\"20\">20</option>" +
										    "<option value=\"21\">21</option>" +
										    "<option value=\"22\">22</option>" +
										    "<option value=\"23\">23</option>" +
										  "</select>" +
					   					"<span class=\"informations-marche\">H</span> <select name=\"minute-fin\" class=\"informations-marche\">" +
											"<option value=\"00\">00</option>" +
										    "<option value=\"05\">05</option>" +
										    "<option value=\"10\">10</option>" +
										    "<option value=\"15\">15</option>" +
										    "<option value=\"20\">20</option>" +
										    "<option value=\"25\">25</option>" +
										    "<option value=\"30\">30</option>" +
										    "<option value=\"35\">35</option>" +
										    "<option value=\"40\">40</option>" +
										    "<option selected=\"selected\" value=\"45\">45</option>" +
										    "<option value=\"50\">50</option>" +
										    "<option value=\"55\">55</option>" +
										  "</select>" +
									"</td>" +
								"</tr>" +
								"<tr>" +
									"<th class=\"com-table-form-th\">Description : </th>" +
									"<td class=\"com-table-form-td\">" +
										"<span id=\"description-marche-span\" class=\"ui-helper-hidden informations-marche\"></span>" +
										"<textarea class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" name=\"description\" id=\"marche-description\" ></textarea>" +
									"</td>" +
								"</tr>" +
							"</table>" +
						"</form>" +
					"</div>" +
				"</div>" +
				"<div id=\"btn-ajout-produit-div\" class=\"com-widget-window ui-widget ui-widget-header ui-corner-all com-center\">" +
					"<button type=\"button\" id=\"btn-ajout-produit\" class=\"ui-state-default ui-corner-all com-button com-center\">Ajouter un produit</button>" +
				"</div>" +
				"<div id=\"liste-ferme\">" +
				"</div>" +
			"</div>" +	
		"</div>";
	
	this.listeCommandePage = 
		"<div id=\"contenu\">" +
			"<div id=\"liste_commande_int\">" +
				"<div class=\"com-barre-menu-2\">" +
					"<button class=\"ui-state-default ui-corner-top com-button\" id=\"lien-marche-archive\">" +
						"<span class=\"com-float-left\">Les Marchés cloturés</span>" +
						"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-e\"></span>" +
					"</button>" +
				"</div>" +
				"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
					"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
						"Les Marchés en cours" +
						"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-nv-marche\" title=\"Ajouter un marché\">" +
							"<span class=\"ui-icon ui-icon-plusthick\">" +
							"</span>" +
						"</span>" +
					"</div>" +
						"<table class=\"com-table\">" +
							"<tr class=\"ui-widget ui-widget-header\">" +
								"<th class=\"com-table-th-debut com-center\" colspan=\"2\">N°</th>" +
								"<th class=\"com-table-th-med\">Marché</th>	" +
								"<th class=\"com-table-th-med\">Date de cloture des Réservations</th>" +
								"<th class=\"com-table-th-fin\"></th>" +
							"</tr>" +
							"<!-- BEGIN commande -->" +
							"<tr class=\"com-cursor-pointer btn-marche\" id=\"{commande.id}\">" +
								"<td class=\"com-table-td-debut lst-resa-th-num com-text-align-right\">{commande.numero} :</td>" +
								"<td class=\"com-table-td-med lst-resa-td-nom \">{commande.nom}</td>" +
								"<td class=\"com-table-td-med\">Le {commande.jourMarcheDebut} {commande.dateMarcheDebut} de {commande.heureMarcheDebut}H{commande.minuteMarcheDebut} à {commande.heureMarcheFin}H{commande.minuteMarcheFin}</td>" +
								"<td class=\"com-table-td-med\">Le {commande.jourFinReservation} {commande.dateFinReservation} à {commande.heureFinReservation}H{commande.minuteFinReservation}</td>" +
								"<td class=\"com-table-td-fin\">" +
									"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\">" +
										"<span class=\"ui-icon ui-icon-triangle-1-e\"></span>" +
									"</span>" +
								"</td>" +								
							"</tr>" +
							"<!-- END commande -->" +
						"</table>" +
					"</div>" +	
				"</div>" +				
			"</div>" +
		"</div>";
	
	this.listeCommandeArchivePage = 
		"<div id=\"contenu\">" +
			"<div id=\"liste_commande_int\">" +
				"<div class=\"com-barre-menu-2\">" +
					"<button class=\"ui-state-default ui-corner-top com-button\" id=\"lien-marche-encours\">" +
						"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Les Marchés en cours" +
					"</button>" +
				"</div>" +
				"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
					"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Les Marchés cloturés</div>" +
					
						"<div id=\"content-nav-liste-operation\" class=\"ui-helper-clearfix ui-state-default ui-corner-all\">" +	
							"<form>" +	
							"	<span id=\"icone-nav-liste-operation-w\" class=\"prev ui-helper-hidden ui-state-default ui-corner-all com-button\" ><span class=\"ui-icon ui-icon-circle-arrow-w\"></span></span>" +
							"	<span id=\"page-compteur\">Page : <span type=\"text\" class=\"pagedisplay\"></span></span>" +
							"	<span id=\"icone-nav-liste-operation-e\" class=\"next ui-state-default ui-corner-all com-button\" ><span class=\"ui-icon ui-icon-circle-arrow-e\"></span></span>" +
							"	<input type=\"hidden\" class=\"pagesize\" value=\"15\">" +
							"</form>" +	
						"</div>" +
						
						"<table class=\"com-table\" id=\"table-marche-archive\">" +
							"<thead>" +
								"<tr class=\"ui-widget ui-widget-header\">" +
									"<th class=\"com-table-th-debut com-underline-hover com-cursor-pointer com-center\" colspan=\"2\"><span class=\"ui-icon span-icon\"></span>N°</th>" +
									"<th class=\"com-table-th-med com-underline-hover com-cursor-pointer\" ><span class=\"ui-icon span-icon\"></span>Date de cloture des Réservations</th>" +
									"<th class=\"com-table-th-med com-underline-hover com-cursor-pointer\" ><span class=\"ui-icon span-icon\"></span>Marché</th>	" +
									"<th class=\"com-table-th-fin\"></th>	" +
								"</tr>" +
							"</thead>" +
							"<tbody>" +
								"<!-- BEGIN commande -->" +
								"<tr class=\"com-cursor-pointer detail-commande-ligne\" id-marche=\"{commande.id}\">" +
									"<td class=\"com-table-td-debut lst-resa-th-num com-text-align-right\">{commande.numero} : </td>" +
									"<td class=\"com-table-td-med lst-resa-td-nom\">{commande.nom}</td>" +
									"<td class=\"com-table-td-med\"><span class=\"ui-helper-hidden\">{commande.dateTimeFinResa}</span>Le {commande.jourFinReservation} {commande.dateFinReservation} à {commande.heureFinReservation}H{commande.minuteFinReservation}</td>" +
									"<td class=\"com-table-td-med\"><span class=\"ui-helper-hidden\">{commande.dateTimeMarche}</span>Le {commande.jourMarcheDebut} {commande.dateMarcheDebut} de {commande.heureMarcheDebut}H{commande.minuteMarcheDebut} à {commande.heureMarcheFin}H{commande.minuteMarcheFin}</td>" +
									"<td class=\"com-table-td-fin\">" +
										"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\">" +
											"<span class=\"ui-icon ui-icon-triangle-1-e\"></span>" +
										"</span>" +
									"</td>" +		
								"</tr>" +
								"<!-- END commande -->" +
							"</tbody>" +
						"</table>" +
					"</div>" +			
				"</div>" +
			"</div>" +
		"</div>";

	this.lotUnique = 
		"<input type=\"hidden\" id=\"lot-{IdPdt}\" value=\"{valeur}\" /><span>{text}</span>";
	
	this.dialogClotureCommande = 				
			"<div id=\"dialog-cloturer-com\" title=\"Cloture du Marché n°{comNumero}\">" +
				"<p>Vous allez cloturer le Marché n°{comNumero}</p>" +
			"</div>";
	
	this.dialogExportListeAchatEtReservation =
		"<div id=\"dialog-cloturer-com\" title=\"Export des Achats et Réservations du marché n°{comNumero}\">" +
			"<p>Vous allez exporter les Achats et Réservations du Marché n°{comNumero}.<br/>" +
			"Cette action peut être longue.</p>" +
		"</div>";
	
	this.dialogExportListeReservation = 
			"<div id=\"dialog-export-liste-reservation\" title=\"Export des réservations en cours.\">" +
				"<form>" +
					"<table>" +
						"<tr>" +
							"<td>Format de sortie : </td>" +
							"<td><input type=\"radio\" name=\"format\" value=\"0\" checked=\"checked\" />Pdf</td>" +
							"<td><input type=\"radio\" name=\"format\" value=\"1\" />CSV</td>" +
						"</tr>" +
					"</table>" +
					"<div>Sélectionner les produits : </div>" +
					"<table class=\"com-table-100\">" +
						"<!-- BEGIN fermes -->" +
						"<tr class=\"ui-widget-header\" >" +
							"<td colspan=\"3\" class=\"com-table-td\">{fermes.ferNom}</td>" +
						"</tr>" +
						"<!-- BEGIN fermes.categories -->" +
						"<tr>" +
							"<td colspan=\"3\" class=\"com-table-td\">{fermes.categories.cproNom}</td>" +
						"</tr>" +
						"<!-- BEGIN fermes.categories.produits -->" +
						"<tr>" +
							"<td class=\"com-table-td-debut td-edt\"><input type=\"checkbox\" value=\"{fermes.categories.produits.id}\" name=\"id_produits\"/></td>" +
							"<td class=\"com-table-td-med\">{fermes.categories.produits.nproNom}</td>" +		
							"<td class=\"com-table-td-fin\">{fermes.categories.produits.abonnement}</td>" +		
						"</tr>" +
						"<!-- END fermes.categories.produits -->" +
						"<!-- END fermes.categories -->" +
						"<!-- END fermes -->" +
					"</table>" +
				"</form>" +
			"</div>";
	
	
	this.editerMarcheMenu = 
		"<div id=\"edt-com-nav-resa-achat\">" +
			"<span class=\"{infoMarcheSelected} com-cursor-pointer ui-widget-header ui-corner-tl com-btn-hover\" id=\"btn-information-marche\">Information</span>" +
			"<span class=\"{listeReservationSelected} com-cursor-pointer ui-widget-header com-btn-hover\" id=\"btn-liste-resa\">Reservations</span>" +
			"<span class=\"{listeAchatSelected} com-cursor-pointer ui-widget-header com-btn-hover\" id=\"btn-liste-achat-resa\">Achats</span>" +
			"<span class=\"{resumeMarcheSelected} com-cursor-pointer ui-widget-header ui-corner-tr com-btn-hover\" id=\"btn-resume-marche\">Resumé</span>" +
		"</div>";
		
	this.editerCommandePage = 
		"<div id=\"contenu\">" +
			"{editerMenu}" +
			"<div id=\"edt-com-liste\">" +
				"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
					"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
						"Marché n°{comNumero} : {nom}" +
						"<span class=\"ui-helper-hidden marche-archive-1 com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-cloture-com\" title=\"Cloturer\">" +
							"<span class=\"ui-icon ui-icon-locked\">" +
							"</span>" +
						"</span>" +
						"<span class=\"ui-helper-hidden marche-archive-1 com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-play-com\" title=\"Ouvrir les ventes et réservations\">" +
							"<span class=\"ui-icon ui-icon-play\">" +
							"</span>" +
						"</span>" +
						"<span class=\"ui-helper-hidden marche-archive-0  com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-pause-com\" title=\"Arrêter les ventes et réservations\">" +
							"<span class=\"ui-icon ui-icon-pause\">" +
							"</span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-modif-com\" title=\"Modifier\">" +
							"<span class=\"ui-icon ui-icon-pencil\">" +
							"</span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-dupliquer-com\" title=\"Dupliquer le marché\">" +
							"<span class=\"ui-icon ui-icon-copy\">" +
							"</span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-facture-com\" title=\"Factures\">" +
							"<span class=\"ui-icon ui-icon-cart\">" +
							"</span>" +
						"</span>" +
						"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-bon-com\" title=\"Bon de commande\">" +
							"<span class=\"ui-icon ui-icon-document\">" +
							"</span>" +
						"</span>" +
					"</div>" +
					"<div>" +
						"Réservations : Du <span id=\"edt-marche-dateDebutReservation\">{dateDebutReservation}</span> à <span id=\"edt-marche-heureDebutReservation\">{heureDebutReservation}</span>H<span id=\"edt-marche-minuteDebutReservation\">{minuteDebutReservation}</span> au <span id=\"edt-marche-dateFinReservation\">{dateFinReservation}</span> à <span id=\"edt-marche-heureFinReservation\">{heureFinReservation}</span>H<span id=\"edt-marche-minuteFinReservation\">{minuteFinReservation}</span> <br/>" +
						"Marché : Le <span id=\"edt-marche-dateMarcheDebut\">{dateMarcheDebut}</span> de <span id=\"edt-marche-heureMarcheDebut\">{heureMarcheDebut}</span>H<span id=\"edt-marche-minuteMarcheDebut\">{minuteMarcheDebut}</span> à <span id=\"edt-marche-heureMarcheFin\">{heureMarcheFin}</span>H<span id=\"edt-marche-minuteMarcheFin\">{minuteMarcheFin}</span>" +
					"</div>" +
				"</div>" +
				"<div id=\"btn-ajout-produit-div\" class=\"com-widget-window ui-widget ui-widget-header ui-corner-all com-center\">" +
					"<button type=\"button\" id=\"btn-ajout-produit\" class=\"ui-state-default ui-corner-all com-button com-center\">Ajouter un produit</button>" +
				"</div>" +
				"<div id=\"liste-ferme\">" +
				"</div>" +
			"</div>" +
		"</div>";
	
	this.listeReservation = 
		"<div id=\"contenu\">" +
			"{editerMenu}" +
			"<div id=\"edt-com-liste\" >" +
				"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
					"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
						"Gestion des réservations" +
						"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all\" id=\"btn-export-resa\" title=\"Exporter les réservations\">" +
							"<span class=\"ui-icon ui-icon-print\">" +
							"</span>" +
						"</span>" +
					"</div>" +
					"<div id=\"edt-com-recherche\" class=\"recherche com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
						"<form id=\"filter-form\">" +
		
							"<span class=\"conteneur-icon com-float-left ui-widget-content ui-corner-left\" title=\"Chercher\">" +
									"<span class=\"ui-icon ui-icon-search\">" +
								"</span>" +
							"</span>" +
							"<input class=\"com-input-text ui-widget-content ui-corner-right\" name=\"filter\" id=\"filter\" value=\"\" maxlength=\"30\" size=\"15\" type=\"text\" />" +
							
						"</form>" +
					"</div>" +
					"<table class=\"com-table\" id=\"edt-com-liste-resa\">" +
						"<thead>" +
						"<tr class=\"ui-widget ui-widget-header com-cursor-pointer\">" +
							"<th class=\"com-table-th-debut com-underline-hover\"><span class=\"ui-icon span-icon\"></span>N°</th>" +
							"<th class=\"com-table-th-med com-underline-hover\"><span class=\"ui-icon span-icon\"></span>Compte</th>" +
							"<th class=\"com-table-th-med com-underline-hover\"><span class=\"ui-icon span-icon\"></span>Nom</th>	" +
							"<th class=\"com-table-th-med com-underline-hover\"><span class=\"ui-icon span-icon\"></span>Prénom</th>" +
							"<th class=\"com-table-th-fin\"></th>" +
						"</tr>" +
						"</thead>" +
						"<tbody>" +
						"<!-- BEGIN listeAdherent -->" +
						"<tr class=\"com-cursor-pointer edt-com-reservation-ligne\" id-adherent=\"{listeAdherent.adhId}\">" +							
							"<td class=\"com-table-td-debut com-underline-hover\">" +
								"<span class=\"ui-helper-hidden\">{listeAdherent.adhIdTri}</span>" +
								"{listeAdherent.adhNumero}</td>" +
							"<td class=\"com-table-td-med com-underline-hover\">{listeAdherent.cptLabel}</td>" +
							"<td class=\"com-table-td-med com-underline-hover\">{listeAdherent.adhNom}</td>" +
							"<td class=\"com-table-td-med com-underline-hover\">{listeAdherent.adhPrenom}</td>" +
							"<td class=\"com-table-td-fin com-underline-hover td-edt\">" +
								"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\">" +
									"<span class=\"ui-icon ui-icon-triangle-1-e\"></span>" +
								 "</span>" +
							"</td>" +
						"</tr>" +
						"<!-- END listeAdherent -->" +
						"</tbody>" +
					"</table>" +
				"</div>" +
			"</div>" +
		"</div>";
	
	this.listeAchatEtReservation = 
		"<div id=\"contenu\">" +
			"{editerMenu}" +
			"<div id=\"edt-com-liste\" >" +
				"<div class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
					"{rechercheAchat}" +
					"{achatInvite}" +
					"{achatAdherent}" +
				"</div>" +
			"</div>" +
		"</div>";
	
	this.rechercheAchatAdherent =
		"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
			"Liste des Achats et Réservations" +
			"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all\" id=\"btn-export-achat\" title=\"Exporter les Achats et les réservations\">" +
				"<span class=\"ui-icon ui-icon-print\">" +
				"</span>" +
			"</span>" +
		"</div>" +
		"<div id=\"edt-com-recherche\" class=\"recherche com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
			"<form id=\"filter-form\">" +
	
				"<span class=\"conteneur-icon com-float-left ui-widget-content ui-corner-left\" title=\"Chercher\">" +
						"<span class=\"ui-icon ui-icon-search\">" +
					"</span>" +
				"</span>" +
				"<input class=\"com-input-text ui-widget-content ui-corner-right\" name=\"filter\" id=\"filter\" value=\"\" maxlength=\"30\" size=\"15\" type=\"text\" />" +
				
			"</form>" +
		"</div>";
	
	this.listeAchatAdherent =
		"<table class=\"com-table\" id=\"edt-com-liste-resa\">" +
			"<thead>" +
			"<tr class=\"ui-widget ui-widget-header com-cursor-pointer\">" +
				"<th class=\"com-table-th-debut com-underline-hover\"><span class=\"ui-icon span-icon\"></span>N°</th>" +
				"<th class=\"com-table-th-med com-underline-hover\"><span class=\"ui-icon span-icon\"></span>Compte</th>" +
				"<th class=\"com-table-th-med com-underline-hover\"><span class=\"ui-icon span-icon\"></span>Nom</th>	" +
				"<th class=\"com-table-th-med com-underline-hover\"><span class=\"ui-icon span-icon\"></span>Prénom</th>" +
				"<th colspan=\"2\" class=\"com-table-th-fin\"></span>Achat</th>" +
			"</tr>" +
			"</thead>" +
			"<tbody>" +
			"<!-- BEGIN listeAchatEtReservation -->" +
			"<tr class=\"com-cursor-pointer edt-com-achat-ligne\" data-id-adherent=\"{listeAchatEtReservation.adhId}\" data-id-operation=\"{listeAchatEtReservation.idOperation}\" >" +							
				"<td class=\"com-table-td-debut com-underline-hover\">" +
					"<span class=\"ui-helper-hidden\">{listeAchatEtReservation.adhIdTri}</span>" +
					"{listeAchatEtReservation.adhNumero}</td>" +
				"<td class=\"com-table-td-med com-underline-hover\">{listeAchatEtReservation.cptLabel}</td>" +
				"<td class=\"com-table-td-med com-underline-hover\">{listeAchatEtReservation.adhNom}</td>" +
				"<td class=\"com-table-td-med com-underline-hover\">{listeAchatEtReservation.adhPrenom}</td>" +
				"<td class=\"com-table-td-med com-underline-hover\">" +
					"<span class=\"{listeAchatEtReservation.achat} ui-state-hover com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\">" +
						"<span class=\"ui-icon ui-icon-circle-check\"></span>" +
					"</span>" +							
				"</td>" +
				"<td class=\"com-table-td-fin com-underline-hover td-edt\">" +
					"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\">" +
						"<span class=\"ui-icon ui-icon-triangle-1-e\"></span>" +
					"</span>" +
				"</td>" +
			"</tr>" +
			"<!-- END listeAchatEtReservation -->" +
			"</tbody>" +
		"</table>";
	
	this.listeAchatInvite =
		"<table class=\"com-table\">" +
			"<thead>" +
				"<tr class=\"ui-widget ui-widget-header com-cursor-pointer\" id=\"entete-achat-invite\" >" +
					"<th colspan=\"4\" class=\"com-table-th com-underline-hover com-center\">" +
						"Compte invité" +
						"<span class=\"com-btn-header-multiples ui-widget-content ui-widget-content-transparent ui-corner-all com-cursor-pointer\">" +
							"<span id=\"icon-achat-invite\" class=\"ui-icon ui-icon-triangle-1-s\">" +
						"</span>" +
					"</th>" +
				"</tr>" +
				"<tr class=\"ui-widget ui-widget-header com-cursor-pointer ui-helper-hidden detail-achat-invite\">" +
					"<th class=\"com-table-th-debut\"></span>Achat</th>" +
					"<th class=\"com-table-th-med\"></span>Achat Solidaire</th>" +
					"<th colspan=\"2\" class=\"com-table-th-fin\"></span>Montant</th>" +
				"</tr>" +
				"<tbody class=\"ui-helper-hidden detail-achat-invite\">" +
					"<!-- BEGIN listeAchatInvite -->" +
					"<tr class=\"com-cursor-pointer edt-com-achat-ligne-invite\" data-id-adherent=\"0\" data-id-operation=\"{listeAchatInvite.id}\">" +							
						"<td class=\"com-table-td-debut\">" +
							"<span class=\"{listeAchatInvite.achat} com-flag ui-state-hover com-cursor-pointer ui-widget-content ui-corner-all\">" +
								"<span class=\"ui-icon ui-icon-circle-check\"></span>" +
							"</span>" +							
						"</td>" +
						"<td class=\"com-table-td-med\">" +
							"<span class=\"{listeAchatInvite.achatSolidaire} com-flag ui-state-hover com-cursor-pointer ui-widget-content ui-corner-all\">" +
								"<span class=\"ui-icon ui-icon-circle-check\"></span>" +
							"</span>" +							
						"</td>" +
						"<td class=\"com-table-td-med\">{listeAchatInvite.montant} {sigleMonetaire}</td>" +
						"<td class=\"com-table-td-fin td-edt\">" +
							"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\">" +
								"<span class=\"ui-icon ui-icon-triangle-1-e\"></span>" +
							"</span>" +
						"</td>" +
					"</tr>" +
					"<!-- END listeAchatInvite -->" +
				"</tbody>" +
			"</thead>" +
		"</table>";
	
	this.listeAchatEtReservationVide = 
		"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
			"Liste des Achats et Réservations" +
		"</div>" +
		"<p id=\"texte-liste-vide\">Aucun adhérent sur ce marché.</p>";
	
	this.dateAchat = "Achat du {dateAchat} :";
	
	this.boutonSupprimerAchat = 
		"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all btn-achat\" id=\"btn-supp-achat\" title=\"Supprimer\" data-id-achat=\"{idAchat}\">" +
			"<span class=\"ui-icon ui-icon-trash\"></span>" +
		"</span>";
	
	this.boutonSupprimerAchatSolidaire = 
		"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all btn-achat-solidaire\" id=\"btn-supp-achat-solidaire\" title=\"Supprimer\" data-id-achat=\"{idAchat}\">" +
			"<span class=\"ui-icon ui-icon-trash\"></span>" +
		"</span>";
	
	this.detailAchatEtReservationEnteteInvite =
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"btn-annuler\">" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Retour à la liste des achats" +
				"</button>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Compte Invité" +
				"</div>" +
			"</div>" +
			"{detailAchat}" +
		"</div>";
		
	this.detailAchatEtReservationEntete = 
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"btn-annuler\">" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Retour à la liste des achats" +
				"</button>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Adhérent" +
				"</div>" +
				"<div class=\"com-widget-content\">" +
					"<div id=\"resa-info-commande\">" +
						"{adhNumero} :  {adhPrenom} {adhNom}<br/>" +
						"N° de Compte : {adhCompte}" +
					"</div>" +
					"<div>" +
						"<span>Solde : </span><span><span id=\"affiche-solde\" class=\"solde\">{adhSolde}</span><span id=\"affiche-solde-modification\" class=\"ui-helper-hidden solde\">{adhSolde}</span> {sigleMonetaire}</span>" +
					"</div>" +
					"<div class=\"com-clear-float-left\"></div>" +
				"</div>" +
			"</div>" +
			"{detailAchat}" +
		"</div>";
	
	this.detailAchatVide =
		"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all com-center\">" +			
			"<button type=\"button\" id=\"btn-nv-produit\" class=\"com-btn-edt ui-state-default ui-corner-all com-button com-center\">Ajouter un produit</button>" +
		"</div>";
	
	this.detailAchatEtReservation =		
		"<div class=\"achat com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
				"{dateAchat} {totalMarche} {sigleMonetaire}" +
					"<span id=\"btn-nv-produit\" class=\"com-cursor-pointer com-btn-header-text ui-widget-content ui-corner-all\" title=\"Ajouter un produit\">" +
						"<span class=\"com-float-left ui-icon ui-icon-plusthick\"></span>Ajouter un produit" +
					"</span>" +
			"</div>" +
			"<table class=\"com-table-100\">" +
				"<tr>" +
					"<td></td>" +
					"<td colspan=\"2\" class=\"col-reservation\"><div class=\"ui-widget-header ui-corner-all com-center\">Réservation</div></td>" +
					"<td colspan=\"3\" class=\"col-achat\">" +
						"<div class=\"ui-widget-header ui-corner-all com-center\">" +
							"Achat" +
							"{boutonSupprimerAchat}" +								
							"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all btn-achat\" id=\"btn-modif-achat\" title=\"Modifier\">" +
								"<span class=\"ui-icon ui-icon-pencil\"></span>" +
							"</span>" +	
							"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all ui-helper-hidden btn-achat\" id=\"btn-annuler-achat\" title=\"Annuler\">" +
								"<span class=\"ui-icon ui-icon-closethick\"></span>" +
							"</span>" +
							"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all ui-helper-hidden btn-achat\" id=\"btn-check-achat\" title=\"Valider\" data-id-achat=\"{idAchat}\" data-type=\"\">" +
								"<span class=\"ui-icon ui-icon-check\"></span>" +
							"</span>" +
						"</div>" +
					"</td>" +
					"<td colspan=\"3\" class=\"col-achat-solidaire\">" +
						"<div class=\"ui-widget-header ui-corner-all com-center\">" +
							"Achat Solidaire" +
							"{boutonSupprimerAchatSolidaire}" +								
							"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all btn-achat-solidaire\" id=\"btn-modif-achat-solidaire\" title=\"Modifier\">" +
								"<span class=\"ui-icon ui-icon-pencil\"></span>" +
							"</span>" +	
							"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all ui-helper-hidden btn-achat-solidaire\" id=\"btn-annuler-achat-solidaire\" title=\"Annuler\">" +
								"<span class=\"ui-icon ui-icon-closethick\"></span>" +
							"</span>" +
							"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all ui-helper-hidden btn-achat-solidaire\" id=\"btn-check-achat-solidaire\" title=\"Valider\" data-id-achat=\"{idAchatSolidaire}\" data-type=\"solidaire\">" +
								"<span class=\"ui-icon ui-icon-check\"></span>" +
							"</span>" +
						"</div>" +
					"</td>" +
				"</tr>" +
			"<!-- BEGIN categories -->" +
				"<tr>" +
					"<td><div class=\"ui-widget-header ui-corner-all com-center\">{categories.nom}</div></td>" +
					"<td colspan=\"2\" class=\"col-reservation\"></td>" +
					"<td colspan=\"3\" class=\"col-achat\"></td>" +
					"<td colspan=\"3\" class=\"col-achat-solidaire\"></td>" +
				"</tr>" +
				"<!-- BEGIN categories.achat -->" +
				"<tr class=\"com-ligne-hover ligne-produit-achat\" data-id-produit=\"{categories.achat.proId}\">" +
					"<td>{categories.achat.nproNom}</td>" +						

					"<td class=\"col-reservation com-text-align-right detail-achat-unite\">{categories.achat.stoQuantiteReservation}</td>" +						
					"<td class=\"col-reservation detail-achat-unite\">{categories.achat.proUniteMesureReservation}</td>" +
					
					"<td class=\"com-text-align-right detail-achat-unite col-achat\">" +
						"<span class=\"detail-achat-qte affiche-produit-quantite\">{categories.achat.stoQuantiteAffiche}</span>" +
						"<span class=\"detail-achat-qte ui-helper-hidden \">" +
							"<input type=\"text\" value=\"{categories.achat.stoQuantite}\" class=\"com-numeric produit-quantite com-input-text ui-widget-content ui-corner-all\" id=\"achat-{idAchat}-produits{categories.achat.proId}quantite\" maxlength=\"12\" size=\"3\"/>" +
						"</span>" +
					"</td>" +
					
					"<td class=\"detail-achat-unite detail-achat-unite col-achat\">" +
						"<span class=\"detail-achat-qte\">{categories.achat.proUniteMesure}</span>" +
						"<span class=\"detail-achat-qte ui-helper-hidden\">{categories.achat.unite}</span>" +
					"</td>" +
					"<td class=\"com-text-align-right detail-achat-unite col-achat\">" +
						"<span class=\"detail-achat-prix\">" +
							"<span class=\"affiche-produit-prix\">{categories.achat.prixAffiche}</span> {categories.achat.sigleMonetaire}" +
						"</span>" +
						"<span class=\"detail-achat-prix ui-helper-hidden\">" +
							"<input type=\"text\" value=\"{categories.achat.prix}\" class=\"com-numeric produit-prix com-input-text ui-widget-content ui-corner-all\" id=\"achat-{idAchat}-produits{categories.achat.proId}prix\" maxlength=\"12\" size=\"3\"/>" +
							" {sigleMonetaire}" +
						"</span>" +
					"</td>" +
					"<td class=\"com-text-align-right detail-achat-unite col-achat-solidaire\">" +
						"<span class=\"detail-achat-qte-solidaire affiche-produit-quantite-solidaire\">{categories.achat.stoQuantiteSolidaireAffiche}</span>" +
						"<span class=\"detail-achat-qte-solidaire ui-helper-hidden \">" +
							"<input type=\"text\" value=\"{categories.achat.stoQuantiteSolidaire}\" class=\"com-numeric produit-quantite-solidaire com-input-text ui-widget-content ui-corner-all\" id=\"achat-{idAchatSolidaire}-produits{categories.achat.proId}quantite\" maxlength=\"12\" size=\"3\"/>" +
						"</span>" +
					"</td>" +			
					"<td class=\"detail-achat-unite col-achat-solidaire\">" +
						"<span class=\"detail-achat-qte-solidaire\">{categories.achat.proUniteMesureSolidaire}</span>" +
						"<span class=\"detail-achat-qte-solidaire ui-helper-hidden\">{categories.achat.unite}</span>" +
					"</td>" +
					"<td class=\"com-text-align-right detail-achat-unite col-achat-solidaire\">" +
						"<span class=\"detail-achat-prix-solidaire\">" +
							"<span class=\"affiche-produit-prix-solidaire\">{categories.achat.prixSolidaireAffiche}</span> {categories.achat.sigleMonetaireSolidaire}" +
						"</span>" +
						"<span class=\"detail-achat-prix-solidaire ui-helper-hidden\">" +
							"<input type=\"text\" value=\"{categories.achat.prixSolidaire}\" class=\"com-numeric produit-prix-solidaire com-input-text ui-widget-content ui-corner-all\" id=\"achat-{idAchatSolidaire}-produits{categories.achat.proId}prix\" maxlength=\"12\" size=\"3\"/>" +
							" {sigleMonetaire}" +
						"</span>" +
					"</td>" +		
				"</tr>" +
				"<!-- END categories.achat -->" +
			"<!-- END categories -->" +
				"<tr>" +
					"<td></td>" +
					"<td colspan=\"2\" class=\"col-reservation\"></td>" +
					"<td class=\"com-text-align-right col-achat\" colspan=\"2\">Total : </td>" +
					"<td class=\"com-text-align-right col-achat\"><span id=\"affiche-total\" class=\"total-achat\">{total}</span><span id=\"affiche-total-modification\" class=\"total-achat ui-helper-hidden\">{total}</span> {sigleMonetaire}</td>" +						
					"<td class=\"com-text-align-right col-achat-solidaire\" colspan=\"2\">Total Solidaire : </td>" +
					"<td class=\"com-text-align-right col-achat-solidaire\"><span id=\"affiche-total-solidaire\" class=\"total-achat-solidaire\">{totalSolidaire}</span><span id=\"affiche-total-modification-solidaire\" class=\"total-achat-solidaire ui-helper-hidden\">{totalSolidaire}</span> {sigleMonetaire}</td>" +
				"</tr>" +
			"</table>" +
		"</div>" ;

	this.supprimerReservationDialog =
		"<div id=\"dialog-supprimer-reservation\" title=\"Supprimer la réservation\">" +
			"<p>Voulez-vous supprimer la réservation ?</p>" +
		"</div>";	
	
	this.dialogSupprimerAchat =
		"<div title=\"Supprimer la réservation\">" +
			"<p>Voulez-vous supprimer cet achat ?</p>" +
		"</div>";
	
	this.detailReservation = 
		"<div id=\"contenu\">" +	
			"<div class=\"com-barre-menu-2\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"btn-annuler\">" +
				"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Retour au Marché" +
				"</button>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Marché n°{comNumero}" +
				"</div>" +
				"<div>" +
				"Fin des réservations : Le {dateFinReservation} à {heureFinReservation}H{minuteFinReservation} <br/>" +
				"Marché : Le {dateMarcheDebut} de {heureMarcheDebut}H{minuteMarcheDebut} à {heureMarcheFin}H{minuteMarcheFin}" +
				"</div>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Adhérent</div>" +
				"<div class=\"com-widget-content\">" +
					"<div id=\"resa-info-commande\">" +
						"{adhNumero} :  {adhPrenom} {adhNom}<br/>" +
						"N° de Compte : {adhCompte}" +
					"</div>" +
					"<div>" +
						"<span>Solde Actuel : </span><span>{adhSolde} {sigleMonetaire}</span>" +
					"</div>" +
					"<div class=\"com-clear-float-left\"></div>" +
				"</div>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"La réservation" +
				"</div>" +
				"<table>" +
				
					"<!-- BEGIN categories -->" +
					"<td class=\"ui-widget-header ui-corner-all com-center\">{categories.nom}</td>" +
					"<td colspan=\"6\"></td>" +
					
					"<!-- BEGIN categories.produits -->" +
					"<tr >" +
						/*"<td class=\"detail-resa-npro\">{categories.produits.nproNom}</td>" +
						"<td class=\"com-text-align-right detail-resa-qte\">{categories.produits.stoQuantite}</td>" +
						"<td class=\"detail-resa-unite\">{categories.produits.proUniteMesure}</td>" +
						"<td class=\"com-text-align-right detail-resa-prix\">{categories.produits.prix}</td>" +
						"<td>{sigleMonetaire}</td>" +*/
						
						"<td class=\"detail-resa-npro\">{categories.produits.nproNom}</td>" +
						"<td class=\"td-edt\">" +
							"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-info-produit\" title=\"Information sur le produit\" id-produit=\"{categories.produits.proId}\">" +
								"<span class=\"ui-icon ui-icon-info\">" +
								"</span>" +
							"</span>" +
						"</td>" +
						"<td>{categories.produits.flagType}</td>" +
						"<td class=\"com-text-align-right detail-resa-qte\">{categories.produits.stoQuantite}</td>" +
						"<td class=\"detail-resa-unite\">{categories.produits.proUniteMesure}</td>" +
						"<td class=\"com-text-align-right detail-resa-prix\">{categories.produits.prix}</td>" +
						"<td>{sigleMonetaire}</td>" +
						
					"</tr>" +
					"<!-- END categories.produits -->" +
					"<!-- END categories -->" +
					"<tr>" +
						"<td class=\"com-text-align-right\" colspan=\"5\">Total : </td>" +
						"<td class=\"com-text-align-right\">{total}</td>" +
						"<td>{sigleMonetaire}</td>" +
					"</tr>" +
				"</table>" +
			"</div>" +
			"<div class=\"boutons-edition com-widget-header ui-widget ui-widget-header ui-corner-all com-center\">" +
				"<button class=\"com-btn-edt-multiples ui-state-default ui-corner-all com-button com-center\" id=\"btn-modifier\">Modifier</button>" +	
				"<button class=\"ui-state-default ui-corner-all com-button com-center\" id=\"btn-supprimer\">Supprimer</button>" +
			"</div>" +
		"</div>";
	
	this.modifierReservation =
		"<div id=\"contenu\">" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Marché n°{comNumero}" +
				"</div>" +
				"<div>" +
					"Fin des réservations : Le {dateFinReservation} à {heureFinReservation}H{minuteFinReservation} <br/>" +
					"Marché : Le {dateMarcheDebut} de {heureMarcheDebut}H{minuteMarcheDebut} à {heureMarcheFin}H{minuteMarcheFin}" +
				"</div>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Adhérent</div>" +
				"<div class=\"com-widget-content\">" +
					"<div id=\"resa-info-commande\">" +
						"{adhNumero} :  {adhPrenom} {adhNom}<br/>" +
						"N° de Compte : {adhCompte}" +
					"</div>" +
					"<div>" +
						"<span>Solde Actuel : </span><span>{adhSolde} {sigleMonetaire}</span><br/>" +
						"<span>Nouveau Solde : </span><span id=\"nouveau-solde\">{adhNouveauSolde}</span> <span id=\"nouveau-solde-sigle\">{sigleMonetaire}</span>" +
					"</div>" +
				"</div>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"La réservation" +
				"</div>" +
				"<div>" +
					"<table>" +
						"<!-- BEGIN categories -->" +
						"<tr>" +
							"<td colspan=\"4\" class=\"ui-widget-header ui-corner-all com-center\">{categories.nom}</td>" +
							"<td colspan=\"7\"></td>" +
						"</tr>" +						
						"<!-- BEGIN categories.produits -->" +
						"{categories.produits.detailProduit}" +
						"<!-- END categories.produits -->" +
						"<!-- END categories -->" +
						"<tr>" +
							"<td colspan=\"10\" class=\"com-text-align-right\">Total : </td>" +
							"<td class=\"com-text-align-right detail-resa-prix\"><span id=\"total\">{total}</span> {sigleMonetaire}</td>" +
						"</tr>" +
					"</table>" +
				"</div>" +
			"</div>" +
			"<div class=\"boutons-edition-modification com-widget-header ui-widget ui-widget-header ui-corner-all com-center\">" +
				"<button class=\"com-btn-edt-multiples ui-state-default ui-corner-all com-button com-center\" id=\"btn-annuler\">Annuler</button>" +
				"<button class=\"ui-state-default ui-corner-all com-button com-center\" id=\"btn-valider\">Valider</button>" +		
			"</div>" +
		"</div>";
	
	this.formReservationProduit =
		"<tr class=\"pdt\">" +
			"<td><input type=\"checkbox\" {checked}/></td>" +
			"<td><span class=\"ui-helper-hidden\"><span class=\"pdt-id\">{proId}</span></span></td>" +
			"<td id=\"commandes{proId}stoQuantite\" >{nproNom}</td>" +
			"<td class=\"td-edt\">" +
				"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-info-produit\" title=\"Information sur le produit\" id-produit=\"{proId}\">" +
					"<span class=\"ui-icon ui-icon-info\">" +
					"</span>" +
				"</span>" +
			"</td>" +
			"<td>" +
				"<select id=\"lot-{proId}\">" +
					"<!-- BEGIN lot -->" +
					"<option value=\"{lot.dcomId}\">par {lot.dcomTaille} {proUniteMesure}</option>" +
					"<!-- END lot -->" +
				"</select>" +
			"</td>" +
			"<td>à <span id=\"prix-unitaire-{proId}\">{prixUnitaire}</span> {sigleMonetaire}/{proUniteMesure}</td>" +
			"<td>{flagType}</td>" +
			"<td class=\"ui-helper-hidden resa-pdt-{proId}\"><button class=\"btn-moins\">-</button></td>" +
			"<td class=\"ui-helper-hidden resa-pdt-{proId}\"><span id=\"qte-pdt-{proId}\"></span> {proUniteMesure}</td>" +
			"<td class=\"ui-helper-hidden resa-pdt-{proId}\"><button class=\"btn-plus\">+</button></td>" +
			"<td class=\"ui-helper-hidden resa-pdt-{proId} com-text-align-right\"><span id=\"prix-pdt-{proId}\"></span> {sigleMonetaire}</td>" +
		"</tr>";

	this.formReservationProduitInfo =
		"<tr class=\"pdt\">" +
			"<td></td>" +
			"<td><span class=\"ui-helper-hidden\"><span class=\"pdt-id\">{proId}</span></span></td>" +
			"<td id=\"commandes{proId}stoQuantite\" >{nproNom}</td>" +
			"<td class=\"td-edt\">" +
				"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-info-produit\" title=\"Information sur le produit\" id-produit=\"{proId}\">" +
					"<span class=\"ui-icon ui-icon-info\">" +
					"</span>" +
				"</span>" +
			"</td>" +
			"<td>" +
				"<select id=\"lot-{proId}\">" +
					"<!-- BEGIN lot -->" +
					"<option value=\"{lot.dcomId}\">par {lot.dcomTaille} {proUniteMesure}</option>" +
					"<!-- END lot -->" +
				"</select>" +
			"</td>" +
			"<td>à <span id=\"prix-unitaire-{proId}\">{prixUnitaire}</span> {sigleMonetaire}/{proUniteMesure}</td>" +
			"<td>{flagType}</td>" +
			"<td></td>" +
			"<td></td>" +
			"<td></td>" +
			"<td></td>" +
		"</tr>";
	
	this.formReservationProduitAbonnementInfo =
		"<tr class=\"pdt\">" +
			"<td></td>" +
			"<td><span class=\"ui-helper-hidden\"><span class=\"pdt-id\">{proId}</span></span></td>" +
			"<td id=\"commandes{proId}stoQuantite\" >{nproNom}</td>" +
			"<td class=\"td-edt\">" +
				"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-info-produit\" title=\"Information sur le produit\" id-produit=\"{proId}\">" +
					"<span class=\"ui-icon ui-icon-info\">" +
					"</span>" +
				"</span>" +
			"</td>" +
			"<td>" +
				"<select id=\"lot-{proId}\">" +
					"<!-- BEGIN lot -->" +
					"<option value=\"{lot.dcomId}\">par {lot.dcomTaille} {proUniteMesure}</option>" +
					"<!-- END lot -->" +
				"</select>" +
			"</td>" +
			"<td>à <span id=\"prix-unitaire-{proId}\">{prixUnitaire}</span> {sigleMonetaire}/{proUniteMesure}</td>" +
			"<td>{flagType}</td>" +
			"<td></td>" +
			"<td>{stoQuantiteReservation} {proUniteMesure}</td>" +
			"<td></td>" +
			"<td class=\"com-text-align-right\">{prixReservation} {sigleMonetaire}</td>" +
		"</tr>";
	
	this.listeCommandeVide =
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"lien-marche-archive\">" +
					"<span class=\"com-float-left\">Les Marchés cloturés</span>" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-e\"></span>" +
				"</button>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Les Marchés en cours" +
				"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-nv-marche\" title=\"Ajouter un marché\">" +
					"<span class=\"ui-icon ui-icon-plusthick\">" +
					"</span>" +
				"</span>" +
				"</div>" +
				"<p id=\"texte-liste-vide\">Aucun Marché en cours.</p>" +	
			"</div>" +
		"</div>";
	
	this.listeCommandeArchiveVide =
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"lien-marche-encours\">" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Les Marchés en cours" +
				"</button>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Les Marchés en cloturés</div>" +
				"<p id=\"texte-liste-vide\">Aucun Marché cloturé.</p>" +	
			"</div>" +
		"</div>";
	
	/*this.listeMarcheVide =
		"<div id=\"contenu\">" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Vente</div>" +
				"<p id=\"texte-liste-vide\">Aucune adhérent.</p>" +	
			"</div>" +
		"</div>";*/
	
	this.listeReservationVide =
		"<div id=\"contenu\">" +
			"{editerMenu}" +
			"<div>" +
				"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
					"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
						"Gestion des réservations" +
					"</div>" +
					"<p id=\"texte-liste-vide\">Aucune réservation.</p>" +
				"</div>" +
			"</div>" +
		"</div>";
	
	this.dialogEnregistrement =
		"<div title=\"Enregistrer les modifications\">" +
			"<p>Vous n'avez pas enregistré vos modifications.</p>" +
		"</div>";
	
	this.dialogExportBonDeCommande = 
		"<div id=\"dialog-export-bon-commande\" title=\"Export du Bon de Commande du Marché n°{comNumero}\">" +
			"<form>" +
				"<table>" +
					"<tr>" +
						"<td>Format de sortie : </td>" +
						"<td><input type=\"radio\" name=\"format\" value=\"0\" checked=\"checked\" />Pdf</td>" +
						"<td><input type=\"radio\" name=\"format\" value=\"1\" />CSV</td>" +
					"</tr>" +
				"</table>" +
			"</form>" +
		"</div>";
	
	this.bonDeCommande =
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"btn-editer-com\">" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Retour au Marché" +
				"</button>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Bon de commande du Marché n°{comNumero}" +
					"<span class=\"ui-helper-hidden com-cursor-pointer com-btn-header ui-widget-content ui-corner-all\" id=\"btn-export-bcom\" title=\"Exporter le bon de commande\">" +
						"<span class=\"ui-icon ui-icon-print\">" +
					"</span>" +
				"</span>" +
				"</div>" +
				"<div>" +
					"<form>" +
						"<span>Producteur : " +
							"<select id=\"select-prdt\">" +
								"<option value=\"0\" >== Choisir une ferme ==</option>" +
								"<!-- BEGIN producteurs -->" +
								"<option value=\"{producteurs.proIdCompteFerme}\">{producteurs.ferNom}</option>" +
								"<!-- END producteurs -->" +
							"</select>" +
						"</span>" +
					"</form>" +
				"</div>" +
				"<div id=\"liste-pdt\"></div>" +	
			"</div>" +
		"</div>";
	
	this.listeProduitVide =
		"<div id=\"liste-pdt\"></div>";
	
	this.listeProduitBonDeCommande = 
		"<div id=\"liste-pdt\">" +
			"<table class=\"com-table-100\">" +
				"<thead>" +
					"<tr>" +
						"<th>Ref</th>" +
						"<th>Produit</th>" +
						"<th colspan=\"2\" class=\"com-center\">Réservation</th>" +
						"<th colspan=\"2\" class=\"com-center\">Commande</th>" +
						"<th colspan=\"2\" class=\"com-center\">Prix</th>" +
						"<th>État</th>" +
					"</tr>" +
				"</thead>" +
				"<tbody>" +
					"<!-- BEGIN produits -->" +
					"<tr>" +
						"<td>{produits.nproNumero}</td>" +
						"<td>{produits.nproNom}</td>" +
						"<td class=\"com-text-align-right\">{produits.stoQuantite}</td>" +
						"<td>" +
							" {produits.proUniteMesure}" +
						"</td>" +
						"<td class=\"com-text-align-right\">" +
							//"<span class=\"pro-id ui-helper-hidden\"  data-id-produit=\"{produits.proId}\" data-id-detail-commande=\"{produits.dcomId}\"></span>" +
							"<input class=\"formulaire qte-commande com-numeric com-input-text ui-widget-content ui-corner-all\" type=\"text\" size=\"3\" name=\"qte-commande-{produits.proId}-{produits.dcomId}\" maxlength=\"11\" value=\"{produits.stoQuantiteCommande}\" id=\"produits{produits.dcomId}quantite\" data-taille=\"{produits.dcomTaille}\" data-prix=\"{produits.dcomPrix}\" data-id-produit=\"{produits.proId}\" data-id-detail-commande=\"{produits.dcomId}\" />" +
							"<span class=\"detail\">{produits.stoQuantiteCommandeAffichage}</span>" +
						"</td>" +
						"<td>" +
							" {produits.proUniteMesure}" +
						"</td>" +
						"<td class=\"com-text-align-right\">" +
							"<input class=\"formulaire prix-commande com-numeric com-input-text ui-widget-content ui-corner-all\" type=\"text\" size=\"3\" name=\"prix-commande-{produits.proId}-{produits.dcomId}\" maxlength=\"11\" value=\"{produits.dopeMontant}\" id=\"produits{produits.dcomId}prix\" />" +
							"<span class=\"detail\">{produits.dopeMontantAffichage}</span>" +
						"</td>" +
						"<td>" +
							" {sigleMonetaire}" +
						"</td>" +
						"<td>" +
							"<div id=\"etat-commande-{produits.dcomId}\" class=\"{produits.classEtat} ui-corner-all\"></div>" +
						"</td>" +
					"</tr>" +
					"<!-- END produits -->" +
				"</tbody>" +
			"</table>" +
			"<div class=\"com-center\">" +
				"<button class=\"ui-helper-hidden com-btn-edt-multiples ui-state-default ui-corner-all com-button\" id=\"btn-annuler\">Annuler</button>" +
				"<button class=\"formulaire ui-state-default ui-corner-all com-button\" id=\"btn-enregistrer\">Enregistrer</button>" +
				"<button class=\"detail ui-state-default ui-corner-all com-button\" id=\"btn-modifier\">Modifier</button>" +
			"</div>" +
		"</div>";
	
	this.dialogExportFacture =
		"<div id=\"dialog-export-facture\" title=\"Export de la Facture\">" +
			"<form>" +
				"<table>" +
					"<tr>" +
						"<td>Format de sortie : </td>" +
						"<td><input type=\"radio\" name=\"format\" value=\"0\" checked=\"checked\" />Pdf</td>" +
						"<td><input type=\"radio\" name=\"format\" value=\"1\" />CSV</td>" +
					"</tr>" +
				"</table>" +
			"</form>" +
		"</div>";
	
	this.bonDeLivraison =
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"btn-editer-com\">" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Retour au Marché" +
				"</button>" +
			"</div>" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Bon de Livraison du Marché n°{comNumero}" +
					"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all\" id=\"btn-export-bcom\" title=\"Exporter le bon de livraison\">" +
						"<span class=\"ui-icon ui-icon-print\">" +
					"</span>" +
				"</span>" +
				"</div>" +
				"<div>" +
					"<form>" +
						"<span>Producteur : " +
							"<select id=\"select-prdt\">" +
								"<option value=\"0\" >== Choisir une ferme ==</option>" +
								"<!-- BEGIN producteurs -->" +
								"<option value=\"{producteurs.proIdCompteFerme}\">{producteurs.ferNom}</option>" +
								"<!-- END producteurs -->" +
							"</select>" +
						"</span>" +
					"</form>" +
				"</div>" +
				"<div id=\"liste-pdt\"></div>" +	
			"</div>" +
		"</div>";
	
	this.listeProduitLivraison = 
		"<div id=\"liste-pdt\">" +
			"<table class=\"com-table-100\">" +
				"<thead>" +
					"<tr>" +
						"<th>Ref</th>" +
						"<th>Produit</th>" +
						"<th colspan=\"2\" class=\"com-center\">Réservation</th>" +
						"<th colspan=\"2\" class=\"com-center\">Commande</th>" +
						"<th colspan=\"2\" class=\"com-center\">Prix</th>" +
						"<th colspan=\"2\" class=\"com-center\">Livraison</th>" +
						"<th colspan=\"2\" class=\"com-center\">Prix</th>" +
						"<th colspan=\"2\" class=\"com-center\">Solidaire</th>" +
						"<th>État</th>" +
					"</tr>" +
				"</thead>" +
				"<tbody>" +
					"<!-- BEGIN produits -->" +
					"<tr>" +
						"<td>{produits.nproNumero}</td>" +
						"<td>{produits.nproNom}</td>" +
						"<td class=\"com-text-align-right\">{produits.stoQuantite}</td>" +
						"<td> {produits.proUniteMesure}</td>" +
						"<td class=\"com-text-align-right\">{produits.stoQuantiteCommande}</td>" +
						"<td> {produits.proUniteMesure}</td>" +
						"<td class=\"com-text-align-right\">{produits.opeMontantCommande}</td>" +
						"<td> {sigleMonetaire}</td>" +
						"<td class=\"com-text-align-right\">" +
							"<span class=\"pro-id pro-id-etat ui-helper-hidden\">{produits.proId}</span>" +
							"<input class=\"{produits.masquerNormal} formulaire input-bon-livraison qte-commande com-numeric com-input-text ui-widget-content ui-corner-all\" type=\"text\" name=\"qte-commande-{produits.proId}\" maxlength=\"11\" value=\"{produits.stoQuantiteLivraison}\" id=\"produits{produits.proId}quantite\"/>" +
							"<span class=\"detail {produits.masquerNormal}\">{produits.stoQuantiteLivraison}</span>" +
						"</td>" +
						"<td> <span class=\"{produits.masquerNormal}\">{produits.proUniteMesure}</span></td>" +
						"<td class=\"com-text-align-right\">" +
							"<input class=\"{produits.masquerNormal} formulaire input-bon-livraison prix-commande com-numeric com-input-text ui-widget-content ui-corner-all\" type=\"text\" name=\"prix-commande-{produits.proId}\" maxlength=\"11\" value=\"{produits.opeMontantLivraison}\" id=\"produits{produits.proId}prix\" />" +
							"<span class=\"detail {produits.masquerNormal}\">{produits.opeMontantLivraison}</span>" +
						"</td>" +
						"<td> <span class=\"{produits.masquerNormal}\">{sigleMonetaire}</span></td>" +
						"<td><span class=\"pro-id-etat ui-helper-hidden\">{produits.proId}</span><input " +
							"class=\"formulaire qte-solidaire-commande input-bon-livraison com-numeric com-input-text ui-widget-content ui-corner-all\" " +
							"type=\"text\" " +
							"name=\"qte-solidaire-commande-{produits.proId}\" " +
							"maxlength=\"11\" " +
							"value=\"{produits.stoQuantiteSolidaire}\" " +
							"id=\"produits{produits.proId}quantiteSolidaire\" />" +
							"<span class=\"detail\">{produits.stoQuantiteSolidaire}</span>" +
						"</td>" +
						"<td> {produits.proUniteMesure}</td>" +
						"<td><div id=\"etat-commande-{produits.proId}\" class=\"{produits.classEtat} ui-corner-all\"></div></td>" +
					"</tr>" +
					"<!-- END produits -->" +
				"</tbody>" +
				"<tfoot>" +
					"<tr>" +
						"<td colspan=\"4\"></td>" +
						"<td colspan=\"2\">Total :</td>" +
						"<td>{totalCommande}</td>" +
						"<td> {sigleMonetaire}</td>" +
						"<td></td>" +
						"<td></td>" +
						"<td>" +
							"<input class=\"formulaire input-bon-livraison com-numeric com-input-text ui-widget-content ui-corner-all\" type=\"text\" name=\"total\" maxlength=\"11\" value=\"{total}\" id=\"total\" />" +
							"<span class=\"detail\">{total}</span>" +
						"</td>" +
						"<td> {sigleMonetaire}</td>" +
						"<td colspan=\"3\">" +
							"<select class=\"formulaire\" name=\"typepaiement\" id=\"typePaiement\">" +
								"<option value=\"0\">== Choisir le paiement ==</option>" +
								"<!-- BEGIN typePaiement -->" +
								"<option value=\"{typePaiement.tppId}\">{typePaiement.tppType}</option>" +
								"<!-- END typePaiement -->" +
							"</select>" +
							"<span class=\"detail\">{tppType}</span>" +
						"</td>" +
					"</tr>" +
					"<tr id=\"tr-champ-complementaire\">" +
						"<td colspan=\"10\"></td>" +
						"<td colspan=\"2\"><span id=\"label-champ-complementaire\" ></span></td>" +
						"<td colspan=\"3\">" +
							"<input type=\"text\" name=\"champ-complementaire\" value=\"{champComplementaire}\" class=\"formulaire com-input-text ui-widget-content ui-corner-all\" id=\"typePaiementChampComplementaire\" maxlength=\"50\" size=\"15\"/>" +
							"<span class=\"detail\">{champComplementaire}</span>" +
						"</td>" +
					"</tr>" +
				"</tfoot>" +
			"</table>" +
			"<div class=\"com-center\">" +
				"<button class=\"ui-helper-hidden com-btn-edt-multiples ui-state-default ui-corner-all com-button\" id=\"btn-annuler\">Annuler</button>" +
				"<button class=\"formulaire ui-state-default ui-corner-all com-button\" id=\"btn-enregistrer\">Enregistrer</button>" +
				"<button class=\"detail ui-state-default ui-corner-all com-button\" id=\"btn-modifier\">Modifier</button>" +
			"</div>" +
		"</div>";
	
	this.infoCommandeArchive =
		"<div id=\"contenu\">" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Détail du Marché n°{numero}" +
					"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\" id=\"btn-dupliquer-com\" title=\"Dupliquer le marché\">" +
						"<span class=\"ui-icon ui-icon-copy\">" +
						"</span>" +
					"</span>" +
				"</div>" +
				"<div>" +
					"<div class=\"com-center\" id=\"resultat-marche-archive\">" +
						"<span class=\"ui-widget ui-widget-header com-table-th\">Résultat Zeybu Marché : {total} {sigleMonetaire}</span>    " +
						"<span class=\"ui-widget ui-widget-header com-table-th\">Résultat Zeybu Solidaire : {totalSolidaire} {sigleMonetaire}</span>" +
					"</div>" +
					"<table class=\"com-table\" id=\"info-marche-archive\">" +
						"<thead>" +
							"<tr>" +
								"<th></th>" +
								"<th class=\"com-table-th ui-widget ui-widget-header\" colspan=\"5\">Achat</th>" +
								"<th class=\"com-table-th ui-widget ui-widget-header\" colspan=\"4\">Vente</th>" +
							"</tr>" +
							"<tr class=\"ui-widget ui-widget-header\">" +
								"<th class=\"com-table-th\">Produit</th>" +
								"<th class=\"com-table-th\">Qté Commande</th>" +
								"<th class=\"com-table-th\">Prix Commande</th>" +
								"<th class=\"com-table-th\">Qté Livraison</th>" +
								"<th class=\"com-table-th\">Prix Livraison</th>" +
								"<th class=\"com-table-th\">Qté Solidaire</th>" +
								"<th class=\"com-table-th\">Qté Vente</th>" +
								"<th class=\"com-table-th\">Prix Vente</th>" +
								"<th class=\"com-table-th\">Qté Solidaire</th>" +
								"<th class=\"com-table-th\">Prix Solidaire</th>" +
							"</tr>" +
						"</thead>" +
						"<tbody>" +
							"<!-- BEGIN infoCommande -->" +
							"<tr>" +
								"<td class=\"com-table-td\">{infoCommande.nproNom}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantite} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.opeMontant} {sigleMonetaire}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantiteLivraison} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.opeMontantLivraison} {sigleMonetaire}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantiteSolidaire} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantiteVente} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.opeMontantVente} {sigleMonetaire}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantiteVenteSolidaire} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.opeMontantVenteSolidaire} {sigleMonetaire}</td>" +
							"</tr>" +
							"<!-- END infoCommande -->" +
						"</tbody>" +
					"</table>" +
				"</div>" +
			"</div>" +
		"</div>";
	
	
	this.resumeMarche =
		"<div id=\"contenu\">" +
			"{editerMenu}" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Détail du Marché n°{numero}" +
				"</div>" +
				"<div>" +
					"<div class=\"com-center\" id=\"resultat-marche-archive\">" +
						"<span class=\"ui-widget ui-widget-header com-table-th\">Résultat Zeybu Marché : {total} {sigleMonetaire}</span>    " +
						"<span class=\"ui-widget ui-widget-header com-table-th\">Résultat Zeybu Solidaire : {totalSolidaire} {sigleMonetaire}</span>" +
					"</div>" +
					"<table class=\"com-table\" id=\"info-marche-archive\">" +
						"<thead>" +
							"<tr>" +
								"<th></th>" +
								"<th class=\"com-table-th ui-widget ui-widget-header\" colspan=\"5\">Achat</th>" +
								"<th class=\"com-table-th ui-widget ui-widget-header\" colspan=\"4\">Vente</th>" +
							"</tr>" +
							"<tr class=\"ui-widget ui-widget-header\">" +
								"<th class=\"com-table-th\">Produit</th>" +
								"<th class=\"com-table-th\">Qté Commande</th>" +
								"<th class=\"com-table-th\">Prix Commande</th>" +
								"<th class=\"com-table-th\">Qté Livraison</th>" +
								"<th class=\"com-table-th\">Prix Livraison</th>" +
								"<th class=\"com-table-th\">Qté Solidaire</th>" +
								"<th class=\"com-table-th\">Qté Vente</th>" +
								"<th class=\"com-table-th\">Prix Vente</th>" +
								"<th class=\"com-table-th\">Qté Solidaire</th>" +
								"<th class=\"com-table-th\">Prix Solidaire</th>" +
							"</tr>" +
						"</thead>" +
						"<tbody>" +
							"<!-- BEGIN infoCommande -->" +
							"<tr>" +
								"<td class=\"com-table-td\">{infoCommande.nproNom}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantite} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.opeMontant} {sigleMonetaire}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantiteLivraison} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.opeMontantLivraison} {sigleMonetaire}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantiteSolidaire} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantiteVente} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.opeMontantVente} {sigleMonetaire}</td>" +
								"<td class=\"com-table-td\">{infoCommande.stoQuantiteVenteSolidaire} {infoCommande.proUniteMesure}</td>" +
								"<td class=\"com-table-td\">{infoCommande.opeMontantVenteSolidaire} {sigleMonetaire}</td>" +
							"</tr>" +
							"<!-- END infoCommande -->" +
						"</tbody>" +
					"</table>" +
				"</div>" +
			"</div>" +
		"</div>";
	
	
	this.produitIndisponible = 
		"<tr><td colspan=\"11\">Le produit {nom} n'est plus disponible.</td></tr>";

	this.lotUnique = 
		"<input type=\"hidden\" id=\"lot-{IdPdt}\" value=\"{valeur}\" /><span>{text}</span>";
	
	this.editerMarcheListeProduit = 
		"<div id=\"liste-ferme\">" +
			"<!-- BEGIN fermes -->" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-corner-all\" id=\"ferme-{fermes.ferId}\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">{fermes.ferNom}</div>" +
				"<!-- BEGIN fermes.categories -->" +
				"<table class=\"com-table-100\">" +
					"<tr class=\"ui-widget-header\" >" +
						"<td class=\"com-table-td-debut\">{fermes.categories.cproNom}</td>" +
						"<td class=\"com-table-td-med\"></td>" +
						"<td class=\"com-table-td-med\"></td>" +
						"<td class=\"com-table-td-med\"></td>" +
						"<td class=\"com-table-td-fin\"></td>" +
					"</tr>" +
					"<!-- BEGIN fermes.categories.produits -->" +
					"<tr>" +
						"<td class=\"com-table-td-debut\">{fermes.categories.produits.nproNom}</td>" +
						"<td class=\"com-table-td-med edt-marche-pro-unite\">{fermes.categories.produits.abonnement}</td>" +
						"<td class=\"com-table-td-med edt-marche-pro-unite\">{fermes.categories.produits.qteReservation} {fermes.categories.produits.nproUnite}</td>" +
						"<td class=\"com-table-td-med td-edt\">" +
							"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-modifier-produit\" title=\"Modifier\" id-produit=\"{fermes.categories.produits.id}\" typeProduit=\"{fermes.categories.produits.type}\">" +
								"<span class=\"ui-icon ui-icon-pencil\"></span>" +
							"</span>" +
						"</td>" +
						"<td class=\"com-table-td-fin td-edt\">" +
							"<span class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-produit\" title=\"Supprimer\" id-produit=\"{fermes.categories.produits.id}\" qte-reservation=\"{fermes.categories.produits.qteReservation}\" typeProduit=\"{fermes.categories.produits.type}\" >" +
								"<span class=\"ui-icon ui-icon-trash\"></span>" +
							"</span>" +
						"</td>" +
					"</tr>" +
					"<!-- END fermes.categories.produits -->" +
				"</table>" +
				"<!-- END fermes.categories -->" +
			"</div>"+
			"<!-- END fermes -->" +
		"</div>";
	"<!-- END fermes -->" +
"</div>";
	
	this.dialogModifierInfoMarche = 
		"<div id=\"dialog-modif-pro\" title=\"Produit\">" +
			"<div class=\"com-widget-content\">" +		
				"<form id=\"formulaire-information-creation-commande\">" +
					"<table class=\"com-table-form\">" +
						"<tr>" +
							"<th class=\"com-table-form-th\">Nom du Marché : </th>" +
							"<td class=\"com-table-form-td\">" +
								"<input class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" type=\"text\" name=\"nom\" id=\"marche-nom\" maxlength=\"100\" value=\"{nom}\"/>" +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<th class=\"com-table-form-th\">Début des Réservations * : </th>" +
							"<td class=\"com-table-form-td\">" +
								"<input class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" type=\"text\" name=\"date-debut-reservation\" id=\"marche-dateDebutReservation\" value=\"{dateDebutReservation}\"/>" +
							"</td>" +
							"<td class=\"com-table-form-td\">" +
								"à " +
								"<select name=\"heure-debut-reservation\" id=\"marche-timeDebutReservation\" class=\"informations-marche\" >" +
									"<option value=\"00\">00</option>" +
								    "<option value=\"01\">01</option>" +
								    "<option value=\"02\">02</option>" +
								    "<option value=\"03\">03</option>" +
								    "<option value=\"04\">04</option>" +
								    "<option value=\"05\">05</option>" +
								    "<option value=\"06\">06</option>" +
								    "<option value=\"07\">07</option>" +
								    "<option value=\"08\">08</option>" +
								    "<option value=\"09\">09</option>" +
								    "<option value=\"10\">10</option>" +
								    "<option value=\"11\">11</option>" +
								    "<option value=\"12\">12</option>" +
								    "<option value=\"13\">13</option>" +
								    "<option value=\"14\">14</option>" +
								    "<option value=\"15\">15</option>" +
								    "<option value=\"16\">16</option>" +
								    "<option value=\"17\">17</option>" +
								    "<option value=\"18\">18</option>" +
								    "<option value=\"19\">19</option>" +
								    "<option value=\"20\">20</option>" +
								    "<option value=\"21\">21</option>" +
								    "<option value=\"22\">22</option>" +
								    "<option value=\"23\">23</option>" +
								"</select>" +
			   					"<select name=\"minute-debut-reservation\" class=\"informations-marche\">" +
									"<option value=\"00\">00</option>" +
								    "<option value=\"05\">05</option>" +
								    "<option value=\"10\">10</option>" +
								    "<option value=\"15\">15</option>" +
								    "<option value=\"20\">20</option>" +
								    "<option value=\"25\">25</option>" +
								    "<option value=\"30\">30</option>" +
								    "<option value=\"35\">35</option>" +
								    "<option value=\"40\">40</option>" +
								    "<option value=\"45\">45</option>" +
								    "<option value=\"50\">50</option>" +
								    "<option value=\"55\">55</option>" +
								"</select>" +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<th class=\"com-table-form-th\">Fin des Réservations * : </th>" +
							"<td class=\"com-table-form-td\">" +
								"<input class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" type=\"text\" name=\"date-fin-reservation\" id=\"marche-dateFinReservation\" value=\"{dateFinReservation}\"/>" +
							"</td>" +
							"<td class=\"com-table-form-td\">" +
								"à " +
								"<select name=\"heure-fin-reservation\" id=\"marche-timeFinReservation\" class=\"informations-marche\" >" +
									"<option value=\"00\">00</option>" +
								    "<option value=\"01\">01</option>" +
								    "<option value=\"02\">02</option>" +
								    "<option value=\"03\">03</option>" +
								    "<option value=\"04\">04</option>" +
								    "<option value=\"05\">05</option>" +
								    "<option value=\"06\">06</option>" +
								    "<option value=\"07\">07</option>" +
								    "<option value=\"08\">08</option>" +
								    "<option value=\"09\">09</option>" +
								    "<option value=\"10\">10</option>" +
								    "<option value=\"11\">11</option>" +
								    "<option value=\"12\">12</option>" +
								    "<option value=\"13\">13</option>" +
								    "<option value=\"14\">14</option>" +
								    "<option value=\"15\">15</option>" +
								    "<option value=\"16\">16</option>" +
								    "<option value=\"17\">17</option>" +
								    "<option value=\"18\">18</option>" +
								    "<option value=\"19\">19</option>" +
								    "<option value=\"20\">20</option>" +
								    "<option value=\"21\">21</option>" +
								    "<option value=\"22\">22</option>" +
								    "<option value=\"23\">23</option>" +
								"</select>" +
			   					"<select name=\"minute-fin-reservation\" class=\"informations-marche\">" +
									"<option value=\"00\">00</option>" +
								    "<option value=\"05\">05</option>" +
								    "<option value=\"10\">10</option>" +
								    "<option value=\"15\">15</option>" +
								    "<option value=\"20\">20</option>" +
								    "<option value=\"25\">25</option>" +
								    "<option value=\"30\">30</option>" +
								    "<option value=\"35\">35</option>" +
								    "<option value=\"40\">40</option>" +
								    "<option value=\"45\">45</option>" +
								    "<option value=\"50\">50</option>" +
								    "<option value=\"55\">55</option>" +
								"</select>" +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<th class=\"com-table-form-th\">Jour du marché * : </th>" +
							"<td class=\"com-table-form-td\">" +
								"<input class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" type=\"text\" name=\"date-debut\" id=\"marche-dateMarcheDebut\" value=\"{dateMarcheDebut}\"/>" +
							"</td>" +
							"<td class=\"com-table-form-td\">" +
								"de " +
								"<select name=\"heure-debut\" id=\"marche-timeMarcheDebut\" class=\"informations-marche\">" +
									"<option value=\"00\">00</option>" +
								    "<option value=\"01\">01</option>" +
								    "<option value=\"02\">02</option>" +
								    "<option value=\"03\">03</option>" +
								    "<option value=\"04\">04</option>" +
								    "<option value=\"05\">05</option>" +
								    "<option value=\"06\">06</option>" +
								    "<option value=\"07\">07</option>" +
								    "<option value=\"08\">08</option>" +
								    "<option value=\"09\">09</option>" +
								    "<option value=\"10\">10</option>" +
								    "<option value=\"11\">11</option>" +
								    "<option value=\"12\">12</option>" +
								    "<option value=\"13\">13</option>" +
								    "<option value=\"14\">14</option>" +
								    "<option value=\"15\">15</option>" +
								    "<option value=\"16\">16</option>" +
								    "<option value=\"17\">17</option>" +
								    "<option value=\"18\">18</option>" +
								    "<option value=\"19\">19</option>" +
								    "<option value=\"20\">20</option>" +
								    "<option value=\"21\">21</option>" +
								    "<option value=\"22\">22</option>" +
								    "<option value=\"23\">23</option>" +
								"</select>" +
			   					"<select name=\"minute-debut\" class=\"informations-marche\">" +
									"<option value=\"00\">00</option>" +
								    "<option value=\"05\">05</option>" +
								    "<option value=\"10\">10</option>" +
								    "<option value=\"15\">15</option>" +
								    "<option value=\"20\">20</option>" +
								    "<option value=\"25\">25</option>" +
								    "<option value=\"30\">30</option>" +
								    "<option value=\"35\">35</option>" +
								    "<option value=\"40\">40</option>" +
								    "<option value=\"45\">45</option>" +
								    "<option value=\"50\">50</option>" +
								    "<option value=\"55\">55</option>" +
								  "</select>" +
								"</td>" +
								"<td class=\"com-table-form-td\">" +
									"à " +
									"<select name=\"heure-fin\" id=\"marche-timeMarcheFin\" class=\"informations-marche\">" +
										"<option value=\"00\">00</option>" +
									    "<option value=\"01\">01</option>" +
									    "<option value=\"02\">02</option>" +
									    "<option value=\"03\">03</option>" +
									    "<option value=\"04\">04</option>" +
									    "<option value=\"05\">05</option>" +
									    "<option value=\"06\">06</option>" +
									    "<option value=\"07\">07</option>" +
									    "<option value=\"08\">08</option>" +
									    "<option value=\"09\">09</option>" +
									    "<option value=\"10\">10</option>" +
									    "<option value=\"11\">11</option>" +
									    "<option value=\"12\">12</option>" +
									    "<option value=\"13\">13</option>" +
									    "<option value=\"14\">14</option>" +
									    "<option value=\"15\">15</option>" +
									    "<option value=\"16\">16</option>" +
									    "<option value=\"17\">17</option>" +
									    "<option value=\"18\">18</option>" +
									    "<option value=\"19\">19</option>" +
									    "<option value=\"20\">20</option>" +
									    "<option value=\"21\">21</option>" +
									    "<option value=\"22\">22</option>" +
									    "<option value=\"23\">23</option>" +
								    "</select>" +
			   						"<select name=\"minute-fin\" class=\"informations-marche\">" +
										"<option value=\"00\">00</option>" +
									    "<option value=\"05\">05</option>" +
									    "<option value=\"10\">10</option>" +
									    "<option value=\"15\">15</option>" +
									    "<option value=\"20\">20</option>" +
									    "<option value=\"25\">25</option>" +
									    "<option value=\"30\">30</option>" +
									    "<option value=\"35\">35</option>" +
									    "<option value=\"40\">40</option>" +
									    "<option value=\"45\">45</option>" +
									    "<option value=\"50\">50</option>" +
									    "<option value=\"55\">55</option>" +
								  "</select>" +
							"</td>" +
						"</tr>" +
						"<tr>" +
							"<th class=\"com-table-form-th\">Description : </th>" +
							"<td class=\"com-table-form-td\">" +
								"<textarea class=\"com-input-text ui-widget-content ui-corner-all informations-marche\" name=\"description\" id=\"marche-description\" >{comDescription}</textarea>" +
							"</td>" +
						"</tr>" +
					"</table>" +
				"</form>" +
			"</div>" +
		"</div>";
	
	this.dialogSupprimerProduit =
		"<div id=\"dialog-supprimer-produit\" title=\"Supprimer le produit du marché\">" +
			"<p>Des réservations sont présentes sur ce produit.<br/>Voulez-vous toujours le supprimer ?</p>" +
		"</div>";	
	
	this.dialogInfoProduit = 
		"<div id=\"dialog-info-pro\" title=\"Produit\">" +
			"<div id=\"information-detail-producteur\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Informations</div>" +
				"<div class=\"com-widget-content\">" +
					"<table class=\"com-table-form\">" +
						"<tr>" +
							"<th class=\"com-table-form-th\">Nom : </th>" +
							"<td class=\"com-table-form-td\">{nom}</td>" +
						"</tr>" +
						"<tr>" +
							"<th class=\"com-table-form-th\">Catégorie : </th>" +
							"<td class=\"com-table-form-td\">{cproNom}</td>" +
						"</tr>" +
						"<tr>" +
							"<th class=\"com-table-form-th\">Description : </th>" +
							"<td class=\"com-table-form-td\">{description}</td>" +
						"</tr>" +
					"</table>" +
				"</div>" +
			"</div>" +
			
			"<div id=\"pro-prdt\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Producteurs</div>" +
				"<table class=\"com-table-form\">" +
					"<!-- BEGIN producteurs -->" +
					"<tr>" +
						"<td class=\"com-table-form-td\">" +
							"{producteurs.prdtPrenom} {producteurs.prdtNom}" +
						"</td>" +
					"</tr>" +
					"<!-- END producteurs -->" +
				"</table>" +
			"</div>" +
			
			"<div id=\"pro-car\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">Caractéristiques</div>" +
				"<table class=\"com-table-form\">" +
					"<!-- BEGIN caracteristiques -->" +
					"<tr>" +
						"<td class=\"com-table-form-td\">" +
							"{caracteristiques.carNom}" +
						"</td>" +
					"</tr>" +
					"<!-- END caracteristiques -->" +
				"</table>" +
			"</div>" +
		"</div>";
	
	this.listeFerme = 
		"<div id=\"contenu\">" +	
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Les Fermes" +
				"</div>" +
				"<div id=\"liste-adh-recherche\" class=\"recherche com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"<form id=\"filter-form\">" +
						"<div>" +
							"<span class=\"conteneur-icon com-float-left ui-widget-content ui-corner-left\" title=\"Chercher\">" +
									"<span class=\"ui-icon ui-icon-search\">" +
								"</span>" +
							"</span>" +
							"<input class=\"com-input-text ui-widget-content ui-corner-right\" name=\"filter\" id=\"filter\" value=\"\" maxlength=\"30\" size=\"15\" type=\"text\" />" +
						"</div>" +
					"</form>" +
				"</div>" +
				"<table class=\"com-table\">" +
					"<thead>" +
						"<tr class=\"ui-widget ui-widget-header\">" +
							"<th class=\"com-table-th-debut com-underline-hover liste-adh-th-num com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>N°</th>" +
							"<th class=\"com-table-th-med com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Compte</th>" +
							"<th class=\"com-table-th-med com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Nom</th>" +
							"<th class=\"com-table-th-fin liste-adh-th-solde\"></th>" +
						"</tr>" +
					"</thead>" +
					"<tbody>" +
				"<!-- BEGIN listeFerme -->" +
						"<tr class=\"com-cursor-pointer compte-ligne\" data-id-compte-ferme=\"{listeFerme.ferIdCompte}\">" +
							"<td class=\"com-table-td-debut com-underline-hover\">" +
								"<span class=\"ui-helper-hidden\">{listeFerme.ferIdTri}</span>" +
								"{listeFerme.ferNumero}</td>" +
							"<td class=\"com-table-td-med com-underline-hover\">{listeFerme.cptLabel}</td>" +
							"<td class=\"com-table-td-med com-underline-hover\">{listeFerme.ferNom}</td>" +
							"<td class=\"com-table-td-fin com-underline-hover liste-adh-td-solde\">" +
								"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\">" +
									"<span class=\"ui-icon ui-icon-triangle-1-e\"></span>" +
								"</span>" +
							"</td>" +
						"</tr>" +
				"<!-- END listeFerme -->" +
					"</tbody>" +
				"</table>" +
				//"</div>" +
			"</div>" +
		"</div>";
			
	this.listeFermeVide =
		"<div id=\"contenu\">" +
			"<div class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Les Fermes" +
				"</div>" +
				"<p id=\"texte-liste-vide\">Aucune ferme dans la base.</p>" +	
			"</div>" +
		"</div>";
	
	this.listeStockProduitFermeEntete =		
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"btn-retour\">" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Retour à la liste des fermes" +
				"</button>" +
			"</div>" +
			"{detail}" +
		"</div>" ;
	
	this.listeStockProduitFermeDetail =	
			"<div class=\"achat com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Les Produits : {ferNom}" +
				"</div>" +
				"<table class=\"com-table-100\">" +
					"<tr>" +
						"<td>" +
						"</td>" +
						"<td colspan=\"2\">" +
							"<div class=\"ui-widget-header ui-corner-all com-center\">" +
								"Stock" +
							"</div>" +
						"</td>" +
						"<td colspan=\"2\">" +
							"<div class=\"ui-widget-header ui-corner-all com-center\">" +
								"Stock Solidaire" +
							"</div>" +
						"</td>" +
						"<td colspan=\"2\">" +
						"<div class=\"ui-widget-header ui-corner-all com-center\">" +
							"Stock Total" +
						"</div>" +
					"</td>" +
						"<td></td>" +
					"</tr>" +
				"<!-- BEGIN listeProduit -->" +
					"<tr>" +
						"<td><div class=\"ui-widget-header ui-corner-all com-center\">{listeProduit.cproNom}</div></td>" +
						"<td colspan=\"7\"></td>" +
					"</tr>" +
					"<!-- BEGIN listeProduit.produits -->" +
					"<tr class=\"com-ligne-hover\">" +
						"<td>{listeProduit.produits.nproNom}</td>" +						
				
						"<td class=\"com-text-align-right\">" +
							"<span class=\"produit-{listeProduit.produits.stoQteId}\" id=\"label-quantite-{listeProduit.produits.stoQteId}\">{listeProduit.produits.stoQteQuantiteAffiche}</span>" +
							"<span class=\"ui-helper-hidden produit-{listeProduit.produits.stoQteId}\">" +
								"<input type=\"text\" value=\"{listeProduit.produits.stoQteQuantite}\" class=\"com-numeric com-input-text ui-widget-content ui-corner-all\" id=\"{listeProduit.produits.stoQteId}-quantite\" maxlength=\"12\" size=\"3\" data-id=\"{listeProduit.produits.stoQteId}\" />" +
							"</span>" +
						"</td>" +					
						"<td>" +
							"{listeProduit.produits.stoQteUnite}" +
						"</td>" +
						
						"<td class=\"com-text-align-right\">" +
							"<span class=\"produit-{listeProduit.produits.stoQteId}\" id=\"label-quantite-solidaire-{listeProduit.produits.stoQteId}\">{listeProduit.produits.stoQteQuantiteSolidaireAffiche}</span>" +
							"<span class=\"ui-helper-hidden produit-{listeProduit.produits.stoQteId}\">" +
								"<input type=\"text\" value=\"{listeProduit.produits.stoQteQuantiteSolidaire}\" class=\"com-numeric com-input-text ui-widget-content ui-corner-all\" id=\"{listeProduit.produits.stoQteId}-quantiteSolidaire\" maxlength=\"12\" size=\"3\" data-id=\"{listeProduit.produits.stoQteId}\" />" +
							"</span>" +
						"</td>" +					
						"<td>" +
							"{listeProduit.produits.stoQteUnite}" +
						"</td>" +
						
						"<td class=\"com-text-align-right\">" +
							"<span class=\"produit-{listeProduit.produits.stoQteId}\"id=\"label-quantite-total-{listeProduit.produits.stoQteId}\">{listeProduit.produits.stoQteQuantiteTotal}</span>" +
							"<span class=\"ui-helper-hidden produit-{listeProduit.produits.stoQteId}\" id=\"label-quantite-total-edit-{listeProduit.produits.stoQteId}\">" +
								"{listeProduit.produits.stoQteQuantiteTotal}" +
							"</span>" +
						"</td>" +					
						"<td>" +
							"{listeProduit.produits.stoQteUnite}" +
						"</td>" +
						"<td>" +
							"{listeProduit.produits.btnEdition}" +
						"</td>" +	
					"</tr>" +
					"<!-- END listeProduit.produits -->" +
				"<!-- END listeProduit -->" +
				"</table>" +
			"</div>";
	
	this.listeStockProduitFermeDetailBtnEdition =
		"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all btn-modif\" id=\"btn-modif-{stoQteId}\" title=\"Modifier\" data-id=\"{stoQteId}\">" +
			"<span class=\"ui-icon ui-icon-pencil\"></span>" +
		"</span>" +	
		"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all ui-helper-hidden btn-annuler\" id=\"btn-annuler-{stoQteId}\" title=\"Annuler\" data-id=\"{stoQteId}\">" +
			"<span class=\"ui-icon ui-icon-closethick\"></span>" +
		"</span>" +
		"<span class=\"com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all ui-helper-hidden btn-check\" id=\"btn-check-{stoQteId}\" title=\"Valider\" data-id=\"{stoQteId}\">" +
			"<span class=\"ui-icon ui-icon-check\"></span>" +
		"</span>";
	
	this.listeStockProduitFermeDetailVide =
		"<div class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
				"Les Produits" +
			"</div>" +
			"<p id=\"texte-liste-vide\">Aucun produit pour cette ferme dans la base.</p>" +	
		"</div>";
	
	this.rechercheListeFacture = 
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2 ui-helper-hidden\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"btn-retour\">" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Retour" +
				"</button>" +
			"</div>" +
			//"<div class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
				"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
					"Les Factures" +
					"<span class=\"com-btn-header-text ui-widget-content ui-corner-all\" id=\"btn-nv-facture\" title=\"Ajouter une Facture\">" +
						"<span class=\"com-float-left ui-icon ui-icon-plusthick\">" +
						"</span>Ajouter" +
					"</span>" +
				"</div>" +
				"<div id=\"form-recherche-liste-facture\" class=\"com-center com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
					"Entre le <input type=\"text\" value=\"{dateDebut}\" id=\"dateDebut\" class=\"com-input-text ui-widget-content ui-corner-all\">" +
					" et le <input type=\"text\" value=\"{dateFin}\" id=\"dateFin\" class=\"com-input-text ui-widget-content ui-corner-all\"> " +
					"Marché " +
					"<select id=\"idMarche\" >" +
						"<option value=\"0\" >Tout</option>" +
						"<option value=\"-1\" >Hors Marché</option>" +
						"<!-- BEGIN listeMarche -->" +
						"<option value=\"{listeMarche.id}\">N° {listeMarche.numero}</option>" +
						"<!-- END listeMarche -->" +
					"</select>" +
					"<button type=\"button\" id=\"btn-rechercher-liste-facture\" class=\"ui-state-default ui-corner-all com-button com-center\">Rechercher</button>" +
				"</div>" +
			//"</div>" +
			"<div id=\"liste-facture\" class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
			"</div>" +
		"</div>";
	
	this.listeFacture = 
		"<table class=\"com-table\">" +
			"<thead>" +
				"<tr class=\"ui-widget ui-widget-header\">" +
					"<th class=\"com-table-th-debut com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>N°</th>" +
					"<th class=\"com-table-th-med com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Date</th>" +
					"<th class=\"com-table-th-med com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Marché</th>	" +
					"<th class=\"com-table-th-med com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Ferme</th>	" +
					"<th class=\"com-table-th-med com-center\">Montant</th>	" +
					"<th class=\"com-table-th-fin\"></th>" +
				"</tr>" +
			"</thead>" +
			"<tbody>" +
				"<!-- BEGIN listeFacture -->" +
				"<tr>" +
					"<td class=\"com-table-td-debut\">{listeFacture.valeur}</td>" +
					"<td class=\"com-table-td-med\"><span class=\"ui-helper-hidden\">{listeFacture.dateTri}</span>{listeFacture.date}</td>" +
					"<td class=\"com-table-td-med\">{listeFacture.numero}</td>" +
					"<td class=\"com-table-td-med\">{listeFacture.nom}</td>" +
					"<td class=\"com-table-td-med com-text-align-right\">{listeFacture.montant} {sigleMonetaire}</td>" +
					"<td class=\"com-table-td-fin\">" +
						"<span data-id-facture=\"{listeFacture.id}\" class=\"btn-afficher-facture com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\">" +
							"<span class=\"ui-icon ui-icon-triangle-1-e\"></span>" +
						"</span>" +
					"</td>" +								
				"</tr>" +
				"<!-- END listeFacture -->" +
			"</tbody>" +
		"</table>";
	
	this.listeFactureNumeroMarche = "<span class=\"ui-helper-hidden\">{numero}</span>N°{numero}";
	
	this.listeFactureVide = "<p id=\"texte-liste-vide\">Aucune Facture.</p>";
	
	this.facture =
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"btn-retour\">" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Retour" +
				"</button>" +
			"</div>" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
				"<span class=\"entete-numero-facture\" >Facture n°{numeroFacture}</span>" +
				"<span>Ferme : {listeFermeAffiche}</span>" +					
				"<span class=\"ui-helper-hidden com-cursor-pointer com-btn-header ui-widget-content ui-corner-all\" id=\"btn-export-facture\" title=\"Exporter la facture\">" +
					"<span class=\"ui-icon ui-icon-print\">" +
					"</span>" +
				"</span>" +
			"</div>" +
			"<div id=\"liste-pdt\"></div>" +
		"</div>";
	
	this.factureSelectFerme = 
		"<select id=\"select-ferme\">" +
			"<option value=\"0\">== Choisir une ferme ==</option>" +
			"<!-- BEGIN listeFerme -->" +
			"<option value=\"{listeFerme.ferId}\">{listeFerme.ferNom}</option>" +
			"<!-- END listeFerme -->" +
		"</select>";
		
	this.listeProduitFermeVide = "<div id=\"liste-pdt\" class=\"com-center com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">Aucun produit pour cette ferme.</div>";
	
	this.listeProduitFerme = 
		"<div id=\"liste-pdt\">" +
			"<div id=\"facture-catalogue-produit\" >" +
				"<div id=\"form-affiche-paiement-facture\" class=\"ui-helper-hidden com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +	
					"<table >" +
						"<thead>" +
							"<tr>" +
								"<td>Total</td>" +
								"<td><input type=\"text\" name=\"montant-total\" value=\"{montant}\" class=\"com-numeric com-input-text ui-widget-content ui-corner-all\" id=\"montant\" maxlength=\"12\" size=\"5\"/> <span>{sigleMonetaire}</span></td>" +
							"</tr>" +
						"</thead>" +
						"<tbody>" +
							"<tr id=\"ligne-operation\">" +
								"<td>Paiement</td>" +
								"<td>" +
									"<select name=\"typepaiement\" id=\"typePaiement\">" +
										"<option value=\"0\">== Choisir ==</option>" +
										"<!-- BEGIN typePaiement -->" +
										"<option value=\"{typePaiement.id}\">{typePaiement.type}</option>" +
										"<!-- END typePaiement -->" +
									"</select>" +
								"</td>" +
							"</tr>" +
							"{champComplementaire}" +
						"</tbody>" +
					"</table>" +					
				"</div>" +
				"<div id=\"affiche-paiement-facture\" class=\"ui-helper-hidden com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +	
					"<table >" +
						"<thead>" +
							"<tr>" +
								"<td>Total</td>" +
								"<td>{montantAffiche} {sigleMonetaire}</td>" +
							"</tr>" +
						"</thead>" +
						"<tbody>" +
							"<tr id=\"ligne-operation\">" +
								"<td>Paiement</td>" +
								"<td>{tppType}</td>" +
							"</tr>" +
							"{champComplementaireAffiche}" +							
					"</table>" +							
				"</div>" +				
				"<div id=\"widget-catalogue-produit\" class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
					"<div id=\"liste-adh-recherche\" class=\"recherche com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
						"<form id=\"filter-form-produit\">" +
							"<div>" +
								"<span class=\"conteneur-icon com-float-left ui-widget-content ui-corner-left\" title=\"Chercher\">" +
									"<span class=\"ui-icon ui-icon-search\">" +
									"</span>" +
								"</span>" +
								"<input class=\"com-input-text ui-widget-content ui-corner-right filter\" name=\"filter-produit\" id=\"filter-produit\" value=\"\" maxlength=\"30\" size=\"15\" type=\"text\" />" +
							"</div>" +
						"</form>" +
					"</div>" +
			
					"<table class=\"com-table\" id=\"table-produit\">" +
						"<thead>" +
							"<tr class=\"ui-widget ui-widget-header\">" +
								"<th class=\"com-table-th-debut\">Ref.</th>" +
								"<th class=\"com-table-th-med\">Nom</th>" +
								"<th class=\"com-table-th-fin td-edt\"></th>" +
							"</tr>" +
						"</thead>" +
						"<tbody>" +
						"<!-- BEGIN listeProduit -->" +
							"<tr class=\"ui-widget-header\">" +
								"<th colspan=\"3\" class=\"com-table-th\">{listeProduit.nom}</th>" +
							"</tr>" +
						
							"<!-- BEGIN listeProduit.produits -->" +
							"<tr class=\"com-cursor-pointer\">" +
								"<td class=\"com-table-td-debut\">{listeProduit.produits.nproNumero}</td>" +
								"<td class=\"com-table-td-med\">{listeProduit.produits.nproNom}</td>" +
								"<td class=\"com-table-td-fin com-underline-hover td-edt\">" +
									"<span data-id-nom-produit=\"{listeProduit.produits.nproId}\" class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-ajout-produit\" title=\"Ajouter\">" +
										"<span class=\"ui-icon ui-icon-plusthick\"></span>" +
									"</span>" +
								"</td>" +
							"</tr>" +
							"<!-- END listeProduit.produits -->" +
						"<!-- END listeProduit -->" +
						"</tbody>" +
					"</table>" +
				"</div>" +
			"</div>" +
			"<div id=\"facture-detail\" class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
			"{detailFacture}" +
			"</div>" +
		"</div>";
	
	this.detailFactureVide = 
		"<div class=\"detail-facture com-center\">Ajouter un produit.</div>" +
		"<div class=\"detail-facture ui-helper-hidden\">" +	
			"<table class=\"com-table\" id=\"table-detail-facture\">" +
				"<thead>" +
					"<tr>" +
						"<th class=\"facture-detail-ref\">Ref.</th>" +
						"<th class=\"facture-detail-nom\">Nom</th>" +
						"<th class=\"facture-detail-quantite\">Quantite</th>" +
						"<th class=\"facture-detail-montant\">Montant</th>" +
						"<th class=\"facture-detail-quantite\">Solidaire</th>" +
						"<th></th>" +
					"</tr>" +
				"</thead>" +
				"<tbody>" +
				"</tbody>" +
			"</table>" +
			"<div class=\"com-center\">" +
				"<button type=\"button\" id=\"btn-enregistrer-facture\" class=\"ui-state-default ui-corner-all com-button com-center\">Enregistrer</button>" +
				"<button type=\"button\" id=\"btn-modifier-facture\" class=\"ui-helper-hidden ui-state-default ui-corner-all com-button com-center\">Modifier</button>" +
				"<button type=\"button\" id=\"btn-supprimer-facture\" class=\"ui-helper-hidden ui-state-default ui-corner-all com-button com-center\">Supprimer</button>" +
				"<button type=\"button\" id=\"btn-annuler-modifier-facture\" class=\"ui-helper-hidden ui-state-default ui-corner-all com-button com-center\">Annuler</button>" +
				"<button type=\"button\" id=\"btn-enregistrer-modifier-facture\" class=\"ui-helper-hidden ui-state-default ui-corner-all com-button com-center\">Enregistrer</button>" +
			"</div>" +
		"</div>";
	
	this.champComplementaire =
		"<!-- BEGIN champComplementaire -->" +
			"<tr class=\"champ-complementaire\">" +
				"<td>{champComplementaire.label}</td>" +
				"<td>" +
					"<input type=\"text\" value=\"\" class=\"com-input-text ui-widget-content ui-corner-all\" id=\"champComplementaire{champComplementaire.id}valeur\" data-id-champ-complementaire=\"{champComplementaire.id}\" maxlength=\"50\" size=\"15\"/>" +
				"</td>" +
			"</tr>" +
		"<!-- END champComplementaire -->";
	
	this.listeProduitAffiche = 
		"<!-- BEGIN categorie -->" +
			"<tr id=\"cat-{categorie.cproId}\">" +
				"<th colspan=\"6\" class=\"ui-widget-header\">{categorie.cproNom}</th>" +
			"</tr>" +
			"<!-- BEGIN categorie.produits -->" +
			"<!-- BEGIN categorie.produits.produit -->" +
			"<tr id=\"stock-{categorie.produits.produit.compteurStock}\" class=\"cat-{categorie.cproId} pro-{categorie.produits.produit.nproId} produit-detail-facture\" data-compteur-stock=\"{categorie.produits.produit.compteurStock}\" data-id-nom-produit=\"{categorie.produits.produit.nproId}\" >" +
				"<td>{categorie.produits.produit.nproNumero}</td>" +
				"<td>{categorie.produits.produit.nproNom}</td>" +
				"<td class=\"produit-detail-facture-stock\" data-id-stock=\"{categorie.produits.produit.idStock}\" >" +
					"<span class=\"affiche-detail-facture\">" +
						"<span>{categorie.produits.produit.quantiteAffiche}</span> " +
						"<span>{categorie.produits.produit.uniteAffiche}</span>" +
					"</span>" +
					"<span class=\"ui-helper-hidden affiche-detail-facture\">" +
						"<input type=\"text\" value=\"{categorie.produits.produit.quantite}\" class=\"com-numeric com-input-text ui-widget-content ui-corner-all\" maxlength=\"12\" size=\"3\" id=\"produits{categorie.produits.produit.compteurStock}quantite\" /> " +
						"<span class=\"facture-detail-unite-span\">{categorie.produits.produit.unite}</span>" +
					"</span>" +
				"</td>" +
				"<td class=\"produit-detail-facture-montant\" data-id-detail-operation=\"{categorie.produits.produit.idDetailOperation}\">" +
					"<span class=\"affiche-detail-facture\">" +
						"<span>{categorie.produits.produit.montantAffiche}</span> " +
						"<span>{categorie.produits.produit.sigleMonetaireAffiche}</span>" +
					"</span>" +
					"<span class=\"ui-helper-hidden affiche-detail-facture\">" +
						"<input type=\"text\" value=\"{categorie.produits.produit.montant}\" class=\"montant-produit com-numeric com-input-text ui-widget-content ui-corner-all\" maxlength=\"12\" size=\"3\" id=\"produits{categorie.produits.produit.compteurStock}montant\" />" +
						"{categorie.produits.produit.sigleMonetaire}" +
					"</span>" +
				"</td>" +
				"<td class=\"produit-detail-facture-stock-solidaire\" data-id-stock-solidaire=\"{categorie.produits.produit.idStockSolidaire}\">" +
					"<span class=\"affiche-detail-facture\">" +
						"<span>{categorie.produits.produit.quantiteSolidaireAffiche}</span> " +
						"<span>{categorie.produits.produit.uniteSolidaireAffiche}</span>" +
					"</span>" +
					"<span class=\"ui-helper-hidden affiche-detail-facture\">" +
						"<input type=\"text\" value=\"{categorie.produits.produit.quantiteSolidaire}\" class=\"com-numeric com-input-text ui-widget-content ui-corner-all\" maxlength=\"12\" size=\"3\" id=\"produits{categorie.produits.produit.compteurStock}quantiteSolidaire\" /> " +
						"<span class=\"facture-detail-unite-span\">{categorie.produits.produit.uniteSolidaire}</span>" +
					"</span>" +
				"</td>" +
				"<td class=\"td-edt\">" +
					"<span data-compteur-stock=\"{categorie.produits.produit.compteurStock}\" data-id-categorie=\"{categorie.cproId}\" data-id-nom-produit=\"{categorie.produits.produit.nproId}\" class=\"ui-helper-hidden affiche-detail-facture com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-produit\" title=\"Supprimer\">" +
						"<span class=\"ui-icon ui-icon-closethick\"></span>" +
					"</span>" +
				"</td>" +
			"</tr>" +
			"<!-- END categorie.produits.produit -->" +
			"<!-- END categorie.produits -->" +
		"<!-- END categorie -->";
	
	this.categorieDetailFacture =
		"<tr id=\"cat-{cproId}\">" +
			"<th colspan=\"6\" class=\"ui-widget-header\">{cproNom}</th>" +
		"</tr>";
	
	this.produitDetailFacture = 
		"<tr id=\"stock-{compteurStock}\" class=\"cat-{cproId} pro-{nproId} produit-detail-facture\" data-compteur-stock=\"{compteurStock}\" data-id-nom-produit=\"{nproId}\" >" +
			"<td>{nproNumero}</td>" +
			"<td>{nproNom}</td>" +
			"<td class=\"produit-detail-facture-stock\">" +
				"<input type=\"text\" value=\"\" class=\"com-numeric com-input-text ui-widget-content ui-corner-all\" maxlength=\"12\" size=\"3\" id=\"produits{compteurStock}quantite\" /> <span class=\"facture-detail-unite-span\">{unite}</span>" +
			"</td>" +
			"<td class=\"produit-detail-facture-montant\">" +
				"<input type=\"text\" value=\"\" class=\"montant-produit com-numeric com-input-text ui-widget-content ui-corner-all\" maxlength=\"12\" size=\"3\" id=\"produits{compteurStock}montant\" /> {sigleMonetaire}" +
			"</td>" +
			"<td class=\"produit-detail-facture-stock-solidaire\">" +
				"<input type=\"text\" value=\"\" class=\"com-numeric com-input-text ui-widget-content ui-corner-all\" maxlength=\"12\" size=\"3\" id=\"produits{compteurStock}quantiteSolidaire\" /> <span class=\"facture-detail-unite-span\">{uniteSolidaire}</span>" +
			"</td>" +
			"<td class=\"td-edt\">" +
				"<span data-compteur-stock=\"{compteurStock}\" data-id-categorie=\"{cproId}\" data-id-nom-produit=\"{nproId}\" class=\"com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-supprimer-produit\" title=\"Supprimer\">" +
					"<span class=\"ui-icon ui-icon-closethick\"></span>" +
				"</span>" +
			"</td>" +
		"</tr>";
	
	this.uniteDetailFactureSelect = 
		"<select class=\"facture-detail-unite\" id=\"produits{compteurStock}unite{type}\">" +
			"<!-- BEGIN mLotUnite -->" +
			"<option value=\"{mLotUnite.unite}\">{mLotUnite.unite}</option>" +
			"<!-- END mLotUnite -->" +
		"</select>";
	
	this.dialogSupprimerFacture =
		"<div title=\"Supprimer la facture\">" +
			"<p>Voulez-vous supprimer cette facture ?</p>" +
		"</div>";	
	
	this.rechercheListeAchat = 
		"<div id=\"contenu\">" +
			"<div class=\"com-barre-menu-2 ui-helper-hidden\">" +
				"<button class=\"ui-state-default ui-corner-top com-button\" id=\"btn-retour\">" +
					"<span class=\"com-float-left ui-icon ui-icon-arrowthick-1-w\"></span>Retour" +
				"</button>" +
			"</div>" +
			"<div class=\"com-widget-header ui-widget ui-widget-header ui-corner-all\">" +
				"Les Achats" +
			"</div>" +
			"<div id=\"form-recherche-liste-achat\" class=\"com-center com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
				"Entre le <input type=\"text\" value=\"{dateDebut}\" id=\"dateDebut\" class=\"com-input-text ui-widget-content ui-corner-all\">" +
				" et le <input type=\"text\" value=\"{dateFin}\" id=\"dateFin\" class=\"com-input-text ui-widget-content ui-corner-all\"> " +
				"Marché " +
				"<select id=\"idMarche\" >" +
					"<option value=\"0\" >Tout</option>" +
					"<option value=\"-1\" >Hors Marché</option>" +
					"<!-- BEGIN listeMarche -->" +
					"<option value=\"{listeMarche.id}\">N° {listeMarche.numero}</option>" +
					"<!-- END listeMarche -->" +
				"</select>" +
				"<button type=\"button\" id=\"btn-rechercher-liste-achat\" class=\"ui-state-default ui-corner-all com-button com-center\">Rechercher</button>" +
			"</div>" +
			"<div id=\"liste-achat\" class=\"com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all\">" +
			"</div>" +
		"</div>";
	
	this.listeAchat = 
		"<table class=\"com-table\">" +
			"<thead>" +
				"<tr class=\"ui-widget ui-widget-header\">" +
					"<th class=\"com-table-th-debut com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Date</th>" +
					"<th class=\"com-table-th-med com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Marché</th>	" +
					"<th class=\"com-table-th-med com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>N°</th>	" +
					"<th class=\"com-table-th-med com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Compte</th>	" +
					"<th class=\"com-table-th-med com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Nom</th>	" +
					"<th class=\"com-table-th-med com-center com-underline-hover com-cursor-pointer\"><span class=\"ui-icon span-icon\"></span>Prénom</th>	" +
					"<th class=\"com-table-th-med com-center\">Montant</th>	" +
					"<th class=\"com-table-th-fin\"></th>" +
				"</tr>" +
			"</thead>" +
			"<tbody>" +
				"<!-- BEGIN listeAchat -->" +
				"<tr>" +
					"<td class=\"com-table-td-debut\"><span class=\"ui-helper-hidden\">{listeAchat.dateTri}</span>{listeAchat.date}</td>" +
					"<td class=\"com-table-td-med\">{listeAchat.comNumero}</td>" +
					"<td class=\"com-table-td-med\">{listeAchat.adhNumero}</td>" +
					"<td class=\"com-table-td-med\">{listeAchat.cptLabel}</td>" +
					"<td class=\"com-table-td-med\">{listeAchat.adhNom}</td>" +
					"<td class=\"com-table-td-med\">{listeAchat.adhPrenom}</td>" +
					"<td class=\"com-table-td-med com-text-align-right\">{listeAchat.montant} {sigleMonetaire}</td>" +
					"<td class=\"com-table-td-fin\">" +
						"<span data-id-achat=\"{listeAchat.opeId}\" data-id-adherent=\"{listeAchat.adhId}\" class=\"btn-afficher-achat com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all\">" +
							"<span class=\"ui-icon ui-icon-triangle-1-e\"></span>" +
						"</span>" +
					"</td>" +								
				"</tr>" +
				"<!-- END listeAchat -->" +
			"</tbody>" +
		"</table>";
	
	this.listeAchatNumeroMarche = "<span class=\"ui-helper-hidden\">{comNumero}</span>N°{comNumero}";
	
	this.listeAchatVide = "<p id=\"texte-liste-vide\">Aucun Achat.</p>";
}
;function GestionListeCommandeVue(pParam) {	
	this.construct = function(pParam) {
		$.history( {'vue':function() {GestionListeCommandeVue(pParam);}} );
		var that = this;
		$.post(	"./index.php?m=GestionCommande&v=ListeCommande", 
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		if(lResponse.listeCommande.length > 0 && lResponse.listeCommande[0].comId != null) {
		
			var lListeCommande = new Object;
			lListeCommande.commande = new Array();
			
				$(lResponse.listeCommande).each(function() {
					var lCommande = new Object();
					lCommande.id = this.comId;
					lCommande.numero = this.comNumero;
					lCommande.nom = this.comNom;
					

					lCommande.jourFinReservation = jourSem(this.comDateFinReservation.extractDbDate());
					lCommande.dateFinReservation = this.comDateFinReservation.extractDbDate().dateDbToFr();
					lCommande.heureFinReservation = this.comDateFinReservation.extractDbHeure();
					lCommande.minuteFinReservation = this.comDateFinReservation.extractDbMinute();
					

					lCommande.jourMarcheDebut = jourSem(this.comDateMarcheDebut.extractDbDate());
					lCommande.dateMarcheDebut = this.comDateMarcheDebut.extractDbDate().dateDbToFr();
					lCommande.heureMarcheDebut = this.comDateMarcheDebut.extractDbHeure();
					lCommande.minuteMarcheDebut = this.comDateMarcheDebut.extractDbMinute();
					
					lCommande.heureMarcheFin = this.comDateMarcheFin.extractDbHeure();
					lCommande.minuteMarcheFin = this.comDateMarcheFin.extractDbMinute();
	
					lListeCommande.commande.push(lCommande);
				});
			
			var lTemplate = lGestionCommandeTemplate.listeCommandePage;
			$('#contenu').replaceWith(that.affect($(lTemplate.template(lListeCommande))));
		} else {
			$('#contenu').replaceWith(that.affect($(lGestionCommandeTemplate.listeCommandeVide)));
		}
	};
	
	this.affect = function(pData) {
		pData = this.affectLienEditer(pData);
		pData = this.affectLienListeCommandeArchive(pData);
		pData = this.affectNouveauMarche(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectNouveauMarche = function(pData) {
		pData.find('#btn-nv-marche').click(function() {
			AjoutCommandeVue();
		});
		return pData;
	};
	
	this.affectLienEditer = function(pData) {
		pData.find('.btn-marche').click(function() {
			EditerCommandeVue( {"id_marche":$(this).attr('id')});
		});
		return pData;
	};
		
	this.affectLienListeCommandeArchive = function(pData) {
		pData.find('#lien-marche-archive').click(function() {
			ListeCommandeArchiveVue();
		});
		return pData;
	};
	
	this.construct(pParam);
};function StockProduitVue(pParam) {
	this.construct = function(pParam) {
		$.history( {'vue':function() {StockProduitVue(pParam);}} );
		var that = this;
		pParam.fonction ="detailFerme";
		$.post(	"./index.php?m=GestionCommande&v=StockProduit", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {	
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}	
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lHtml = '';
		if(lResponse.listeProduit.length > 0 && lResponse.listeProduit[0].cproNom != null) {
			var lIdCategorie = lResponse.listeProduit[0].cproId;
			var lNomCategorie = lResponse.listeProduit[0].cproNom;
			var lStockTrie = [];
			var lProduits = [];
			lResponse.ferNom = lResponse.listeProduit[0].ferNom;
			$(lResponse.listeProduit).each(function() {
				if(this.stoQteQuantite != null)  {
					this.stoQteQuantiteTotal = (parseFloat(this.stoQteQuantite) + parseFloat(this.stoQteQuantiteSolidaire)).toFixed(2).nombreFormate(2,',',' ');
					
					this.stoQteQuantiteAffiche = this.stoQteQuantite.nombreFormate(2,',',' ');
					this.stoQteQuantite = this.stoQteQuantite.nombreFormate(2,',','');
					
					this.stoQteQuantiteSolidaireAffiche = this.stoQteQuantiteSolidaire.nombreFormate(2,',',' ');
					this.stoQteQuantiteSolidaire = this.stoQteQuantiteSolidaire.nombreFormate(2,',','');
					this.btnEdition = lGestionCommandeTemplate.listeStockProduitFermeDetailBtnEdition.template({stoQteId:this.stoQteId});
				} else {
					this.stoQteQuantiteTotal = '0'.nombreFormate(2,',',' ');
					this.stoQteQuantiteSolidaire = '0'.nombreFormate(2,',',' ');
					this.stoQteQuantiteSolidaireAffiche = this.stoQteQuantiteSolidaire;
					this.stoQteQuantite = '0'.nombreFormate(2,',',' ');
					this.stoQteQuantiteAffiche = this.stoQteQuantite;
					this.stoQteUnite = '';
					this.btnEdition =  '';
				}
				
				if(lIdCategorie != this.cproId) {
					lStockTrie.push({
							cproNom:lNomCategorie,
							produits:lProduits
						});			
					lIdCategorie = this.cproId;
					lNomCategorie = this.cproNom;
					lProduits = [];
				} 
				
				lProduits.push(this);
			});
			// Ajout de la dernière catégorie
			lStockTrie.push({
				cproNom:lNomCategorie,
				produits:lProduits
			});	
			
			lResponse.listeProduit = lStockTrie;
			lHtml = lGestionCommandeTemplate.listeStockProduitFermeDetail.template(lResponse);
			//$('#contenu').replaceWith(that.affect($(lTemplate.template(lResponse))));
		} else {
			lHtml = lGestionCommandeTemplate.listeStockProduitFermeDetailVide;
		//	$('#contenu').replaceWith(that.affect($(lGestionCommandeTemplate.listeFermeVide)));
		}
		$('#contenu').replaceWith(that.affect($(lGestionCommandeTemplate.listeStockProduitFermeEntete.template({detail:lHtml}))));
		
	};
	
	this.affect = function(pData) {
		/*pData = this.affectTri(pData);
		pData = this.affectRecherche(pData);
		pData = this.affectDetailFerme(pData);	*/	
		pData = this.affectEdition(pData);
		pData = this.affectRetour(pData);
		pData = this.affectCalculTotal(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData,{allowNegatives:true});
		return pData;
	};
	
	this.affectRetour = function(pData) {
		pData.find('#btn-retour').click(StockProduitListeFermeVue);
		return pData;
	};
	
	this.affectEdition = function(pData) {
		var that = this;
		pData.find('.btn-modif, .btn-annuler').click(function() {
			var lId = $(this).data("id");
			$('.produit-' + lId +', #btn-modif-'  + lId + ', #btn-annuler-'  + lId + ', #btn-check-' + lId).toggle();
		});
		pData.find('.btn-check').click(function() {
			that.enregistrer($(this).data("id"));
		});
		return pData;
	};

	this.enregistrer = function(pId) {
		var lVo = new StockQuantiteVO();
		lVo.id = pId;
		lVo.quantite = $('#' + pId + '-quantite').val().numberFrToDb();
		lVo.quantiteSolidaire = $('#' + pId + '-quantiteSolidaire').val().numberFrToDb();
		
		var lValid = new StockQuantiteValid();
		var lVr = lValid.validUpdate(lVo);
				
		Infobulle.init(); // Supprime les erreurs
		if(lVr.valid) {
			lVo.fonction = "modifierStock";
			$.post(	"./index.php?m=GestionCommande&v=StockProduit", "pParam=" + $.toJSON(lVo),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse && lResponse.valid) {
							// Maj des champs
							var lQte = parseFloat(lVo.quantite);
							if(isNaN(lQte) || lQte == '') {
								lQte = 0;
							}
							var lQteSolidaire = parseFloat(lVo.quantiteSolidaire);
							if(isNaN(lQteSolidaire) || lQteSolidaire == '') {
								lQteSolidaire = 0;
							}
							
							$('#label-quantite-total-' + pId).text(( lQte + lQteSolidaire ).toFixed(2).nombreFormate(2,',',' '));
							$('#label-quantite-' + pId ).text(lVo.quantite.nombreFormate(2,',',' '));
							$('#label-quantite-solidaire-' + pId).text(lVo.quantiteSolidaire.nombreFormate(2,',',' '));
							$('.produit-' + pId +', #btn-modif-'  + pId + ', #btn-annuler-'  + pId + ', #btn-check-' + pId).toggle();
							
							// Message de confirmation
							var lMsg = new TemplateVR();
							lMsg.valid = false;
							lMsg.log.valid = false;
							var erreur = new VRerreur();
							erreur.code = ERR_361_CODE;
							erreur.message = ERR_361_MSG;
							lMsg.log.erreurs.push(erreur);
							Infobulle.generer(lMsg, '');
						} else {
							Infobulle.generer(lResponse, pId + '-');
						}
					}
			},"json");
		} else {
			Infobulle.generer(lVr, pId + '-');
		}
	};
	
	this.affectCalculTotal = function(pData) {
		pData.find('.com-ligne-hover :input').keyup(function() {
			var lId = $(this).data("id");
			
			var lQte = parseFloat($('#' + lId + '-quantite').val().numberFrToDb());
			if(isNaN(lQte) || lQte == '') {
				lQte = 0;
			}
			var lQteSolidaire = parseFloat($('#' + lId + '-quantiteSolidaire').val().numberFrToDb() );
			if(isNaN(lQteSolidaire) || lQteSolidaire == '') {
				lQteSolidaire = 0;
			}
			
			$('#label-quantite-total-edit-' + lId).text( ( lQte + lQteSolidaire ).toFixed(2).nombreFormate(2,',',' '));
		});
		return pData;
	};
		
	this.construct(pParam);
};;function ResumeMarcheVue(pParam) {	
	this.mIdMarche = 0;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {ResumeMarcheVue(pParam);}} );
		var that = this;
		pParam.fonction = 'afficher';
		$.post(	"./index.php?m=GestionCommande&v=ResumeMarche", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(pResponse) {		
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.resumeMarche;

		pResponse.infoMarcheSelected = '';
		pResponse.listeReservationSelected = '';
		pResponse.listeAchatSelected = '';
		pResponse.resumeMarcheSelected = 'ui-state-active';
		
		pResponse.editerMenu = lGestionCommandeTemplate.editerMarcheMenu.template(pResponse);
		
		pResponse.sigleMonetaire = gSigleMonetaire;
		
		var lTotal = 0;
		var lTotalSolidaire = 0;
		
		$(pResponse.infoCommande).each(function() {
			that.mIdMarche = this.comId;
			
			if(this.proType == 1) {
				this.nproNom += " (Solidaire)";
			} else if(this.proType == 2) {
				this.nproNom += " (Abonnement)" ;
			}
			
			if(this.stoQuantite == null) { this.stoQuantite = 0;}
			if(this.opeMontant == null) { this.opeMontant = 0; }
			if(this.stoQuantiteLivraison == null) { this.stoQuantiteLivraison = 0; }
			if(this.opeMontantLivraison == null) { this.opeMontantLivraison = 0; }
			if(this.stoQuantiteSolidaire == null) { this.stoQuantiteSolidaire = 0; }
			if(this.stoQuantiteVente == null) { this.stoQuantiteVente = 0; }
			if(this.opeMontantVente == null) { this.opeMontantVente = 0; }
			if(this.stoQuantiteVenteSolidaire == null) { this.stoQuantiteVenteSolidaire = 0; }
			if(this.opeMontantVenteSolidaire == null) { this.opeMontantVenteSolidaire = 0; }
			
			lTotal -= parseFloat(this.opeMontantLivraison);
			lTotal += parseFloat(this.opeMontantVente);
			lTotalSolidaire += parseFloat(this.opeMontantVenteSolidaire);
			
			this.stoQuantite = this.stoQuantite.nombreFormate(2,',',' ');
			this.opeMontant = this.opeMontant.nombreFormate(2,',',' ');
			this.stoQuantiteLivraison = this.stoQuantiteLivraison.nombreFormate(2,',',' ');
			this.opeMontantLivraison = this.opeMontantLivraison.nombreFormate(2,',',' ');
			this.stoQuantiteSolidaire = this.stoQuantiteSolidaire.nombreFormate(2,',',' ');
			this.stoQuantiteVente = this.stoQuantiteVente.nombreFormate(2,',',' ');
			this.opeMontantVente = this.opeMontantVente.nombreFormate(2,',',' ');
			this.stoQuantiteVenteSolidaire = this.stoQuantiteVenteSolidaire.nombreFormate(2,',',' ');
			this.opeMontantVenteSolidaire = this.opeMontantVenteSolidaire.nombreFormate(2,',',' ');
		});
		
		pResponse.total = lTotal.nombreFormate(2,',',' ');
		pResponse.totalSolidaire = lTotalSolidaire.nombreFormate(2,',',' ');
		pResponse.numero = pResponse.detailMarche.numero;
		
		$('#contenu').replaceWith(that.affect($(lTemplate.template(pResponse))));
	};
	
	this.affect = function(pData) {
		pData = this.affectMenu(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectMenu = function(pData) {
		var that = this;
		pData.find('#btn-information-marche').click(function() {
			EditerCommandeVue(that.mParam);
		});		
		pData.find("#btn-liste-achat-resa").click(function() {
			ListeAchatMarcheVue({id_marche:that.mIdMarche});
		});
		pData.find("#btn-liste-resa").click(function() {
			ListeReservationMarcheVue({id_marche:that.mIdMarche});
		});
		pData.find("#btn-resume-marche").click(function() {
			ResumeMarcheVue({id_marche:that.mIdMarche});
		});
		return pData;
	};
		
	this.construct(pParam);
};function AjoutCommandeVue(pParam) {
	
	this.mListeFerme = {};
	this.mProduits = [];
	this.mMarche = new MarcheVO();
	this.mAffichageMarche = [];
	this.mNbProduit = 0;
	this.mEditionLot = false;
	this.mIdLot = 0;
	this.mIdLotAbonnement = 0;
	this.mEtapeCreationMarche = 0;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {AjoutCommandeVue(pParam);}} );
		var lParam = {};
		lParam = $.extend(lParam, pParam);		
		//var lParam = pParam;
		if(pParam && pParam.fonction && pParam.fonction == "dupliquer") {
			lParam.fonction = "dupliquer";
		} else {
			lParam.fonction = "afficher";
		}
		
		var that = this;
		$.post(	"./index.php?m=GestionCommande&v=AjoutCommande", "pParam=" + $.toJSON(lParam),
				function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {	
								if(pParam && pParam.vr) {
									Infobulle.generer(pParam.vr,'');
								}
								delete that.mProduits;
								that.mProduits = [];
								if(lParam.fonction == "dupliquer") {
									that.afficherDupliquer(lResponse);
								} else {
									that.afficher(lResponse);
								}
							} else {
								Infobulle.generer(lResponse,'');
							}				
						}
					},"json"
				);		
	};
	
	this.afficher = function(pResponse) {
		var that = this;
		
		this.mListeFerme = pResponse.listeFerme;
		
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.formulaireAjoutMarche;
		$('#contenu').replaceWith( that.affect($(lTemplate.template(pResponse))));
	};
	
	this.affect = function(pData) {
		pData = this.affectDialogAjoutProduit(pData);
		pData = this.affectControleDatepicker(pData);
		pData = gCommunVue.comNumeric(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.afficherDupliquer = function(pResponse) {
		var that = this;
		$.each(pResponse.marche.produits, function() {
			if(this.id) {
				var lIdFerme = this.ferId;
				var lIdCategorie = this.idCategorie;
				var lIdNomProduit = this.idNom;
				var lTypeProduit = this.type;
				
				var lStock = -1;
				var lStockAffichage = "";
				if(parseFloat(this.stockInitial) != -1 && lTypeProduit == 2) {
					lStock = this.stockInitial;
					lStockAffichage = this.stockInitial.nombreFormate(2,',',' ');
				}
				var lQteMax = -1;
				//var lQteMaxAffichage = "";
				if(parseFloat(this.qteMaxCommande) != -1 && lTypeProduit == 2) {
					lQteMax = this.qteMaxCommande;
					//lQteMaxAffichage = this.qteMaxCommande.nombreFormate(2,',',' ');
				}
				var lUnite = this.unite;
								
				var lProduit = {nproId:lIdNomProduit,
						nproNom:this.nom,
						nproStock:lStockAffichage,
						nproQteMax:lQteMax,
						nproUnite:lUnite,
						type:lTypeProduit,
						modelesLot:[],
						modelesLotReservation:[]};
				
				// Préparation du MarcheVO		
				var lVoProduit = new ProduitMarcheVO();
				lVoProduit.idNom = lIdNomProduit;
				lVoProduit.unite = lUnite;
				lVoProduit.qteMaxCommande = lQteMax;
				lVoProduit.qteRestante = lStock;
				lVoProduit.type = lTypeProduit;
				
				$.each(this.lots,function() {
					// Récupération des lots
					var lIdLot = this.id;
					var lVoLot = {	id:lIdLot,
									taille:this.taille.nombreFormate(2,',',' '),
									prix:this.prix.nombreFormate(2,',',' '),
									unite:lUnite,
									selected:true,
									modele:true};
					
					//lProduit.modelesLot[lIdLot] = lVoLot;
					
					if(this.reservation) {
						lProduit.modelesLotReservation[lIdLot] = lVoLot;
					} else {
						lProduit.modelesLot[lIdLot] = lVoLot;
					}
					
					
					// Récupération des lots
					var lVoLot = new DetailCommandeVO();
					lVoLot.id = lIdLot;
					lVoLot.taille = this.taille;
					lVoLot.prix = this.prix;
					
					lVoProduit.lots.push(lVoLot);	
				});
				
				if(!that.mAffichageMarche[lIdFerme]) {
					that.mAffichageMarche[lIdFerme] = {	ferId:lIdFerme,
														ferNom:this.ferNom,
														categories:[]};
				}
				
				if(!that.mAffichageMarche[lIdFerme].categories[lIdCategorie]){
					that.mAffichageMarche[lIdFerme].categories[lIdCategorie] = {
							cproId:lIdCategorie,
							cproNom:this.cproNom,
							produits:[],
							produitsAbonnement:[]};
				}
	
				lVoProduit.idFerme = lIdFerme;
				lVoProduit.idCategorie = lIdCategorie;
				
				if(lTypeProduit == 2) {					
					that.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdNomProduit] = lProduit;
					that.mMarche.produitsAbonnement[lIdNomProduit] = lVoProduit;
				} else {
					that.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdNomProduit] = lProduit;
					that.mMarche.produits[lIdNomProduit] = lVoProduit;					
				}
			
				that.mNbProduit++;
			}
		});
	
		this.mListeFerme = pResponse.listeFerme;
		
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.formulaireAjoutMarche;
		$('#contenu').replaceWith( that.affectDupliquer($(lTemplate.template(pResponse))));
	};
	
	this.affectDupliquer = function(pData) {
		pData = this.affectDialogAjoutProduit(pData);
		pData = this.affectControleDatepicker(pData);
		pData = this.majListeFerme(pData);
		pData = gCommunVue.comNumeric(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectDialogAjoutProduit = function(pData) {
		var that = this;
		pData.find("#btn-ajout-produit").click(function() {
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			var lTemplate = lGestionCommandeTemplate.dialogAjoutProduitAjoutMarche;
			
			var lData = {
				listeFerme:that.mListeFerme
			};

			$(that.affectAjoutProduitSelectFerme($(lTemplate.template(lData)))).dialog({			
				autoOpen: true,
				modal: true,
				draggable: true,
				resizable: false,
				width:900,
				position: "top",
				buttons: {
					'Ajouter': function() {
						that.ajouterProduit($(this));
					},
					'Annuler': function() {
						that.mEditionLot = false;
						$(this).dialog('close');
					}
				},
				close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
			});
			
		});
		return pData;
	};
	
	this.affectAjoutProduitSelectFerme = function(pData) {
		var that = this;
		pData.find("#pro-idFerme select").change(function() {
			var lId = $(this).val();
			$("#pro-idCategorie select, #pro-idProduit select").prop("disabled",true).selectOptions("0");
			$("#prix-stock-produit").replaceWith("<div id=\"prix-stock-produit\"></div>");
			if(lId > 0) {
				var lParam = {fonction:"listeProduit",id:lId};
				$.post(	"./index.php?m=GestionCommande&v=AjoutCommande", "pParam=" + $.toJSON(lParam),
					function (lResponse) {		
						if(lResponse) {
							if(lResponse.valid) {
								Infobulle.init(); // Supprime les erreurs
								
								if(lResponse.listeProduit.length > 0 && lResponse.listeProduit[0].nproId != null) {
								
									that.mProduits = [];
									var lIdCategorie = 0;
									var lListeCategorie = [];
									$.each(lResponse.listeProduit,function() {
										if(that.mProduits[this.cproId]) {
											that.mProduits[this.cproId].listeProduit.push(this);
										} else {
											that.mProduits[this.cproId] = {nom:this.cproNom,listeProduit:[this]};
										}
										if(lIdCategorie != this.cproId) {
											lListeCategorie.push({cproId:this.cproId,cproNom:this.cproNom});
											lIdCategorie = this.cproId;
										}
									});
									
	
									var lGestionCommandeTemplate = new GestionCommandeTemplate();
									var lTemplate = lGestionCommandeTemplate.ajoutProduitSelectCategorie;
									
									$("#pro-idCategorie").replaceWith(that.affectAjoutProduitSelectCategorie($(lTemplate.template({listeCategorie:lListeCategorie}))));
									
								} else {
									// Message d'information
									var lVr = new TemplateVR();
									lVr.valid = false;
									lVr.log.valid = false;
									var erreur = new VRerreur();
									erreur.code = ERR_332_CODE;
									erreur.message = ERR_332_MSG;
									lVr.log.erreurs.push(erreur);
									Infobulle.generer(lVr,'');
								}
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
					},"json"
				);
			} 
						
		});
		return pData;
	};
	
	this.affectAjoutProduitSelectCategorie = function(pData) {
		var that = this;
		pData.find("select").change(function() {
			var lId = $(this).val();
			$("#pro-idProduit select").prop("disabled",true).selectOptions("0");
			$("#prix-stock-produit").replaceWith("<div id=\"prix-stock-produit\"></div>");
			if(lId > 0) {
				
				var lGestionCommandeTemplate = new GestionCommandeTemplate();
				var lTemplate = lGestionCommandeTemplate.ajoutProduitSelectProduit;
				
				$("#pro-idProduit").replaceWith(that.affectAjoutProduitSelectProduit($(lTemplate.template(that.mProduits[lId]))));
				
			}		
		});
		return pData;
	};
	
	this.affectAjoutProduitSelectProduit = function(pData) {
		var that = this;
		pData.find("select").change(function() {
			var lId = $(this).val();
			if(lId > 0) {
				
				if(!that.mMarche.produits[lId] || !that.mMarche.produitsAbonnement[lId]) {
					var lParam = {fonction:"listeModeleLot",idNomProduit:lId};
					$.post(	"./index.php?m=GestionCommande&v=AjoutCommande", "pParam=" + $.toJSON(lParam),
						function (lResponse) {		
							if(lResponse) {
								if(lResponse.valid) {
									Infobulle.init(); // Supprime les erreurs
									if((!that.mMarche.produitsAbonnement[lId] && lResponse.detailAbonnement.idNomProduit == lId) || !that.mMarche.produits[lId]) {
										var lGestionCommandeTemplate = new GestionCommandeTemplate();
										var lData = {sigleMonetaire:gSigleMonetaire};
										
										if($(lResponse.modelesLot).length > 0) {
											lData.modelesLot = [];
											$.each(lResponse.modelesLot, function() {
												if(this.mLotId != null) {
													this.id = this.mLotId;
													this.quantite = this.mLotQuantite.nombreFormate(2,',',' ');
													this.unite = this.mLotUnite;
													this.prix = this.mLotPrix.nombreFormate(2,',',' ');
													this.sigleMonetaire = gSigleMonetaire;
													lData.modelesLot.push(this);
													lData.unite = this.mLotUnite;
												}
											});	
										}
										
										if(lResponse.detailAbonnement.idNomProduit == lId) { // Si le produit existe en abonnement
											lData.modelesLotAbonnement = [];
											lData.modelesLotAbonnementReservation = [];
											lData.uniteAbonnement = lResponse.detailAbonnement.unite;
											$.each(lResponse.detailAbonnement.lots, function() {
												
												//this.id = this.id;
												this.quantite = this.taille.nombreFormate(2,',',' ');
												this.unite = lData.uniteAbonnement;
												this.prix = this.prix.nombreFormate(2,',',' ');
												this.sigleMonetaire = gSigleMonetaire;
												
												if(this.reservation) {		
													lData.modelesLotAbonnementReservation.push(this);
												} else {											
													lData.modelesLotAbonnement.push(this);
												}
												
											});
										}
										
										if(that.mMarche.produits[lId]) { // Le produit existe en normal ou solidaire
											lData.typeNormalSelected = "disabled=\"disabled\"";
											lData.typeSolidaireSelected = "disabled=\"disabled\"";
											lData.typeAbonnementSelected = "checked=\"checked\"";
											
											lData.visibleSolidaire = "ui-helper-hidden";
											lData.visibleNormal = "ui-helper-hidden";
											lData.visibleAbonnement = "";
											
										} else if(that.mMarche.produitsAbonnement[lId]) { // Le produit existe déjà en abonnement
											lData.typeNormalSelected = "checked=\"checked\"";
											lData.typeAbonnementSelected = "disabled=\"disabled\"";		
											
											lData.visibleSolidaire = "";
											lData.visibleNormal = "";
											lData.visibleAbonnement = "ui-helper-hidden";									
										} else { // Le produit n'est pas encore dans le marche
											lData.typeNormalSelected = "checked=\"checked\"";
											
											lData.visibleSolidaire = "";
											lData.visibleNormal = "";
											lData.visibleAbonnement = "ui-helper-hidden";		
										}
	
										if(lResponse.detailAbonnement.idNomProduit == lId) { // Si le produit existe en abonnement
											lData.stockInitialAbonnement = lResponse.detailAbonnement.stockInitial.nombreFormate(2,',',' ');
											
											if(parseFloat(lResponse.detailAbonnement.max) == -1) {
												lData.qMaxAbonnement = "Pas de limite";
											} else {
												lData.qMaxAbonnement = lResponse.detailAbonnement.max.nombreFormate(2,',',' ') + " " + lData.uniteAbonnement;
											}
											lData.qMaxAbonnementValue = lResponse.detailAbonnement.max;
											
											lData.typeProduitAbonnement = lGestionCommandeTemplate.typeProduitAbonnementAjoutProduit.template(lData);
											lData.divLotAbonnement = lGestionCommandeTemplate.prixAbonnementAjoutProduit.template(lData);
											lData.divStockAbonnement = lGestionCommandeTemplate.stockAbonnementAjoutProduit.template(lData);
										}
										
										
										lData.divTypeProduit = lGestionCommandeTemplate.typeProduitAjoutProduit.template(lData);
										lData.divLot = lGestionCommandeTemplate.prixAjoutProduit.template(lData);
										lData.divStock = lGestionCommandeTemplate.stockAjoutProduit.template(lData);
										
										
										var lTemplate = lGestionCommandeTemplate.prixEtStockAjoutProduit;
										
										$("#prix-stock-produit").replaceWith(that.affectPrixEtStock($(lTemplate.template(lData))));
											
									} else {
										var lVR = new Object();
										var erreur = new VRerreur();
										erreur.code = ERR_211_CODE;
										erreur.message = ERR_211_MSG;
										lVR.valid = false;
										lVR.log = new VRelement();
										lVR.log.valid = false;
										lVR.log.erreurs.push(erreur);
										Infobulle.generer(lVR,"");
									}
								} else {
									Infobulle.generer(lResponse,'');
								}
							}
						},"json"
					);
				} else {
					var lVR = new Object();
					var erreur = new VRerreur();
					erreur.code = ERR_211_CODE;
					erreur.message = ERR_211_MSG;
					lVR.valid = false;
					lVR.log = new VRelement();
					lVR.log.valid = false;
					lVR.log.erreurs.push(erreur);
					Infobulle.generer(lVR,"");
				}
			} else {
				$("#prix-stock-produit").replaceWith($("<div id=\"prix-stock-produit\">"));
			}			
		});
		return pData;
	};
	
	this.affectPrixEtStock = function(pData) {
		pData = this.affectAjoutLotGestion(pData);
		pData = this.affectAjoutLotAbonnementGestion(pData);
		pData = this.affectAjoutLot(pData);
		pData = this.affectLimiteStock(pData);
		pData = this.affectChangeTypeProduit(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		return pData;		
	};
	
	this.affectChangeTypeProduit = function(pData) {
		var that = this;
		pData.find(':input[name=typeProduit]').click(function() {
			return that.testChangeTypeProduit();
		}).change(function() {
			that.changeTypeProduit($(':input[name=typeProduit]:checked').val());
		});
		return pData;
	};
	
	this.testChangeTypeProduit = function() {
		if(this.mEditionLot) {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_112_CODE;
			erreur.message = ERR_112_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
			return false;
		}
		return true;
	};
	
	this.changeTypeProduit = function(pTypeProduit) {
		if(!this.mEditionLot) {
			$(".pro-detail").hide();
			if(pTypeProduit == 0 ) {
				$("#pro-normal,#id-stock").show();
			} else if (pTypeProduit == 1 ) {
				$("#pro-normal").show();
			} else {
				$("#pro-abonnement").show();
			}
		} else {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_112_CODE;
			erreur.message = ERR_112_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
			return false;
		}
	};
	
	this.affectLimiteStock = function(pData) {
		pData.find(':input[name=pro-stock-choix]').change(function() {
			if($(':input[name=pro-stock-choix]:checked').val() == 1) {	
				$(":input[name=pro-stock]").prop("disabled", false).val("");
			} else {
				$(":input[name=pro-stock]").prop("disabled", true).val("");
			}
		});
		pData.find(':input[name=pro-qte-max-choix]').change(function() {
			if($(':input[name=pro-qte-max-choix]:checked').val() == 1) {				
				$(":input[name=pro-qte-max]").prop("disabled", false).val("");
			} else {
				$(":input[name=pro-qte-max]").prop("disabled", true).val("");
			}
		});
		return pData;
	};
	
	this.affectAjoutLot = function(pData) {
		var that = this;
		pData.find('#btn-ajout-lot').click(function() {that.ajoutLot(1);});
		pData.find('#table-pro-prix input').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLot(1);
			}
		});
		pData.find('#btn-ajout-lot-abonnement').click(function() {that.ajoutLot(2);});
		pData.find('#table-pro-abonnement-prix input').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLot(2);
			}
		});	
		return pData;		
	};
	
	this.ajoutLot = function(pType) {
		var lVo = new ModeleLotVO();
		if(pType == 1) {	
			lVo.quantite = $(":input[name=lot-quantite]").val().numberFrToDb();
			lVo.unite = $(":input[name=lot-unite]").val();
			lVo.prix = $(":input[name=lot-prix]").val().numberFrToDb();
		} else {
			lVo.quantite = $(":input[name=lot-abo-quantite]").val().numberFrToDb();
			lVo.unite = $("#pro-abo-lot-unite").text();
			lVo.prix = $(":input[name=lot-abo-prix]").val().numberFrToDb();
		}
		
		var lValid = new ModeleLotValid();
		var lVr = lValid.validAjout(lVo);
		
		if(lVr.valid) {	
			Infobulle.init();
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			if(pType == 1) {			
				var lTemplate = lGestionCommandeTemplate.modeleLot;				
				this.mIdLot--;
				lVo.id = this.mIdLot;
				lVo.sigleMonetaire = gSigleMonetaire;
				lVo.quantite = lVo.quantite.nombreFormate(2,',',' ');
				lVo.prix = lVo.prix.nombreFormate(2,',',' ');		
				$("#lot-liste").append(this.affectLot($(lTemplate.template(lVo))));
				
				$(":input[name=lot-quantite], :input[name=lot-unite], :input[name=lot-prix]").val("");
			
			} else {
				var lTemplate = lGestionCommandeTemplate.modeleLotAbonnement;				
				this.mIdLotAbonnement--;
				lVo.id = this.mIdLotAbonnement;
				lVo.sigleMonetaire = gSigleMonetaire;
				lVo.quantite = lVo.quantite.nombreFormate(2,',',' ');
				lVo.prix = lVo.prix.nombreFormate(2,',',' ');		
				$("#lot-liste-abonnement").append(this.affectLotAbonnement($(lTemplate.template(lVo))));
				
				$(":input[name=lot-abo-quantite], :input[name=lot-abo-unite], :input[name=lot-abo-prix]").val("");				
			}
		} else {
			if(pType == 1) {		
				Infobulle.generer(lVr,'pro-lot-');
			} else {
				Infobulle.generer(lVr,'pro-abo-lot-');
			}
		}
	};
	
	this.affectLot = function(pData) {
		pData = this.affectAjoutLotGestion(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		return pData;
	};
	
	this.affectLotAbonnement = function(pData) {
		pData = this.affectAjoutLotAbonnementGestion(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		return pData;
	};
	
	this.affectAjoutLotGestion = function(pData) {
		var that = this;
		pData.find(".btn-modifier-lot").click(function() {
			that.ajoutLotModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find(".btn-valider-lot").click(function() {
			that.ajoutLotValiderModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find('.catalogue-input-lot').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLotValiderModification($(this).closest('tr').find('#id-lot').text());
			}
		});	
		pData.find(".btn-annuler-lot").click(function() {
			that.ajoutLotAnnulerModification($(this).closest('tr').find('#id-lot').text());
		});	
		pData.find(".btn-supprimer-lot").click(function() {
			that.ajoutLotSupprimer($(this).closest('tr').find('#id-lot').text());
		});
		pData.find(":checkbox").change(function() {
			if(!that.majUnite()) {
				if($(this).prop("checked")) {
					$(this).prop("checked",false);
				} else {
					$(this).prop("checked",true);
				}				
			}
		});
		return pData;		
	};
	
	this.affectAjoutLotAbonnementGestion = function(pData) {
		var that = this;
		pData.find(".btn-modifier-lot-abonnement").click(function() {
			that.ajoutLotAbonnementModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find(".btn-valider-lot-abonnement").click(function() {
			that.ajoutLotAbonnementValiderModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find('.catalogue-input-lot-abonnement').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLotAbonnementValiderModification($(this).closest('tr').find('#id-lot').text());
			}
		});	
		pData.find(".btn-annuler-lot-abonnement").click(function() {
			that.ajoutLotAbonnementAnnulerModification($(this).closest('tr').find('#id-lot').text());
		});	
		pData.find(".btn-supprimer-lot-abonnement").click(function() {
			that.ajoutLotAbonnementSupprimer($(this).closest('tr').find('#id-lot').text());
		});
		return pData;		
	};
	
	this.majUnite = function() {
		var lOk = true;
		var lNbChecked = 0;
		var lUnitePrec = "";
		$(".ligne-lot :checkbox:checked").each(function() {
			var lUnite = $(this).closest(".ligne-lot").find(".lot-unite").text();
			if(lUnitePrec != "" && lUnitePrec != lUnite) {
				lOk = false;
			} else {
				lUnitePrec = lUnite;
			}
			lNbChecked++;
		});
		if(lOk) { 
			if(lNbChecked > 0) {
				$(".unite-stock").text(lUnitePrec);	
			}
		} else {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_333_CODE;
			erreur.message = ERR_333_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
		}
		return lOk;
	};
		
	this.ajoutLotModification = function(pId) {
		$(".btn-lot, #btn-annuler-lot-" + pId + ", #btn-valider-lot-" + pId + ", .champ-lot-" + pId).toggle();
		$("#pro-lot-" + pId + "-quantite").val($("#lot-" + pId + "-quantite").text().numberFrToDb().nombreFormate(2,',',''));
		$("#pro-lot-" + pId + "-unite").val($("#lot-" + pId + "-unite").text());
		$("#pro-lot-" + pId + "-prix").val($("#lot-" + pId + "-prix").text().numberFrToDb().nombreFormate(2,',',''));
		
		this.mEditionLot = true;
	};
	
	this.ajoutLotAbonnementModification = function(pId) {
		$(".btn-lot-abonnement, #btn-annuler-lot-" + pId + "-abonnement, #btn-valider-lot-" + pId + "-abonnement, .champ-lot-" + pId + "-abonnement").toggle();
		$("#pro-lot-abonnement" + pId + "-quantite").val($("#lot-" + pId + "-quantite-abonnement").text().numberFrToDb().nombreFormate(2,',',''));
		$("#pro-lot-abonnement" + pId + "-unite").val($("#lot-" + pId + "-unite-abonnement").text());
		$("#pro-lot-abonnement" + pId + "-prix").val($("#lot-" + pId + "-prix-abonnement").text().numberFrToDb().nombreFormate(2,',',''));

		this.mEditionLot = true;
	};
	
	this.ajoutLotValiderModification = function(pId) {
		var lVo = new ModeleLotVO();
		lVo.quantite = $("#pro-lot-" + pId + "-quantite").val().numberFrToDb();
		lVo.unite = $("#pro-lot-" + pId + "-unite").val();
		lVo.prix = $("#pro-lot-" + pId + "-prix").val().numberFrToDb();
	
		var lValid = new ModeleLotValid();
		var lVr = lValid.validAjout(lVo);
		
		if(lVr.valid) {	
			Infobulle.init();
		
			$("#lot-" + pId + "-quantite").text(lVo.quantite.nombreFormate(2,',',' '));
			$("#lot-" + pId + "-unite").text(lVo.unite);
			$("#lot-" + pId + "-prix").text(lVo.prix.nombreFormate(2,',',' '));
			$(".btn-lot, #btn-annuler-lot-" + pId + ", #btn-valider-lot-" + pId + ", .champ-lot-" + pId).toggle();
			

			this.mEditionLot = false;
			this.majUnite();
		} else {
			Infobulle.generer(lVr,'pro-lot-' + pId + '-');
		}
	};
	
	this.ajoutLotAbonnementValiderModification = function(pId) {
		var lVo = new ModeleLotVO();
		lVo.quantite = $("#pro-lot-abonnement" + pId + "-quantite").val().numberFrToDb();
		lVo.unite = $("#pro-lot-abonnement" + pId + "-unite").val();
		lVo.prix = $("#pro-lot-abonnement" + pId + "-prix").val().numberFrToDb();
	
		var lValid = new ModeleLotValid();
		var lVr = lValid.validAjout(lVo);
		
		if(lVr.valid) {	
			Infobulle.init();
		
			$("#lot-" + pId + "-quantite-abonnement").text(lVo.quantite.nombreFormate(2,',',' '));
			$("#lot-" + pId + "-unite-abonnement").text(lVo.unite);
			$("#lot-" + pId + "-prix-abonnement").text(lVo.prix.nombreFormate(2,',',' '));
			$(".btn-lot-abonnement, #btn-annuler-lot-" + pId + "-abonnement, #btn-valider-lot-" + pId + "-abonnement, .champ-lot-" + pId + "-abonnement").toggle();
			

			this.mEditionLot = false;
		} else {
			Infobulle.generer(lVr,'pro-lot-abonnement' + pId + '-');
		}
	};
	
	this.ajoutLotAnnulerModification = function(pId) {
		$(".btn-lot, #btn-annuler-lot-" + pId + ", #btn-valider-lot-" + pId + ", .champ-lot-" + pId).toggle();
		this.mEditionLot = false;
	};
	
	this.ajoutLotAbonnementAnnulerModification = function(pId) {
		$(".btn-lot-abonnement, #btn-annuler-lot-" + pId + "-abonnement, #btn-valider-lot-" + pId + "-abonnement, .champ-lot-" + pId + "-abonnement").toggle();
		this.mEditionLot = false;
	};
	
	this.ajoutLotSupprimer = function(pId) {
		$("#ligne-lot-" + pId).remove();
	};
	
	this.ajoutLotAbonnementSupprimer = function(pId) {
		$("#ligne-lot-abonnement-" + pId).remove();
	};
	
	this.ajouterProduit = function(pDialog) {
		var that = this;
		if(!this.mEditionLot) {
			// Préparation du AffichageMarche
			var lIdFerme = pDialog.find(':input[name=ferme]').val();
			var lIdCategorie = pDialog.find(':input[name=categorie]').val();
			var lIdNomProduit = pDialog.find(':input[name=produit]').val();
			var lTypeProduit = pDialog.find(':input[name=typeProduit]:checked').val();

			if(lIdNomProduit != 0) {
				var lStock = 0;
				if(lTypeProduit == 2) {
					lStock = pDialog.find('#stock-abonnement').text().numberFrToDb();
				} else {
					lStock = pDialog.find(':input[name=pro-stock]').val().numberFrToDb();
				}
				
				if(pDialog.find(':input[name=pro-stock-choix]:checked').val() == 1 && lStock == "" && lTypeProduit == 0) { // Si une limite de stock est sélectionné il faut la saisir
					var lVR = new Object();
					var erreur = new VRerreur();
					erreur.code = ERR_201_CODE;
					erreur.message = ERR_201_MSG;
					lVR.valid = false;
					lVR.qteRestante = new VRelement();
					lVR.qteRestante.valid = false;
					lVR.qteRestante.erreurs.push(erreur);
					Infobulle.generer(lVR,"pro-");
				} else {	
					var lQteMax = 0;
					if(lTypeProduit == 2) {
						lQteMax = pDialog.find('#max-abonnement').text().numberFrToDb();
					} else if(lTypeProduit == 0){
						lQteMax = pDialog.find(':input[name=pro-qte-max]').val().numberFrToDb();
					}
					if(pDialog.find(':input[name=pro-qte-max-choix]:checked').val() == 1 && lQteMax == "" && lTypeProduit == 0) { // Si une Qmax est sélectionné il faut la saisir
						var lVR = new Object();
						var erreur = new VRerreur();
						erreur.code = ERR_201_CODE;
						erreur.message = ERR_201_MSG;
						lVR.valid = false;
						lVR.qteMaxCommande = new VRelement();
						lVR.qteMaxCommande.valid = false;
						lVR.qteMaxCommande.erreurs.push(erreur);
						Infobulle.generer(lVR,"pro-");
					} else {
						var lUnite = '';
						if(lTypeProduit == 2) {
							lUnite = pDialog.find(".ligne-lot-abonnement :checkbox:checked").first().closest(".ligne-lot-abonnement").find(".lot-unite").text();
						} else {
							lUnite = pDialog.find(".ligne-lot :checkbox:checked").first().closest(".ligne-lot").find(".lot-unite").text();
						}
						
						if(lTypeProduit == 2 && this.mMarche.produitsAbonnement[lIdNomProduit]) { // Produit déjà présent en abonnement
							var lVR = new Object();
							var erreur = new VRerreur();
							erreur.code = ERR_253_CODE;
							erreur.message = ERR_253_MSG;
							lVR.valid = false;
							lVR.qteMaxCommande = new VRelement();
							lVR.qteMaxCommande.valid = false;
							lVR.qteMaxCommande.erreurs.push(erreur);
							Infobulle.generer(lVR,"pro-");
						} else if ( lTypeProduit < 2 && this.mMarche.produits[lIdNomProduit]) { // Produit déjà présent en normal ou solidaire
							var lVR = new Object();
							var erreur = new VRerreur();
							erreur.code = ERR_211_CODE;
							erreur.message = ERR_211_MSG;
							lVR.valid = false;
							lVR.qteMaxCommande = new VRelement();
							lVR.qteMaxCommande.valid = false;
							lVR.qteMaxCommande.erreurs.push(erreur);
							Infobulle.generer(lVR,"pro-");
						} else {
							
							//var lIdProduit = (this.mNbProduit + 1) *-1;

							var lStockAffichage = "";
							if(lStock != "") {
								lStockAffichage = lStock;
							} else {
								lStock = -1;
							}
							var lQteMaxAffichage = "";
							if(lQteMax != "") {
								lQteMaxAffichage = lQteMax;
							} else {
								lQteMax = -1;
							}
							
							
							var lProduit = {nproId:lIdNomProduit,
											nproNom:pDialog.find(':input[name=produit] option:selected').text(),
											nproStock:lStockAffichage,
											nproQteMax:lQteMaxAffichage,
											nproUnite:lUnite,
											type:lTypeProduit,
											modelesLot:[],
											modelesLotReservation:[]};
							
							if(lTypeProduit == 2) {
								pDialog.find('.ligne-lot-abonnement :checkbox').each( function () {
									var lModele = false;
									if($(this).hasClass("modele-lot")) {
										lModele = true;
									}
									
									var lModeleReservation = false;
									if($(this).hasClass("modele-lot-reservation")) {
										lModeleReservation = true;
									}
									
									var lSelected = false;
									if($(this).prop("checked")) {
										lSelected = true;
									}
									
									if(lModele || lSelected) {
										// Récupération des lots
										var lIdLot = $(this).closest(".ligne-lot-abonnement").find(".lot-id").text();
										
										var lVoLot = {	id:lIdLot,
														taille:$(this).closest(".ligne-lot-abonnement").find(".lot-quantite").text(),
														prix:$(this).closest(".ligne-lot-abonnement").find(".lot-prix").text(),
														unite:$(this).closest(".ligne-lot-abonnement").find(".lot-unite").text(),
														selected:lSelected,
														modele:lModele};
										
										if(lModeleReservation) {
											lProduit.modelesLotReservation[lIdLot] = lVoLot;
										} else {
											lProduit.modelesLot[lIdLot] = lVoLot;
										}
									}
								});	
							} else {
								pDialog.find('.ligne-lot :checkbox').each( function () {
									var lModele = false;
									if($(this).hasClass("modele-lot")) {
										lModele = true;
									}
									
									var lSelected = false;
									if($(this).prop("checked")) {
										lSelected = true;
									}
									if(lModele || lSelected) {
										// Récupération des lots
										var lIdLot = $(this).closest(".ligne-lot").find(".lot-id").text();
										var lVoLot = {	id:lIdLot,
														taille:$(this).closest(".ligne-lot").find(".lot-quantite").text(),
														prix:$(this).closest(".ligne-lot").find(".lot-prix").text(),
														unite:$(this).closest(".ligne-lot").find(".lot-unite").text(),
														selected:lSelected,
														modele:lModele};
										
										lProduit.modelesLot[lIdLot] = lVoLot;
									}
								});	
							}
							
							if(!this.mAffichageMarche[lIdFerme]) {
								this.mAffichageMarche[lIdFerme] = {	ferId:lIdFerme,
																	ferNom:pDialog.find(':input[name=ferme] option:selected').text(),
																	categories:[]};
							}

							if(!this.mAffichageMarche[lIdFerme].categories[lIdCategorie]){
								this.mAffichageMarche[lIdFerme].categories[lIdCategorie] = {
										cproId:lIdCategorie,
										cproNom:pDialog.find(':input[name=categorie] option:selected').text(),
										produits:[],
										produitsAbonnement:[]};
							}
				
							// Préparation du MarcheVO		
							var lVoProduit = new ProduitMarcheVO();
							lVoProduit.idNom = lIdNomProduit;
							lVoProduit.unite = lUnite;
							lVoProduit.qteMaxCommande = lQteMax;
							lVoProduit.qteRestante = lStock;
							lVoProduit.type = lTypeProduit;
							
							if(lTypeProduit == 2) {
								pDialog.find('.ligne-lot-abonnement :checkbox:checked').each( function () {
									// Récupération des lots
									var lVoLot = new DetailCommandeVO();
									var lId = $(this).closest(".ligne-lot-abonnement").find(".lot-id").text();
									if(lId > 0) {
										lVoLot.id = lId;
									}
									lVoLot.taille = $(this).closest(".ligne-lot-abonnement").find(".lot-quantite").text().numberFrToDb();
									lVoLot.prix = $(this).closest(".ligne-lot-abonnement").find(".lot-prix").text().numberFrToDb();
									
									lVoProduit.lots.push(lVoLot);										
								});						
							} else {
								pDialog.find('.ligne-lot :checkbox:checked').each( function () {
									// Récupération des lots
									var lVoLot = new DetailCommandeVO();
									lVoLot.taille = $(this).closest(".ligne-lot").find(".lot-quantite").text().numberFrToDb();
									lVoLot.prix = $(this).closest(".ligne-lot").find(".lot-prix").text().numberFrToDb();
									
									lVoProduit.lots.push(lVoLot);										
								});		
							}
							
							lVoProduit.idFerme = lIdFerme;
							lVoProduit.idCategorie = lIdCategorie;
							
							if(lTypeProduit == 1) { // Si produit Solidaire pas de limite de stock
								lVoProduit.qteMaxCommande = -1;
								lVoProduit.qteRestante = -1;
							}
				
							var lValid = new ProduitMarcheValid();
							var lVr = lValid.validAjout(lVoProduit);
							
							if(lVr.valid) {	
								Infobulle.init();
								
								if(lTypeProduit == 2) {
									this.mMarche.produitsAbonnement[lIdNomProduit] = lVoProduit;										
									this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdNomProduit] = lProduit;
								} else {
									this.mMarche.produits[lIdNomProduit] = lVoProduit;
									this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdNomProduit] = lProduit;
								}
								
								this.mNbProduit++;
								that.majListeFerme();
								
								pDialog.dialog('close');
							} else {
								if(lTypeProduit == 2) {
									Infobulle.generer(lVr,'pro-abo-');
								} else {
									Infobulle.generer(lVr,'pro-');
								}
							}
						}
					}
				}
			}
		} else {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_112_CODE;
			erreur.message = ERR_112_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
		}
	};
	
	this.majListeFerme = function(pData) {
		var that = this;		
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		
		var lFermes = [];		
		$(that.mAffichageMarche).each(function() {
			if(this.ferId) {
				var lCategories = [];
				$(this.categories).each(function() {
					if(this.cproId) {
						var lProduits = [];
						$(this.produits).each(function() {
							if(this.nproId) {
								lProduits.push([this.nproNom,this.nproId,this.type]);
							}						
						});	
						$(this.produitsAbonnement).each(function() {
							if(this.nproId) {
								lProduits.push([this.nproNom,this.nproId,this.type]);
							}						
						});	
						lProduits.sort(sortABC);
						lCategories.push([this.cproNom,this.cproId,lProduits]);
					}
				});		
				lCategories.sort(sortABC);
				lFermes.push([this.ferNom,this.ferId,lCategories]);		
			}
		});
		lFermes.sort(sortABC);
		
		var lData = {fermes:[]};
		$(lFermes).each(function(i,val) {
			var lIdFerme = val[1];
			var lCategories = val[2];
			if(that.mAffichageMarche[lIdFerme]) {
				var lAjoutFerme = false;
				var lFerme = {	ferId:that.mAffichageMarche[lIdFerme].ferId,
								ferNom:that.mAffichageMarche[lIdFerme].ferNom,
								categories:[]};
				$(lCategories).each(function(i,val) {
					var lIdCategorie = val[1];
					var lProduits = val[2];
					if(that.mAffichageMarche[lIdFerme].categories[lIdCategorie]) {
						var lAjoutCategorie = false;
						var lCategorie = {
								cproId:that.mAffichageMarche[lIdFerme].categories[lIdCategorie].cproId,
								cproNom:that.mAffichageMarche[lIdFerme].categories[lIdCategorie].cproNom,
								produits:[]};
						$(lProduits).each(function(i,val) {
							var lIdProduit = val[1];
							var lType = val[2];
							var lAbonnement = "";
							if(lType == 2) {
								lAbonnement = lGestionCommandeTemplate.flagAbonnement;
								if(that.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdProduit]) {									
									lCategorie.produits.push({
										nproId:that.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdProduit].nproId,
										nproNom:that.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdProduit].nproNom,
										type:lType,
										abonnement:lAbonnement});
									lAjoutFerme = true;
									lAjoutCategorie = true;
								}
							} else {
								if(that.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit].type == 1) {
									lAbonnement = lGestionCommandeTemplate.flagSolidaire;
								}
								if(that.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit]) {
																	
									lCategorie.produits.push({
										nproId:that.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit].nproId,
										nproNom:that.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit].nproNom,
										type:lType,
										abonnement:lAbonnement});
									lAjoutFerme = true;
									lAjoutCategorie = true;
								}	
							}
						});
						if(lAjoutCategorie) {
							lFerme.categories.push(lCategorie);
						}
					}
				});
				if(lAjoutFerme) {
					lData.fermes.push(lFerme);
				}
			}
		});
		var lTemplate = lGestionCommandeTemplate.ajoutMarcheListeProduit;
				
		/*$("#liste-ferme").replaceWith(this.affectListeProduit( $(lTemplate.template(lData)) ));
		
		if(this.mNbProduit > 0) {
			if($("#btn-gestion-marche").length < 1) {
				$("#liste-ferme").after( this.affectCeerMarche($(lGestionCommandeTemplate.btnValiderAjoutMarche)) );	
			}
		} else {
			$("#btn-gestion-marche").remove();
		}*/
		
		
		
		if(pData) {
			pData.find("#liste-ferme").replaceWith(this.affectListeProduit( $(lTemplate.template(lData)) ));		
		} else {
			$("#liste-ferme").replaceWith(this.affectListeProduit( $(lTemplate.template(lData)) ));			
		}
		
		if(this.mNbProduit > 0) {
			if($("#btn-gestion-marche").length < 1) {
				if(pData) {
					pData.find("#liste-ferme").after( this.affectCeerMarche($(lGestionCommandeTemplate.btnValiderAjoutMarche)) );	
				} else {
					$("#liste-ferme").after( this.affectCeerMarche($(lGestionCommandeTemplate.btnValiderAjoutMarche)) );	
				}
			}
		} else {
			if(pData) {
				pData.find("#btn-gestion-marche").remove();
			} else {
				$("#btn-gestion-marche").remove();
			}
		}

		if(pData) {
			return pData;
		}
	};
	
	this.affectListeProduit = function(pData) {
		pData = this.affectModifierProduit(pData);
		pData = this.affectSupprimerProduit(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};

	this.affectModifierProduit = function(pData) {
		var that = this;
		pData.find(".btn-modifier-produit").click(function() {
			that.dialogModifierProduit( $(this).attr("id-produit"), $(this).attr("typeProduit") );
		});
		return pData;
	};
	
	
	this.dialogModifierProduit = function(pId, pType) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lData = {};
		if(pType == 0 || pType == 1) {
			var lIdFerme = this.mMarche.produits[pId].idFerme;
			var lIdCategorie = this.mMarche.produits[pId].idCategorie;
			
			lData = {	ferId:lIdFerme,
			ferNom:this.mAffichageMarche[lIdFerme].ferNom,
			cproId:lIdCategorie,
			cproNom:this.mAffichageMarche[lIdFerme].categories[lIdCategorie].cproNom,
			nproId:pId,
			nproNom:this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[pId].nproNom,
			nproStock:this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[pId].nproStock.nombreFormate(2,',',''),
			nproQteMax:this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[pId].nproQteMax.nombreFormate(2,',',''),
			modelesLot:[]};
						
		//	lData.typeProduitLabel = lGestionCommandeTemplate.typeProduitLabelSolidaire;
			
			
			for(i in this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[pId].modelesLot) {
				var lLot = this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[pId].modelesLot[i];
				if(lLot.id) {
					var lVoLot = {	id:lLot.id,
							quantite:lLot.taille,
							prix:lLot.prix,
							unite:lLot.unite,
							sigleMonetaire:gSigleMonetaire};
					
					if(lLot.selected) {
						lVoLot.checked = "checked=\"checked\"";					
						lData.unite = lLot.unite;
					} else { lVoLot.checked = "";}
					if(lLot.modele) {
						lVoLot.modele = "modele-lot";
					} else { lVoLot.modele = "";}
					lData.modelesLot.push(lVoLot);
				}
			};

			if(this.mMarche.produits[pId].qteRestante == -1) {
				lData.nproStockCheckedNoLimit = "checked=\"checked\"";
				lData.nproStockDisabled = "disabled=\"disabled\"";
				lData.nproStock = "";
			} else {
				lData.nproStockCheckedLimit = "checked=\"checked\"";
			}
			
			if(this.mMarche.produits[pId].qteMaxCommande == -1) {
				lData.nproQteMaxCheckedNoLimit = "checked=\"checked\"";
				lData.nproQteMaxDisabled = "disabled=\"disabled\"";
				lData.nproQteMax = "";
			} else {
				lData.nproQteMaxCheckedLimit = "checked=\"checked\"";
			}	
			
			if(pType == 0 ) { // Si produit Normal gestion des limites de stock
		//		lData.typeProduitLabel = lGestionCommandeTemplate.typeProduitLabelNormal;
				lData.typeSolidaireSelected = "";
				lData.typeNormalSelected = "checked=\"checked\"";
				lData.visibleSolidaire = "";			
			} else {
				lData.typeSolidaireSelected = "checked=\"checked\"";
				lData.typeNormalSelected = "";
				lData.visibleSolidaire = 'ui-helper-hidden';
			}
			
			lData.divStock = lGestionCommandeTemplate.stockModifProduit.template(lData);
			lData.divLot = lGestionCommandeTemplate.prixModifProduit.template(lData);
			
		} else { // Produit Abonnement
			var lIdFerme = this.mMarche.produitsAbonnement[pId].idFerme;
			var lIdCategorie = this.mMarche.produitsAbonnement[pId].idCategorie;
			
			lData = {	ferId:lIdFerme,
			ferNom:this.mAffichageMarche[lIdFerme].ferNom,
			cproId:lIdCategorie,
			cproNom:this.mAffichageMarche[lIdFerme].categories[lIdCategorie].cproNom,
			nproId:pId,
			nproNom:this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[pId].nproNom,
			stockInitialAbonnement:this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[pId].nproStock.nombreFormate(2,',',' '),
			modelesLotAbonnement:[],
			modelesLotAbonnementReservation:[]};
			
			for(i in this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[pId].modelesLot) {
				var lLot = this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[pId].modelesLot[i];
				if(lLot.id) {
					var lVoLot = {	id:lLot.id,
							quantite:lLot.taille,
							prix:lLot.prix,
							unite:lLot.unite,
							sigleMonetaire:gSigleMonetaire};
					
					if(lLot.selected) {
						lVoLot.checked = "checked=\"checked\"";					
						lData.uniteAbonnement = lLot.unite;
					} else { lVoLot.checked = "";}
					if(lLot.modele) {
						lVoLot.modele = "modele-lot";
					} else { lVoLot.modele = "";}
					lData.modelesLotAbonnement.push(lVoLot);
				}
			};
			
			for(i in this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[pId].modelesLotReservation) {
				var lLot = this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[pId].modelesLotReservation[i];
				if(lLot.id) {
					var lVoLot = {	id:lLot.id,
							quantite:lLot.taille,
							prix:lLot.prix,
							unite:lLot.unite,
							sigleMonetaire:gSigleMonetaire};
					
					if(lLot.selected) {
						lVoLot.checked = "checked=\"checked\"";					
						lData.uniteAbonnement = lLot.unite;
					} else { lVoLot.checked = "";}
					if(lLot.modele) {
						lVoLot.modele = "modele-lot";
					} else { lVoLot.modele = "";}
					lData.modelesLotAbonnementReservation.push(lVoLot);
				}
			};
			
			var lQMax = this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[pId].nproQteMax;
			if(parseFloat(lQMax) == -1) {
				lData.qMaxAbonnement = "Pas de limite";
			} else {
				lData.qMaxAbonnement = lQMax.nombreFormate(2,',',' ') + " " + lData.uniteAbonnement;
			}
			lData.qMaxAbonnementValue = lQMax;
			
			lData.divStock = lGestionCommandeTemplate.stockAbonnementAjoutProduit.template(lData);
			lData.typeProduitLabel = lGestionCommandeTemplate.typeProduitLabelAbonnement;
			lData.divLot = lGestionCommandeTemplate.prixAbonnementModifProduit.template(lData);
		}
		
		
		var lTemplate = lGestionCommandeTemplate.dialogModifProduitAjoutMarche;
		
		
		if(pType == 0 || pType == 1) { 
			lData.typeProduitLabel = lGestionCommandeTemplate.typeProduitLabelFormulaire.template(lData);
		}
				 
		$(that.affectPrixEtStock($(lTemplate.template(lData)))).dialog({			
			autoOpen: true,
			modal: true,
			draggable: true,
			resizable: false,
			width:900,
			buttons: {
				'Modifier': function() {
					that.modifierProduit($(this),pType);
				},
				'Annuler': function() {
					that.mEditionLot = false;
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
		});		
	};
	
	this.modifierProduit = function(pDialog,pType) {
		var that = this;
		if(!this.mEditionLot) {
			// Préparation du AffichageMarche
			var lIdFerme = pDialog.find('#pro-idFerme').attr("id-ferme");
			var lIdCategorie = pDialog.find('#pro-idCategorie').attr("id-categorie");
			var lIdNomProduit = pDialog.find('#pro-idProduit').attr("id-produit");
			
			if(pType == 0 || pType == 1) { // Si produit de type Normal ou solidaire vérifier si il a été modifié
				pType = pDialog.find(':input[name=typeProduit]:checked').val();
			}
		
			//var lStock = pDialog.find(':input[name=pro-stock]').val().numberFrToDb();
			var lStock = 0;
			if(pType == 2) {// Stock fixe pour abonnement
				lStock = pDialog.find('#stock-abonnement').text().numberFrToDb();
			} else if(pType == 0){// Stock produit Normal
				lStock = pDialog.find(':input[name=pro-stock]').val().numberFrToDb();
			}
			
			if(pDialog.find(':input[name=pro-stock-choix]:checked').val() == 1 && lStock == "" && pType == 0) { // Si une limite de stock est sélectionné il faut la saisir
				var lVR = new Object();
				var erreur = new VRerreur();
				erreur.code = ERR_201_CODE;
				erreur.message = ERR_201_MSG;
				lVR.valid = false;
				lVR.qteRestante = new VRelement();
				lVR.qteRestante.valid = false;
				lVR.qteRestante.erreurs.push(erreur);
				Infobulle.generer(lVR,"pro-");
			} else {	
				var lQteMax = 0;
				if(pType == 0) {
					lQteMax = pDialog.find(':input[name=pro-qte-max]').val().numberFrToDb();
				} else if(pType == 2) {
					lQteMax = pDialog.find('#max-abonnement').text().numberFrToDb();
				}
				if(pDialog.find(':input[name=pro-qte-max-choix]:checked').val() == 1 && lQteMax == "" && pType == 0) { // Si une Qmax est sélectionné il faut la saisir
					var lVR = new Object();
					var erreur = new VRerreur();
					erreur.code = ERR_201_CODE;
					erreur.message = ERR_201_MSG;
					lVR.valid = false;
					lVR.qteMaxCommande = new VRelement();
					lVR.qteMaxCommande.valid = false;
					lVR.qteMaxCommande.erreurs.push(erreur);
					Infobulle.generer(lVR,"pro-");
				} else {	
					
					var lUnite = '';
					//var lUnite = pDialog.find(".ligne-lot :checkbox:checked").first().closest(".ligne-lot").find(".lot-unite").text();
					if(pType == 2) {
						lUnite = pDialog.find(".ligne-lot-abonnement :checkbox:checked").first().closest(".ligne-lot-abonnement").find(".lot-unite").text();
					} else {
						lUnite = pDialog.find(".ligne-lot :checkbox:checked").first().closest(".ligne-lot").find(".lot-unite").text();
					}
			
					//var lStock = pDialog.find(':input[name=pro-stock]').val().numberFrToDb();
					//var lQteMax = pDialog.find(':input[name=pro-qte-max]').val().numberFrToDb();
					
					/*var lStockAffichage = "";
					if(lStock != "") {
						lStockAffichage = lStock.nombreFormate(2,',',' ');
					} else {
						lStock = -1;
					}
					var lQteMaxAffichage = "";
					if(lQteMax != "") {
						lQteMaxAffichage = lQteMax.nombreFormate(2,',',' ');
					} else {
						lQteMax = -1;
					}*/
					if(lStock == "") {
						lStock = -1;
					}
					if(lQteMax == "") {
						lQteMax = -1;
					}
					
					var lNomProduit = "";
					if(pType == 2) {
						lNomProduit = this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdNomProduit].nproNom;
					} else {
						lNomProduit = this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdNomProduit].nproNom;
					}
					
					var lProduit = {nproId:lIdNomProduit,
							nproNom:lNomProduit,
						//	nproStock:lStockAffichage,
							nproStock:lStock,
						//	nproQteMax:lQteMaxAffichage,
							nproQteMax:lQteMax,
							nproUnite:lUnite,
							type:pType,
							modelesLot:[],
							modelesLotReservation:[]};
								
					if(pType == 2) {
						pDialog.find('.ligne-lot-abonnement :checkbox').each( function () {
							var lModele = false;
							if($(this).hasClass("modele-lot")) {
								lModele = true;
							}
							
							var lModeleReservation = false;
							if($(this).hasClass("modele-lot-reservation")) {
								lModeleReservation = true;
							}
							
							var lSelected = false;
							if($(this).prop("checked")) {
								lSelected = true;
							}
							
							if(lModele || lSelected) {
								// Récupération des lots
								var lIdLot = $(this).closest(".ligne-lot-abonnement").find(".lot-id").text();
								
								var lVoLot = {	id:lIdLot,
												taille:$(this).closest(".ligne-lot-abonnement").find(".lot-quantite").text(),
												prix:$(this).closest(".ligne-lot-abonnement").find(".lot-prix").text(),
												unite:$(this).closest(".ligne-lot-abonnement").find(".lot-unite").text(),
												selected:lSelected,
												modele:lModele};
								
								if(lModeleReservation) {
									lProduit.modelesLotReservation[lIdLot] = lVoLot;
								} else {
									lProduit.modelesLot[lIdLot] = lVoLot;
								}
							}
						});	
					} else {
						pDialog.find('.ligne-lot :checkbox').each( function () {
							var lModele = false;
							if($(this).hasClass("modele-lot")) {
								lModele = true;
							}
							
							var lSelected = false;
							if($(this).prop("checked")) {
								lSelected = true;
							}
							if(lModele || lSelected) {
								// Récupération des lots
								var lIdLot = $(this).closest(".ligne-lot").find(".lot-id").text();
								var lVoLot = {	id:lIdLot,
												taille:$(this).closest(".ligne-lot").find(".lot-quantite").text(),
												prix:$(this).closest(".ligne-lot").find(".lot-prix").text(),
												unite:$(this).closest(".ligne-lot").find(".lot-unite").text(),
												selected:lSelected,
												modele:lModele};
								
								lProduit.modelesLot[lIdLot] = lVoLot;
							}
						});	
					}

					// Préparation du MarcheVO		
					var lVoProduit = new ProduitMarcheVO();
					lVoProduit.idNom = lIdNomProduit;
					lVoProduit.unite = lUnite;
					lVoProduit.qteMaxCommande = lQteMax;
					lVoProduit.qteRestante = lStock;
					lVoProduit.type = pType;
					
					
					if(pType == 2) {
						pDialog.find('.ligne-lot-abonnement :checkbox:checked').each( function () {
							// Récupération des lots
							var lVoLot = new DetailCommandeVO();
							
							var lId = $(this).closest(".ligne-lot-abonnement").find(".lot-id").text();
							if(lId > 0) {
								lVoLot.id = lId;
							}
							
							lVoLot.taille = $(this).closest(".ligne-lot-abonnement").find(".lot-quantite").text().numberFrToDb();
							lVoLot.prix = $(this).closest(".ligne-lot-abonnement").find(".lot-prix").text().numberFrToDb();
							
							lVoProduit.lots.push(lVoLot);										
						});						
					} else {
						pDialog.find('.ligne-lot :checkbox:checked').each( function () {
							// Récupération des lots
							var lVoLot = new DetailCommandeVO();
							lVoLot.taille = $(this).closest(".ligne-lot").find(".lot-quantite").text().numberFrToDb();
							lVoLot.prix = $(this).closest(".ligne-lot").find(".lot-prix").text().numberFrToDb();
							
							lVoProduit.lots.push(lVoLot);										
						});
					}

					if(pType == 1) { // Si produit Solidaire par de limite de stock
						lVoProduit.qteMaxCommande = -1;
						lVoProduit.qteRestante = -1;
					}

					lVoProduit.idFerme = lIdFerme;
					lVoProduit.idCategorie = lIdCategorie;
		
					var lValid = new ProduitMarcheValid();
					var lVr = lValid.validAjout(lVoProduit);
					
					if(lVr.valid) {	
						Infobulle.init();
						if(pType == 2) {
							this.mMarche.produitsAbonnement[lIdNomProduit] = lVoProduit;	
							this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdNomProduit] = lProduit;
						} else {
							this.mMarche.produits[lIdNomProduit] = lVoProduit;
							this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdNomProduit] = lProduit;
						}

						that.majListeFerme();
						
						pDialog.dialog('close');
					} else {
						if(pType == 2) {
							Infobulle.generer(lVr,'pro-abo-');
						} else {
							Infobulle.generer(lVr,'pro-');
						}
					}
				}
			}			
		} else {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_112_CODE;
			erreur.message = ERR_112_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
		}
	};

	this.affectSupprimerProduit = function(pData) {
		var that = this;
		pData.find(".btn-supprimer-produit").click(function() {
			that.supprimerProduit( $(this).attr("id-produit"), $(this).attr("typeProduit") );
		});
		return pData;		
	};
	
	this.supprimerProduit = function(pId, pType) {
		if(pType == 0 || pType == 1) {
			var lIdFerme = this.mMarche.produits[pId].idFerme;
			var lIdCategorie = this.mMarche.produits[pId].idCategorie;
			
			this.mMarche.produits.splice(pId,1,null);
			this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produits.splice(pId,1,null);
		} else {
			var lIdFerme = this.mMarche.produitsAbonnement[pId].idFerme;
			var lIdCategorie = this.mMarche.produitsAbonnement[pId].idCategorie;
			
			this.mMarche.produitsAbonnement.splice(pId,1,null);
			this.mAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement.splice(pId,1,null);
		}
		this.mNbProduit--;
		this.majListeFerme();
	};
	
	this.affectCeerMarche = function(pData) {
		var that = this;
		pData.find("#btn-creer-marche").click(function() {
			that.creerMarche();
		});
		pData.find("#btn-modifier-creation-commande").click(function() {
			that.editerMarche();
		});
		return pData;
	};
	
	this.creerMarche = function() {
		var that = this;
		if(!this.mEditionLot) {
		
			//this.mMarche;
			
			this.mMarche.nom = $(':input[name=nom]').val();
			this.mMarche.description = $(':input[name=description]').val();
			this.mMarche.dateMarcheDebut = $(':input[name=date-debut]').val().dateFrToDb();
			this.mMarche.timeMarcheDebut = $(':input[name=heure-debut]').val() + ':' + $(':input[name=minute-debut]').val() + ':00';
			this.mMarche.dateMarcheFin = $(':input[name=date-debut]').val().dateFrToDb();
			this.mMarche.timeMarcheFin = $(':input[name=heure-fin]').val() + ':' + $(':input[name=minute-fin]').val() + ':00';
			this.mMarche.dateDebutReservation = $(':input[name=date-debut-reservation]').val().dateFrToDb();
			this.mMarche.timeDebutReservation = $(':input[name=heure-debut-reservation]').val() + ':' + $(':input[name=minute-debut-reservation]').val() + ':00';
			this.mMarche.dateFinReservation = $(':input[name=date-fin-reservation]').val().dateFrToDb();
			this.mMarche.timeFinReservation = $(':input[name=heure-fin-reservation]').val() + ':' + $(':input[name=minute-fin-reservation]').val() + ':00';
			this.mMarche.archive = "0";
			
			if(this.mEtapeCreationMarche == 0) {
				
				var lValid = new MarcheValid();
				var lVR = lValid.validAjout(this.mMarche);
									
				if(lVR.valid) {
					this.mEtapeCreationMarche = 1;
					Infobulle.init(); // Supprime les erreurs
					$("#nom-marche-span").text(this.mMarche.nom);
					$("#date-debut-reservation-marche-span").text($(':input[name=date-debut-reservation]').val());
					$("#time-debut-reservation-marche-span").text($(':input[name=heure-debut-reservation]').val() + 'H' + $(':input[name=minute-debut-reservation]').val());
					$("#date-fin-reservation-marche-span").text($(':input[name=date-fin-reservation]').val());
					$("#time-fin-reservation-marche-span").text($(':input[name=heure-fin-reservation]').val() + 'H' + $(':input[name=minute-fin-reservation]').val());
					$("#date-debut-marche-span").text($(':input[name=date-debut]').val());
					$("#time-debut-marche-span").text($(':input[name=heure-debut]').val() + 'H' + $(':input[name=minute-debut]').val());
					$("#time-fin-marche-span").text($(':input[name=heure-fin]').val() + 'H' + $(':input[name=minute-fin]').val());
					$("#description-marche-span").text(this.mMarche.description);
			
					$("#btn-ajout-produit-div, .informations-marche, #btn-modifier-creation-commande, .btn-modifier-produit, .btn-supprimer-produit").toggle();
				} else {
					// Affiche les erreurs
					Infobulle.generer(lVR,"marche-");						
				}
			} else if(this.mEtapeCreationMarche == 1){
				// requête de création du marche
				//var lVo = this.mMarche;
				var lVo = new MarcheVO();
				lVo.nom = this.mMarche.nom;
				lVo.description = this.mMarche.description;
				lVo.dateMarcheDebut = this.mMarche.dateMarcheDebut;
				lVo.timeMarcheDebut = this.mMarche.timeMarcheDebut;
				lVo.dateMarcheFin = this.mMarche.dateMarcheFin;
				lVo.timeMarcheFin = this.mMarche.timeMarcheFin;
				lVo.dateDebutReservation = this.mMarche.dateDebutReservation;
				lVo.timeDebutReservation = this.mMarche.timeDebutReservation;
				lVo.dateFinReservation = this.mMarche.dateFinReservation;
				lVo.timeFinReservation = this.mMarche.timeFinReservation;
				lVo.archive = this.mMarche.archive;
				
				// Suppression des lignes vides
				var lProduits = [];
				$(this.mMarche.produits).each(function() {
					if(this.idNom) {
						var lLots = [];
						$(this.lots).each(function() {
							if(this.taille) {
								lLots.push(this);
							}						
						});
						this.lots = lLots;
						lProduits.push(this);
					}
				});
				lVo.produits = lProduits;
				
				// Suppression des lignes vides
				var lProduitsAbonnement = [];
				$(this.mMarche.produitsAbonnement).each(function() {
					if(this.idNom) {
						var lLots = [];
						$(this.lots).each(function() {
							if(this.taille) {
								lLots.push(this);
							}						
						});
						this.lots = lLots;
						lProduitsAbonnement.push(this);
					}
				});
				lVo.produitsAbonnement = lProduitsAbonnement;
				
				//var lVo = this.mMarche;
				lVo.fonction = "ajouter";
				$.post(	"./index.php?m=GestionCommande&v=AjoutCommande", "pParam=" + $.toJSON(lVo),
						function (lResponse) {		
							if(lResponse) {
								if(lResponse.valid) {
									var lVR = new Object();
									var erreur = new VRerreur();
									erreur.code = ERR_334_CODE;
									erreur.message = ERR_334_MSG;
									lVR.valid = false;
									lVR.log = new VRelement();
									lVR.log.valid = false;
									lVR.log.erreurs.push(erreur);
									
									
									EditerCommandeVue({id_marche:lResponse.id,vr:lVR});									
								} else {
									that.editerMarche();
									Infobulle.generer(lResponse,"marche-");
								}
							}
						},"json"
				);
			}
		} else {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_112_CODE;
			erreur.message = ERR_112_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
		}
	};
	
	
	this.editerMarche = function() {
		this.mEtapeCreationMarche = 0;
		$("#btn-ajout-produit-div, .informations-marche, #btn-modifier-creation-commande, .btn-modifier-produit, .btn-supprimer-produit").toggle();
	};


	this.affectControleDatepicker = function(pData) {
		pData = gCommunVue.lienDatepickerMarche('marche-dateDebutReservation', 'marche-dateFinReservation', 'marche-dateMarcheDebut', pData);
		pData.find('#marche-dateDebutReservation').datepicker( "setDate", getDateAujourdhuiDb().dateDbToFr() );
		pData.find('#marche-dateFinReservation').datepicker("option", "minDate", new Date());
		pData.find('#marche-dateMarcheDebut').datepicker("option", "minDate", new Date());
		return pData;
	};

	this.construct(pParam);
	
};function AchatVue(pParam) {
	this.mIdMarche = 0;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {AchatVue(pParam);}} );
		var that = this;
		pParam = $.extend(true,{},pParam);
		
		if(pParam.idMarche) {
			this.mIdMarche = pParam.idMarche;
		}
		
		pParam.fonction = "afficher";
		$.post(	"./index.php?m=GestionCommande&v=Achat", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							var lVo = new RechercheListeAchatVO();
							
						/*	if(that.mIdMarche > 0) {
								lVo.idMarche = that.mIdMarche;
							} 				*/	
							
							lVo.dateDebut = getPremierJourDuMois();
							lResponse.dateDebut = lVo.dateDebut.dateDbToFr();
							lVo.dateFin = getDernierJourDuMois();
							lResponse.dateFin = lVo.dateFin.dateDbToFr();
							
							if(pParam && pParam.vr) {
								lVo.vr = pParam.vr;
							}
							
							var lGestionCommandeTemplate = new GestionCommandeTemplate();
							$('#contenu').replaceWith(that.affectEntete($(lGestionCommandeTemplate.rechercheListeAchat.template(lResponse))));
							that.recherche(lVo);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};

	this.affectEntete = function(pData) {
		//pData = this.affectModeMarche(pData);
		pData = this.affectControleDatepicker(pData);
		pData = this.affectRechercheListeAchat(pData);		
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	/*this.affectModeMarche = function(pData) {
		if(this.mIdMarche > 0) {
			var that = this;
			pData.find('#form-recherche-liste-achat').remove();
			pData.find('.com-barre-menu-2').show();
			pData.find('#btn-retour').click(function() {
				EditerCommandeVue({"id_marche":that.mIdMarche});
			});
		}
		return pData;
	};*/
	
	this.affectControleDatepicker = function(pData) {
		pData = gCommunVue.comLienDatepicker('dateDebut','dateFin',pData);
		pData.find('#dateDebut, #dateFin').datepicker( "option", "yearRange", '1900:c' );
		return pData;
	};
	
	this.affectRechercheListeAchat = function(pData) {
		var that = this;
		pData.find('#btn-rechercher-liste-achat').click(function() {
			var lVo = new RechercheListeAchatVO();
			lVo.dateDebut = $('#dateDebut').val().dateFrToDb();
			lVo.dateFin = $('#dateFin').val().dateFrToDb();
			lVo.idMarche = $('#idMarche').val();

			var lValid = new AchatValid();
			var lVr = lValid.validRechercheListeAchat(lVo);

			Infobulle.init(); // Supprime les erreurs
			if(lVr.valid) {
				that.recherche(lVo);
			} else {
				Infobulle.generer(lVr,'');
			}
		});
		return pData;
	};
	
	this.recherche = function(pVo) {
		var that = this;
		pVo.fonction = "rechercher";
		$.post(	"./index.php?m=GestionCommande&v=Achat", "pParam=" + $.toJSON(pVo),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pVo && pVo.vr) {
								Infobulle.generer(pVo.vr,'');
							}
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();

		if(lResponse.listeAchat.length > 0 && lResponse.listeAchat[0].opeId != null) {			
			lResponse.sigleMonetaire = gSigleMonetaire;
			$.each(lResponse.listeAchat, function() {
				this.montant = (this.opeMontant * -1).nombreFormate(2,',',' ');
				this.dateTri = this.opeDate.extractDbDate().dateDbToTri();
				this.date = this.opeDate.extractDbDate().dateDbToFr();
				
				if( this.comNumero == null) {
					this.comNumero = '';
				} else {
					this.comNumero = lGestionCommandeTemplate.listeAchatNumeroMarche.template(this);
				}
				if( this.adhId == null) {
					this.adhId = 0;
				}
				if( this.adhNumero == null) {
					this.adhNumero = '';
				}
				if( this.adhNom == null) {
					this.adhNom = '';
				}
				if( this.adhPrenom == null) {
					this.adhPrenom = '';
				}
			});			
			$('#liste-achat').html(that.affect($(lGestionCommandeTemplate.listeAchat.template(lResponse))));
		} else {
			$('#liste-achat').html(that.affect($(lGestionCommandeTemplate.listeAchatVide)));
		}
		
	};
	
	this.affect = function(pData) {
		pData = this.affectTri(pData);
		pData = this.affectAfficherAchat(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectTri = function(pData) {
		pData.tablesorter({sortList: [[0,1]], headers: { 6: {sorter: false}, 7: {sorter: false} }});
		return pData;
	};
	
	this.affectAfficherAchat = function(pData) {
		//var that = this;
		pData.find('.btn-afficher-achat').click(function() {
			/*var lParam = {id:$(this).data("id-achat")};
			if(that.mIdMarche > 0) {
				lParam.idMarche = that.mIdMarche;
			}*/
			
			var lParam = {	
					id:$(this).data("id-achat"),
					id_adherent:$(this).data("id-adherent"),
					id_commande:'',
					module:'GestionCommande',
					retour:'Achat'};
			
			
			CaisseVue(lParam);
		});
		return pData;
	};
	
	this.construct(pParam);
};;function StockProduitListeFermeVue(pParam) {
	this.construct = function(pParam) {
		$.history( {'vue':function() {StockProduitListeFermeVue(pParam);}} );
		var that = this;
		var lParam = {fonction:"ListeFerme"};
		$.post(	"./index.php?m=GestionCommande&v=StockProduit", "pParam=" + $.toJSON(lParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {	
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}	
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		
		if(lResponse.listeFerme.length > 0 && lResponse.listeFerme[0].ferId != null) {
			var lTemplate = lGestionCommandeTemplate.listeFerme;
			$.each(lResponse.listeFerme,function() {
				this.ferIdTri = this.ferNumero.replace("F","");
			});
			$('#contenu').replaceWith(that.affect($(lTemplate.template(lResponse))));
		} else {
			$('#contenu').replaceWith(that.affect($(lGestionCommandeTemplate.listeFermeVide)));
		}
		
	};
	
	this.affect = function(pData) {
		pData = this.affectTri(pData);
		pData = this.affectRecherche(pData);
		pData = this.affectDetailFerme(pData);		
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		return pData;
	};
		
	this.affectTri = function(pData) {
		pData.find('.com-table').tablesorter({sortList: [[0,0]]});
		return pData;
	};
	
	this.affectRecherche = function(pData) {
		pData.find("#filter").keyup(function() {
		    $.uiTableFilter( $('.com-table'), this.value );
		  });
		
		pData.find("#filter-form").submit(function () {return false;});
		
		return pData;
	};
			
	this.affectDetailFerme = function(pData) {
		pData.find(".compte-ligne").click(function() {
			StockProduitVue({idCompte:$(this).data('id-compte-ferme')});
		});
		return pData;
	};
		
	this.construct(pParam);
};;function FactureVue(pParam) {
	this.mIdMarche = 0;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {FactureVue(pParam);}} );
		var that = this;
		pParam = $.extend(true,{},pParam);
		
		if(pParam.idMarche) {
			this.mIdMarche = pParam.idMarche;
		}
		
		pParam.fonction = "afficher";
		$.post(	"./index.php?m=GestionCommande&v=Facture", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							var lVo = new RechercheListeFactureVO();
							
							if(that.mIdMarche > 0) {
								lVo.idMarche = that.mIdMarche;
							} else {							
								lVo.dateDebut = getPremierJourDuMois();
								lResponse.dateDebut = lVo.dateDebut.dateDbToFr();
								lVo.dateFin = getDernierJourDuMois();
								lResponse.dateFin = lVo.dateFin.dateDbToFr();
							}
							if(pParam && pParam.vr) {
								lVo.vr = pParam.vr;
							}
							
							var lGestionCommandeTemplate = new GestionCommandeTemplate();
							$('#contenu').replaceWith(that.affectEntete($(lGestionCommandeTemplate.rechercheListeFacture.template(lResponse))));
							that.recherche(lVo);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};

	this.affectEntete = function(pData) {
		pData = this.affectModeMarche(pData);
		pData = this.affectAjoutFacture(pData);
		pData = this.affectControleDatepicker(pData);
		pData = this.affectRechercheListeFacture(pData);		
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectModeMarche = function(pData) {
		if(this.mIdMarche > 0) {
			var that = this;
			pData.find('#form-recherche-liste-facture').remove();
			pData.find('.com-barre-menu-2').show();
			pData.find('#btn-retour').click(function() {
				EditerCommandeVue({"id_marche":that.mIdMarche});
			});
		}
		return pData;
	};
	
	this.affectControleDatepicker = function(pData) {
		pData = gCommunVue.comLienDatepicker('dateDebut','dateFin',pData);
		pData.find('#dateDebut, #dateFin').datepicker( "option", "yearRange", '1900:c' );
		return pData;
	};
	
	this.affectRechercheListeFacture = function(pData) {
		var that = this;
		pData.find('#btn-rechercher-liste-facture').click(function() {
			var lVo = new RechercheListeFactureVO();
			lVo.dateDebut = $('#dateDebut').val().dateFrToDb();
			lVo.dateFin = $('#dateFin').val().dateFrToDb();
			lVo.idMarche = $('#idMarche').val();

			var lValid = new FactureValid();
			var lVr = lValid.validRechercheListeFacture(lVo);

			Infobulle.init(); // Supprime les erreurs
			if(lVr.valid) {
				that.recherche(lVo);
			} else {
				Infobulle.generer(lVr,'');
			}
		});
		return pData;
	};
	
	this.recherche = function(pVo) {
		var that = this;
		pVo.fonction = "rechercher";
		$.post(	"./index.php?m=GestionCommande&v=Facture", "pParam=" + $.toJSON(pVo),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pVo && pVo.vr) {
								Infobulle.generer(pVo.vr,'');
							}
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();

		if(lResponse.listeFacture.length > 0 && lResponse.listeFacture[0].id != null) {			
			lResponse.sigleMonetaire = gSigleMonetaire;
			$.each(lResponse.listeFacture, function() {
				this.montant = this.montant.nombreFormate(2,',',' ');
				this.dateTri = this.date.extractDbDate().dateDbToTri();
				this.date = this.date.extractDbDate().dateDbToFr();
				
				if( this.numero == null) {
					this.numero = '';
				} else {
					this.numero = lGestionCommandeTemplate.listeFactureNumeroMarche.template(this);
				}
			});			
			$('#liste-facture').html(that.affect($(lGestionCommandeTemplate.listeFacture.template(lResponse))));
		} else {
			$('#liste-facture').html(that.affect($(lGestionCommandeTemplate.listeFactureVide)));
		}
		
	};
	
	this.affect = function(pData) {
		pData = this.affectTri(pData);
		pData = this.affectAfficherFacture(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectTri = function(pData) {
		pData.tablesorter({sortList: [[0,1]], headers: { 4: {sorter: false}, 5: {sorter: false} }});
		return pData;
	};

	this.affectAjoutFacture = function(pData) {
		var that = this;
		pData.find('#btn-nv-facture').click(function() {
			var lParam = {};
			if(that.mIdMarche > 0) {
				lParam.idMarche = that.mIdMarche;
			}
			EditionFactureVue(lParam);
		});
		return pData;
	};
	
	this.affectAfficherFacture = function(pData) {
		var that = this;
		pData.find('.btn-afficher-facture').click(function() {
			var lParam = {id:$(this).data("id-facture")};
			if(that.mIdMarche > 0) {
				lParam.idMarche = that.mIdMarche;
			}
			EditionFactureVue(lParam);
		});
		return pData;
	};
	
	this.construct(pParam);
};;function ListeAchatMarcheVue(pParam) {
	this.mIdMarche = null;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {ListeAchatMarcheVue(pParam);}} );
		var that = this;
		pParam.fonction = 'afficher';
		$.post(	"./index.php?m=GestionCommande&v=ListeAchatMarche", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							that.mIdMarche = pParam.id_marche;
							that.afficher(lResponse);
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(pResponse) {
		var that = this;
		// Met le bouton en actif		
		$(pResponse.listeAchatEtReservation).each(function() {
			if(this.idOperation == null) { 
				this.achat = 'ui-helper-hidden';
				this.idOperation = '';
			} else {
				this.achat = '';
			}
			//if(this.achat == null) { this.achat = '';}
			this.adhIdTri = this.adhNumero.replace("Z","");
		});

		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		
		// Affiche les achats invite uniquement si il y en a
		pResponse.achatInvite = "";
		if(pResponse.listeAchatInvite && pResponse.listeAchatInvite[0] && pResponse.listeAchatInvite[0].id != null) {
			$(pResponse.listeAchatInvite).each(function() {
				if(this.typePaiement == 7){
					this.achatSolidaire = 'ui-helper-hidden';
					this.achat = '';
				} else {
					this.achatSolidaire = '';
					this.achat = 'ui-helper-hidden';
				}
				this.montant = (this.montant * -1).nombreFormate(2,',',' ');
			});
	
			pResponse.sigleMonetaire = gSigleMonetaire;
			
			pResponse.achatInvite = lGestionCommandeTemplate.listeAchatInvite.template(pResponse);
		}
		
		pResponse.infoMarcheSelected = '';
		pResponse.listeReservationSelected = '';
		pResponse.listeAchatSelected = 'ui-state-active';
		pResponse.resumeMarcheSelected = '';
		
		pResponse.editerMenu = lGestionCommandeTemplate.editerMarcheMenu.template(pResponse);
		pResponse.rechercheAchat = '';
		pResponse.achatAdherent = lGestionCommandeTemplate.listeAchatEtReservationVide;
		
		if(pResponse.listeAchatEtReservation.length > 0 && pResponse.listeAchatEtReservation[0].adhId != null) {
			pResponse.rechercheAchat = lGestionCommandeTemplate.rechercheAchatAdherent;
			pResponse.achatAdherent = lGestionCommandeTemplate.listeAchatAdherent.template(pResponse);
		}			
		
		$('#contenu').replaceWith(that.affectAchatEtReservation($(lGestionCommandeTemplate.listeAchatEtReservation.template(pResponse))));
	};	

	this.affectAchatEtReservation = function(pData) {
		pData = this.affectTri(pData);
		pData = this.affectRecherche(pData);
		pData = this.affectAchat(pData);
		pData = this.affectExportDataEtReservation(pData);
		pData = this.affectMenu(pData);
		pData = this.affectToggleAchatInvite(pData);
		return pData;
	};
	
	this.affectMenu = function(pData) {
		var that = this;
		pData.find('#btn-information-marche').click(function() {
			EditerCommandeVue(that.mParam);
		});		
		pData.find("#btn-liste-achat-resa").click(function() {
			ListeAchatMarcheVue({id_marche:that.mIdMarche});
		});
		pData.find("#btn-liste-resa").click(function() {
			ListeReservationMarcheVue({id_marche:that.mIdMarche});
		});
		pData.find("#btn-resume-marche").click(function() {
			ResumeMarcheVue({id_marche:that.mIdMarche});
		});
		return pData;
	};
	
	this.affectTri = function(pData) {
		pData.find('#edt-com-liste-resa').tablesorter({sortList: [[2,0]],headers: { 4: {sorter: false} }});
		return pData;
	};
	
	this.affectRecherche = function(pData) {
		pData.find("#filter").keyup(function() {
		    $.uiTableFilter( $('#edt-com-liste-resa'), this.value );
		  });
		pData.find("#filter-form").submit(function () {return false;});
		return pData;
	};

	this.affectExportDataEtReservation = function(pData) {		
		var that = this;
		pData.find('#btn-export-achat')
		.click(function() {			
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			var lTemplate = lGestionCommandeTemplate.dialogExportListeAchatEtReservation;
			
			$(lTemplate.template(that.mMarche)).dialog({
				autoOpen: true,
				modal: true,
				draggable: false,
				resizable: false,
				width:600,
				buttons: {
					'Exporter': function() {
						lParam = {fonction:"exportAchatEtReservation",id_marche:that.mIdMarche};
						$.download("./index.php?m=GestionCommande&v=ListeAchatMarche", lParam);
					},
					'Annuler': function() {
						$(this).dialog('close');
					}
				},
				close: function(ev, ui) { $(this).remove(); Infobulle.init(); }	
			});
			
		});
		return pData;
	};
	
	this.affectAchat = function(pData) {
		var that = this;
		/*pData.find('.edt-com-achat-ligne').click(function() {
			AchatAdherentVue({"id_marche":that.mIdMarche,"id_adherent":$(this).attr('id-adherent'), "idOperation" : ''});
		});*/
		
		pData.find('.edt-com-achat-ligne-invite, .edt-com-achat-ligne').click(function() {
			/*var lParam = {
					id_adherent:$(this).data("id-adherent"),
					id_commande:that.mIdMarche,
					module:'GestionCommande',
					retour:'AchatMarche'};
			if(!$(this).data("id-operation").isEmpty()) {
				lParam.id = $(this).data("id-operation");
			}*/
			CaisseVue({
				id :$(this).data("id-operation"),
				id_adherent:$(this).data("id-adherent"),
				id_commande:that.mIdMarche,
				module:'GestionCommande',
				retour:'AchatMarche'});
		});
		return pData;
	};
	
	this.affectToggleAchatInvite = function(pData) {
		pData.find('#entete-achat-invite').click(function() {
			$('#icon-achat-invite').toggleClass('ui-icon-triangle-1-s').toggleClass('ui-icon-triangle-1-n');
			$('.detail-achat-invite').toggle();
		});
		return pData;
	};
	
	this.construct(pParam);
}
	;function AchatAdherentVue(pParam) {
	this.pParam = {};
	this.mAdherent = null;
	this.infoReservation = {};
	this.mAchat = {detailAchat:[], detailAchatSolidaire:[]};
	this.produit = [];

	this.construct = function(pParam) {
		$.history( {'vue':function() {AchatAdherentVue(pParam);}} );
		var that = this;
		this.pParam = pParam;
		pParam.fonction = "afficher";
		$.post(	"./index.php?m=GestionCommande&v=AchatAdherent", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.mAdherent = lResponse.adherent;						
							that.infoReservation = lResponse.reservation;
							that.produit = lResponse.detailProduit;
							$(lResponse.achats).each(function() {
								if(this.detailAchat.length > 0) {
									that.mAchat.idAchat = this.id.idAchat;
									that.mAchat.detailAchat = this.detailAchat;
								}
								if(this.detailAchatSolidaire.length > 0) {
									that.mAchat.idAchatSolidaire = this.id.idAchat;
									that.mAchat.detailAchatSolidaire = this.detailAchatSolidaire;
								}
								if(this.dateAchat) {
									that.mAchat.dateAchat = this.dateAchat;
								}
							});
					
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(pResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.detailAchatEtReservationEnteteInvite;
		
		var lDataEntete = {};
		lDataEntete.detailAchat = lGestionCommandeTemplate.detailAchatVide;
		if(this.mAdherent.adhId && this.mAdherent.adhId != null) {
			lDataEntete.adhId = this.mAdherent.adhId;
			lDataEntete.adhNumero = this.mAdherent.adhNumero;
			lDataEntete.adhCompte = this.mAdherent.cptLabel;
			lDataEntete.adhNom = this.mAdherent.adhNom;
			lDataEntete.adhPrenom = this.mAdherent.adhPrenom;
			lDataEntete.adhSolde = this.mAdherent.cptSolde.nombreFormate(2,',',' ');
			
			lTemplate = lGestionCommandeTemplate.detailAchatEtReservationEntete;
		}
		lDataEntete.sigleMonetaire = gSigleMonetaire;
		
		var lData = {};
		lData.sigleMonetaire = gSigleMonetaire;		
		
		// Si il y a au moins un produit à afficher
		if(that.produit[0] && that.produit[0].proId != null) {
			if(this.infoReservation) {
				lData.totalReservation = (this.infoReservation.total * -1).nombreFormate(2,',',' ');
			}
			lData.reservation = [];
			
			lData.categories = [];
			lData.sigleMonetaire = gSigleMonetaire;
			lData.total = 0;
			lData.totalSolidaire = 0;
		
			$.each(that.produit, function() {
				var lProduit = this ;
				$(that.mAchat).each(function() {
					var lAchat = {
					unite: lProduit.proUniteMesure,
					proId: lProduit.proId,
					nproNom : lProduit.nproNom ,
					stoQuantiteReservation : "", proUniteMesureReservation : "",
					stoQuantite : "", stoQuantiteAffiche : "", prix : "", prixAffiche : "", proUniteMesure : "", sigleMonetaire : "",
					stoQuantiteSolidaire : "", stoQuantiteSolidaireAffiche : "", prixSolidaire : "", prixSolidaireAffiche : "", proUniteMesureSolidaire : "", sigleMonetaireSolidaire : ""};
					
					if(that.infoReservation) {
						$(that.infoReservation.detailReservation).each(function() {
							if(this.idProduit == lProduit.proId) {
								lAchat.stoQuantiteReservation = (this.quantite * -1).nombreFormate(2,',',' ');
								lAchat.proUniteMesureReservation = lProduit.proUniteMesure;
							}					
						});
					}
					
					$(this.detailAchat).each(function() {	
						if(this.idProduit == lProduit.proId) {
							lAchat.stoQuantiteAffiche = (this.quantite * -1).nombreFormate(2,',',' ');
							lAchat.stoQuantite = (this.quantite * -1).nombreFormate(2,',','');
							lAchat.prixAffiche = (this.montant * -1).nombreFormate(2,',',' ');
							lAchat.prix = (this.montant * -1).nombreFormate(2,',','');
							lAchat.proUniteMesure = lProduit.proUniteMesure;
							lAchat.sigleMonetaire = gSigleMonetaire;
							
							lData.total += this.montant * -1;					
						}					
					});		
					
					$(this.detailAchatSolidaire).each(function() {	
						if(this.idProduit == lProduit.proId) {
							lAchat.stoQuantiteSolidaireAffiche = (this.quantite * -1).nombreFormate(2,',',' ');
							lAchat.stoQuantiteSolidaire = (this.quantite * -1).nombreFormate(2,',','');
							lAchat.prixSolidaireAffiche = (this.montant * -1).nombreFormate(2,',',' ');
							lAchat.prixSolidaire = (this.montant * -1).nombreFormate(2,',','');
							lAchat.proUniteMesureSolidaire = lProduit.proUniteMesure;
							lAchat.sigleMonetaireSolidaire = gSigleMonetaire;
							
							lData.totalSolidaire += this.montant * -1;
						}					
					});	
					
					if(!lData.categories[lProduit.cproNom]) {
						lData.categories[lProduit.cproNom] = {nom:lProduit.cproNom,achat:[]};
					}
					lData.categories[lProduit.cproNom].achat.push(lAchat);
					
					if(this.idAchat) {
						lData.boutonSupprimerAchat = lGestionCommandeTemplate.boutonSupprimerAchat.template({idAchat:this.idAchat});		
						lData.idAchat = this.idAchat;					
					} else {
						lData.idAchat = -1;
					}
					
					if(this.idAchatSolidaire) {
						lData.boutonSupprimerAchatSolidaire = lGestionCommandeTemplate.boutonSupprimerAchatSolidaire.template({idAchat:this.idAchatSolidaire});
						lData.idAchatSolidaire = this.idAchatSolidaire;						
					} else {
						lData.idAchatSolidaire = -2;
					}
				});
			});
		
			// N'affiche la date d'achat qu si il y a eu un achat
			if(that.mAchat.dateAchat) {
				lData.dateAchat = lGestionCommandeTemplate.dateAchat.template({dateAchat:that.mAchat.dateAchat.extractDbDate().dateDbToFr()});
			}
			
			lData.totalMarche = lData.total + lData.totalSolidaire;
			
			lData.total = lData.total.nombreFormate(2,',',' ');
			lData.totalSolidaire = lData.totalSolidaire.nombreFormate(2,',',' ');
			lData.totalMarche = lData.totalMarche.nombreFormate(2,',',' ');
			
			lDataEntete.detailAchat = lGestionCommandeTemplate.detailAchatEtReservation.template(lData);
		}
		
		var lHtml = $(lTemplate.template(lDataEntete));
		if(that.pParam.id_adherent == -3) {
			lHtml.find('.col-reservation').remove();
			if(lData.idAchat > 0) {
				lHtml.find('.col-achat-solidaire').remove();
			} else {
				lHtml.find('.col-achat').remove();
			}
		}

		$('#contenu').replaceWith(that.affect($(lHtml)));	
	};
		
	this.affect = function(pData) {
		pData = this.affectRetour(pData);
		pData = this.affectAjoutProduit(pData);
		pData = this.affectModifierAchat(pData);
		pData = this.affectSupprimerAchat(pData);
		pData = this.affectCalculTotal(pData);
		pData = gCommunVue.comHoverBtn(pData);		
		pData = gCommunVue.comNumeric(pData);
		return pData;
	};
	
	this.affectRetour = function(pData) {
		var that = this;
		pData.find('#btn-annuler').click(function() {
			ListeAchatMarcheVue({"id_marche":that.pParam.id_marche});		
		});
		return pData;
	};
	
	this.affectAjoutProduit = function(pData) {
		var that = this;
		pData.find('#btn-nv-produit').click(function() {
			that.dialogAjoutProduit();
		});
		return pData;
	};
	
	this.dialogAjoutProduit = function(pData) {
		var that = this;
		var lParam = {fonction:"listeFerme"};
		$.post(	"./index.php?m=GestionCommande&v=AchatAdherent", "pParam=" + $.toJSON(lParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							var lGestionCommandeTemplate = new GestionCommandeTemplate();
							var lTemplate = lGestionCommandeTemplate.dialogAjoutAchatProduit;
							
							$(that.affectAjoutProduitSelectFerme($(lTemplate.template(lResponse)))).dialog({			
								autoOpen: true,
								modal: true,
								draggable: true,
								resizable: false,
								width:900,
								buttons: {
									'Ajouter': function() {
										that.ajouterProduit($(this));
									},
									'Annuler': function() {
										$(this).dialog('close');
									}
								},
								close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
							});
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);	
		return pData;
	};
	
	this.affectAjoutProduitSelectFerme = function(pData) {
		var that = this;
		pData.find("#pro-idFerme select").change(function() {
			Infobulle.init(); // Supprime les erreurs
			var lId = $(this).val();
			$("#pro-idCategorie select, #pro-idProduit select").prop("disabled",true).selectOptions("0");
			$("#detail-produit").replaceWith("<div id=\"detail-produit\"></div>");
			if(lId > 0) {
				var lParam = {fonction:"listeProduit",id:lId};
				$.post(	"./index.php?m=GestionCommande&v=AchatAdherent", "pParam=" + $.toJSON(lParam),
					function (lResponse) {		
						if(lResponse) {
							if(lResponse.valid) {
								Infobulle.init(); // Supprime les erreurs
								
								if(lResponse.listeProduit.length > 0 && lResponse.listeProduit[0].nproId != null) {
								
									that.mProduits = [];
									var lIdCategorie = 0;
									var lListeCategorie = [];
									$.each(lResponse.listeProduit,function() {
										if(that.mProduits[this.cproId]) {
											that.mProduits[this.cproId].listeProduit.push(this);
										} else {
											that.mProduits[this.cproId] = {nom:this.cproNom,listeProduit:[this]};
										}
										if(lIdCategorie != this.cproId) {
											lListeCategorie.push({cproId:this.cproId,cproNom:this.cproNom});
											lIdCategorie = this.cproId;
										}
									});
									
	
									var lGestionCommandeTemplate = new GestionCommandeTemplate();
									var lTemplate = lGestionCommandeTemplate.ajoutProduitSelectCategorie;
									
									$("#pro-idCategorie").replaceWith(that.affectAjoutProduitSelectCategorie($(lTemplate.template({listeCategorie:lListeCategorie}))));
									
								} else {
									// Message d'information
									var lVr = new TemplateVR();
									lVr.valid = false;
									lVr.log.valid = false;
									var erreur = new VRerreur();
									erreur.code = ERR_332_CODE;
									erreur.message = ERR_332_MSG;
									lVr.log.erreurs.push(erreur);
									Infobulle.generer(lVr,'');
									$("#detail-achat").replaceWith($("<div id=\"detail-achat\">"));
								}
							} else {
								Infobulle.generer(lResponse,'');
								$("#detail-achat").replaceWith($("<div id=\"detail-achat\">"));
							}
						}
					},"json"
				);
			} else {
				$("#detail-achat").replaceWith($("<div id=\"detail-achat\">"));
			}	 
						
		});
		return pData;
	};
	
	this.affectAjoutProduitSelectCategorie = function(pData) {
		var that = this;
		pData.find("select").change(function() {
			Infobulle.init(); // Supprime les erreurs
			var lId = $(this).val();
			$("#pro-idProduit select").prop("disabled",true).selectOptions("0");
			$("#detail-produit").replaceWith("<div id=\"detail-produit\"></div>");
			if(lId > 0) {
				var lGestionCommandeTemplate = new GestionCommandeTemplate();
				var lTemplate = lGestionCommandeTemplate.ajoutProduitSelectProduit;
				
				$("#pro-idProduit").replaceWith(that.affectAjoutProduitSelectProduit($(lTemplate.template(that.mProduits[lId]))));
			} else {
				$("#detail-achat").replaceWith($("<div id=\"detail-achat\">"));
			}			
		});
		return pData;
	};
	
	this.affectAjoutProduitSelectProduit = function(pData) {
		var that = this;
		pData.find("select").change(function() {
			var lId = $(this).val();
			Infobulle.init(); // Supprime les erreurs
			if(lId > 0) {
				// Filtre si le produit n'est pas déjà dans l'achat
				var lAfficheProduit = true;
				$(that.produit).each(function() {
					if(this.nproId == lId) {
						lAfficheProduit = false;
					}
				});
				if(lAfficheProduit) {
					var lParam = {fonction:"listeUnite",id:lId};
					$.post(	"./index.php?m=GestionCommande&v=AchatAdherent", "pParam=" + $.toJSON(lParam),
						function (lResponse) {		
							if(lResponse) {
								if(lResponse.valid) {
									Infobulle.init(); // Supprime les erreurs
									
									var lGestionCommandeTemplate = new GestionCommandeTemplate();
									var lTemplate = lGestionCommandeTemplate.detailProduitAjoutAchatProduit;
									
									var lUnite = '';
									$.each(lResponse.unite, function() {
										lUnite = this.mLotUnite;
									});

									var lData = {unite: lUnite, sigleMonetaire: gSigleMonetaire, idProduit: lId};
																	
									$("#detail-achat").replaceWith(that.affectDetailProduit($(lTemplate.template(lData))));
									
								} else {
									Infobulle.generer(lResponse,'');
								}
							}
						},"json"
					);
				} else {
					// Message d'information
					var lVr = new TemplateVR();
					lVr.valid = false;
					lVr.log.valid = false;
					var erreur = new VRerreur();
					erreur.code = ERR_262_CODE;
					erreur.message = ERR_262_MSG;
					lVr.log.erreurs.push(erreur);
					Infobulle.generer(lVr,'');
					$("#detail-achat").replaceWith($("<div id=\"detail-achat\">"));
				}
			} else {
				$("#detail-achat").replaceWith($("<div id=\"detail-achat\">"));
			}			
		});
		return pData;
	};
	
	this.affectDetailProduit = function(pData) {		
		if(this.pParam.id_adherent == -3) {
			pData = this.affectAjoutProduitCompteInvite(pData);
		}
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		return pData;		
	};
	
	this.affectAjoutProduitCompteInvite = function(pData) {
		pData.find('#choixTypeAchat').remove();
		return pData;
	};
	
	this.ajouterProduit = function(pDialog) {
		if(pDialog.find('#pro-id').length == 1) {
			var that = this;
			
			var lVo = new ProduitAjoutAchatVO();
			
			lVo.idMarche = this.pParam.id_marche;
			lVo.idNomProduit = pDialog.find('#pro-id').val();
			lVo.prix = pDialog.find('#pro-prix').val().numberFrToDb() * -1;
			lVo.quantite = pDialog.find('#pro-quantite').val().numberFrToDb() * -1;
			
			// Pour le compte invité sélection du type d'achat
			if(this.pParam.id_adherent == -3) {
				lVo.idCompte = -3;
				lVo.idOperation = this.pParam.idOperation;
				if(that.mAchat.idAchat) {
					lVo.solidaire = 0;
				} else {
					lVo.solidaire = 1;
				}
			} else {
				lVo.idCompte = this.mAdherent.adhIdCompte;
				lVo.solidaire = pDialog.find(':input[name=typeProduit]:checked').val();
			}
			
			var lValid = new ProduitAjoutAchatValid();
			var lVr = lValid.validAjout(lVo);
			
			Infobulle.init(); // Supprime les erreurs
			if(lVr.valid) {
				lVo.fonction = "ajoutProduitAchat";
				$.post(	"./index.php?m=GestionCommande&v=AchatAdherent", "pParam=" + $.toJSON(lVo),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse && lResponse.valid) {
								var lMsg = new TemplateVR();
								lMsg.valid = false;
								lMsg.log.valid = false;
								var erreur = new VRerreur();
								erreur.code = ERR_314_CODE;
								erreur.message = ERR_314_MSG;
								lMsg.log.erreurs.push(erreur);
								
								pDialog.dialog('close');
								that.rechargerPage();
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
				},"json");
			} else {
				Infobulle.generer(lVr,'pro-');
			}
		}
	};
	
	this.rechargerPage = function() {
		this.mAdherent = null;
		this.infoReservation = {};
		this.mAchat = {detailAchat:[], detailAchatSolidaire:[]};
		this.produit = [];
		this.construct(this.pParam);
	};
	
	this.affectModifierAchat = function(pData) {
		var that = this;
		
		pData.find('#btn-modif-achat, #btn-annuler-achat').click(function() {
			$('.btn-achat, .detail-achat-qte, .detail-achat-prix, .total-achat, .solde, #btn-modif-achat-solidaire, #btn-supp-achat-solidaire').toggle();			
		});
		pData.find('#btn-modif-achat-solidaire, #btn-annuler-achat-solidaire').click(function() {
			$('.btn-achat-solidaire, .detail-achat-qte-solidaire, .total-achat-solidaire, .solde, .detail-achat-prix-solidaire, #btn-modif-achat, #btn-supp-achat').toggle();			
		});
		pData.find("#btn-check-achat, #btn-check-achat-solidaire").click(function() {
			that.validerModifierAchat($(this).data("id-achat"), $(this).data("type"));
		});
		
		pData.find('#btn-modif-achat').click(function() {
			that.initFormModifierAchat('');
		});
		pData.find('#btn-modif-achat-solidaire').click(function() {
			that.initFormModifierAchat('-solidaire');
		});
		return pData;
	};
	
	this.initFormModifierAchat = function(pType) {
		var lTotal = 0;
		$('.ligne-produit-achat').each(function() {		
			// Initialise prix et qté pour le formulaire de modification de l'achat
			var lQuantite = parseFloat($(this).find(".affiche-produit-quantite" + pType).text().numberFrToDb());
			if(isNaN(lQuantite)){
				lQuantite = 0;
			}
			lQuantite = lQuantite.nombreFormate(2,',','');
			$(this).find(".produit-quantite" + pType).val(lQuantite);
			
			var lprix = parseFloat($(this).find(".affiche-produit-prix" + pType).text().numberFrToDb());
			if(isNaN(lprix)){
				lprix = 0;
			}
			lTotal = (parseFloat(lTotal) + parseFloat(lprix)).toFixed(2);
			
			lprix = lprix.nombreFormate(2,',','');
			$(this).find(".produit-prix" + pType).val(lprix);
		});
		$('#affiche-total-modification' + pType).text(lTotal.nombreFormate(2,',',' '));
		
		$('#affiche-solde-modification').text($('#affiche-solde').text());
	};
	
	this.affectCalculTotal = function(pData) {
		var that = this;
		pData.find('.produit-prix').keyup(function() {
			that.majTotal('');
		});
		pData.find('.produit-prix-solidaire').keyup(function() {
			that.majTotal('-solidaire');
		});
		return pData;
	};
	
	this.majTotal = function(pType) {
		var lTotal = 0;
		$('.produit-prix' + pType).each(function() {
			var lPrix = parseFloat($(this).val().numberFrToDb());
			if(!isNaN(lPrix)) {
				lTotal = (parseFloat(lTotal) + lPrix).toFixed(2);
			}
		});
		$('#affiche-total-modification' + pType).text(lTotal.nombreFormate(2,',',' '));
		
		var lSolde = parseFloat($('#affiche-solde').text().numberFrToDb());
		if(isNaN(lSolde)) {
			lSolde = 0;
		}
		
		var lTotalInit = parseFloat($('#affiche-total'  + pType).text().numberFrToDb());
		if(isNaN(lTotalInit)) {
			lTotalInit = 0;
		}
		
		lSolde = (lSolde + lTotalInit - lTotal).toFixed(2);
		$('#affiche-solde-modification').text(lSolde.nombreFormate(2,',',' '));
		
	};
	
	this.affectSupprimerAchat = function(pData) {
		var that = this;
		pData.find('#btn-supp-achat, #btn-supp-achat-solidaire').click(function() {
			that.supprimerAchat($(this).data("id-achat"));
		});
		return pData;
	};
	
	this.validerModifierAchat = function(pIdAchat, pType) {
		var that = this;
		
		if(pType != '') {pType = '-' + pType;}
		
		var lAchat = {};
		lAchat.idAchat = pIdAchat;
		lAchat.produits = [];
		var lProduit = [];
		$('.ligne-produit-achat').each(function() {
			var lVoProduit = new ProduitAchatVO();
			lVoProduit.id = $(this).data("id-produit");			
			var lQuantite = $(this).find(".produit-quantite" + pType).val().numberFrToDb();
			
			// Si il y a une quantité vérificaiton du prix
			if(!isNaN(lQuantite) && !lQuantite.isEmpty() && lQuantite != 0){
				lQuantite = parseFloat(lQuantite);
				lVoProduit.quantite = lQuantite * -1;			
			
				var lprix = $(this).find(".produit-prix" + pType).val().numberFrToDb();
				if(!isNaN(lprix) && !lprix.isEmpty() && lprix != 0){
					lprix = parseFloat(lprix);
					lVoProduit.prix = lprix * -1;
				}
				lAchat.produits.push(lVoProduit);
			} else {
				var lprix = $(this).find(".produit-prix" + pType).val().numberFrToDb();
				if(!isNaN(lprix) && !lprix.isEmpty() && lprix != 0) {
					lprix = parseFloat(lprix);
					lVoProduit.prix = lprix * -1;
					lAchat.produits.push(lVoProduit);
				}
			}
			lProduit.push(lVoProduit);
		});
		
		if(parseInt(pIdAchat) < 0) { // Si c'est ajout un achat
			lAchat.idCompte = that.mAdherent.adhIdCompte;
			lAchat.idMarche = that.pParam.id_marche;
		}
		
		var lValid = new AchatAdherentValid();
		var lVr = lValid.validUpdate(lAchat);
		
		Infobulle.init(); // Supprime les erreurs
		if(lVr.valid) {
			var lParam ={fonction:"modifierAchat",achat:lAchat};
			$.post(	"./index.php?m=GestionCommande&v=AchatAdherent", "pParam=" + $.toJSON(lParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse && lResponse.valid) {
							var lMsg = new TemplateVR();
							lMsg.valid = false;
							lMsg.log.valid = false;
							var erreur = new VRerreur();
							erreur.code = ERR_314_CODE;
							erreur.message = ERR_314_MSG;
							lMsg.log.erreurs.push(erreur);

							that.pParam.vr = lMsg;
							that.rechargerPage(that.pParam);
							
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
			},"json");
		} else {
			Infobulle.generer(lVr,'achat-' + pIdAchat + '-');
		}
	};	
	
	this.supprimerAchat = function(pIdAchat) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.dialogSupprimerAchat;
		
		$(lTemplate).dialog({
			autoOpen: true,
			modal: true,
			draggable: false,
			resizable: false,
			width:600,
			buttons: {
				'Supprimer': function() {
					var lDialog = this;
					var lParam ={fonction:"supprimerAchat",idAchat:pIdAchat};
					$.post(	"./index.php?m=GestionCommande&v=AchatAdherent", "pParam=" + $.toJSON(lParam),
						function(lResponse) {
							Infobulle.init(); // Supprime les erreurs
							if(lResponse) {
								if(lResponse && lResponse.valid) {								
									var lMsg = new TemplateVR();
									lMsg.valid = false;
									lMsg.log.valid = false;
									var erreur = new VRerreur();
									erreur.code = ERR_315_CODE;
									erreur.message = ERR_315_MSG;
									lMsg.log.erreurs.push(erreur);
									
									that.pParam.vr = lMsg;
									//Si compte invité retour à la liste des achats
									if(that.pParam.id_adherent == -3) {
										ListeAchatMarcheVue({"id_marche":that.pParam.id_marche});
									} else {
										that.rechargerPage(that.pParam);
									}
									
									$(lDialog).dialog('close');
								} else {
									Infobulle.generer(lResponse,'');
								}
							}
					},"json");
			
				},
				'Annuler': function() {
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }	
		});
		
	};	
	this.construct(pParam);
};function EditionFactureVue(pParam) {
	this.mListeProduit = [];
	this.mDetailFacture = [];
	this.mFactureInitiale = {};
	this.mCompteurStock = 0;
	this.mNbProduit = 0;
	this.mTypePaiementSelect = 0;
	this.mTypePaiement = [];
	this.mBanques = [];
	this.mFermes = [];
	this.mTypeEdition = 0;
	this.mIdMarche = 0;
	this.mIdFacture = 0;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {EditionFactureVue(pParam);}} );
		var that = this;
		
		if(pParam && pParam.idMarche) { // En mode Marché
			this.mIdMarche = pParam.idMarche;
		}
		
		var lVo = {};
		if(pParam && pParam.id) { // Affiche une facture
			this.mIdFacture = pParam.id;
			lVo.id = pParam.id;
			lVo.fonction = 'afficherFacture';
			this.mTypeEdition = 1;
		} else { // Le formulaire de création de facture
			lVo.fonction = 'listeFerme';
			this.mTypeEdition = 0;
		}
		
		$.post(	"./index.php?m=GestionCommande&v=Facture", "pParam=" + $.toJSON(lVo),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.mTypePaiement = lResponse.typePaiement;
							that.mBanques = lResponse.banques;
							
							if(that.mTypeEdition == 0) { // Pour la création
								$(lResponse.listeFerme).each(function() {
									that.mFermes[this.ferId] = this;
								});
							}
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		if(this.mTypeEdition == 0) { // Pour le formulaire de création
			if(lResponse.listeFerme.length > 0 && lResponse.listeFerme[0].ferId != null) {		
				lResponse.listeFermeAffiche = lGestionCommandeTemplate.factureSelectFerme.template(lResponse);
			} else {
				// Pas de ferme on n'affiche pas le formulaire
				var lVR = new Object();
				var erreur = new VRerreur();
				erreur.code = ERR_265_CODE;
				erreur.message = ERR_265_MSG;
				lVR.valid = false;
				lVR.log = new VRelement();
				lVR.log.valid = false;
				lVR.log.erreurs.push(erreur);
				Infobulle.generer(lVR,'');
			}
		} else { // Affiche et modification de facture
			this.mResponseAfficheFacture = lResponse;
			
			lResponse.numeroFacture = lResponse.facture.id.champComplementaire[11].valeur;
			lResponse.listeFermeAffiche = lResponse.ferme.nom;
		}
		
		$('#contenu').replaceWith(that.affect($(lGestionCommandeTemplate.facture.template(lResponse))));	
		
		if(this.mTypeEdition == 1) {
			this.afficheListeProduit(lResponse);
		}
	};
	
	this.affect = function(pData) {
		pData = this.retour(pData);
		pData = this.affectSelectFerme(pData);
		pData = this.affectExport(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectExport = function(pData) {
		if(this.mTypeEdition == 1) {
			var that = this;	
			pData.find('#btn-export-facture').show()
				.click(function() {
				var lGestionCommandeTemplate = new GestionCommandeTemplate();
				$(lGestionCommandeTemplate.dialogExportFacture).dialog({
					autoOpen: true,
					modal: true,
					draggable: false,
					resizable: false,
					width:600,
					buttons: {
						'Exporter': function() {
							// Récupération du formulaire
							var lFormat = $(this).find(':input[name=format]:checked').val();
							
							var lParam = new ExportFactureVO();
							lParam.id = that.mIdFacture;
							lParam.format = lFormat;
							lParam.fonction = "export";
												
							// Test des erreurs
							var lValid = new ExportFactureValid();
							var lVr = lValid.validAjout(lParam);
							
							Infobulle.init(); // Supprime les erreurs
							if(lVr.valid) {
								// Affichage
								$.download("./index.php?m=GestionCommande&v=Facture", lParam);
							} else {
								Infobulle.generer(lVr,'');
							}
						},
						'Annuler': function() {
							$(this).dialog('close');
						}
					},
					close: function(ev, ui) { $(this).remove(); Infobulle.init(); }
				});
			});
		}
		return pData;
	};
	
	this.retour = function(pData){
		var that = this;
		pData.find('#btn-retour').click(function() {
			var lParam = {};
			if(that.mIdMarche > 0) {
				lParam.idMarche = that.mIdMarche;
			}			
			FactureVue(lParam);
		});
		return pData;
	};
	
	this.affectSelectFerme = function(pData) {
		var that = this;
		pData.find('#select-ferme').change(function() {
			var lIdFerme = $(this).val();
			that.mCompteurStock = 0;
			that.mDetailFacture = [];
			that.mNbProduit = 0;
			if(lIdFerme == 0) {
				$('#btn-export-facture, #liste-pdt').hide();
			} else {
				var lVo = {fonction:"listeProduitFerme",id:lIdFerme, idMarche:''};
				if(that.mIdMarche > 0) {
					lVo.idMarche = that.mIdMarche;
				}
				$.post(	"./index.php?m=GestionCommande&v=Facture", "pParam=" + $.toJSON(lVo),
						function(lResponse) {
							Infobulle.init(); // Supprime les erreurs
							if(lResponse) {
								if(lResponse.valid) {
									if(pParam && pParam.vr) {
										Infobulle.generer(pParam.vr,'');
									}
									that.afficheListeProduit(lResponse);
								} else {
									Infobulle.generer(lResponse,'');
								}
							}
						},"json"
				);
			}
		});
		return pData;
	};

	this.afficheListeProduit = function(pResponse) {
		var that = this;
		this.mFactureInitiale = clone(pResponse);
		this.mListeProduit = [];

		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		if(pResponse.listeProduit.length > 0 && pResponse.listeProduit[0].nproId != null) {
			
			// Catalogue de produit
			$.each(pResponse.listeProduit,function() {
				if(that.mListeProduit[this.cproNom]) {
					that.mListeProduit[this.cproNom].produits.push(this);
				} else {
					that.mListeProduit[this.cproNom] = {id:this.cproId,nom:this.cproNom,produits:[this]};
				}
			});
			pResponse.listeProduit = this.mListeProduit;

			// Le paiement
			pResponse.banques = this.mBanques;
			pResponse.sigleMonetaire = gSigleMonetaire;
			pResponse.typePaiement = this.mTypePaiement;
			
			if(this.mTypeEdition == 1) {
				pResponse.montant = pResponse.facture.id.montant.nombreFormate(2,',','');
				pResponse.montantAffiche = pResponse.facture.id.montant.nombreFormate(2,',',' ');
				
				this.mTypePaiementSelect = pResponse.facture.operationZeybu.typePaiement;
				pResponse.tppType = pResponse.facture.operationZeybu.tppType;
				
				var lTypePaiementService = new TypePaiementService();
				var lChampComplementaire = [];
				if(this.mTypePaiement[pResponse.facture.operationZeybu.typePaiement]) {
					$(this.mTypePaiement[pResponse.facture.operationZeybu.typePaiement].champComplementaire).each(function() {				
						var lChamp = pResponse.facture.operationZeybu.champComplementaire[this.id];
						lChamp.id = this.id;
						lChamp.tppCpVisible = 1;
						lChamp.chCpLabel = this.label;
						lChampComplementaire.push(lChamp);
					});
				}
				pResponse.champComplementaire = lTypePaiementService.getFormChampcomplementaire(lChampComplementaire, this.mBanques);
				pResponse.champComplementaireAffiche = lTypePaiementService.getFormChampcomplementaire(lChampComplementaire, this.mBanques, true);
			}

			pResponse.detailFacture = lGestionCommandeTemplate.detailFactureVide.template(pResponse);
			var lData = $(lGestionCommandeTemplate.listeProduitFerme.template(pResponse));
			
			if(this.mTypeEdition == 1 ) {
				lData.find('#affiche-paiement-facture').toggle();
			} else if (this.mIdMarche > 0 && pResponse.listeProduitCommande[0] && pResponse.listeProduitCommande[0].cproId != null) {
				lData.find('#form-affiche-paiement-facture').toggle();
			}
			
			$('#liste-pdt').replaceWith(this.affectListeProduit(lData));	
			
			// Le détail de la facture
			if(this.mTypeEdition == 1) { // En modification
				this.afficheDetailProduit(pResponse.facture);
			} else if(this.mIdMarche > 0 && pResponse.listeProduitCommande[0] && pResponse.listeProduitCommande[0].cproId != null) { // En création sur marche si il y a des produits
				this.afficheDetailProduit({produits:pResponse.listeProduitCommande});
			}
		} else {
			$('#liste-pdt').replaceWith(lGestionCommandeTemplate.listeProduitFermeVide);
		}
	};
	
	this.affectListeProduit = function(pData) {
		pData = this.affectRecherche(pData);
		pData = this.affectSelectTypePaiement(pData);
		pData = this.affectAjoutProduitDetail(pData);
		pData = this.affectEnregistrer(pData);
		pData = this.affectModifier(pData);
		pData = this.affectSupprimer(pData);
		pData = this.affectAnnulerModifier(pData);
		
		var lTypePaiementService = new TypePaiementService();
		pData = lTypePaiementService.affect(pData, this.mBanques);
		
		pData = gCommunVue.comNumeric(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;		
	};
	
	this.affectSelectTypePaiement = function(pData) {
		var that = this;
		pData.find(":input[name=typepaiement]").change(function () {
			that.changerTypePaiement($(this));
		});
		
		pData.find(":input[name=typepaiement] option[value='" + that.mTypePaiementSelect + "']").prop("selected", true);
		return pData;
	};
	
	this.changerTypePaiement = function(pObj) {
		var lId = pObj.val();
		if(!this.mTypePaiement[lId] || (this.mTypePaiement[lId] && this.mTypePaiement[lId].champComplementaire.length == 0)) {
			$('.champ-complementaire').remove();
		} else {
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			var lTypePaiementService = new TypePaiementService();
			$('#ligne-operation').after(lTypePaiementService.affect($(lGestionCommandeTemplate.champComplementaire.template(this.mTypePaiement[lId])), this.mBanques));
		}
	};
	
	this.affectRecherche = function(pData) {
		pData.find("#filter-produit").keyup(function() {
		    $.uiTableFilter( $('#table-produit'), this.value );
		  });
		
		pData.find("#filter-form-produit").submit(function () {return false;});
		
		return pData;
	};
	
	this.affectAjoutProduitDetail = function(pData) {
		var that = this;
		pData.find('.btn-ajout-produit').click(function() {
			var lIdNomProduit = $(this).data('id-nom-produit');
			$.post(	"./index.php?m=GestionCommande&v=Facture", "pParam=" + $.toJSON({fonction: 'uniteProduit',id: lIdNomProduit}),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {
								if(pParam && pParam.vr) {
									Infobulle.generer(pParam.vr,'');
								}
								that.ajoutProduitDetail(lResponse);
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
					},"json"
			);
		});
		return pData;
	};
	
	this.ajoutProduitDetail = function(lResponse) {
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		// Ajout de la categorie	
		if(!this.mDetailFacture[lResponse.uniteNomProduit.cproId] || (this.mDetailFacture[lResponse.uniteNomProduit.cproId] && this.mDetailFacture[lResponse.uniteNomProduit.cproId].nbProduit < 1)) {		
			if(this.mDetailFacture.length == 0) { // Première catégorie du détail
				$('#table-detail-facture tbody').prepend(lGestionCommandeTemplate.categorieDetailFacture.template(lResponse.uniteNomProduit));
			} else {
				var lPosition = 0;
				var lIdCategorie = 0;
				for(i in this.mListeProduit) {
					if(lResponse.uniteNomProduit.cproId == this.mListeProduit[i].id) {
						lPosition = lIdCategorie;
					}
					if($('.cat-' + this.mListeProduit[i].id).length > 0) {
						lIdCategorie = this.mListeProduit[i].id;
					}
				}
				// Si elle doit être placée en premier
				if(lPosition == 0) {
					$('#table-detail-facture tbody').prepend(lGestionCommandeTemplate.categorieDetailFacture.template(lResponse.uniteNomProduit));
				} else {
					$('.cat-' + lPosition).last().after(lGestionCommandeTemplate.categorieDetailFacture.template(lResponse.uniteNomProduit));
				}
			}
			this.mDetailFacture[lResponse.uniteNomProduit.cproId] = {produits:[], nbProduit: 0};
		}
		this.mDetailFacture[lResponse.uniteNomProduit.cproId].nbProduit++;
		
		lResponse.uniteNomProduit.sigleMonetaire = gSigleMonetaire;
		
		// L'unite
		if(lResponse.uniteNomProduit.mLotUnite.length == 1) {
			lResponse.uniteNomProduit.unite = lResponse.uniteNomProduit.mLotUnite[0];
			lResponse.uniteNomProduit.uniteSolidaire = lResponse.uniteNomProduit.mLotUnite[0];
		} else {
			var lTabUnite = [];
			$.each(lResponse.uniteNomProduit.mLotUnite, function() {
				lTabUnite.push({unite:this});
			});
			lResponse.uniteNomProduit.unite = lGestionCommandeTemplate.uniteDetailFactureSelect.template({mLotUnite:lTabUnite,type:''});
			lResponse.uniteNomProduit.uniteSolidaire = lGestionCommandeTemplate.uniteDetailFactureSelect.template({mLotUnite:lTabUnite,type:'Solidaire'});
		}
		
		lResponse.uniteNomProduit.compteurStock = this.mCompteurStock;
		this.mCompteurStock++;
		
		// Ajout du produit
		if(this.mDetailFacture[lResponse.uniteNomProduit.cproId].produits.length == 0) { // Premier produit de la catégorie
			$('#cat-' + lResponse.uniteNomProduit.cproId).after(this.affectProduitDetailFacture($(lGestionCommandeTemplate.produitDetailFacture.template(lResponse.uniteNomProduit))));
		} else { // Recherche de la position
			var lPosition = 0;
			var lIdProduit = 0;

			for(i in this.mListeProduit[lResponse.uniteNomProduit.cproNom].produits) {
				if(lResponse.uniteNomProduit.nproId == this.mListeProduit[lResponse.uniteNomProduit.cproNom].produits[i].nproId) {
					lPosition = lIdProduit;
				}
				if($('.pro-' + this.mListeProduit[lResponse.uniteNomProduit.cproNom].produits[i].nproId).length > 0) {
					lIdProduit = this.mListeProduit[lResponse.uniteNomProduit.cproNom].produits[i].nproId;
				}
			}

			// Si elle doit être placée en premier
			if(lPosition == 0) {
				$('#cat-' + lResponse.uniteNomProduit.cproId).after(this.affectProduitDetailFacture($(lGestionCommandeTemplate.produitDetailFacture.template(lResponse.uniteNomProduit))));
			} else {
				$('.pro-' + lPosition).last().after(this.affectProduitDetailFacture($(lGestionCommandeTemplate.produitDetailFacture.template(lResponse.uniteNomProduit))));
			}
		}
		
		if(this.mDetailFacture[lResponse.uniteNomProduit.cproId].produits[lResponse.uniteNomProduit.nproId]) {
			this.mDetailFacture[lResponse.uniteNomProduit.cproId].produits[lResponse.uniteNomProduit.nproId].produit.push(lResponse.uniteNomProduit);
		} else {
			this.mDetailFacture[lResponse.uniteNomProduit.cproId].produits[lResponse.uniteNomProduit.nproId] = {produit:[lResponse.uniteNomProduit]};
		}
		
		if(this.mNbProduit == 0) { // Affiche le détail dès le premier produit
			if(this.mTypeEdition == 0) { 
				$('.detail-facture, #form-affiche-paiement-facture').toggle();
			} else if(this.mTypeEdition == 1) { // Pour la modification on affiche de nouveau le bouton enregistrer
				$('#btn-enregistrer-modifier-facture').show();
			}
		}
		this.mNbProduit++;
	};
	
	this.affectProduitDetailFacture = function(pData) {
		pData = this.affectSupprimerProduit(pData);
		pData = this.affectCalculTotal(pData);
		pData = gCommunVue.comNumeric(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectSupprimerProduit = function(pData) {
		var that = this;
		pData.find('.btn-supprimer-produit').click(function() {
			
			var lCompteurStock = $(this).data('compteur-stock');
			//var lNproId = $(this).data('id-nom-produit');
			var lCproId = $(this).data('id-categorie');
			
			// Suppression du produit
			$('#stock-'+ lCompteurStock).remove();
			//that.mDetailFacture[lCproId].produits[lNproId]--;
			
			// Suppression de la categorie
			that.mDetailFacture[lCproId].nbProduit--;
			if(that.mDetailFacture[lCproId].nbProduit == 0) {
				$('#cat-' + lCproId).remove();
			}
			
			// Masque le détail de produit
			that.mNbProduit--;
			
			if(that.mNbProduit == 0) { 
				// Pour la création il faut au moins un produit
				if(that.mTypeEdition == 0) {
					$('.detail-facture, #form-affiche-paiement-facture').toggle();
					$('.champ-complementaire').remove();
					$('#typePaiement').selectOptions("0");
					$('#montant').val('');
				} else if(that.mTypeEdition == 1) { // Pour la modification on garde le bouton annuler
					$('#btn-enregistrer-modifier-facture').hide();
				}
			}
			
			// Mise à jour du total
			that.majTotal();
		});
		return pData;
	};
	
	this.affectCalculTotal = function(pData) {
		var that = this;
		pData.find('.montant-produit').keyup(function() {
			that.majTotal();
		});
		return pData;
	};
	
	this.majTotal = function() {
		var lTotal = 0;
		$('.montant-produit').each(function() {
			var lMontant = parseFloat($(this).val().numberFrToDb());
			if(!isNaN(lMontant)) {
				lTotal = (parseFloat(lTotal) + lMontant).toFixed(2);
			}
		});
		$('#montant').val(lTotal.nombreFormate(2,',',''));
	};
	
	this.afficheDetailProduit = function(pFacture) {
		var that = this;
		this.mDetailFacture = [];
		this.mNbProduit = 0;
		
		var lDetailProduitFacture = [];
		$(pFacture.produits).each(function() {	
			// Ajoute la categorie
			if(!that.mDetailFacture[this.cproId]) { 
				that.mDetailFacture[this.cproId] = {cproId: this.cproId, cproNom: this.cproNom, produits:[], nbProduit: 0};
				lDetailProduitFacture[this.cproNom] = {cproId: this.cproId, cproNom: this.cproNom, produits:[] };
			}
			that.mDetailFacture[this.cproId].nbProduit++;
			
			this.compteurStock = that.mCompteurStock;
			that.mCompteurStock++;
			
			this.nproId = this.idNomProduit;
			
			if(this.quantite == null || this.quantite == '') {
				this.quantiteAffiche = '';
				this.quantite = '';
				this.uniteAffiche  = '';
				this.unite = this.uniteSolidaire;
				this.montantAffiche = '';
				this.montant = '';
				this.sigleMonetaireAffiche = '';				
			} else {
				var lQuantite = this.quantite;
				this.quantiteAffiche = lQuantite.nombreFormate(2,',',' ');
				this.quantite = lQuantite.nombreFormate(2,',','');
				this.uniteAffiche  = this.unite;
				
				var lMontant = this.montant;
				this.montantAffiche = lMontant.nombreFormate(2,',',' ');
				this.montant = lMontant.nombreFormate(2,',','');
				
				this.sigleMonetaireAffiche = gSigleMonetaire;
			}
			this.sigleMonetaire = gSigleMonetaire;
			
			if(this.quantiteSolidaire == null || this.quantiteSolidaire == '') {
				this.quantiteSolidaireAffiche = '';
				this.quantiteSolidaire = '';
				
				this.uniteSolidaireAffiche = '';
				this.uniteSolidaire = this.unite;
			} else {
				var lQuantiteSolidaire = this.quantiteSolidaire;
				this.quantiteSolidaireAffiche = lQuantiteSolidaire.nombreFormate(2,',',' ');
				this.quantiteSolidaire = lQuantiteSolidaire.nombreFormate(2,',','');
				
				this.uniteSolidaireAffiche = this.uniteSolidaire;
			}		
			
			// Ajoute le produit
			if(that.mDetailFacture[this.cproId].produits[this.nproId]) {
				that.mDetailFacture[this.cproId].produits[this.nproId].produit.push(this);
				lDetailProduitFacture[this.cproNom].produits[this.nproNom].produit.push(this);
			} else {
				that.mDetailFacture[this.cproId].produits[this.nproId] = {produit:[this]};
				lDetailProduitFacture[this.cproNom].produits[this.nproNom] = {produit:[this]};
			}
			
			that.mNbProduit++;
		});

		if(this.mNbProduit > 0) { // Affiche le détail dès le premier produit
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			$('#table-detail-facture tbody').prepend(that.affectProduitDetailFacture($(lGestionCommandeTemplate.listeProduitAffiche.template({categorie:lDetailProduitFacture}))));
			
			
			if(this.mTypeEdition == 0 && this.mIdMarche > 0) { // Création sur un marché
				$('.detail-facture, .affiche-detail-facture').toggle();		
				this.majTotal();
			} else { // Modification
				$('.detail-facture, #widget-catalogue-produit, #btn-enregistrer-facture, #btn-modifier-facture, #btn-supprimer-facture').toggle();
			}
		}
	};
		
	this.affectEnregistrer = function(pData) {
		var that = this;
		pData.find('#btn-enregistrer-facture, #btn-enregistrer-modifier-facture').click(function() {
			that.enregistrer();
		});
		return pData;
	};	
		
	this.enregistrer = function() {	
		var that = this;
		var lVo = new FactureVO();
		
		$('.produit-detail-facture').each(function() {
			var lProduitDetailFacture = new ProduitDetailFactureVO();
			lProduitDetailFacture.idNomProduit = $(this).data('id-nom-produit');
			
			lProduitDetailFacture.idStock = $(this).find('.produit-detail-facture-stock').data('id-stock');
			if(lProduitDetailFacture.idStock == undefined) {
				lProduitDetailFacture.idStock = '';
			}
			lProduitDetailFacture.idDetailOperation = $(this).find('.produit-detail-facture-montant').data('id-detail-operation');
			if(lProduitDetailFacture.idDetailOperation == undefined) {
				lProduitDetailFacture.idDetailOperation = '';
			}
			lProduitDetailFacture.idStockSolidaire = $(this).find('.produit-detail-facture-stock-solidaire').data('id-stock-solidaire');
			if(lProduitDetailFacture.idStockSolidaire == undefined) {
				lProduitDetailFacture.idStockSolidaire = '';
			}
						
			var lQuantite = $(this).find('.produit-detail-facture-stock :input').val().numberFrToDb();
			if(!isNaN(lQuantite) && !lQuantite.isEmpty()){ lQuantite = parseFloat(lQuantite); } else { lQuantite = ''; }
			lProduitDetailFacture.quantite = lQuantite;
			
			lProduitDetailFacture.unite = ($(this).find('.produit-detail-facture-stock select').length == 1) ? $(this).find('.produit-detail-facture-stock select').val() : $(this).find('.produit-detail-facture-stock .facture-detail-unite-span').text();
			
			var lQuantiteSolidaire = $(this).find('.produit-detail-facture-stock-solidaire :input').val().numberFrToDb();
			if(!isNaN(lQuantiteSolidaire) && !lQuantiteSolidaire.isEmpty()){ lQuantiteSolidaire = parseFloat(lQuantiteSolidaire); } else { lQuantiteSolidaire = ''; }
			lProduitDetailFacture.quantiteSolidaire = lQuantiteSolidaire;
			
			lProduitDetailFacture.uniteSolidaire = ($(this).find('.produit-detail-facture-stock-solidaire select').length == 1) ? $(this).find('.produit-detail-facture-stock-solidaire select').val() : $(this).find('.produit-detail-facture-stock-solidaire .facture-detail-unite-span').text();
			
			var lMontant = $(this).find('.produit-detail-facture-montant :input').val().numberFrToDb();
			if(!isNaN(lMontant) && !lMontant.isEmpty()){ lMontant = parseFloat(lMontant); } else { lMontant = ''; }
			lProduitDetailFacture.montant = lMontant;
			
			lVo.produits[$(this).data('compteur-stock')] = lProduitDetailFacture;
		});
		
		lOperationProducteur = new OperationDetailVO();
		
		// Récupération du compte en fonction d'ajout ou de modification
		if(this.mTypeEdition == 0) {
			lOperationProducteur.idCompte = this.mFermes[$('#select-ferme').val()].ferIdCompte;
		} else if(this.mTypeEdition == 1) {
			lOperationProducteur.idCompte = this.mFactureInitiale.facture.operationProducteur.idCompte;
		}
		
		var lMontant = $(":input[name=montant-total]").val().numberFrToDb();
		if(!isNaN(lMontant) && !lMontant.isEmpty()){
			lMontant = parseFloat(lMontant);
		} else {
			lMontant = '';
		}
		lOperationProducteur.montant = lMontant;
		lOperationProducteur.typePaiement = $(":input[name=typepaiement]").val();
		
		if(this.mTypePaiement[lOperationProducteur.typePaiement]) {
			var lTypePaiementService = new TypePaiementService();
			lOperationProducteur.champComplementaire = lTypePaiementService.getChampComplementaire(this.mTypePaiement[lOperationProducteur.typePaiement].champComplementaire);
		}
		
		lVo.operationProducteur = lOperationProducteur;
		
		var lId = new OperationDetailVO();
		// Mode Marché
		if(that.mIdMarche > 0) {
			var lChampComplementaire = new ChampComplementaireVO();
			lChampComplementaire.id = 1;
			lChampComplementaire.obligatoire = 0;
			lChampComplementaire.valeur = that.mIdMarche;
			lId.champComplementaire[1] = lChampComplementaire;
		}
		// Pour modification ajout de l'id de la facture
		if(this.mTypeEdition == 1) {
			lId.id = this.mFactureInitiale.facture.id.id;	
		}
		lVo.id = lId;

		var lValid = new FactureValid();
		var lVr = lValid.validEnregistrer(lVo);

		Infobulle.init(); // Supprime les erreurs
		if(lVr.valid) {
			lVo.fonction = "enregistrer";
			$.post(	"./index.php?m=GestionCommande&v=Facture", "pParam=" + $.toJSON(lVo),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse.valid) {
						
						// Message d'information
						var lVr = new TemplateVR();
						lVr.valid = false;
						lVr.log.valid = false;
						var erreur = new VRerreur();
						erreur.code = ERR_362_CODE;
						erreur.message = ERR_362_MSG;
						lVr.log.erreurs.push(erreur);
						that.construct({vr:lVr,id:lResponse.id});
						
					} else {
						Infobulle.generer(lResponse,'');
					}
				},"json"
			);
		} else {
			Infobulle.generer(lVr,'');
		}
	};
	
	this.affectModifier = function(pData) {
		pData.find('#btn-modifier-facture').click(function() {
			$('.affiche-detail-facture, #affiche-paiement-facture, #form-affiche-paiement-facture, #btn-export-facture, #widget-catalogue-produit, #btn-modifier-facture, #btn-supprimer-facture, #btn-annuler-modifier-facture, #btn-enregistrer-modifier-facture').toggle();
		});
		return pData;
	};
	
	this.affectAnnulerModifier = function(pData) {
		var that = this;
		pData.find('#btn-annuler-modifier-facture').click(function() {
			that.afficheListeProduit(that.mFactureInitiale);
			$('#btn-export-facture').show();
		});
		return pData;
	};
	
	this.affectSupprimer = function(pData) {
		var that = this;
		pData.find('#btn-supprimer-facture').click(function() {
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			$(lGestionCommandeTemplate.dialogSupprimerFacture).dialog({
				autoOpen: true,
				modal: true,
				draggable: false,
				resizable: false,
				width:600,
				buttons: {
					'Supprimer': function() {
						var lDialog = this;
						var lVo = {fonction:'supprimer', id:that.mFactureInitiale.facture.id.id};						
						$.post(	"./index.php?m=GestionCommande&v=Facture", "pParam=" + $.toJSON(lVo),
								function(lResponse) {
									Infobulle.init(); // Supprime les erreurs
									if(lResponse) {
										if(lResponse.valid) {
											// Message d'information
											var lVr = new TemplateVR();
											lVr.valid = false;
											lVr.log.valid = false;
											var erreur = new VRerreur();
											erreur.code = ERR_363_CODE;
											erreur.message = ERR_363_MSG;
											lVr.log.erreurs.push(erreur);
											var lParam = {vr:lVr};
											
											if(that.mIdMarche > 0) {
												lParam.idMarche = that.mIdMarche;
											}
											
											FactureVue(lParam);
											
											$(lDialog).dialog('close');
										} else {
											Infobulle.generer(lResponse,'');
										}
									}
								},"json"
						);
					},
					'Annuler': function() {
						$(this).dialog('close');
					}
				},
				close: function(ev, ui) { $(this).remove(); }
				
			});
		});
		return pData;
	};
	
	this.construct(pParam);
};;function ListeCommandeArchiveVue(pParam) {
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {ListeCommandeArchiveVue(pParam);}} );
		var that = this;
		var lParam = {archive:1};
		$.post(	"./index.php?m=GestionCommande&v=ListeCommande", "pParam=" + $.toJSON(lParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {		
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		if(lResponse.listeCommande.length > 0 && lResponse.listeCommande[0].comId != null) {
		
			var lListeCommande = new Object;
			lListeCommande.commande = new Array();
			
				$(lResponse.listeCommande).each(function() {
					var lCommande = new Object();
					lCommande.id = this.comId;
					lCommande.numero = this.comNumero;
					lCommande.nom = this.comNom;
					lCommande.jourFinReservation = jourSem(this.comDateFinReservation.extractDbDate());
					lCommande.dateFinReservation = this.comDateFinReservation.extractDbDate().dateDbToFr();
					lCommande.heureFinReservation = this.comDateFinReservation.extractDbHeure();
					lCommande.minuteFinReservation = this.comDateFinReservation.extractDbMinute();

					lCommande.jourMarcheDebut = jourSem(this.comDateMarcheDebut.extractDbDate());
					lCommande.dateMarcheDebut = this.comDateMarcheDebut.extractDbDate().dateDbToFr();
					lCommande.heureMarcheDebut = this.comDateMarcheDebut.extractDbHeure();
					lCommande.minuteMarcheDebut = this.comDateMarcheDebut.extractDbMinute();
					
					lCommande.heureMarcheFin = this.comDateMarcheFin.extractDbHeure();
					lCommande.minuteMarcheFin = this.comDateMarcheFin.extractDbMinute();

					lCommande.dateTimeFinResa = this.comDateFinReservation.replace('-','').replace(' ','').replace(':','');
					lCommande.dateTimeMarche = this.comDateMarcheDebut.replace('-','').replace(' ','').replace(':','');
					
					lListeCommande.commande.push(lCommande);
				});
			
			var lTemplate = lGestionCommandeTemplate.listeCommandeArchivePage;
			var lHtml = $(lTemplate.template(lListeCommande));
			
			// Ne pas afficher la pagination si il y a moins de 15 éléments
			if(lResponse.listeCommande.length < 16) {
				lHtml = this.masquerPagination(lHtml);
			} else {
				lHtml = this.paginnation(lHtml);
			}
			
			$('#contenu').replaceWith(that.affect(lHtml));
			
		} else {
			$('#contenu').replaceWith(that.affect($(lGestionCommandeTemplate.listeCommandeArchiveVide)));
		}
	};
	
	this.affect = function(pData) {
		pData = this.affectLienListeCommandeArchive(pData);
		pData = this.affectLienDetail(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectLienListeCommandeArchive = function(pData) {
		pData.find('#lien-marche-encours').click(function() {
			GestionListeCommandeVue();
		});
		return pData;
	};
	
	this.paginnation = function(pData) {
		pData.find("#table-marche-archive")
			.tablesorter({sortList: [[2,1]],headers: { 3: {sorter: false} } })
			.tablesorterPager({container: pData.find("#content-nav-liste-operation"),positionFixed:false,size:15}); 
		return pData;
	};
	
	this.masquerPagination = function(pData) {
		pData.find('#content-nav-liste-operation').hide();
		pData.find("#table-marche-archive").tablesorter({sortList: [[2,1]],headers: { 3: {sorter: false} }});
		return pData;
	};
	
	this.affectLienDetail = function(pData) {
		pData.find('.detail-commande-ligne').click(function() {
			var lparam = {"id_marche":$(this).attr('id-marche')};
			EditerCommandeVue(lparam);
		});
		return pData;
	};
	
	this.construct(pParam);
};function BonDeLivraisonVue(pParam) {
	this.mIdCommande = null;
	this.mComNumero = null;
	this.mEtatEdition = false;
	this.mListeProduit = [];
	this.mSuiteEdition = 0;
	this.mIdCompteProducteur = 0;
	this.mTypePaiement = [];
	this.mResponse;
	this.mArchive = -1;
	this.mListeProduitCommande = [];
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {BonDeLivraisonVue(pParam);}} );
		var that = this;
		//pParam.export_type = 0;
		pParam.fonction = "afficher";
		$.post(	"./index.php?m=GestionCommande&v=BonDeLivraison", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.mEtatEdition = false;
							that.mArchive = lResponse.archive;
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(pResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.bonDeLivraison;
		
		this.mIdCommande = pResponse.producteurs[0].proIdCommande;
		this.mComNumero = pResponse.comNumero;
		
		$(pResponse.typePaiement).each(function() {
			that.mTypePaiement[this.tppId] = this;
		});
		
		$('#contenu').replaceWith(that.affect($(lTemplate.template(pResponse))));	
	};
	
	this.affectDroitArchive = function(pData) {
		pData.find("#btn-annuler").remove();
		pData.find("#btn-enregistrer").remove();
		pData.find("#btn-modifier").remove();
		return pData;
	};

	this.affect = function(pData) {
		pData = gCommunVue.comHoverBtn(pData);
		pData = this.affectBtnRetourMarche(pData);
		pData = this.affectChangementProducteur(pData);
		pData = this.affectExportBonDeLivraison(pData);
		return pData;
	};
	
	this.affectBtnRetourMarche = function(pData) {
		var that = this;
		pData.find('#btn-editer-com').click(function() {
			EditerCommandeVue({"id_marche":that.mIdCommande});
		});
		return pData;
	};
	
	this.affectChangementProducteur = function(pData) {
		var that = this;
		pData.find('#select-prdt').change(function() {
			if(that.mEtatEdition) {
				that.mSuiteEdition = 1;
				that.dialogEnregistrer();
			} else {
				that.changementProducteur();
			}
		});
		return pData;
	};
	
	this.changementProducteur = function() {
		var that = this;
		var lIdCompteProducteur = $('#select-prdt').val();
		if(lIdCompteProducteur > 0) {
			var lParam = {	"id_commande":that.mIdCommande,
						 	"id_compte_ferme":lIdCompteProducteur,
						 	fonction:"afficherProducteur"};
			$.post(	"./index.php?m=GestionCommande&v=BonDeLivraison", "pParam=" + $.toJSON(lParam),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {
								that.mIdCompteProducteur = lIdCompteProducteur;
								that.mEtatEdition = false;
								
								
								
								// Suppression des doublons de lot
								var lProduits = [];
								that.mListeProduitCommande = [];
								$(lResponse.produits).each(function() {
									var lProId = this.proId;
									if(that.mListeProduitCommande[lProId] ) {
										if(this.stoQuantite == null) {
											this.stoQuantite = '0';
										}
										that.mListeProduitCommande[lProId].qteReservation += parseFloat(this.stoQuantite);
										that.mListeProduitCommande[lProId].NbLot++;
										that.mListeProduit[lProId] += parseFloat(this.stoQuantite);
									} else {
										if(this.stoQuantite == null) {
											this.stoQuantite = '0';
										}
										that.mListeProduitCommande[lProId] = {'qteReservation' :parseFloat(this.stoQuantite), 
												'qteCommande' : 0, 'prixCommande': 0, 'NbLot': 1, 'lotTraite' : 0};
										that.mListeProduit[lProId] = parseFloat(this.stoQuantite);
									}

									var lDcomId = this.dcomId;
									$(lResponse.produitsCommande).each(function() {
										if(this.dcomId == lDcomId) {								
											if(this.stoQuantite != null) {
												that.mListeProduitCommande[lProId].qteCommande += parseFloat(this.stoQuantite);
											}
											if(this.dopeMontant != null) {
												that.mListeProduitCommande[lProId].prixCommande += parseFloat(this.dopeMontant);
											}
										}
									});
								});
								
								var lTotal = 0;
								$(lResponse.produits).each(function() {
									var lLotMultiple = false;
									if(that.mListeProduitCommande[this.proId].NbLot > 1) {
										lLotMultiple = true;
									}
									var these = this;
									var lProId = this.proId;
									if(!lLotMultiple) {
										$(lResponse.produitsCommande).each(function() {
											if(this.proId == lProId) {							
												var lMontant = 0;										
												if(this.stoQuantite != null) {
													these.stoQuantiteCommande = parseFloat(this.stoQuantite);
												}
												if(this.dopeMontant != null) {
													these.opeMontantCommande = parseFloat(this.dopeMontant);
													lMontant = parseFloat(this.dopeMontant);
												}
												lTotal += lMontant;
											}
										});
									} else {
										these.stoQuantite = that.mListeProduitCommande[this.proId].qteReservation;
										these.stoQuantiteCommande = that.mListeProduitCommande[this.proId].qteCommande;
										these.opeMontantCommande = that.mListeProduitCommande[this.proId].prixCommande;
										if(that.mListeProduitCommande[this.proId].lotTraite == 0) {
											lTotal += that.mListeProduitCommande[this.proId].prixCommande;
										}
									}
									if(that.mListeProduitCommande[this.proId].lotTraite == 0) {
										that.mListeProduitCommande[this.proId].lotTraite = 1;
										lProduits.push(this);
									} 
									
								});
								lResponse.totalCommande = lTotal.nombreFormate(2,',',' ');
								lResponse.produits = lProduits;
								
								that.mResponse = lResponse;
								
								if(lResponse.operationProducteur && lResponse.operationProducteur.idCompte != null ) {
									that.afficherDetail(lResponse);
								} else {
									that.afficherFormulaire(lResponse,1);									
								}
								if(pParam && pParam.vr) {
									Infobulle.generer(pParam.vr,'');
								}
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
					},"json"
			);
		} else {
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			var lTemplate = lGestionCommandeTemplate.listeProduitVide;
			$('#liste-pdt').replaceWith(lTemplate);
		}
	};
	
	this.afficherDetail = function(pResponse) {
		var that = this;
		//var lTotal = 0;
		
		//var lData = {produits:[]};
		
		// Suppression des doublons de lot
	/*	$(pResponse.produits).each(function() {
			var lProId = this.proId;
			if(that.mListeProduitCommande[lProId] ) {
				that.mListeProduitCommande[lProId].qteReservation += parseFloat(this.stoQuantite);
				that.mListeProduitCommande[lProId].NbLot++;
				that.mListeProduit[lProId] += parseFloat(this.stoQuantite);
			} else {
				that.mListeProduitCommande[lProId] = {'qteReservation' :parseFloat(this.stoQuantite), 
						'qteCommande' : 0, 'prixCommande': 0, 'NbLot': 1, 'lotTraite' : 0};
				that.mListeProduit[lProId] = parseFloat(this.stoQuantite);
			}

			var lDcomId = this.dcomId;
			$(pResponse.produitsCommande).each(function() {
				if(this.dcomId == lDcomId) {								
					if(this.stoQuantite != null) {
						that.mListeProduitCommande[lProId].qteCommande += parseFloat(this.stoQuantite);
					}
					if(this.dopeMontant != null) {
						that.mListeProduitCommande[lProId].prixCommande += parseFloat(this.dopeMontant);
					}
				}
			});
		});*/
		
		
		
		$(pResponse.produits).each(function() {
			/*var lLotMultiple = false;
			if(that.mListeProduitCommande[this.proId].NbLot > 1) {
				lLotMultiple = true;
			}*/
			
			//this.stoQuantiteCommande = '';
		//	this.opeMontant = '';
			var lQuantite = 0;
			
			var lProId = this.proId;
			var these = this;
			
			// Qte Reservation
			if(this.stoQuantite == null) {
				this.stoQuantite = '0';
			}
			this.stoQuantite = this.stoQuantite.nombreFormate(2,',',' ');

			// Qte commande
			if(this.stoQuantiteCommande == null) {
				this.stoQuantiteCommande = '0';
			}
			this.stoQuantiteCommande = this.stoQuantiteCommande.nombreFormate(2,',',' ');
			
			if(this.opeMontantCommande == null) {
				this.opeMontantCommande = '0';
			}
			this.opeMontantCommande = this.opeMontantCommande.nombreFormate(2,',',' ');
			
			
			this.stoQuantiteLivraison = '0'.nombreFormate(2,',',' ');
			this.opeMontantLivraison = '0'.nombreFormate(2,',',' ');
			this.stoQuantiteSolidaire = '0'.nombreFormate(2,',',' ');
			

			//if(!lLotMultiple) {
				/*$(pResponse.produitsCommande).each(function() {
					if(this.proId == lProId) {
						var lMontant = 0;										
						if(this.stoQuantite != null) {
							these.stoQuantiteCommande = this.stoQuantite.nombreFormate(2,',',' ');
						}
						if(this.dopeMontant != null) {
							these.opeMontantCommande = this.dopeMontant.nombreFormate(2,',',' ');
							lMontant = parseFloat(this.dopeMontant);
						}
						lTotal += lMontant;
					}
				});*/
			/*} else {
				these.stoQuantite = that.mListeProduitCommande[this.proId].qteReservation.nombreFormate(2,',',' ');
				these.stoQuantiteCommande = that.mListeProduitCommande[this.proId].qteCommande.nombreFormate(2,',',' ');
				these.opeMontantCommande = that.mListeProduitCommande[this.proId].prixCommande.nombreFormate(2,',',' ');
				if(that.mListeProduitCommande[this.proId].lotTraite == 0) {
					lTotal += that.mListeProduitCommande[this.proId].prixCommande;
				}
			}*/
			
			$(pResponse.produitsLivraison).each(function() {
				if(this.proId == lProId) {
					if(this.stoQuantite != null) {
						these.stoQuantiteLivraison = this.stoQuantite.nombreFormate(2,',',' ');
						lQuantite += parseFloat(this.stoQuantite);
					}
					if(this.dopeMontant != null) {
						these.opeMontantLivraison = this.dopeMontant.nombreFormate(2,',',' ');
					}
				}
			});
			
			$(pResponse.produitsSolidaire).each(function() {
				if(this.proId == lProId) {										
					if(this.stoQuantite != null) {
						these.stoQuantiteSolidaire = this.stoQuantite.nombreFormate(2,',',' ');
						lQuantite += parseFloat(this.stoQuantite);
					}
				}
			});
			
			if(lQuantite - parseFloat(this.stoQuantite) < 0) {
				this.classEtat = 'qte-reservation-ko';
			} else {
				this.classEtat = 'qte-reservation-ok';
			}

			

			this.masquerNormal = '';
			if(this.proType == 1) {
				this.masquerNormal = "ui-helper-hidden";
			}
			
			/*if(that.mListeProduitCommande[this.proId].lotTraite == 0) {
				that.mListeProduitCommande[this.proId].lotTraite = 1;
				lData.produits.push(this);
			}*/ 
			
		});	
		
		pResponse.total = '';
		if(pResponse.operationProducteur) {
			if(pResponse.operationProducteur.montant != null) {
				pResponse.total = (pResponse.operationProducteur.montant).nombreFormate(2,',',' ');
			}
			if(pResponse.operationProducteur.typePaiementChampComplementaire != null) {
				pResponse.champComplementaire = pResponse.operationProducteur.typePaiementChampComplementaire;
			}
		}
		
		pResponse.sigleMonetaire = gSigleMonetaire;
		//pResponse.totalCommande = lTotal.nombreFormate(2,',',' ');
		pResponse.typePaiement = that.mTypePaiement;
		
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.listeProduitLivraison;
		
		if(pResponse.operationProducteur && pResponse.operationProducteur.typePaiement != null) {
			pResponse.tppType = that.mTypePaiement[pResponse.operationProducteur.typePaiement].tppType;
		}
		
		var lHtml = that.affectListeProduit($(lTemplate.template(pResponse)));
		
		if(pResponse.operationProducteur && pResponse.operationProducteur.typePaiement != null) {
			var lId = pResponse.operationProducteur.typePaiement;
			
			lHtml.find(':input[name=typepaiement]').selectOptions(lId);
			
			var lLabel = that.getLabelChamComplementaire(lId);
			if(lLabel != null) {
				lHtml.find("#label-champ-complementaire").text(lLabel);
				lHtml.find("#tr-champ-complementaire").show();
			} else {
				lHtml.find("#label-champ-complementaire").text('');
				lHtml.find("#tr-champ-complementaire").hide();
			}
		} else {
			lHtml.find("#label-champ-complementaire").text('');
			lHtml.find("#tr-champ-complementaire").hide();
		}
		
		$('#liste-pdt').replaceWith(lHtml);
	};
	
	this.afficherFormulaire = function(pResponse,pType) {
		var that = this;
	//	var lTotal = 0;
		
	//	var lData = {produits:[]};
		
		// Suppression des doublons de lot
		/*$(pResponse.produits).each(function() {
			var lProId = this.proId;
			if(that.mListeProduitCommande[lProId] ) {
				that.mListeProduitCommande[lProId].qteReservation += parseFloat(this.stoQuantite);
				that.mListeProduitCommande[lProId].NbLot++;
				that.mListeProduit[lProId] += parseFloat(this.stoQuantite);
			} else {
				that.mListeProduitCommande[lProId] = {'qteReservation' :parseFloat(this.stoQuantite), 
						'qteCommande' : 0, 'prixCommande': 0, 'NbLot': 1, 'lotTraite' : 0};
				that.mListeProduit[lProId] = parseFloat(this.stoQuantite);
			}

			var lDcomId = this.dcomId;
			$(pResponse.produitsCommande).each(function() {
				if(this.dcomId == lDcomId) {								
					if(this.stoQuantite != null) {
						that.mListeProduitCommande[lProId].qteCommande += parseFloat(this.stoQuantite);
					}
					if(this.dopeMontant != null) {
						that.mListeProduitCommande[lProId].prixCommande += parseFloat(this.dopeMontant);
					}
				}
			});
		});*/
		
		$(pResponse.produits).each(function() {
			//that.mListeProduit[this.proId] = parseFloat(this.stoQuantite);
		/*	var lLotMultiple = false;
			if(that.mListeProduitCommande[this.proId].NbLot > 1) {
				lLotMultiple = true;
			}*/
			
			//this.stoQuantiteCommande = '';
		//	this.opeMontant = '';
			var lQuantite = 0;
			
			var lProId = this.proId;
			var these = this;
			

			// Qte Reservation
			if(this.stoQuantite == null) {
				this.stoQuantite = '0';
			}
			this.stoQuantite = this.stoQuantite.nombreFormate(2,',',' ');

			// Qte commande
			if(this.stoQuantiteCommande == null) {
				this.stoQuantiteCommande = '0';
			}
			this.stoQuantiteCommande = this.stoQuantiteCommande.nombreFormate(2,',',' ');
			
			if(this.opeMontantCommande == null) {
				this.opeMontantCommande = '0';
			}
			this.opeMontantCommande = this.opeMontantCommande.nombreFormate(2,',',' ');
			
			this.stoQuantiteLivraison = '0'.nombreFormate(2,',',' ');
			this.opeMontantLivraison = '0'.nombreFormate(2,',',' ');
			this.stoQuantiteSolidaire = '0'.nombreFormate(2,',',' ');
		/*	if(!lLotMultiple) {
				$(pResponse.produitsCommande).each(function() {
					if(this.proId == lProId) {
						//var lMontant = 0;										
						if(this.stoQuantite != null) {
							these.stoQuantiteCommande = this.stoQuantite.nombreFormate(2,',',' ');
						}
						if(this.dopeMontant != null) {
							these.opeMontantCommande = this.dopeMontant.nombreFormate(2,',',' ');
							//lMontant = parseFloat(this.dopeMontant).toFixed(2);
							lTotal += parseFloat(this.dopeMontant).toFixed(2);
						}
					}
				});
			} else {
				these.stoQuantite = that.mListeProduitCommande[this.proId].qteReservation.nombreFormate(2,',',' ');
				these.stoQuantiteCommande = that.mListeProduitCommande[this.proId].qteCommande.nombreFormate(2,',',' ');
				these.opeMontantCommande = that.mListeProduitCommande[this.proId].prixCommande.nombreFormate(2,',',' ');
				if(that.mListeProduitCommande[this.proId].lotTraite == 0) {
					lTotal += that.mListeProduitCommande[this.proId].prixCommande;
				}
			}*/
			
			$(pResponse.produitsLivraison).each(function() {
				if(this.proId == lProId) {
					if(this.stoQuantite != null) {
						these.stoQuantiteLivraison = this.stoQuantite.nombreFormate(2,',','');
						lQuantite += parseFloat(this.stoQuantite);
					}
					if(this.dopeMontant != null) {
						these.opeMontantLivraison = this.dopeMontant.nombreFormate(2,',','');
					}
				}
			});
			
			$(pResponse.produitsSolidaire).each(function() {
				if(this.proId == lProId) {										
					if(this.stoQuantite != null) {
						these.stoQuantiteSolidaire = this.stoQuantite.nombreFormate(2,',','');
						lQuantite += parseFloat(this.stoQuantite);
					}
				}
			});
			
			if(lQuantite - parseFloat(this.stoQuantite) < 0) {
				this.classEtat = 'qte-reservation-ko';
			} else {
				this.classEtat = 'qte-reservation-ok';
			}
			
			this.masquerNormal = '';
			if(this.proType == 1) {
				this.masquerNormal = "ui-helper-hidden";
			}
			
		/*	if(that.mListeProduitCommande[this.proId].lotTraite == 0) {
				that.mListeProduitCommande[this.proId].lotTraite = 1;
				lData.produits.push(this);
			} */
			
		});	
		
		pResponse.total = '';
		if(pResponse.operationProducteur) {
			if(pResponse.operationProducteur.montant != null) {
				pResponse.total = (pResponse.operationProducteur.montant).nombreFormate(2,',','');
			}
			if(pResponse.operationProducteur.typePaiementChampComplementaire != null) {
				pResponse.champComplementaire = pResponse.operationProducteur.typePaiementChampComplementaire;
			}
		}
		
		pResponse.sigleMonetaire = gSigleMonetaire;
		//pResponse.totalCommande = lTotal.nombreFormate(2,',',' ');
		pResponse.typePaiement = that.mTypePaiement;
		
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.listeProduitLivraison;
		
		
		
		var lHtml = that.affectListeProduitFormulaire($(lTemplate.template(pResponse)));
		
		if(pResponse.operationProducteur && pResponse.operationProducteur.typePaiement != null) {
			var lId = pResponse.operationProducteur.typePaiement;
			
			lHtml.find(':input[name=typepaiement]').selectOptions(lId);
			
			var lLabel = that.getLabelChamComplementaire(lId);
			if(lLabel != null) {
				lHtml.find("#label-champ-complementaire").text(lLabel);
				lHtml.find("#tr-champ-complementaire").show();
			} else {
				lHtml.find("#label-champ-complementaire").text('');
				lHtml.find("#tr-champ-complementaire").hide();
			}
		} else {
			lHtml.find("#label-champ-complementaire").text('');
			lHtml.find("#tr-champ-complementaire").hide();
		}

		if(pType == 2) {
			lHtml.find("#btn-annuler").show();
		}
		
		$('#liste-pdt').replaceWith(lHtml);
	};
	
	this.affectListeProduit = function(pData) {
		pData = this.affectEtatCommande(pData);
		pData = this.affectEnregistrer(pData);
		pData = this.affectModifier(pData);
		pData = this.affectTypePaiement(pData);
		pData = this.affectChangementEtatEdition(pData);
		pData = this.affectMasquerFormulaire(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		if(this.mArchive == 2) { // Si le marché est archivé on ne peut plus faide de modification
			pData = this.affectDroitArchive(pData);
		}
		return pData;
	};
	
	this.affectListeProduitFormulaire = function(pData) {
		pData = this.affectEtatCommande(pData);
		pData = this.affectEnregistrer(pData);
		pData = this.affectModifier(pData);
		pData = this.affectTypePaiement(pData);
		pData = this.affectChangementEtatEdition(pData);
		pData = this.affectMasquerDetail(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		if(this.mArchive == 2) { // Si le marché est archivé on ne peut plus faide de modification
			pData = this.affectDroitArchive(pData);
		}
		return pData;
	};
	
	this.affectMasquerDetail = function(pData) {
		pData.find(".detail").hide();
		return pData;
	};
	this.affectMasquerFormulaire = function(pData) {
		pData.find(".formulaire").hide();
		return pData;
	};
	
	this.affectTypePaiement = function(pData) {
		var that = this;
		pData.find(':input[name=typepaiement]').change(function() {
			that.changerTypePaiement($(this));
		});
		return pData;
	};
	
	this.changerTypePaiement = function(pObj) {
		var lId = pObj.val();
		var lLabel = this.getLabelChamComplementaire(lId);
		if(lLabel != null) {
			$("#label-champ-complementaire").text(lLabel);
			$("#tr-champ-complementaire").show();
		} else {
			$("#label-champ-complementaire").text('');
			$(":input[name=champ-complementaire]").val('');
			$("#tr-champ-complementaire").hide();
		}
	};
	
	this.getLabelChamComplementaire = function(pId) {
		var lTpp = this.mTypePaiement;
		if(lTpp[pId]) {
			if(lTpp[pId].tppChampComplementaire == 1) {
				return lTpp[pId].tppLabelChampComplementaire;
			}
		}	
		return null;
	};
	
	this.affectEtatCommande = function(pData) {
		var that = this;
		pData.find(".qte-commande ,.qte-solidaire-commande ").keyup(function() {
			that.mEtatEdition = true;
			var lIdProduit = $(this).prev(".pro-id-etat").text();
			if(that.mListeProduit[lIdProduit]) {
				var lQuantite = 0;
				var lQuantiteLivraison = $(':input[name=qte-commande-' + lIdProduit + ']').val().numberFrToDb();
				var lQuantiteSolidaire = $(':input[name=qte-solidaire-commande-' + lIdProduit + ']').val().numberFrToDb();
				
				if(!isNaN(lQuantiteLivraison) && !lQuantiteLivraison.isEmpty()){
					lQuantite += parseFloat(lQuantiteLivraison);
				}
				if(!isNaN(lQuantiteSolidaire) && !lQuantiteSolidaire.isEmpty()){
					lQuantite += parseFloat(lQuantiteSolidaire);
				}
				
				if(lQuantite - that.mListeProduit[lIdProduit] < 0) {
					$("#etat-commande-" + lIdProduit)
						.removeClass('qte-reservation-ok')
						.addClass('qte-reservation-ko');
				} else {
					$("#etat-commande-" + lIdProduit)
						.removeClass('qte-reservation-ko')
						.addClass('qte-reservation-ok');
				}
			}
		});
		return pData;
	};
	
	this.affectEnregistrer = function(pData) {
		var that = this;
		pData.find("#btn-enregistrer").click(function() {
			that.mSuiteEdition = 0;
			that.enregistrer();
		});
		pData.find(".qte-commande ,.prix-commande ").keyup(function(event) {
			if (event.keyCode == '13') {
				that.mSuiteEdition = 0;
				that.enregistrer();
			}			
		});
		return pData;
	};
	this.affectModifier = function(pData) {
		var that = this;
		pData.find("#btn-modifier").click(function() {
			that.afficherFormulaire(that.mResponse,2);
		});
		pData.find("#btn-annuler").click(function() {
			that.changementProducteur();
		});		
		return pData;
	};
	
	this.enregistrer = function() {
		var that = this;
		
		var lParam = new ProduitsBonDeLivraisonVO();
		
		lParam.id_commande = this.mIdCommande;
		lParam.id_compte_ferme = this.mIdCompteProducteur;
		//lParam.export_type = 0;

		$('.pro-id').each(function() {
			var lId = $(this).text();				
			var lProduit = new ProduitBonDeLivraisonVO();
			lProduit.id  = lId;
			lProduit.quantite = $(':input[name=qte-commande-' + lId + ']').val().numberFrToDb();
			lProduit.quantiteSolidaire = $(':input[name=qte-solidaire-commande-' + lId + ']').val().numberFrToDb();
			lProduit.prix = $(':input[name=prix-commande-' + lId + ']').val().numberFrToDb();
			lParam.produits.push(lProduit);
		});		
		
		lParam.typePaiement = $(':input[name=typepaiement]').val();
		lParam.total = $(':input[name=total]').val().numberFrToDb();
		
		if(this.getLabelChamComplementaire(lParam.typePaiement) != null) {
			lParam.typePaiementChampComplementaireObligatoire = 1;
			lParam.typePaiementChampComplementaire = $(":input[name=champ-complementaire]").val();
		} else {
			lParam.typePaiementChampComplementaireObligatoire = 0;
		}
		
		var lValid = new ProduitsBonDeLivraisonValid();
		var lVr = lValid.validAjout(lParam);
				
		if(lVr.valid) {
			lParam.fonction = "enregistrer";
			$.post(	"./index.php?m=GestionCommande&v=BonDeLivraison", "pParam=" + $.toJSON(lParam),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {
								that.mEtatEdition = false;
								if(that.mSuiteEdition == 1) {
									that.changementProducteur();
								} else if (that.mSuiteEdition == 2) {
									that.dialogExportBonDeLivraison();
								} else {
									var lVr = new TemplateVR();
									lVr.valid = false;
									lVr.log.valid = false;
									var erreur = new VRerreur();
									erreur.code = ERR_301_CODE;
									erreur.message = ERR_301_MSG;
									lVr.log.erreurs.push(erreur);							
									
									//Infobulle.generer(lVr,'');
									that.changementProducteur({vr:lVr});
								}
							} else {
								Infobulle.generer(lResponse,'');
								$('#select-prdt').selectOptions(that.mIdCompteProducteur);
							}
						}
					},"json"
			);
			
		} else {
			Infobulle.generer(lVr,'');
			$('#select-prdt').selectOptions(that.mIdCompteProducteur);
		}
	};
	
	this.affectExportBonDeLivraison = function(pData) {		
		var that = this;		
		pData.find('#btn-export-bcom')
		.click(function() {
			if(that.mEtatEdition) {
				that.mSuiteEdition = 2;
				that.dialogEnregistrer();
			} else {
				that.dialogExportBonDeLivraison();
			}			
		});
		return pData;
	};
	
	this.affectChangementEtatEdition = function(pData) {
		var that = this;
		pData.find('.com-input-text').keyup(function() {that.mEtatEdition = true;});
		pData.find(':input[name=typepaiement]').change(function() {that.mEtatEdition = true;});
		return pData;
	};
	
	this.dialogExportBonDeLivraison = function() {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.dialogExportBonDeLivraison;
		$(lTemplate.template({comNumero:that.mComNumero})).dialog({
			autoOpen: true,
			modal: true,
			draggable: false,
			resizable: false,
			width:600,
			buttons: {
				'Exporter': function() {
					// Récupération du formulaire
					var lFormat = $(this).find(':input[name=format]:checked').val();
					
					var lParam = new ExportBonLivraisonVO();
					//lParam.pParam = 1;
					//lParam.export_type = 1;
					lParam.id_commande = that.mIdCommande;
					lParam.format = lFormat;
					lParam.fonction = "export";
					
					// Test des erreurs
					var lValid = new ExportBonLivraisonValid();
					var lVr = lValid.validAjout(lParam);
					
					Infobulle.init(); // Supprime les erreurs
					if(lVr.valid) {
						// Affichage
						$.download("./index.php?m=GestionCommande&v=BonDeLivraison", lParam);
					} else {
						Infobulle.generer(lVr,'');
					}
				},
				'Annuler': function() {
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }
		});
	};
		
	this.dialogEnregistrer = function() {	
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.dialogEnregistrement;
		
		$(lTemplate).dialog({			
			autoOpen: true,
			modal: true,
			draggable: false,
			resizable: false,
			width:600,
			buttons: {
				'Enregistrer': function() {
					that.enregistrer();
					$(this).dialog('close');
				},
				'Annuler': function() {
					if(that.mSuiteEdition == 1) {
						$('#select-prdt').selectOptions(that.mIdCompteProducteur);
					}
					$(this).dialog('close');
				},
				'Ne pas Enregistrer': function() {
					that.mEtatEdition = false;
					if(that.mSuiteEdition == 1) {
						that.changementProducteur();
					} else if (that.mSuiteEdition == 2) {
						that.changementProducteur();
						that.dialogExportBonDeLivraison();
					}
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
		});
	};
	
	this.construct(pParam);
};function InfoCommandeArchiveVue(pParam) {	
	this.mIdMarche = 0;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {InfoCommandeArchiveVue(pParam);}} );
		var that = this;
		pParam.fonction = 'afficher';
		$.post(	"./index.php?m=GestionCommande&v=InfoCommandeArchive", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {		
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.infoCommandeArchive;
		lResponse.sigleMonetaire = gSigleMonetaire;
		
		var lTotal = 0;
		var lTotalSolidaire = 0;
		
		$(lResponse.infoCommande).each(function() {
			that.mIdMarche = this.comId;
			if(this.stoQuantite == null) { this.stoQuantite = 0;}
			if(this.opeMontant == null) { this.opeMontant = 0; }
			if(this.stoQuantiteLivraison == null) { this.stoQuantiteLivraison = 0; }
			if(this.opeMontantLivraison == null) { this.opeMontantLivraison = 0; }
			if(this.stoQuantiteSolidaire == null) { this.stoQuantiteSolidaire = 0; }
			if(this.stoQuantiteVente == null) { this.stoQuantiteVente = 0; }
			if(this.opeMontantVente == null) { this.opeMontantVente = 0; }
			if(this.stoQuantiteVenteSolidaire == null) { this.stoQuantiteVenteSolidaire = 0; }
			if(this.opeMontantVenteSolidaire == null) { this.opeMontantVenteSolidaire = 0; }
			
			lTotal -= parseFloat(this.opeMontantLivraison);
			lTotal += parseFloat(this.opeMontantVente);
			lTotalSolidaire += parseFloat(this.opeMontantVenteSolidaire);
			
			this.stoQuantite = this.stoQuantite.nombreFormate(2,',',' ');
			this.opeMontant = this.opeMontant.nombreFormate(2,',',' ');
			this.stoQuantiteLivraison = this.stoQuantiteLivraison.nombreFormate(2,',',' ');
			this.opeMontantLivraison = this.opeMontantLivraison.nombreFormate(2,',',' ');
			this.stoQuantiteSolidaire = this.stoQuantiteSolidaire.nombreFormate(2,',',' ');
			this.stoQuantiteVente = this.stoQuantiteVente.nombreFormate(2,',',' ');
			this.opeMontantVente = this.opeMontantVente.nombreFormate(2,',',' ');
			this.stoQuantiteVenteSolidaire = this.stoQuantiteVenteSolidaire.nombreFormate(2,',',' ');
			this.opeMontantVenteSolidaire = this.opeMontantVenteSolidaire.nombreFormate(2,',',' ');
		});
		
		lResponse.total = lTotal.nombreFormate(2,',',' ');
		lResponse.totalSolidaire = lTotalSolidaire.nombreFormate(2,',',' ');
		lResponse.numero = lResponse.detailMarche.numero;
		
		$('#contenu').replaceWith(that.affect($(lTemplate.template(lResponse))));
	};
	
	this.affect = function(pData) {
	//	pData = this.affectLienListeCommandeArchive(pData);
	//	pData = this.mCommunVue.comHoverBtn(pData);
		pData = this.affectDupliquerMarche(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectDupliquerMarche = function(pData) {
		var that = this;
		pData.find('#btn-dupliquer-com').click(function() {
			//DupliquerMarcheVue({"id_commande":that.mIdMarche});
			AjoutCommandeVue({"id_marche":that.mIdMarche, fonction:"dupliquer"});
		});
		return pData;
	};
	
	this.construct(pParam);
};function BonDeCommandeVue(pParam) {
	this.mIdCommande = null;
	this.mComNumero = null;
	this.mEtatEdition = false;
	this.mListeProduit = [];
	this.mSuiteEdition = 0;
	this.mIdCompteProducteur = 0;
	this.mArchive = -1;
	this.mAfficheLot = [];
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {BonDeCommandeVue(pParam);}} );
		var that = this;
		pParam.fonction = "afficher";
		$.post(	"./index.php?m=GestionCommande&v=BonDeCommande", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.mEtatEdition = false;
							that.mArchive = lResponse.archive;
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(pResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.bonDeCommande;
		
		this.mIdCommande = pResponse.producteurs[0].proIdCommande;
		this.mComNumero = pResponse.comNumero;
		
		$('#contenu').replaceWith(that.affect($(lTemplate.template(pResponse))));	
	};
	
	this.affectDroitArchive = function(pData) {
		pData.find("#btn-annuler").remove();
		pData.find("#btn-enregistrer").remove();
		pData.find("#btn-modifier").remove();
		return pData;
	};
	
	this.affect = function(pData) {
		pData = gCommunVue.comHoverBtn(pData);
		pData = this.affectBtnRetourMarche(pData);
		pData = this.affectChangementProducteur(pData);
		pData = this.affectExportBonCommande(pData);
		return pData;
	};
	
	this.affectBtnRetourMarche = function(pData) {
		var that = this;
		pData.find('#btn-editer-com').click(function() {
			EditerCommandeVue({"id_marche":that.mIdCommande});
		});
		return pData;
	};
	
	this.affectChangementProducteur = function(pData) {
		var that = this;
		pData.find('#select-prdt').change(function() {
			if(that.mEtatEdition) {
				that.mSuiteEdition = 1;
				that.dialogEnregistrer();
			} else {
				that.changementProducteur();
			}
		});
		return pData;
	};
	
	this.changementProducteur = function(pParam) {
		var that = this;
		var lIdCompteProducteur = $('#select-prdt').val();
		if(lIdCompteProducteur > 0) {
			var lParam = {	"id_commande":that.mIdCommande,
						 	"id_compte_ferme":lIdCompteProducteur,
						 	fonction:"afficherProducteur"};
			$.post(	"./index.php?m=GestionCommande&v=BonDeCommande", "pParam=" + $.toJSON(lParam),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {
								// Permet l'export du bon de commande
								$('#btn-export-bcom').show();
								
								that.mIdCompteProducteur = lIdCompteProducteur;
								that.mEtatEdition = false;
								
								if(lResponse.produitsCommande[0] && lResponse.produitsCommande[0].proIdCommande != null) {
									that.afficherDetail(lResponse);
								} else {
									that.afficherFormulaire(lResponse);
								}
								
								if(pParam && pParam.vr) {
									Infobulle.generer(pParam.vr,'');
								}
								
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
					},"json"
			);
		} else {
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			var lTemplate = lGestionCommandeTemplate.listeProduitVide;
			$('#liste-pdt').replaceWith(lTemplate);
			// Cache l'export du bon de commande
			$('#btn-export-bcom').hide();
		}
	};
	
	this.afficherDetail = function(pResponse) {
		var that = this;
		//Initialisation du tableau
		this.mAfficheLot = [];
		$(pResponse.produits).each(function() {
			//Permet de détecter si on affiche le lot
			if(that.mAfficheLot[this.proId] ) {
				that.mAfficheLot[this.proId] = 2;
			} else {
				that.mAfficheLot[this.proId] = 1;
			}
			
			that.mListeProduit[this.dcomId] = this.stoQuantite;
			
			this.stoQuantiteCommande = "0";
			this.dopeMontant = "0";
			
			var lDcomId = this.dcomId;
			var these = this;			
			$(pResponse.produitsCommande).each(function() {
				if(this.dcomId == lDcomId) {
					these.stoQuantiteCommande = this.stoQuantite;
					these.dopeMontant = this.dopeMontant;
				}
			});
			
			if(this.stoQuantiteCommande - this.stoQuantite < 0) {
				this.classEtat = 'qte-reservation-ko';
			} else {
				this.classEtat = 'qte-reservation-ok';
			}
			
			if(this.stoQuantiteCommande != '') {
				this.stoQuantiteCommandeAffichage = this.stoQuantiteCommande.nombreFormate(2,',',' ');
				this.stoQuantiteCommande = this.stoQuantiteCommande.nombreFormate(2,',','');
			}
			if(this.stoQuantite == null) {
				this.stoQuantite = "0";
			}
			this.stoQuantite = this.stoQuantite.nombreFormate(2,',',' ');
			
			this.dopeMontantAffichage = this.dopeMontant.nombreFormate(2,',',' ');
			this.dopeMontant = this.dopeMontant.nombreFormate(2,',','');
		});
		// Affiche les lots
		$(pResponse.produits).each(function() {
			if(that.mAfficheLot[this.proId] && that.mAfficheLot[this.proId] == 2) {
				this.nproNom += " (" + this.dcomTaille.nombreFormate(2,',',' ') + " " + this.proUniteMesure + ")";
			}
		});
		pResponse.sigleMonetaire = gSigleMonetaire;
		
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.listeProduitBonDeCommande;
		
		$('#liste-pdt').replaceWith(that.affectListeProduit($(lTemplate.template(pResponse))));
	};	
	
	this.afficherFormulaire = function(pResponse) {
		var that = this;
		//Initialisation du tableau
		this.mAfficheLot = [];
		$(pResponse.produits).each(function() {//Permet de détecter si on affiche le lot
			if(that.mAfficheLot[this.proId] ) {
				that.mAfficheLot[this.proId] = 2;
			} else {
				that.mAfficheLot[this.proId] = 1;
			}
			
			that.mListeProduit[this.dcomId] = this.stoQuantite;

			if(this.stoQuantite == null) {
				this.stoQuantite = 0;	
			}
			
			this.stoQuantiteCommande = this.stoQuantite;
			this.stoQuantite = this.stoQuantite.nombreFormate(2,',',' ');
			
			if(this.dopeMontant == null) {
				this.dopeMontant = '0'.nombreFormate(2,',','');
			} else {
				this.dopeMontant = (this.dopeMontant * -1).nombreFormate(2,',','');
			}
			
			if(this.stoQuantiteCommande - this.stoQuantite < 0) {
				this.classEtat = 'qte-reservation-ko';
			} else {
				this.classEtat = 'qte-reservation-ok';
			}
			//if(this.stoQuantiteCommande != '') {
			this.stoQuantiteCommande = this.stoQuantiteCommande.nombreFormate(2,',','');
			//}
		});		
		// Affiche les lots
		$(pResponse.produits).each(function() {
			if(that.mAfficheLot[this.proId] && that.mAfficheLot[this.proId] == 2) {
				this.nproNom += " (" + this.dcomTaille.nombreFormate(2,',',' ') + " " + this.proUniteMesure + ")";
			}
		});
		pResponse.sigleMonetaire = gSigleMonetaire;
		
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.listeProduitBonDeCommande;
		
		$('#liste-pdt').replaceWith(that.affectListeProduitFormulaire($(lTemplate.template(pResponse))));
	};	
	
	this.affectListeProduit = function(pData) {
		pData = this.affectEtatCommande(pData);
		pData = this.affectEnregistrer(pData);
		pData = this.affectModifier(pData);
		pData = this.affectMasquerFormulaire(pData);
		pData = this.affectCalculPrix(pData);
		pData = gCommunVue.comNumeric(pData);
		pData = gCommunVue.comHoverBtn(pData);
		if(this.mArchive == 2) { // Si le marché est archivé on ne peut plus faide de modification
			pData = this.affectDroitArchive(pData);
		}
		return pData;
	};
	
	this.affectListeProduitFormulaire = function(pData) {
		pData = this.affectEtatCommande(pData);
		pData = this.affectEnregistrer(pData);
		pData = this.affectModifier(pData);
		pData = this.affectMasquerDetail(pData);
		pData = this.affectCalculPrix(pData);
		pData = gCommunVue.comNumeric(pData);
		pData = gCommunVue.comHoverBtn(pData);
		if(this.mArchive == 2) { // Si le marché est archivé on ne peut plus faide de modification
			pData = this.affectDroitArchive(pData);
		}
		return pData;
	};
	
	this.affectMasquerDetail = function(pData) {
		pData.find(".detail").hide();
		return pData;
	};
	this.affectMasquerFormulaire = function(pData) {
		pData.find(".formulaire").hide();
		return pData;
	};
	
	this.affectEtatCommande = function(pData) {
		var that = this;
		pData.find(".qte-commande").keyup(function() {
			that.mEtatEdition = true;
			var lDcomId = $(this).data('id-detail-commande');
			if(that.mListeProduit[lDcomId]) {
				if($(this).val().numberFrToDb()- that.mListeProduit[lDcomId] < 0) {
					$("#etat-commande-" + lDcomId)
						.removeClass('qte-reservation-ok')
						.addClass('qte-reservation-ko');
				} else {
					$("#etat-commande-" + lDcomId)
						.removeClass('qte-reservation-ko')
						.addClass('qte-reservation-ok');
				}
			}
		});
		return pData;
	};
	
	this.affectEnregistrer = function(pData) {
		var that = this;
		pData.find("#btn-enregistrer").click(function() {
			that.mSuiteEdition = 0;
			that.enregistrer();
		});
		pData.find(".qte-commande ,.prix-commande ").keyup(function(event) {
			if (event.keyCode == '13') {
				that.mSuiteEdition = 0;
				that.enregistrer();
			}			
		});
		return pData;
	};
	this.affectModifier = function(pData) {
		var that = this;
		pData.find("#btn-modifier").click(function() {
			$(".detail").hide();
			$(".formulaire, #btn-annuler").show();
		});
		pData.find("#btn-annuler").click(function() {
			that.changementProducteur();
		});	
		return pData;
	};
	
	this.affectCalculPrix = function(pData) {
		pData.find(".qte-commande").keyup(function() {
			var lPrix = ($(this).val().numberFrToDb() * $(this).data('prix') / $(this).data('taille') ).toFixed(2);
			if(isNaN(lPrix) || lPrix <= 0) { 
				lPrix = '';
			} else { 
				lPrix = lPrix.nombreFormate(2,',','');
			}
			$(':input[name=prix-commande-' +  $(this).data('id-produit') + '-' + $(this).data('id-detail-commande') + ']').val(lPrix);
		});
		return pData;
	};
	
	this.enregistrer = function() {
		var that = this;
		
		var lParam = new ProduitsBonDeCommandeVO();
		
		lParam.id_commande = this.mIdCommande;
		lParam.id_compte_ferme = this.mIdCompteProducteur;
		lParam.export_type = 0;

		$('.qte-commande').each(function() {
			var lId = $(this).data('id-produit');	
			var lDcomId = $(this).data('id-detail-commande');
			var lProduit = new ProduitBonDeCommandeVO();
			lProduit = {id:lId,
						dcomId:lDcomId,
						quantite:$(':input[name=qte-commande-' + lId + '-' + lDcomId + ']').val().numberFrToDb(),
						prix:$(':input[name=prix-commande-' + lId + '-' + lDcomId + ']').val().numberFrToDb()
						};				
			lParam.produits.push(lProduit);
		});		
		
		var lValid = new ProduitsBonDeCommandeValid();
		var lVr = lValid.validAjout(lParam);
		
		if(lVr.valid) {
			lParam.fonction = "enregistrer";
			return $.post(	"./index.php?m=GestionCommande&v=BonDeCommande", "pParam=" + $.toJSON(lParam),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {
								that.mEtatEdition = false;
								
								if(that.mSuiteEdition == 1) {
									that.changementProducteur();
								} else if (that.mSuiteEdition == 2) {
									that.dialogExportBonDeCommande();
								} else {
									var lVr = new TemplateVR();
									lVr.valid = false;
									lVr.log.valid = false;
									var erreur = new VRerreur();
									erreur.code = ERR_301_CODE;
									erreur.message = ERR_301_MSG;
									lVr.log.erreurs.push(erreur);							
									
									//Infobulle.generer(lVr,'');
									that.changementProducteur({vr:lVr});
								}
							} else {
								Infobulle.generer(lResponse,'');
								//$('#select-prdt').selectOptions(that.mIdCompteProducteur);
							}
						}
					},"json"
			);
			
		} else {
			Infobulle.generer(lVr,'');
			//$('#select-prdt').selectOptions(that.mIdCompteProducteur);
		}
	};
	
	this.affectExportBonCommande = function(pData) {
		var that = this;	
		pData.find('#btn-export-bcom')
		.click(function() {
			if(that.mEtatEdition) {
				that.mSuiteEdition = 2;
				that.dialogEnregistrer();
			} else {
				that.dialogExportBonDeCommande();				
			}			
		});
		return pData;
	};
	
	this.dialogExportBonDeCommande = function() {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.dialogExportBonDeCommande;
		$(lTemplate.template({comNumero:that.mComNumero})).dialog({
			autoOpen: true,
			modal: true,
			draggable: false,
			resizable: false,
			width:600,
			buttons: {
				'Exporter': function() {
					// Récupération du formulaire
					var lFormat = $(this).find(':input[name=format]:checked').val();
					
					var lParam = new ExportBonReservationVO();
					lParam.id_commande = that.mIdCommande;
					lParam.format = lFormat;
					lParam.fonction = "export";
					lParam.idCompteFerme = $('#select-prdt').val();
					
					// Test des erreurs
					var lValid = new ExportBonReservationValid();
					var lVr = lValid.validAjout(lParam);
					
					Infobulle.init(); // Supprime les erreurs
					if(lVr.valid) {
						// Affichage
						$.download("./index.php?m=GestionCommande&v=BonDeCommande", lParam);
					} else {
						Infobulle.generer(lVr,'');
					}
				},
				'Annuler': function() {
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }
		});
	};
	
	this.dialogEnregistrer = function() {	
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.dialogEnregistrement;
		
		$(lTemplate).dialog({			
			autoOpen: true,
			modal: true,
			draggable: false,
			resizable: false,
			width:600,
			buttons: {
				'Enregistrer': function() {
					that.enregistrer();
					$(this).dialog('close');
				},
				'Annuler': function() {
					if(that.mSuiteEdition == 1) {
						$('#select-prdt').selectOptions(that.mIdCompteProducteur);
					}
					$(this).dialog('close');
				},
				'Ne pas Enregistrer': function() {
					that.mEtatEdition = false;
					if(that.mSuiteEdition == 1) {
						that.changementProducteur();
					} else if (that.mSuiteEdition == 2) {
						that.changementProducteur();
						that.dialogExportBonDeCommande();
					}
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
		});
	};
	
	this.construct(pParam);
};function ReservationAdherentVue(pParam) {
	this.mAdherent = null;
	this.infoCommande = new Object();
	this.pdtCommande = new Array();
	this.reservation = new Array();
	this.reservationModif = new Array();
	this.solde = 0;
	this.soldeNv = 0;
	this.mPremiereReservation = true;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {ReservationAdherentVue(pParam);}} );
		var that = this;
		pParam.fonction = "afficherReservation";
		$.post(	"./index.php?m=GestionCommande&v=ReservationAdherent", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.mAdherent = lResponse.adherent;
							
							that.infoCommande.comId = lResponse.marche.id;
							that.infoCommande.comNumero = lResponse.marche.numero;
							that.infoCommande.comNom = lResponse.marche.nom;
							that.infoCommande.comDescription = lResponse.marche.description;
							that.infoCommande.dateTimeFinReservation = lResponse.marche.dateFinReservation;
							that.infoCommande.dateFinReservation = lResponse.marche.dateFinReservation.extractDbDate().dateDbToFr();
							that.infoCommande.heureFinReservation = lResponse.marche.dateFinReservation.extractDbHeure();
							that.infoCommande.minuteFinReservation = lResponse.marche.dateFinReservation.extractDbMinute();
							that.infoCommande.dateMarcheDebut = lResponse.marche.dateMarcheDebut.extractDbDate().dateDbToFr();
							that.infoCommande.heureMarcheDebut = lResponse.marche.dateMarcheDebut.extractDbHeure();
							that.infoCommande.minuteMarcheDebut = lResponse.marche.dateMarcheDebut.extractDbMinute();
							that.infoCommande.heureMarcheFin = lResponse.marche.dateMarcheFin.extractDbHeure();
							that.infoCommande.minuteMarcheFin = lResponse.marche.dateMarcheFin.extractDbMinute();
							that.infoCommande.comArchive = lResponse.marche.archive;
							
							that.pdtCommande = lResponse.marche.produits;
							$.each(that.pdtCommande,function() {
								if(this.id) {
									var lIdProduit = this.id;
									$.each(this.lots, function() {
										if(this.id) {
											var lIdLot = this.id;
											$(lResponse.reservation).each(function() {
												if(this.idDetailCommande == lIdLot) {
													this.stoQuantite = this.quantite * -1;
													this.dcomId = this.idDetailCommande;
													this.proId = lIdProduit;
													that.reservation[lIdProduit] = this;
												}											
											});
										}
									});
								}
							});
							if(lResponse.reservation.length > 0)  {
								that.mPremiereReservation = false;
								that.afficher(1);								
							} else {
								that.afficher(2);					
							}
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(pType) {		
		if(pType == 1) {
			this.afficherDetailReservation();
		} else {
			this.afficherModifier();
		}	
	};
	
	this.afficherDetailReservation = function() {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.detailReservation;
		
		var lData = {};		
		lData.adhId = this.mAdherent.adhId;
		lData.adhNumero = this.mAdherent.adhNumero;
		lData.adhCompte = this.mAdherent.cptLabel;
		lData.adhNom = this.mAdherent.adhNom;
		lData.adhPrenom = this.mAdherent.adhPrenom;
		lData.adhSolde = this.mAdherent.cptSolde.nombreFormate(2,',',' ');
		
		lData.sigleMonetaire = gSigleMonetaire;
		lData.comNumero = this.infoCommande.comNumero;
		lData.dateFinReservation = this.infoCommande.dateFinReservation;
		lData.heureFinReservation = this.infoCommande.heureFinReservation;
		lData.minuteFinReservation = this.infoCommande.minuteFinReservation;
		lData.dateMarcheDebut = this.infoCommande.dateMarcheDebut;
		lData.heureMarcheDebut = this.infoCommande.heureMarcheDebut;
		lData.minuteMarcheDebut = this.infoCommande.minuteMarcheDebut;
		lData.heureMarcheFin = this.infoCommande.heureMarcheFin;
		lData.minuteMarcheFin = this.infoCommande.minuteMarcheFin;
		//lData.categories = [];
		
		var lIdCategorie = 0;
		var lNomCategorie = '';
		var lCategoriesTrie = [];
		var lProduits = [];
		
		var lTotal = 0;
		$.each(this.pdtCommande, function() {
			var lInfoProduit = this;
			if(that.reservation[this.id]) {
				if(lIdCategorie == 0) {
					lIdCategorie = this.idCategorie;
					lNomCategorie = this.cproNom;
				}
				
				var lPdt = new Object;
				lPdt.proId = lInfoProduit.id;
				lPdt.nproNom = this.nom;
				lPdt.stoQuantite = parseFloat(that.reservation[this.id].stoQuantite);
				lPdt.proUniteMesure = this.unite;
				lPdt.prix = 0;
				var lDcomId = that.reservation[this.id].dcomId;
				$.each(this.lots, function() {
					if(this.id == lDcomId) {
						lPdt.prix = (lPdt.stoQuantite / this.taille) * this.prix;
					}
				});
				lTotal += lPdt.prix;
				
				lPdt.stoQuantite = lPdt.stoQuantite.nombreFormate(2,',',' ');		
				lPdt.prix = lPdt.prix.nombreFormate(2,',',' ');
				
				/*if(!lData.categories[this.idCategorie]) {
					lData.categories[this.idCategorie] = {nom:this.cproNom,produits:[]};
				}*/
				
				lPdt.flagType = "";
				if(lInfoProduit.type == 2) {
					lPdt.flagType = lGestionCommandeTemplate.flagAbonnement;
				}
				
				//lData.categories[this.idCategorie].produits.push(lPdt);
				
				if(lIdCategorie != this.idCategorie) {
					lCategoriesTrie.push({
							nom:lNomCategorie,
							produits:lProduits
						});			
					lIdCategorie = this.idCategorie;
					lNomCategorie = this.cproNom;
					lProduits = [];
				} 
				lProduits.push(lPdt);
			}			
		});
		lData.total = parseFloat(lTotal).nombreFormate(2,',',' ');
		
		// Ajout de la dernière catégorie
		lCategoriesTrie.push({
			nom:lNomCategorie,
			produits:lProduits
		});	
		
		lData.categories = lCategoriesTrie;
		
		
		$('#contenu').replaceWith(that.affect($(lTemplate.template(lData))));		
	};
	
	this.afficherModifier = function() {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.modifierReservation;
		var lData = {};
		lData.adhId = this.mAdherent.adhId;
		lData.adhNumero = this.mAdherent.adhNumero;
		lData.adhCompte = this.mAdherent.cptLabel;
		lData.adhNom = this.mAdherent.adhNom;
		lData.adhPrenom = this.mAdherent.adhPrenom;
		lData.adhSolde = this.mAdherent.cptSolde.nombreFormate(2,',',' ');
		lData.adhNouveauSolde = 0;
		lData.sigleMonetaire = gSigleMonetaire;
		lData.comNumero = this.infoCommande.comNumero;
		lData.dateFinReservation = this.infoCommande.dateFinReservation;
		lData.heureFinReservation = this.infoCommande.heureFinReservation;
		lData.minuteFinReservation = this.infoCommande.minuteFinReservation;
		lData.dateMarcheDebut = this.infoCommande.dateMarcheDebut;
		lData.heureMarcheDebut = this.infoCommande.heureMarcheDebut;
		lData.minuteMarcheDebut = this.infoCommande.minuteMarcheDebut;
		lData.heureMarcheFin = this.infoCommande.heureMarcheFin;
		lData.minuteMarcheFin = this.infoCommande.minuteMarcheFin;
		//lData.categories = [];
		
		var lIdCategorie = 0;
		var lNomCategorie = '';
		var lCategoriesTrie = [];
		var lProduits = [];
		
		var lTotal = 0;		
		$.each(this.pdtCommande, function() {
			// Test si la ligne n'est pas vide
			if(this.id) {
				if(lIdCategorie == 0) {
					lIdCategorie = this.idCategorie;
					lNomCategorie = this.cproNom;
				}
				
				var lPdt = {};
				lPdt.proId = this.id;
				lPdt.nproNom = this.nom;
				lPdt.proUniteMesure = this.unite;
				
				lPdt.proMaxProduitCommande = parseFloat(this.qteMaxCommande);
				lPdt.flagType = "";
				
				// Recherche de la quantité reservée pour la déduire de la quantité max
				if(that.reservation[this.id]) {
					lPdt.stock = parseFloat(this.stockReservation) + parseFloat(that.reservation[this.id].stoQuantite);						
				} else {
					lPdt.stock = parseFloat(this.stockReservation);
				}
				
				/*if(parseFloat(lPdt.proMaxProduitCommande) < parseFloat(lPdt.stock)) {
					lPdt.max = lPdt.proMaxProduitCommande;
				} else {
					lPdt.max = lPdt.stock;
				}*/
				
				lPdt.lot = new Array();
				
				var lNoStock = false;
				if(parseFloat(this.qteMaxCommande) == -1 && parseFloat(this.stockInitial) == -1) { // Si ni stock ni qmax
					lNoStock = true;
				} else if(parseFloat(this.stockInitial) == -1) { // Si qmax mais pas stock
					lPdt.max = lPdt.proMaxProduitCommande;
				} else if(parseFloat(this.qteMaxCommande) == -1) { // Si stock mais pas qmax
					lPdt.max = lPdt.stock;
				} else { // Si stock et qmax
					if(parseFloat(lPdt.proMaxProduitCommande) < parseFloat(lPdt.stock)) {
						lPdt.max = lPdt.proMaxProduitCommande;
					} else {
						lPdt.max = lPdt.stock;
					}					
				}
				
			//	var i = 0;
				var lLotReservation = -1;
			//	var lLotInit = -1;
				
				lPdt.stoQuantiteReservation = 0;
				lPdt.prixReservation = 0;
				
				$.each(this.lots, function() {
					if(this.id) {
						if(lNoStock || (!lNoStock && parseFloat(this.taille) <= lPdt.max) ) {
							var lLot = {};
							lLot.dcomId = this.id;
							lLot.dcomTaille = parseFloat(this.taille).nombreFormate(2,',',' ');
							lLot.dcomPrix = parseFloat(this.prix).nombreFormate(2,',',' ');
							lLot.prixReservation = parseFloat(this.prix);
							lLot.stoQuantiteReservation = parseFloat(this.taille);
							
							if(that.reservation[lPdt.proId] && (that.reservation[lPdt.proId].dcomId == this.id)) {
									lLot.stoQuantiteReservation = parseFloat(that.reservation[lPdt.proId].stoQuantite);
									lLot.prixReservation = (lLot.stoQuantiteReservation / this.taille) * this.prix;
									lTotal += lLot.prixReservation;
									
									// Permet de cocher le lot correspondant à la résa
									lLotReservation = this.id;
									lLot.checked = 'checked="checked"';
									
									lPdt.stoQuantiteReservation = lLot.stoQuantiteReservation.nombreFormate(2,',',' ');
									lPdt.prixReservation = lLot.prixReservation.nombreFormate(2,',',' ');
							}
							
							if( lPdt.prixReservation == 0) {
								lPdt.stoQuantiteReservation = lLot.stoQuantiteReservation.nombreFormate(2,',',' ');
								lPdt.prixReservation = lLot.prixReservation.nombreFormate(2,',',' ');
							}
							
							lPdt.prixUnitaire = (lLot.prixReservation / lLot.stoQuantiteReservation).nombreFormate(2,',',' '); 						
														
							lPdt.lot.push(lLot);
						}
					}
				});
				
				lData.total = parseFloat(lTotal).nombreFormate(2,',',' ');
				
				// Si il y a une réservation pour ce produit on le coche
				if(lLotReservation != -1) {
					lPdt.checked = 'checked="checked"';
				} else {
					lPdt.checked = '';
				}
				
				/*if(lPdt.lot.length == 0) {		
					lPdt.checked = 'rel="indisponible"';
				}*/
				//lData.produit.push(lPdt);
				/*if(!lData.categories[this.idCategorie]) {
					lData.categories[this.idCategorie] = {nom:this.cproNom,produits:[]};
				}
				lData.categories[this.idCategorie].produits.push(lPdt);*/
				
				/*if(!lData.categories[this.idCategorie]) {
					lData.categories[this.idCategorie] = {nom:this.cproNom,produits:[]};
				}*/
				
				lPdt.sigleMonetaire = gSigleMonetaire;
				var lAjoutProduit = true;
				if(this.type == 0 ) {
					if(lPdt.lot.length == 0) {
						lPdt.nom = this.nom;
						lPdt.detailProduit = lGestionCommandeTemplate.produitIndisponible.template(lPdt);
					} else {
						lPdt.detailProduit = lGestionCommandeTemplate.formReservationProduit.template(lPdt);
					}
				} else if(this.type == 1 ) {
					lPdt.flagType = lGestionCommandeTemplate.flagSolidaire;
					lPdt.detailProduit = lGestionCommandeTemplate.formReservationProduitInfo.template(lPdt);
				} else if(this.type == 2 ) {
					lPdt.flagType = lGestionCommandeTemplate.flagAbonnement;					
					if(lPdt.lot.length == 0) { // L'admin peut modifier les réservations abonnement
						lAjoutProduit = false;
					} else {
						lPdt.detailProduit = lGestionCommandeTemplate.formReservationProduit.template(lPdt);
					}		
				}
				
				if(lAjoutProduit) {
					//lData.categories[this.idCategorie].produits.push(lPdt);
					if(lIdCategorie != this.idCategorie) {
						lCategoriesTrie.push({
								nom:lNomCategorie,
								produits:lProduits
							});			
						lIdCategorie = this.idCategorie;
						lNomCategorie = this.cproNom;
						lProduits = [];
					} 
					lProduits.push(lPdt);
				}
			}
		});
		
		// Ajout de la dernière catégorie
		lCategoriesTrie.push({
			nom:lNomCategorie,
			produits:lProduits
		});	
		
		lData.categories = lCategoriesTrie;
		
		
		// Maj des reservations temp pour modif
		this.reservationModif = [];
		$(this.reservation).each(function() {
			if(this.proId) {
					that.reservationModif[this.proId] = {
						proId:this.proId,
						dcomId:this.dcomId,
						stoQuantite:this.stoQuantite
						};
			}
		});
		
		$('#contenu').replaceWith(that.affectModifier($(lTemplate.template(lData))));
		this.majNouveauSolde();
	};
	
	this.affectDroitArchive = function(pData) {
		pData.find(".boutons-edition").remove();
		pData.find(".boutons-edition-modification").remove();
		return pData;
	};
	
	this.affect = function(pData) {
		pData = this.affectModifierReservation(pData);
		pData = this.affectAnnulerDetailReservation(pData);
		pData = this.affectSupprimerReservation(pData);		
		pData = this.affectInfoProduit(pData);
		pData = gCommunVue.comHoverBtn(pData);
		if(this.infoCommande.comArchive == 2) { // Si le marché est archivé on ne peut plus faide de modification
			pData = this.affectDroitArchive(pData);
		}
		return pData;
	};
		
	this.affectModifier = function(pData) {
		pData = this.affectBtnQte(pData);
		pData = this.affectChangementLot(pData);
		pData = this.affectChangementProduit(pData);
		pData = this.preparerAffichageModifier(pData);
		pData = this.affectValiderReservation(pData);
		pData = this.affectAnnulerReservation(pData);	
		pData = this.supprimerSelect(pData);	
		pData = this.affectNouveauSolde(pData);
		pData = this.affectInitLot(pData);
		pData = this.affectInfoProduit(pData);
		pData = gCommunVue.comHoverBtn(pData);
		if(this.infoCommande.comArchive == 2) { // Si le marché est archivé on ne peut plus faide de modification
			pData = this.affectDroitArchive(pData);
		}
		return pData;
	};
	
	this.affectInfoProduit = function(pData) {
		//var that = this;
		pData.find('.btn-info-produit')
		.click(function() {		
			var lId = $(this).attr('id-produit');
			var lParam = {id:lId,fonction:"detailProduit"};
			$.post(	"./index.php?m=GestionCommande&v=ReservationAdherent", "pParam=" + $.toJSON(lParam),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {
								var lGestionCommandeTemplate = new GestionCommandeTemplate();
								var lTemplate = lGestionCommandeTemplate.dialogInfoProduit;
								
								lResponse.produit.sigleMonetaire = gSigleMonetaire;
								
								var lHtml = $(lTemplate.template(lResponse.produit));
								
								if(lResponse.produit.producteurs.length > 0 && lResponse.produit.producteurs[0].nPrdtIdNomProduit == null) {
									lHtml.find('#pro-prdt').remove();
								}
								if(lResponse.produit.caracteristiques.length > 0 && lResponse.produit.caracteristiques[0].carProIdNomProduit == null) {
									lHtml.find('#pro-car').remove();
								}
								
								$(lHtml).dialog({			
									autoOpen: true,
									modal: true,
									draggable: true,
									resizable: false,
									width:600,
									close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
								});								
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
					},"json"
			);
			
		});
		return pData;
	};
	
	this.affectBtnQte = function(pData) {
		var that = this;
		pData.find('.btn-plus').click(function() {
			Infobulle.init(); // Supprime les erreurs
			var lIdPdt = $(this).parent().parent().find(".pdt-id").text();
			that.nouvelleQuantite(	lIdPdt,
									$(this).parent().parent().find('#lot-' + lIdPdt).val(),
									1);
		});	
		pData.find('.btn-moins').click(function() {
			Infobulle.init(); // Supprime les erreurs
			var lIdPdt = $(this).parent().parent().find(".pdt-id").text();
			that.nouvelleQuantite(lIdPdt,$(this).parent().parent().find('#lot-' + lIdPdt).val(),-1);
		});
		return pData;		
	};
	
	this.affectChangementLot = function(pData) {
		var that = this;
		pData.find('.pdt select').change(function() {
			Infobulle.init(); // Supprime les erreurs
			that.changerLot($(this).parent().parent().find(".pdt-id").text(),$(this).val());
		});
		return pData;
	};
	
	this.affectChangementProduit = function(pData) {
		var that = this;
		pData.find('.pdt :checkbox').click(function() {
			Infobulle.init(); // Supprime les erreurs
			that.changerProduit($(this).parent().parent().find(".pdt-id").text());			
		});
		return pData;
	};
	
	this.affectValiderReservation = function(pData) {
		var that = this;
		pData.find('#btn-valider').click(function() {
			that.validerReservation();			
		});
		return pData;	
	};
	
	this.affectAnnulerReservation = function(pData) {
		var that = this;
		pData.find('#btn-annuler').click(function() {
			if(that.mPremiereReservation) {
				ListeReservationMarcheVue({"id_marche":that.infoCommande.comId});	
			} else {
				that.afficherDetailReservation();		
			}
		});
		return pData;
	};
	
	this.affectModifierReservation = function(pData) {
		var that = this;
		pData.find('#btn-modifier').click(function() {
			that.afficherModifier();		
		});
		return pData;
	};
	
	this.affectAnnulerDetailReservation = function(pData) {
		var that = this;
		pData.find('#btn-annuler').click(function() {
			ListeReservationMarcheVue({"id_marche":that.infoCommande.comId});		
		});
		return pData;
	};	
	
	this.affectInitLot = function(pData) {
		var that = this;
		pData.find('.pdt select').each(function() {
			var lIdPdt = $(this).parent().parent().find(".pdt-id").text();
			var lIdLot = $(this).val();
			
			if(that.pdtCommande[lIdPdt] && that.pdtCommande[lIdPdt].lots[lIdLot]) {
				var lPrix = that.pdtCommande[lIdPdt].lots[lIdLot].prix;
				var lQte = that.pdtCommande[lIdPdt].lots[lIdLot].taille;
				var lprixUnitaire = (lPrix / lQte).nombreFormate(2,',',' '); 						
				
				$(pData).find('#prix-unitaire-' + lIdPdt).text(lprixUnitaire);
			}
		});
		return pData;
	};
	
	this.nouvelleQuantite = function(pIdPdt,pIdLot,pIncrement) {		
		// La quantité max soit qte max soit stock
		var lMax = parseFloat(this.pdtCommande[pIdPdt].qteMaxCommande);
		
		// Recherche de la quantité reservée pour la déduire de la quantité max
		var lStock = 0;
		if(this.reservation[pIdPdt]) {
			lStock = parseFloat(this.pdtCommande[pIdPdt].stockReservation) + parseFloat(this.reservation[pIdPdt].stoQuantite);						
		} else {
			lStock = parseFloat(this.pdtCommande[pIdPdt].stockReservation);
		}
		
		var lNoStock = false;
		if(parseFloat(this.pdtCommande[pIdPdt].qteMaxCommande) == -1 && parseFloat(this.pdtCommande[pIdPdt].stockInitial) == -1) { // Si ni stock ni qmax
			lNoStock = true;
		} else if(parseFloat(this.pdtCommande[pIdPdt].stockInitial) == -1) { // Si qmax mais pas stock
			lMax = this.pdtCommande[pIdPdt].qteMaxCommande;
		} else if(parseFloat(this.pdtCommande[pIdPdt].qteMaxCommande) == -1) { // Si stock mais pas qmax
			lMax = lStock;
		} else { // Si stock et qmax
			if(parseFloat(lStock) < parseFloat(lMax)) { lMax = lStock; }				
		}
		
		var lTaille = this.pdtCommande[pIdPdt].lots[pIdLot].taille;
		var lPrix = this.pdtCommande[pIdPdt].lots[pIdLot].prix;

		// Récupère le nombre de lot réservé
		var lQteReservation = 0;
		if(this.reservationModif[pIdPdt] && (this.reservationModif[pIdPdt].dcomId == pIdLot)) {
			lQteReservation = parseFloat(this.reservationModif[pIdPdt].stoQuantite)/parseFloat(lTaille);
		}
		lQteReservation += pIncrement;
		
		var lNvQteReservation = 0;		
		lNvQteReservation = lQteReservation * lTaille;
		
		// Test si la quantité est dans les limites
		if((lNoStock && lNvQteReservation > 0) || (!lNoStock && lNvQteReservation > 0 && lNvQteReservation <= lMax)) {
			var lNvPrix = 0;
			lNvPrix = (lQteReservation * lPrix).toFixed(2);

			// Mise à jour de la quantite reservée
			this.reservationModif[pIdPdt].stoQuantite = lNvQteReservation;			
			
			$('#qte-pdt-' + pIdPdt).text(parseFloat(lNvQteReservation).nombreFormate(2,',',' '));
			$('#prix-pdt-' + pIdPdt).text(parseFloat(lNvPrix).nombreFormate(2,',',' '));		

			this.majTotal();
		} else if(lNvQteReservation > lMax && lMax != -1) {			
			var lVr = new TemplateVR();
			lVr.valid = false;
			lVr.commandes = [];
			              
			var lProduit = new ReservationCommandeVR();              
			lProduit.valid = false;
			lProduit.stoQuantite.valid = false;
			var erreur = new VRerreur();
			erreur.code = ERR_304_CODE;
			erreur.message = ERR_304_MSG;
			lProduit.stoQuantite.erreurs.push(erreur);		
			lVr.commandes[pIdPdt] = lProduit;
			
			Infobulle.generer(lVr,'');
		}		
	};
	
	this.changerLot = function(pIdPdt,pIdLot) {
		var lPrix = this.pdtCommande[pIdPdt].lots[pIdLot].prix;
		var lQte = this.pdtCommande[pIdPdt].lots[pIdLot].taille;
		var lprixUnitaire = (lPrix / lQte).nombreFormate(2,',',' '); 						

		$('#prix-unitaire-' + pIdPdt).text(lprixUnitaire);
		
		if(this.reservationModif[pIdPdt]) {
			this.reservationModif[pIdPdt].dcomId = pIdLot;
			this.reservationModif[pIdPdt].stoQuantite = lQte;
			$('#qte-pdt-' + pIdPdt).text(lQte.nombreFormate(2,',',' '));
			$('#prix-pdt-' + pIdPdt).text(lPrix.nombreFormate(2,',',' '));
		}
		
		this.majTotal();
	};
	
	this.changerProduit = function(pIdPdt) {
		if(this.reservationModif[pIdPdt] != null) {
			$('.resa-pdt-' + pIdPdt).hide();
			$('#qte-pdt-' + pIdPdt).text('');
			$('#prix-pdt-' + pIdPdt).text('');
			this.reservationModif[pIdPdt] = null;
		} else {
			var lIdLot = $('#lot-' + pIdPdt).val();
			var lQte = this.pdtCommande[pIdPdt].lots[lIdLot].taille;			
			
			var lResa = {};
			lResa.comId = this.infoCommande.comId;
			lResa.proId = pIdPdt;
			lResa.dcomId = lIdLot;
			lResa.stoQuantite = lQte;						
			this.reservationModif[pIdPdt] = lResa;
			
			$('#qte-pdt-' + pIdPdt).text(lQte.nombreFormate(2,',',' '));
			var lPrix = this.pdtCommande[pIdPdt].lots[lIdLot].prix.nombreFormate(2,',',' ');
			$('#prix-pdt-' + pIdPdt).text(lPrix);
			
			$('.resa-pdt-' + pIdPdt).show();
		}
		this.majTotal();
	};
	
	this.majTotal = function() {
		$('#total').text(this.calculTotal().nombreFormate(2,',',' '));
		this.majNouveauSolde();
	};
	
	this.majNouveauSolde = function() {
		var lNvSolde = this.mAdherent.cptSolde - this.calculTotal();
		if(lNvSolde <= 0) {
			$("#nouveau-solde").addClass("com-nombre-negatif");
			$("#nouveau-solde-sigle").addClass("com-nombre-negatif");			
		} else {
			$("#nouveau-solde").removeClass("com-nombre-negatif");
			$("#nouveau-solde-sigle").removeClass("com-nombre-negatif");
		}
		$("#nouveau-solde").text(lNvSolde.nombreFormate(2,',',' '));
	};
	
	this.affectNouveauSolde = function(pData) {
		var lNvSolde = this.mAdherent.cptSolde - this.calculTotal();
		if(lNvSolde <= 0) {
			pData.find("#nouveau-solde").addClass("com-nombre-negatif");
			pData.find("#nouveau-solde-sigle").addClass("com-nombre-negatif");			
		} else {
			pData.find("#nouveau-solde").removeClass("com-nombre-negatif");
			pData.find("#nouveau-solde-sigle").removeClass("com-nombre-negatif");
		}
		pData.find("#nouveau-solde").text(lNvSolde.nombreFormate(2,',',' '));
		return pData;		
	};
	
	this.calculTotal = function() {
		var that = this;
		var lTotal = 0;
		$(this.reservationModif).each(function() {
			var lResa = this;
			if(lResa.stoQuantite) {
				if(that.pdtCommande[lResa.proId]) {
					$.each(that.pdtCommande[lResa.proId].lots, function() {
						if(lResa.dcomId == this.id) {
							lTotal += (lResa.stoQuantite / this.taille) * this.prix;
						}
					});					
				}				
			}
		});
		return lTotal;
	};
	
	this.preparerAffichageModifier = function(pData) {
		var that = this;
		
		$(pData).find('.pdt').each(function() {
			var lIdPdt = $(this).find('.pdt-id').text();
			if(that.reservation[lIdPdt] != null) {
				var lResa = that.reservation[lIdPdt];
				var lIdLot = lResa.dcomId;
				var lQte = lResa.stoQuantite;			
				$(pData).find('#qte-pdt-' + lIdPdt).text(lQte.nombreFormate(2,',',' '));
				
				var lPrix = ((that.pdtCommande[lIdPdt].lots[lIdLot].prix * lResa.stoQuantite)/that.pdtCommande[lIdPdt].lots[lIdLot].taille).nombreFormate(2,',',' ');
				$(pData).find('#prix-pdt-' + lIdPdt).text(lPrix);
				$(pData).find('#lot-' + lIdPdt).selectOptions(lIdLot);
				
				//$(pData).find('.resa-pdt-' + lIdPdt).show();
				$(pData).find('.resa-pdt-' + lIdPdt).css("display","table-cell"); //Show ne fonctionne pas sur chrome
			}
		});
		return pData;
	};
	
	this.validerReservation = function() {
		var that = this;
		Infobulle.init(); // Supprime les erreurs
		
		var lVo = new ListeReservationCommandeVO();
		var lNbPdt = 0;
		$(this.reservationModif).each(function() {
			if(this.stoQuantite) {
				var lVoResa = new ReservationCommandeVO();
				lVoResa.stoQuantite = this.stoQuantite * -1;
				lVoResa.stoIdDetailCommande = this.dcomId;
				lVo.detailReservation.push(lVoResa);
				lNbPdt++;
			}
		});
		
		if(lNbPdt > 0){
			var lValid = new ListeReservationCommandeValid();
			var lVR = lValid.validAjout(lVo);
			if(!lVR.valid){
				Infobulle.generer(lVR,'');
			} else {
				// Maj de la reservation
				lVo.fonction = "modifierReservation";
				lVo.id_compte = this.mAdherent.adhIdCompte;
				//lParam = {"reservation":lVo,"id_compte":this.mAdherent.adhIdCompte,fonction:"modifierReservation"};
				$.post(	"./index.php?m=GestionCommande&v=ReservationAdherent", "pParam=" + $.toJSON(lVo),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {							
								// Maj des reservations pour le recap
								/*that.reservation = new Array();
								$(that.reservationModif).each(function() {
									if(this.proId) {									
										that.reservation[this.proId] = {comId:this.comId,proId:this.proId,dcomId:this.dcomId,stoId:this.stoId,stoQuantite:this.stoQuantite,stoType:this.stoType,stoIdCompte:this.stoIdCompte};
									}
								});
								that.afficher();*/
								// Maj des reservations pour le recap
								that.reservation = [];
								$(that.reservationModif).each(function() {
									if(this.proId) {
										that.reservation[this.proId] = {
												proId:this.proId,
												dcomId:this.dcomId,
												stoQuantite:this.stoQuantite
												};
									}
								});
								
								if(that.mPremiereReservation)  {
									that.mPremiereReservation = false;								
									// Message d'information du bon enregistrement
									var lVr = new TemplateVR();
									lVr.valid = false;
									lVr.log.valid = false;
									var erreur = new VRerreur();
									erreur.code = ERR_350_CODE;
									erreur.message = ERR_350_MSG;
									lVr.log.erreurs.push(erreur);	
									Infobulle.generer(lVr,'');
									
								} else {								
									// Message d'information de la bonne modification
									var lVr = new TemplateVR();
									lVr.valid = false;
									lVr.log.valid = false;
									var erreur = new VRerreur();
									erreur.code = ERR_337_CODE;
									erreur.message = ERR_337_MSG;
									lVr.log.erreurs.push(erreur);	
									Infobulle.generer(lVr,'');
								}
								
								that.afficher(1);
								
								
								
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
					},"json"
				);	
			}			
		} else {
			var lVR = new TemplateVR();
			lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_207_CODE;erreur.message = ERR_207_MSG;lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,'');
		}		
	};
	
	this.affectSupprimerReservation = function(pData) {
		var that = this;
		pData.find('#btn-supprimer').click(function() {
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			var lTemplate = lGestionCommandeTemplate.supprimerReservationDialog;
			$(lTemplate).dialog({
				autoOpen: true,
				modal: true,
				draggable: false,
				resizable: false,
				width:600,
				buttons: {
					'Supprimer': function() {
						var lParam = {	id_commande:that.infoCommande.comId,
										id_compte:that.mAdherent.adhIdCompte,
										fonction:"supprimerReservation"};
						var lDialog = this;
						$.post(	"./index.php?m=GestionCommande&v=ReservationAdherent", "pParam=" + $.toJSON(lParam),
								function(lResponse) {
									Infobulle.init(); // Supprime les erreurs
									if(lResponse) {
										if(lResponse.valid) {
											
											var lVr = new TemplateVR();
											lVr.valid = false;
											lVr.log.valid = false;
											var erreur = new VRerreur();
											erreur.code = ERR_303_CODE;
											erreur.message = ERR_303_MSG;
											lVr.log.erreurs.push(erreur);							
	
											// Redirection vers la vue edition
											ListeReservationMarcheVue({id_marche:that.infoCommande.comId,
																vr:lVr});
											
											$(lDialog).dialog("close");
											
										} else {
											Infobulle.generer(lResponse,'');
										}
									}
								},"json"
						);
					},
					'Annuler': function() { $(this).dialog("close"); }
					},
				close: function(ev, ui) { $(this).remove(); }
			});
		});
		return pData;
	};
	
	this.supprimerSelect = function(pData) {
		pData.find('.pdt select').each(function() {
			if($(this).find('option').size() == 1) {				
				var lGestionCommandeTemplate = new GestionCommandeTemplate();
				var lTemplate = lGestionCommandeTemplate.lotUnique;
				var lData = {};
				lData.IdPdt = $(this).parent().parent().find(".pdt-id").text();
				lData.valeur = $(this).val();
				lData.text = $(this).text();
				
				$(this).replaceWith(lTemplate.template(lData));
			}
		});
		
		return pData;
	};
	
	this.construct(pParam);
};function ListeReservationMarcheVue(pParam) {
	this.mIdMarche = null;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {ListeReservationMarcheVue(pParam);}} );
		//this.mParam = pParam;
		var that = this;
		pParam.fonction = 'afficher';
		$.post(	"./index.php?m=GestionCommande&v=ListeReservationMarche", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.mIdMarche = pParam.id_marche;
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};

	this.afficher = function(pResponse) {
		var that = this;

		// Met le bouton en actif
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = '';
		if(pResponse.listeAdherent[0].adhId && pResponse.listeAdherent[0].adhId != null) {
			lTemplate = lGestionCommandeTemplate.listeReservation;
			$.each(pResponse.listeAdherent,function() {
				this.adhIdTri = this.adhNumero.replace("Z","");
			});
		} else {
			lTemplate = lGestionCommandeTemplate.listeReservationVide;
		}
		
		pResponse.infoMarcheSelected = '';
		pResponse.listeReservationSelected = 'ui-state-active';
		pResponse.listeAchatSelected = '';
		pResponse.resumeMarcheSelected = '';

		pResponse.editerMenu = lGestionCommandeTemplate.editerMarcheMenu.template(pResponse);
		
		var lHtml = that.affectReservationAction($(lTemplate.template(pResponse)));	
		$('#contenu').replaceWith(lHtml);		
	};
	
	this.affectReservationAction = function(pData) {
		pData = this.affectTri(pData);
		pData = this.affectRecherche(pData);
		pData = this.affectExportReservation(pData);
		pData = this.affectReservation(pData);
		pData = this.affectMenu(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectMenu = function(pData) {
		var that = this;
		pData.find('#btn-information-marche').click(function() {
			EditerCommandeVue({id_marche:that.mIdMarche});
		});		
		pData.find("#btn-liste-achat-resa").click(function() {
			ListeAchatMarcheVue({id_marche:that.mIdMarche});
		});
		pData.find("#btn-liste-resa").click(function() {
			ListeReservationMarcheVue({id_marche:that.mIdMarche});
		});
		pData.find("#btn-resume-marche").click(function() {
			ResumeMarcheVue({id_marche:that.mIdMarche});
		});
		return pData;
	};
	
	this.affectTri = function(pData) {
		pData.find('.com-table').tablesorter({sortList: [[2,0]],headers: { 4: {sorter: false} } });
		return pData;
	};
	
	this.affectRecherche = function(pData) {
		pData.find("#filter").keyup(function() {
		    $.uiTableFilter( $('.com-table'), this.value );
		  });
		pData.find("#filter-form").submit(function () {return false;});
		return pData;
	};
		
	this.affectReservation = function(pData) {
		var that = this;
		pData.find('.edt-com-reservation-ligne').click(function() {
			ReservationAdherentVue({"id_commande":that.mIdMarche,"id_adherent":$(this).attr('id-adherent')});
		});
		return pData;
	};
	
	this.affectExportReservation = function(pData) {		
		var that = this;
		pData.find('#btn-export-resa')
		.click(function() {			
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			var lTemplate = lGestionCommandeTemplate.dialogExportListeReservation;

			// N'affiche pas les produits solidaire		
			var lListe = {fermes:[]};
			$(that.mListeFerme.fermes).each(function(i,val) {
				var lAjoutFerme = false;
				var lFerme = {ferId:this.ferId,
						ferNom:this.ferNom,
						categories:[]};
				$(this.categories).each(function(i,val) {
					var lAjoutCategorie = false;
					var lCategorie = {
							cproId:this.cproId,
							cproNom:this.cproNom,
							produits:[]};
					$(this.produits).each(function(i,val) {									
						if(this.type == 2 || this.type == 0) {						
							lCategorie.produits.push(this);
							lAjoutFerme = true;
							lAjoutCategorie = true;
						}
					});
					if(lAjoutCategorie) {
						lFerme.categories.push(lCategorie);
					}
		
				});
				if(lAjoutFerme) {
					lListe.fermes.push(lFerme);
				}
			});
			
			$(lTemplate.template(lListe)).dialog({
				autoOpen: true,
				modal: true,
				draggable: false,
				resizable: false,
				width:600,
				buttons: {
					'Exporter': function() {
						// Récupération du formulaire
						var lIdProduits = '';
						$(this).find(':input[name=id_produits]:checked').each(function() {
							lIdProduits += $(this).val() + ',';
						});
						lIdProduits = lIdProduits.substr(0,lIdProduits.length-1);
						
						var lFormat = $(this).find(':input[name=format]:checked').val();
						var lParam = new ExportListeReservationVO();
						lParam = {fonction:"exportReservation",id_commande:that.mIdMarche,id_produits:lIdProduits,format:lFormat};
						
						// Test des erreurs
						var lValid = new ExportListeReservationValid();
						var lVr = lValid.validAjout(lParam);
						
						Infobulle.init(); // Supprime les erreurs
						if(lVr.valid) {
							// Affichage
							$.download("./index.php?m=GestionCommande&v=ListeReservationMarche", lParam);
						} else {
							Infobulle.generer(lVr,'');
						}
					},
					'Annuler': function() {
						$(this).dialog('close');
					}
				},
				close: function(ev, ui) { $(this).remove(); Infobulle.init(); }	
			});
			
		});
		return pData;
	};	
	this.construct(pParam);
};function EditerCommandeVue(pParam) {
	this.mArchive = -1;
	this.mIdMarche = null;
	this.mMarche = new MarcheVO();
	//this.mAffichageMarche = [];
	this.mListeFerme = null;
	this.mEditionLot = false;
	this.mIdLot = 0;
	this.mIdLotAbonnement = 0;
	this.mNbProduit = 0;
	this.mProduits = [];
	this.mParam = null;
	this.mLotRemplacement = [];
	this.mLotReservation = [];
	this.mTailleLotResaMax = -1;
	this.mQuantiteReservation = -1;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {EditerCommandeVue(pParam);}} );
		this.mParam = pParam;
		var that = this;
		pParam.fonction = 'afficher';
		$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							
							delete that.mProduits;
							that.mProduits = [];
							
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(pResponse) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		
		var lData = {};
		
		lData.comId = pResponse.marche.id;
		this.mIdMarche = lData.comId;
		lData.comNumero = pResponse.marche.numero;
		lData.nom = pResponse.marche.nom;
		lData.comDescription = pResponse.marche.description;
		lData.dateTimeDebutReservation = pResponse.marche.dateDebutReservation;
		lData.dateDebutReservation = pResponse.marche.dateDebutReservation.extractDbDate().dateDbToFr();
		lData.heureDebutReservation = pResponse.marche.dateDebutReservation.extractDbHeure();
		lData.minuteDebutReservation = pResponse.marche.dateDebutReservation.extractDbMinute();		
		lData.dateTimeFinReservation = pResponse.marche.dateFinReservation;
		lData.dateFinReservation = pResponse.marche.dateFinReservation.extractDbDate().dateDbToFr();
		lData.heureFinReservation = pResponse.marche.dateFinReservation.extractDbHeure();
		lData.minuteFinReservation = pResponse.marche.dateFinReservation.extractDbMinute();
		lData.dateMarcheDebut = pResponse.marche.dateMarcheDebut.extractDbDate().dateDbToFr();
		lData.heureMarcheDebut = pResponse.marche.dateMarcheDebut.extractDbHeure();
		lData.minuteMarcheDebut = pResponse.marche.dateMarcheDebut.extractDbMinute();
		lData.heureMarcheFin = pResponse.marche.dateMarcheFin.extractDbHeure();
		lData.minuteMarcheFin = pResponse.marche.dateMarcheFin.extractDbMinute();
		lData.archive = pResponse.marche.archive;
				
		var lAffichageMarche = [];
		$.each(pResponse.marche.produits,function() {
			var lIdFerme = this.ferId;
			var lIdCategorie = this.idCategorie;
			var lIdNomProduit = this.idNom;
			var lTypeProduit = this.type;
			
			if(lTypeProduit == 0 || lTypeProduit == 2) { // Si normal ou abonnement
				var lQteReservation = parseFloat(this.stockInitial) - parseFloat(this.stockReservation);
				if(this.stockInitial == -1) { // Si pas de limite de stock il faut rajouter 1 car stock init = -1
					lQteReservation++;
				}
			} else { // Si solidaire pas de réservation
				lQteReservation = 0;
			}
			
			var lProduit = {id:this.id,
							nproId:lIdNomProduit,
							nproNom:this.nom,
							nproStock:this.stockInitial,
							nproQteMax:this.qteMaxCommande,
							nproUnite:this.unite,
							type:lTypeProduit,
							qteReservation:lQteReservation.nombreFormate(2,',',' ')};	
			
			if(!lAffichageMarche[lIdFerme]) {
				lAffichageMarche[lIdFerme] = {	ferId:lIdFerme,
													ferNom:this.ferNom,
													categories:[]};
			}
			
			if(!lAffichageMarche[lIdFerme].categories[lIdCategorie]){
				lAffichageMarche[lIdFerme].categories[lIdCategorie] = {
						cproId:lIdCategorie,
						cproNom:this.cproNom,
						produits:[],
						produitsAbonnement:[]};
			}
			if(lTypeProduit == 2) { // Abonnement
				lAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdNomProduit] = lProduit;		
			} else { // Normal ou solidaire
				lAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdNomProduit] = lProduit;		
			}
			that.mNbProduit++;
		});
		
		
		var lFermes = [];		
		$(lAffichageMarche).each(function() {
			if(this.ferId) {
				var lCategories = [];
				$(this.categories).each(function() {
					if(this.cproId) {
						var lProduits = [];
						$(this.produits).each(function() {
							if(this.nproId) {
								lProduits.push([this.nproNom,this.nproId,this.type]);
							}						
						});		
						$(this.produitsAbonnement).each(function() {
							if(this.nproId) {
								lProduits.push([this.nproNom,this.nproId,this.type]);
							}						
						});	
						lProduits.sort(sortABC);
						lCategories.push([this.cproNom,this.cproId,lProduits]);
					}
				});		
				lCategories.sort(sortABC);
				lFermes.push([this.ferNom,this.ferId,lCategories]);		
			}
		});
		lFermes.sort(sortABC);
		
		this.mListeFerme = {fermes:[]};
		$(lFermes).each(function(i,val) {
			var lIdFerme = val[1];
			var lCategories = val[2];
			if(lAffichageMarche[lIdFerme]) {
				var lAjoutFerme = false;
				var lFerme = {	ferId:lAffichageMarche[lIdFerme].ferId,
								ferNom:lAffichageMarche[lIdFerme].ferNom,
								categories:[]};
				$(lCategories).each(function(i,val) {
					var lIdCategorie = val[1];
					var lProduits = val[2];
					if(lAffichageMarche[lIdFerme].categories[lIdCategorie]) {
						var lAjoutCategorie = false;
						var lCategorie = {
								cproId:lAffichageMarche[lIdFerme].categories[lIdCategorie].cproId,
								cproNom:lAffichageMarche[lIdFerme].categories[lIdCategorie].cproNom,
								produits:[]};
						$(lProduits).each(function(i,val) {
							var lIdProduit = val[1];
							var lType = val[2];
							var lAbonnement = "";
							
							if(lType == 2) {
								lAbonnement = lGestionCommandeTemplate.flagAbonnement;
								if(lAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdProduit]) {									
									lCategorie.produits.push({
										id:lAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdProduit].id,
										nproId:lAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdProduit].nproId,
										nproNom:lAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdProduit].nproNom,
										nproUnite:lAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdProduit].nproUnite,
										qteReservation:lAffichageMarche[lIdFerme].categories[lIdCategorie].produitsAbonnement[lIdProduit].qteReservation,
										type:lType,
										abonnement:lAbonnement});
									lAjoutFerme = true;
									lAjoutCategorie = true;
								}
							} else {
								if(lAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit].type == 1) {
									lAbonnement = lGestionCommandeTemplate.flagSolidaire;
								}
								if(lAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit]) {
																	
									lCategorie.produits.push({
										id:lAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit].id,
										nproId:lAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit].nproId,
										nproNom:lAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit].nproNom,
										nproUnite:lAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit].nproUnite,
										qteReservation:lAffichageMarche[lIdFerme].categories[lIdCategorie].produits[lIdProduit].qteReservation,
										type:lType,
										abonnement:lAbonnement});
									lAjoutFerme = true;
									lAjoutCategorie = true;
								}	
							}
						});
						if(lAjoutCategorie) {
							lFerme.categories.push(lCategorie);
						}
					}
				});
				if(lAjoutFerme) {
					that.mListeFerme.fermes.push(lFerme);
				}
			}
		});
		
		lData.sigleMonetaire = gSigleMonetaire;
		
		this.mMarche = $.extend(that.mMarche,lData);
		this.mMarche.produits = [];
		this.mMarche.produitsAbonnement = [];
		$.each(pResponse.marche.produits,function() {	
			if(this.type== 2) {
				that.mMarche.produitsAbonnement[this.idNom] = 1;
			} else {
				that.mMarche.produits[this.idNom] = 1;
			}
		});
			
		var lTemplate = lGestionCommandeTemplate.editerCommandePage;
		
		lData.infoMarcheSelected = 'ui-state-active';
		lData.listeReservationSelected = '';
		lData.listeAchatSelected = '';
		pResponse.resumeMarcheSelected = '';
		
		lData.editerMenu = lGestionCommandeTemplate.editerMarcheMenu.template(lData);
		this.mArchive = pResponse.marche.archive;
		$('#contenu').replaceWith(that.affect($(lTemplate.template(lData))));	
	};
	
	this.affectDroitArchive = function(pData) {
		pData.find("#btn-ajout-produit-div").remove();
		pData.find("#btn-modif-com").remove();
		pData.find(".btn-modifier-produit").remove();		
		pData.find(".btn-supprimer-produit").remove();
		pData.find("#btn-pause-com").remove();
		pData.find("#btn-play-com").remove();
		pData.find("#btn-cloture-com").remove();
		return pData;
	};
	
	this.affect = function(pData) {
		pData = this.affectModifier(pData);
		pData = this.affectDupliquerMarche(pData);
		pData = this.affectBonDeCommande(pData);
		pData = this.affectFacture(pData);
		pData = this.affectArchive(pData);
		pData = this.affectMajListeFerme(pData);
		pData = this.affectDialogAjoutProduit(pData);
		pData = this.affectMenu(pData);
		pData = gCommunVue.comHoverBtn(pData);
		if(this.mArchive == 2) { // Si le marché est archivé on ne peut plus faide de modification
			pData = this.affectDroitArchive(pData);
		}
		return pData;
	};
	
	this.affectMenu = function(pData) {
		var that = this;
		pData.find('#btn-information-marche').click(function() {
			EditerCommandeVue(that.mParam);
		});		
		pData.find("#btn-liste-achat-resa").click(function() {
			ListeAchatMarcheVue({id_marche:that.mIdMarche});
		});
		pData.find("#btn-liste-resa").click(function() {
			ListeReservationMarcheVue({id_marche:that.mIdMarche});
		});
		pData.find("#btn-resume-marche").click(function() {
			ResumeMarcheVue({id_marche:that.mIdMarche});
		});
		return pData;
	};
			
	this.affectModifier = function(pData) {	
		var that = this;
		pData.find('#btn-modif-com').click(function() {
			that.dialogModifierInformationMarche();
		});
		return pData;
	};
	
	this.affectBonDeCommande = function(pData) {
		var that = this;
		pData.find('#btn-bon-com').click(function() {
			BonDeCommandeVue({"id_commande":that.mIdMarche});
		});
		return pData;
	};
	
	this.affectFacture = function(pData) {
		var that = this;
		pData.find('#btn-facture-com').click(function() {
			FactureVue({'idMarche':that.mIdMarche});
		});
		return pData;
	};
	
	this.affectDupliquerMarche = function(pData) {
		var that = this;
		pData.find('#btn-dupliquer-com').click(function() {
			//DupliquerMarcheVue({"id_marche":that.mIdMarche, fonction:"dupliquer"});
			AjoutCommandeVue({"id_marche":that.mIdMarche, fonction:"dupliquer"});
		});
		return pData;
	};
	
	this.affectArchive = function(pData) {
		if(this.mMarche.archive == 0) {
			pData.find('.marche-archive-0').show();
		} else if(this.mMarche.archive == 1) {
			pData.find('.marche-archive-1').show();
		}
		pData = this.affectPause(pData);
		pData = this.affectPlay(pData);
		pData = this.affectCloturer(pData);
		return pData;
	};
	
	this.modifierArchive = function() {
		if(this.mMarche.archive == 0) {
			$('.marche-archive-0').show();
			$('.marche-archive-1').hide();
		} else if(this.mMarche.archive == 1) {
			$('.marche-archive-0').hide();
			$('.marche-archive-1').show();
		}
	};
	
	this.affectCloturer = function(pData) {
		var that = this;
		pData.find('#btn-cloture-com')
		.click(function() {
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			var lTemplate = lGestionCommandeTemplate.dialogClotureCommande;
			
			$(lTemplate.template(that.mMarche)).dialog({
				autoOpen: true,
				modal: true,
				draggable: false,
				resizable: false,
				width:600,
				buttons: {
					'Cloturer': function() {
						var lParam = {id_marche:that.mIdMarche,fonction:"cloturer"};
						var lDialog = this;
						$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lParam),
								function(lResponse) {
									Infobulle.init(); // Supprime les erreurs
									if(lResponse) {
										if(lResponse.valid) {
											
											// Message de confirmation
											var lVr = new TemplateVR();
											lVr.valid = false;
											lVr.log.valid = false;
											var erreur = new VRerreur();
											erreur.code = ERR_313_CODE;
											erreur.message = ERR_313_MSG;
											lVr.log.erreurs.push(erreur);										
	
											var lparam = {"id_marche":that.mIdMarche,
													vr:lVr};
											InfoCommandeArchiveVue(lparam);
											
											
											$(lDialog).dialog('close');
										} else {
											Infobulle.generer(lResponse,'');
										}
									}
								},"json"
						);
					},
					'Annuler': function() {
						$(this).dialog('close');
					}
				},
				close: function(ev, ui) { $(this).remove(); Infobulle.init(); }	
			});
		});
		return pData;
	};
	
	this.affectPause = function(pData) {
		var that = this;
		pData.find('#btn-pause-com')
		.click(function() {
			var lParam = {id_marche:that.mIdMarche,fonction:"pause"};
			$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lParam),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {							
								that.mMarche.archive = 1;
								that.modifierArchive();
								
								var lVr = new TemplateVR();
								lVr.valid = false;
								lVr.log.valid = false;
								var erreur = new VRerreur();
								erreur.code = ERR_311_CODE;
								erreur.message = ERR_311_MSG;
								lVr.log.erreurs.push(erreur);							
	
								// Message de confirmation
								Infobulle.generer(lVr,'');
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
					},"json"
			);
		});
		return pData;
	};
	
	this.affectPlay = function(pData) {
		var that = this;
		pData.find('#btn-play-com')
		.click(function() {
			var lParam = {id_marche:that.mIdMarche,fonction:"play"};
			$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lParam),
					function(lResponse) {
						Infobulle.init(); // Supprime les erreurs
						if(lResponse) {
							if(lResponse.valid) {							
								that.mMarche.archive = 0;
								that.modifierArchive();
	
								var lVr = new TemplateVR();
								lVr.valid = false;
								lVr.log.valid = false;
								var erreur = new VRerreur();
								erreur.code = ERR_312_CODE;
								erreur.message = ERR_312_MSG;
								lVr.log.erreurs.push(erreur);							
	
								// Message de confirmation
								Infobulle.generer(lVr,'');
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
					},"json"
			);
		});
		return pData;
	};
		
	this.affectMajListeFerme = function(pData) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lTemplate = lGestionCommandeTemplate.editerMarcheListeProduit;
		pData.find("#liste-ferme").replaceWith(that.affectGestionProduit($(lTemplate.template(that.mListeFerme))));
		return pData;
	};
	
	this.affectGestionProduit = function(pData) {
		pData = this.affectModifierProduit(pData);
		pData = this.affectSupprimerProduit(pData);
		return pData;		
	};
	
	this.affectModifierProduit = function(pData) {
		var that = this;
		pData.find(".btn-modifier-produit").click(function() {
			that.dialogModifierProduit($(this).attr("id-produit"), $(this).attr("typeProduit"));
		});
		return pData;	
	};
	
	this.dialogModifierProduit = function(pId) {
		var that = this;
		var lParam = {fonction:"detailProduitMarche",id:pId};
		$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lParam),
				function (lResponse) {		
					if(lResponse) {
						if(lResponse.valid) {
							var lGestionCommandeTemplate = new GestionCommandeTemplate();
							
							var lIdFerme = lResponse.produit.ferId;
							var lIdCategorie = lResponse.produit.idCategorie;
							var lTypeProduit = parseInt(lResponse.produit.type);

							that.mQuantiteReservation = -1;
							
							var lStockAffichage = "";
							if(parseFloat(lResponse.produit.stockInitial) != -1) {
								that.mQuantiteReservation = parseFloat(lResponse.produit.stockInitial) - parseFloat(lResponse.produit.stockReservation);
								
								if(lTypeProduit == 0) { // Normal
									lStockAffichage = lResponse.produit.stockInitial.nombreFormate(2,',','');
								} else if(lTypeProduit == 2) {// Abonnement
									lStockAffichage = lResponse.produit.stockInitial.nombreFormate(2,',',' ');
								}
							} else {
								that.mQuantiteReservation = parseFloat(lResponse.produit.stockReservation) * -1;
							}
							
							var lQteMaxAffichage = "";
							if(parseFloat(lResponse.produit.qteMaxCommande) != -1) {
								if(lTypeProduit == 0) { // Normal
									lQteMaxAffichage = lResponse.produit.qteMaxCommande.nombreFormate(2,',','');
								} else if(lTypeProduit == 2) {// Abonnement
									lQteMaxAffichage = lResponse.produit.qteMaxCommande.nombreFormate(2,',',' ');
								}
							}
							
							var lData = {	ferId:lIdFerme,
											ferNom:lResponse.produit.ferNom,
											cproId:lIdCategorie,
											cproNom:lResponse.produit.cproNom,
											nproId:pId,
											nproNom:lResponse.produit.nom,
											unite:lResponse.produit.unite,
											nproStock:lStockAffichage,
											nproQteMax:lQteMaxAffichage,
											modelesLot:[],
											modelesLotReservation:[],
											modelesLotAbonnement:[],
											modelesLotAbonnementReservationModif:[],
											listeModelesLot:[],
											listeModelesLotAbonnement:[]};							
							
							that.mLotReservation = [];
							
							that.mTailleLotResaMax = -1;
							
							switch(lTypeProduit) {
								case 0:
										//lData.typeProduitLabel = "Normal";
										lData.typeProduitLabel = lGestionCommandeTemplate.typeProduitLabelNormal;
										$.each(lResponse.modelesLot, function() {
											if(this.mLotId != null) {
												that.mIdLot--;												
												var lVoLot = {	
														id:that.mIdLot,
														quantite:this.mLotQuantite.nombreFormate(2,',',' '),
														prix:this.mLotPrix.nombreFormate(2,',',' '),
														unite:this.mLotUnite,
														sigleMonetaire:gSigleMonetaire,
														modele: "modele-lot",
														checked:""};
												lData.listeModelesLot.push(lVoLot);
											}
										});
										$.each(lResponse.produit.lots, function() {
											var lVoLot = {	
													id:this.id,
													quantite:this.taille.nombreFormate(2,',',' '),
													prix:this.prix.nombreFormate(2,',',' '),
													unite:lResponse.produit.unite,
													sigleMonetaire:gSigleMonetaire,
													modele: "",
													checked:"checked=\"checked\""};
											if(this.reservation) {
												lData.modelesLotReservation.push(lVoLot);
												that.mLotReservation[this.id] = {id:this.id,quantite:this.taille};
												
												if(this.taille > that.mTailleLotResaMax) {
													that.mTailleLotResaMax = this.taille;
												}
												
											} else {
												lData.modelesLot.push(lVoLot);
											}
										});
										
										if(lResponse.produit.qteRestante == "" || lResponse.produit.stockInitial == -1) {
											lData.nproStockCheckedNoLimit = "checked=\"checked\"";
											lData.nproStockDisabled = "disabled=\"disabled\"";
										} else {
											lData.nproStockCheckedLimit = "checked=\"checked\"";
										}
										
										if(lResponse.produit.qteMaxCommande == "" || lResponse.produit.qteMaxCommande == -1) {
											lData.nproQteMaxCheckedNoLimit = "checked=\"checked\"";
											lData.nproQteMaxDisabled = "disabled=\"disabled\"";
										} else {
											lData.nproQteMaxCheckedLimit = "checked=\"checked\"";
										}
										lData.divStock = lGestionCommandeTemplate.stockModifProduit.template(lData);
										lData.divLot = lGestionCommandeTemplate.prixModifProduit.template(lData);
									break;
									
								case 1:
										//lData.typeProduitLabel = "Solidaire";
										lData.typeProduitLabel = lGestionCommandeTemplate.typeProduitLabelSolidaire;
										$.each(lResponse.modelesLot, function() {
											if(this.mLotId != null) {
												that.mIdLot--;			
												var lVoLot = {	
														id:that.mIdLot,
														quantite:this.mLotQuantite.nombreFormate(2,',',' '),
														prix:this.mLotPrix.nombreFormate(2,',',' '),
														unite:this.mLotUnite,
														sigleMonetaire:gSigleMonetaire,
														modele: "modele-lot",
														checked:""};
												lData.listeModelesLot.push(lVoLot);
											}
										});
										$.each(lResponse.produit.lots, function() {
											var lVoLot = {	
													id:this.id,
													quantite:this.taille.nombreFormate(2,',',' '),
													prix:this.prix.nombreFormate(2,',',' '),
													unite:lResponse.produit.unite,
													sigleMonetaire:gSigleMonetaire,
													modele: "",
													checked:"checked=\"checked\""};
											lData.modelesLot.push(lVoLot);
										});
										
										lData.divLot = lGestionCommandeTemplate.prixModifProduit.template(lData);
									break;
									
								case 2:
										$.each(lResponse.modelesLot, function() {
											if(this.mLotId != null && this.mLotUnite == lResponse.produit.unite) {
												that.mIdLotAbonnement--;		
												var lVoLot = {	
														id:that.mIdLotAbonnement,
														quantite:this.mLotQuantite.nombreFormate(2,',',' '),
														prix:this.mLotPrix.nombreFormate(2,',',' '),
														unite:this.mLotUnite,
														sigleMonetaire:gSigleMonetaire,
														modele: "modele-lot",
														checked:""};
												lData.listeModelesLotAbonnement.push(lVoLot);
											}
										});
										$.each(lResponse.produit.lots, function() {
											var lVoLot = {	
													id:this.id,
													quantite:this.taille.nombreFormate(2,',',' '),
													prix:this.prix.nombreFormate(2,',',' '),
													unite:lResponse.produit.unite,
													sigleMonetaire:gSigleMonetaire,
													modele: "",
													checked:"checked=\"checked\""};
											if(this.reservation) {
												lData.modelesLotAbonnementReservationModif.push(lVoLot);
												that.mLotReservation[this.id] = {id:this.id,quantite:this.taille};
											} else {
												lData.modelesLotAbonnement.push(lVoLot);
											}
										});
										
										//lData.typeProduitLabel = "Abonnement";
										lData.typeProduitLabel = lGestionCommandeTemplate.typeProduitLabelAbonnement;
										lData.stockInitialAbonnement = lStockAffichage;
										lData.uniteAbonnement = lResponse.produit.unite;

										var lQMax = lResponse.produit.qteMaxCommande;
										if(parseFloat(lQMax) == -1) {
											lData.qMaxAbonnement = "Pas de limite";
										} else {
											lData.qMaxAbonnement = lQMax.nombreFormate(2,',',' ') + " " + lData.uniteAbonnement;
										}
										lData.qMaxAbonnementValue = lQMax;
										
										lData.divStock = lGestionCommandeTemplate.stockAbonnementAjoutProduit.template(lData);
										lData.divLot = lGestionCommandeTemplate.prixAbonnementModifProduit.template(lData);
									break;
							}
							
							var lTemplate = lGestionCommandeTemplate.dialogModifProduitAjoutMarche;
							
							that.mLotRemplacement = [];
							
							//$(lTemplate.template(lData)).dialog({	
							$(that.affectModifierPrixEtStock( $(lTemplate.template(lData))) ).dialog({			
								autoOpen: true,
								modal: true,
								draggable: true,
								resizable: false,
								width:900,
								buttons: {
									'Modifier': function() {
										that.modifierProduit($(this),lTypeProduit);
									},
									'Annuler': function() {
										that.mEditionLot = false;
										$(this).dialog('close');
									}
								},
								close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
							});	
						} else {
							Infobulle.generer(lResponse,"marche-");
						}
					}
				},"json"
		);		
	};
	
	this.affectPrixEtStock = function(pData) {
		pData = this.affectAjoutLotGestion(pData);
		pData = this.affectAjoutLotAbonnementGestion(pData);
		pData = this.affectAjoutLot(pData);
		pData = this.affectLimiteStock(pData);
		pData = this.affectChangeTypeProduit(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		return pData;		
	};
	
	this.affectModifierPrixEtStock = function(pData) {
		pData = this.affectAjoutLotGestionModifier(pData);
		pData = this.affectAjoutLotAbonnementGestionModifier(pData);
		pData = this.affectAjoutLot(pData);
		pData = this.affectLimiteStock(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		return pData;		
	};
	
	this.affectChangeTypeProduit = function(pData) {
		var that = this;
		pData.find(':input[name=typeProduit]').click(function() {
			return that.testChangeTypeProduit($(':input[name=typeProduit]:checked').val());
		}).change(function() {
			that.changeTypeProduit($(':input[name=typeProduit]:checked').val());
		});
		return pData;
	};
	
	this.testChangeTypeProduit = function(pTypeProduit) {
		if(this.mEditionLot) {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_112_CODE;
			erreur.message = ERR_112_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
			return false;
		}
		return true;
	};
	
	this.changeTypeProduit = function(pTypeProduit) {
		if(!this.mEditionLot) {			
			$(".pro-detail").hide();
			if(pTypeProduit == 0 ) {
				$("#pro-normal,#id-stock").show();
			} else if (pTypeProduit == 1 ) {
				$("#pro-normal").show();
			} else {
				$("#pro-abonnement").show();
			}
		} else {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_112_CODE;
			erreur.message = ERR_112_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
			return false;
		}
	};
	
	this.affectLimiteStock = function(pData) {
		pData.find(':input[name=pro-stock-choix]').change(function() {
			if($(':input[name=pro-stock-choix]:checked').val() == 1) {	
				$(":input[name=pro-stock]").prop("disabled", false).val("");
			} else {
				$(":input[name=pro-stock]").prop("disabled", true).val("");
			}
		});
		pData.find(':input[name=pro-qte-max-choix]').change(function() {
			if($(':input[name=pro-qte-max-choix]:checked').val() == 1) {				
				$(":input[name=pro-qte-max]").prop("disabled", false).val("");
			} else {
				$(":input[name=pro-qte-max]").prop("disabled", true).val("");
			}
		});
		return pData;
	};
	
	this.affectAjoutLot = function(pData) {
		var that = this;
		pData.find('#btn-ajout-lot').click(function() {that.ajoutLot(1);});
		pData.find('#table-pro-prix input').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLot(1);
			}
		});		
		pData.find('#btn-ajout-lot-abonnement').click(function() {that.ajoutLot(2);});
		pData.find('#table-pro-abonnement-prix input').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLot(2);
			}
		});
		return pData;		
	};
	
	this.ajoutLot = function(pType) {

		var lVo = new ModeleLotVO();
		if(pType == 1) {	
			lVo.quantite = $(":input[name=lot-quantite]").val().numberFrToDb();
			lVo.unite = $(":input[name=lot-unite]").val();
			lVo.prix = $(":input[name=lot-prix]").val().numberFrToDb();
		} else {
			lVo.quantite = $(":input[name=lot-abo-quantite]").val().numberFrToDb();
			lVo.unite = $("#pro-abo-lot-unite").text();
			lVo.prix = $(":input[name=lot-abo-prix]").val().numberFrToDb();
		}
		
		
		var lValid = new ModeleLotValid();
		var lVr = lValid.validAjout(lVo);
		
		if(lVr.valid) {	
			Infobulle.init();
			var lVR = new TemplateVR();
			
			var lGestionCommandeTemplate = new GestionCommandeTemplate();
			if(pType == 1) {
				var lQteRestante = $("#pro-qteRestante").val();			
				if(lQteRestante != undefined && lQteRestante != "") {
					lQteRestante = lQteRestante.numberFrToDb();
					if(lQteRestante != -1 && lVo.quantite > parseFloat(lQteRestante)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
				}

				var lMax = $("#pro-qteMaxCommande").val();
				if(lMax != undefined && lMax != "") {
					lMax = lMax.numberFrToDb();
					if(lMax != -1 && lVo.quantite > parseFloat(lMax)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
				}
								
				if(lVR.valid) {		
					var lTemplate = lGestionCommandeTemplate.modeleLot;				
					this.mIdLot--;
					lVo.id = this.mIdLot;
					lVo.sigleMonetaire = gSigleMonetaire;
					lVo.quantite = lVo.quantite.nombreFormate(2,',',' ');
					lVo.prix = lVo.prix.nombreFormate(2,',',' ');	
					
					$("#lot-liste").append(this.affectLot($(lTemplate.template(lVo))));
					$(":input[name=lot-quantite], :input[name=lot-unite], :input[name=lot-prix]").val("");
				} else {		
					Infobulle.generer(lVR,'pro-lot-');
				}
			
			} else {
				var lQteRestante = $("#stock-abonnement").text().numberFrToDb();
				var lMax = $("#max-abonnement").text().numberFrToDb();
				
				if(lMax != -1 && parseFloat(lVo.quantite) > parseFloat(lMax)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
				if(lQteRestante != -1 && parseFloat(lVo.quantite) > parseFloat(lQteRestante)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
				
				if(lVR.valid) {
					var lTemplate = lGestionCommandeTemplate.modeleLotAbonnement;				
					this.mIdLotAbonnement--;
					lVo.id = this.mIdLotAbonnement;
					lVo.sigleMonetaire = gSigleMonetaire;
					lVo.quantite = lVo.quantite.nombreFormate(2,',',' ');
					lVo.prix = lVo.prix.nombreFormate(2,',',' ');		
					
					$("#lot-liste-abonnement").append(this.affectLotAbonnement($(lTemplate.template(lVo))));
					$(":input[name=lot-abo-quantite], :input[name=lot-abo-unite], :input[name=lot-abo-prix]").val("");		
				} else {
					Infobulle.generer(lVR,'pro-abo-lot-');
				}
			}
		} else {
			if(pType == 1) {		
				Infobulle.generer(lVr,'pro-lot-');
			} else {
				Infobulle.generer(lVr,'pro-abo-lot-');
			}
		}
	};

	this.affectLot = function(pData) {
		pData = this.affectAjoutLotGestion(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		return pData;
	};
	
	this.affectLotAbonnement = function(pData) {
		pData = this.affectAjoutLotAbonnementGestion(pData);
		pData = gCommunVue.comHoverBtn(pData);
		pData = gCommunVue.comNumeric(pData);
		return pData;
	};
	
	this.affectAjoutLotGestion = function(pData) {
		var that = this;
		pData.find(".btn-modifier-lot").click(function() {
			that.ajoutLotModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find(".btn-valider-lot").click(function() {
			that.ajoutLotValiderModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find('.catalogue-input-lot').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLotValiderModification($(this).closest('tr').find('#id-lot').text());
			}
		});	
		pData.find(".btn-annuler-lot").click(function() {
			that.ajoutLotAnnulerModification($(this).closest('tr').find('#id-lot').text());
		});	
		pData.find(".btn-supprimer-lot").click(function() {
			that.ajoutLotSupprimer($(this).closest('tr').find('#id-lot').text());
		});
		pData.find(":checkbox").change(function() {
			var lMajUnite = that.majUnite();
			//if(!that.majUnite()) {
			if(!lMajUnite) {
				if($(this).prop("checked")) {
					$(this).prop("checked",false);
				} else {
					$(this).prop("checked",true);
				}				
			}
		});
		return pData;		
	};
	
	this.affectAjoutLotGestionModifier = function(pData) {
		var that = this;
		pData.find(".btn-modifier-lot").click(function() {
			that.ajoutLotModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find(".btn-valider-lot").click(function() {
			that.ajoutLotModifierValiderModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find('.catalogue-input-lot').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLotModifierValiderModification($(this).closest('tr').find('#id-lot').text());
			}
		});	
		pData.find(".btn-annuler-lot").click(function() {
			that.ajoutLotAnnulerModification($(this).closest('tr').find('#id-lot').text());
		});	
		pData.find(".btn-supprimer-lot").click(function() {
			that.modifierLotSupprimer($(this).closest('tr').find('#id-lot').text());
		});
		pData.find(":checkbox").change(function() {
			if(!that.majUnite()) {
				if($(this).prop("checked")) {
					$(this).prop("checked",false);
				} else {
					$(this).prop("checked",true);
				}				
			}
		});
		return pData;		
	};
	
	this.affectAjoutLotAbonnementGestion = function(pData) {
		var that = this;
		pData.find(".btn-modifier-lot-abonnement").click(function() {
			that.ajoutLotAbonnementModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find(".btn-valider-lot-abonnement").click(function() {
			that.ajoutLotAbonnementValiderModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find('.catalogue-input-lot-abonnement').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLotAbonnementValiderModification($(this).closest('tr').find('#id-lot').text());
			}
		});	
		pData.find(".btn-annuler-lot-abonnement").click(function() {
			that.ajoutLotAbonnementAnnulerModification($(this).closest('tr').find('#id-lot').text());
		});	
		pData.find(".btn-supprimer-lot-abonnement").click(function() {
			that.ajoutLotAbonnementSupprimer($(this).closest('tr').find('#id-lot').text());
		});
		return pData;		
	};
	
	this.affectAjoutLotAbonnementGestionModifier = function(pData) {
		var that = this;
		pData.find(".btn-modifier-lot-abonnement").click(function() {
			that.ajoutLotAbonnementModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find(".btn-valider-lot-abonnement").click(function() {
			that.ajoutLotModifierAbonnementValiderModification($(this).closest('tr').find('#id-lot').text());
		});
		pData.find('.catalogue-input-lot-abonnement').keyup(function(event) {
			if (event.keyCode == '13') {
				that.ajoutLotModifierAbonnementValiderModification($(this).closest('tr').find('#id-lot').text());
			}
		});	
		pData.find(".btn-annuler-lot-abonnement").click(function() {
			that.ajoutLotAbonnementAnnulerModification($(this).closest('tr').find('#id-lot').text());
		});	
		pData.find(".btn-supprimer-lot-abonnement").click(function() {
			that.modifierLotAbonnementSupprimer($(this).closest('tr').find('#id-lot').text());
		});
		return pData;		
	};
	
	this.majUnite = function() {
		var lOk = true;
		var lNbChecked = 0;
		var lUnitePrec = "";
		$(".ligne-lot :checkbox:checked").each(function() {
			var lUnite = $(this).closest(".ligne-lot").find(".lot-unite").text();
			if(lUnitePrec != "" && lUnitePrec != lUnite) {
				lOk = false;
			} else {
				lUnitePrec = lUnite;
			}
			lNbChecked++;
		});
		if(lOk) { 
			if(lNbChecked > 0) {
				$(".unite-stock").text(lUnitePrec);	
			}
		} else {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_333_CODE;
			erreur.message = ERR_333_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
		}
		return lOk;
	};
	
	this.ajoutLotModification = function(pId) {
		$(".btn-lot, #btn-annuler-lot-" + pId + ", #btn-valider-lot-" + pId + ", .champ-lot-" + pId).toggle();

		$("#pro-lot-" + pId + "-quantite").val($("#lot-" + pId + "-quantite").text().numberFrToDb().nombreFormate(2,',',''));
		$("#pro-lot-" + pId + "-unite").val($("#lot-" + pId + "-unite").text());
		$("#pro-lot-" + pId + "-prix").val($("#lot-" + pId + "-prix").text().numberFrToDb().nombreFormate(2,',',''));

		this.mEditionLot = true;
	};
	
	this.ajoutLotAbonnementModification = function(pId) {
		$(".btn-lot-abonnement, #btn-annuler-lot-" + pId + "-abonnement, #btn-valider-lot-" + pId + "-abonnement, .champ-lot-" + pId + "-abonnement").toggle();
		$("#pro-lot-abonnement" + pId + "-quantite").val($("#lot-" + pId + "-quantite-abonnement").text().numberFrToDb().nombreFormate(2,',',''));
		$("#pro-lot-abonnement" + pId + "-unite").val($("#lot-" + pId + "-unite-abonnement").text());
		$("#pro-lot-abonnement" + pId + "-prix").val($("#lot-" + pId + "-prix-abonnement").text().numberFrToDb().nombreFormate(2,',',''));

		this.mEditionLot = true;
	};
	
	this.ajoutLotValiderModification = function(pId) {
		var lVo = new ModeleLotVO();
		lVo.quantite = $("#pro-lot-" + pId + "-quantite").val().numberFrToDb();
		lVo.unite = $("#pro-lot-" + pId + "-unite").val();
		lVo.prix = $("#pro-lot-" + pId + "-prix").val().numberFrToDb();
	
		var lValid = new ModeleLotValid();
		var lVr = lValid.validAjout(lVo);
		
		if(lVr.valid) {	
			Infobulle.init();		
			var lVR = new TemplateVR();
			var lQteRestante = $("#pro-qteRestante").val();			
			if(lQteRestante != undefined &&lQteRestante != "") {
				lQteRestante = lQteRestante.numberFrToDb();
				if(lQteRestante != -1 && lVo.quantite > parseFloat(lQteRestante)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
				
			}

			var lMax = $("#pro-qteMaxCommande").val();
			if(lMax != undefined &&lMax != "") {
				lMax = lMax.numberFrToDb();
				if(lMax != -1 && lVo.quantite > parseFloat(lMax)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
			}

			if(lVR.valid) {
				$("#lot-" + pId + "-quantite").text(lVo.quantite.nombreFormate(2,',',' '));
				$("#lot-" + pId + "-unite").text(lVo.unite);
				$("#lot-" + pId + "-prix").text(lVo.prix.nombreFormate(2,',',' '));
				$(".btn-lot, #btn-annuler-lot-" + pId + ", #btn-valider-lot-" + pId + ", .champ-lot-" + pId).toggle();

				this.mEditionLot = false;
				this.majUnite();
			} else {
				Infobulle.generer(lVR,'pro-lot-' + pId + '-');
			}
		} else {
			Infobulle.generer(lVr,'pro-lot-' + pId + '-');
		}
	};
	
	this.ajoutLotModifierValiderModification = function(pId) {
		var lVo = new ModeleLotVO();
		lVo.id = pId;
		lVo.quantite = $("#pro-lot-" + pId + "-quantite").val().numberFrToDb();
		lVo.unite = $("#pro-lot-" + pId + "-unite").val();
		lVo.prix = $("#pro-lot-" + pId + "-prix").val().numberFrToDb();
	
		var lValid = new ModeleLotValid();
		var lVr = {};
		if(this.autorisationSupprimerLot(pId)) {
			lVr = lValid.validAjout(lVo);
		} else {
			lVr = lValid.validUpdateAvecReservation(lVo,this.mLotReservation[pId].quantite);
		}
		
		if(lVr.valid) {	
			Infobulle.init();		
			var lVR = new TemplateVR();
			var lQteRestante = $("#pro-qteRestante").val();			
			if(lQteRestante != undefined &&lQteRestante != "") {
				lQteRestante = lQteRestante.numberFrToDb();
				if(lQteRestante != -1 && lVo.quantite > parseFloat(lQteRestante)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
				
			}

			var lMax = $("#pro-qteMaxCommande").val();
			if(lMax != undefined &&lMax != "") {
				lMax = lMax.numberFrToDb();
				if(lMax != -1 && lVo.quantite > parseFloat(lMax)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
			}

			if(lVR.valid) {
				$("#lot-" + pId + "-quantite").text(lVo.quantite.nombreFormate(2,',',' '));
				$("#lot-" + pId + "-unite").text(lVo.unite);
				$("#lot-" + pId + "-prix").text(lVo.prix.nombreFormate(2,',',' '));
				$(".btn-lot, #btn-annuler-lot-" + pId + ", #btn-valider-lot-" + pId + ", .champ-lot-" + pId).toggle();

				this.mEditionLot = false;
				this.majUnite();
			} else {
				Infobulle.generer(lVR,'pro-lot-' + pId + '-');
			}
		} else {
			Infobulle.generer(lVr,'pro-lot-' + pId + '-');
		}
	};
	
	this.ajoutLotAbonnementValiderModification = function(pId) {
		var lVo = new ModeleLotVO();
		lVo.quantite = $("#pro-lot-abonnement" + pId + "-quantite").val().numberFrToDb();
		lVo.unite = $("#pro-lot-abonnement" + pId + "-unite").val();
		lVo.prix = $("#pro-lot-abonnement" + pId + "-prix").val().numberFrToDb();
	
		var lValid = new ModeleLotValid();
		var lVr = lValid.validAjout(lVo);
		
		if(lVr.valid) {	
			Infobulle.init();
			var lVR = new TemplateVR();

			var lQteRestante = $("#stock-abonnement").text().numberFrToDb();
			var lMax = $("#max-abonnement").text().numberFrToDb();

			if(lMax != -1 && lVo.quantite > parseFloat(lMax)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
			if(lQteRestante != -1 && lVo.quantite > parseFloat(lQteRestante)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
			
			if(lVR.valid) {	
				Infobulle.init();
				$("#lot-" + pId + "-quantite-abonnement").text(lVo.quantite.nombreFormate(2,',',' '));
				$("#lot-" + pId + "-unite-abonnement").text(lVo.unite);
				$("#lot-" + pId + "-prix-abonnement").text(lVo.prix.nombreFormate(2,',',' '));
				$(".btn-lot-abonnement, #btn-annuler-lot-" + pId + "-abonnement, #btn-valider-lot-" + pId + "-abonnement, .champ-lot-" + pId + "-abonnement").toggle();
				
	
				this.mEditionLot = false;
			} else {
				Infobulle.generer(lVR,'pro-lot-abonnement' + pId + '-');
			}
		} else {
			Infobulle.generer(lVr,'pro-lot-abonnement' + pId + '-');
		}
	};
	
	this.ajoutLotModifierAbonnementValiderModification = function(pId) {
		var lVo = new ModeleLotVO();
		lVo.quantite = $("#pro-lot-abonnement" + pId + "-quantite").val().numberFrToDb();
		lVo.unite = $("#pro-lot-abonnement" + pId + "-unite").val();
		lVo.prix = $("#pro-lot-abonnement" + pId + "-prix").val().numberFrToDb();
	
		/*var lValid = new ModeleLotValid();
		var lVr = lValid.validAjout(lVo);*/
		var lValid = new ModeleLotValid();
		var lVr = {};
		if(this.autorisationSupprimerLot(pId)) {
			lVr = lValid.validAjout(lVo);
		} else {
			lVr = lValid.validUpdateAvecReservation(lVo,this.mLotReservation[pId].quantite);
		}
		
		if(lVr.valid) {	
			Infobulle.init();
			var lVR = new TemplateVR();

			var lQteRestante = $("#stock-abonnement").text().numberFrToDb();
			var lMax = $("#max-abonnement").text().numberFrToDb();

			if(lMax != -1 && lVo.quantite > parseFloat(lMax)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
			if(lQteRestante != -1 && lVo.quantite > parseFloat(lQteRestante)) {lVR.valid = false;lVR.log.valid = false;var erreur = new VRerreur();erreur.code = ERR_241_CODE;erreur.message = ERR_241_MSG;lVR.log.erreurs.push(erreur);}
			
			if(lVR.valid) {	
				Infobulle.init();
				$("#lot-" + pId + "-quantite-abonnement").text(lVo.quantite.nombreFormate(2,',',' '));
				$("#lot-" + pId + "-unite-abonnement").text(lVo.unite);
				$("#lot-" + pId + "-prix-abonnement").text(lVo.prix.nombreFormate(2,',',' '));
				$(".btn-lot-abonnement, #btn-annuler-lot-" + pId + "-abonnement, #btn-valider-lot-" + pId + "-abonnement, .champ-lot-" + pId + "-abonnement").toggle();
				
	
				this.mEditionLot = false;
			} else {
				Infobulle.generer(lVR,'pro-lot-abonnement' + pId + '-');
			}
		} else {
			Infobulle.generer(lVr,'pro-lot-abonnement' + pId + '-');
		}
	};
	
	this.ajoutLotAnnulerModification = function(pId) {
		$(".btn-lot, #btn-annuler-lot-" + pId + ", #btn-valider-lot-" + pId + ", .champ-lot-" + pId).toggle();
		this.mEditionLot = false;
	};
	
	this.ajoutLotAbonnementAnnulerModification = function(pId) {
		$(".btn-lot-abonnement, #btn-annuler-lot-" + pId + "-abonnement, #btn-valider-lot-" + pId + "-abonnement, .champ-lot-" + pId + "-abonnement").toggle();
		this.mEditionLot = false;
	};
	
	this.ajoutLotSupprimer = function(pId) {
		$("#ligne-lot-" + pId).remove();
	};
	
	this.autorisationSupprimerLot = function(pIdLot) {
		if(this.mLotReservation[pIdLot]) {
			return false;
		}
		return true;
	};
	
	this.modifierLotSupprimer = function(pId) {
		if(this.autorisationSupprimerLot(pId)) {
			$("#ligne-lot-" + pId).remove();	
		} else {
			this.dialogSupprimerLot(pId);
		}
	};

	this.ajoutLotAbonnementSupprimer = function(pId) {
		$("#ligne-lot-abonnement-" + pId).remove();
	};
	
	this.modifierLotAbonnementSupprimer = function(pId) {
		if(this.autorisationSupprimerLot(pId)) {
			$("#ligne-lot-abonnement-" + pId).remove();
		} else {
			this.dialogSupprimerLotAbonnement(pId);
		}
	};
	
	this.dialogSupprimerLot = function(pId) {		
		var that = this;
		
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lData = {modelesLot:[]};

		var lUnite = $("#dialog-modif-pro").find(".ligne-lot :checkbox:checked").first().closest(".ligne-lot").find(".lot-unite").text();		
		var lQuantite = this.mLotReservation[pId].quantite;
		
		$("#dialog-modif-pro").find('.ligne-lot').each( function () {
			var lId = $(this).find(".lot-id").text();
			var lQuantiteLot = parseFloat($(this).find(".lot-quantite").text().numberFrToDb());
			var lPrix = parseFloat($(this).find(".lot-prix").text().numberFrToDb());
			var lUniteLot = $(this).find(".lot-unite").text();
			if(lId != null && lId != pId && lUniteLot == lUnite && lQuantiteLot <= lQuantite && (lQuantite % lQuantiteLot) == 0) {
				var lVoLot = {	
						id:lId,
						quantite:lQuantiteLot.nombreFormate(2,',',' '),
						prix:lPrix.nombreFormate(2,',',' '),
						unite:lUnite,
						sigleMonetaire:gSigleMonetaire};
				lData.modelesLot.push(lVoLot);		
			}
		});
		
		$(lGestionCommandeTemplate.dialogSupprimerLotModifierMarche.template(lData)).dialog({			
			autoOpen: true,
			modal: true,
			draggable: true,
			resizable: false,
			width:900,
			buttons: {
				'Valider': function() {
					that.supprimerLotModifierReservation($(this),pId);
				},
				'Annuler': function() {
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
		});
	};
	
	this.dialogSupprimerLotAbonnement = function(pId) {
		var that = this;
		
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		var lData = {modelesLot:[]};

		var lUnite = $("#dialog-modif-pro").find(".ligne-lot-abonnement :checkbox:checked").first().closest(".ligne-lot-abonnement").find(".lot-unite").text();
		var lQuantite = this.mLotReservation[pId].quantite;
		$("#dialog-modif-pro").find('.ligne-lot-abonnement').each( function () {			
			
			var lId = $(this).find(".lot-id").text();
			var lQuantiteLot = parseFloat($(this).find(".lot-quantite").text().numberFrToDb());
			var lPrix = parseFloat($(this).find(".lot-prix").text().numberFrToDb());
			var lUniteLot = $(this).find(".lot-unite").text();
			
			if(lId != null && lId != pId && lUniteLot == lUnite && lQuantiteLot <= lQuantite && (lQuantite % lQuantiteLot) == 0) {
				var lVoLot = {	
						id:lId,
						quantite:lQuantiteLot.nombreFormate(2,',',' '),
						prix:lPrix.nombreFormate(2,',',' '),
						unite:lUnite,
						sigleMonetaire:gSigleMonetaire};
				lData.modelesLot.push(lVoLot);		
			}
		});
		
		$(lGestionCommandeTemplate.dialogSupprimerLotModifierMarche.template(lData)).dialog({			
			autoOpen: true,
			modal: true,
			draggable: true,
			resizable: false,
			width:900,
			buttons: {
				'Valider': function() {
					that.supprimerLotModifierReservation($(this),pId);
				},
				'Annuler': function() {
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
		});
	};
	
	this.supprimerLotModifierReservation = function(pDialog,pIdLot) {
		var lIdLotRemplacement = pDialog.find(":input[name=pro-lot]:checked").val();

		Infobulle.init();
		if(lIdLotRemplacement == undefined) { // Pas de lot sélectionné
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_254_CODE;
			erreur.message = ERR_254_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
		} else {		
			this.mLotRemplacement[pIdLot] = lIdLotRemplacement; // Ajout à la table de remplacement
			$("#ligne-lot-abonnement-" + pIdLot + ", #ligne-lot-" + pIdLot + ", #btn-supprimer-lot-abonnement-" + lIdLotRemplacement + ", #btn-supprimer-lot-" + lIdLotRemplacement).remove(); // Supression du formulaire de l'ancien lot + delete du bouton de suppression du lot de remplacement
			$("#pro-lot-" + lIdLotRemplacement + "-id").prop("checked",true).prop("disabled",true); // Coche le lot dans le formulaire et le rend non sélectionnable
			pDialog.dialog('close'); // Fermeture de la fenêtre
		}
	};

	this.modifierProduit = function(pDialog,pType) {
		var that = this;
		if(!this.mEditionLot) {
			var lStock = -1;
			if(pType == 2) {
				lStock = pDialog.find('#stock-abonnement').text().numberFrToDb();
			} else if(pType == 0){
				lStock = pDialog.find(':input[name=pro-stock]').val().numberFrToDb();
			}
			
			if(pDialog.find(':input[name=pro-stock-choix]:checked').val() == 1 && lStock == "" && pType == 0) { // Si une limite de stock est sélectionné il faut la saisir
				var lVR = new Object();
				var erreur = new VRerreur();
				erreur.code = ERR_201_CODE;
				erreur.message = ERR_201_MSG;
				lVR.valid = false;
				lVR.qteRestante = new VRelement();
				lVR.qteRestante.valid = false;
				lVR.qteRestante.erreurs.push(erreur);
				Infobulle.generer(lVR,"pro-");
			} else {				
				var lQteMax = -1;
				if(pType == 0) {
					lQteMax = pDialog.find(':input[name=pro-qte-max]').val().numberFrToDb();
				} else if(pType == 2) {
					lQteMax = pDialog.find('#max-abonnement').text().numberFrToDb();
				}
				if(pDialog.find(':input[name=pro-qte-max-choix]:checked').val() == 1 && lQteMax == "" && pType == 0) { // Si une Qmax est sélectionné il faut la saisir
					var lVR = new Object();
					var erreur = new VRerreur();
					erreur.code = ERR_201_CODE;
					erreur.message = ERR_201_MSG;
					lVR.valid = false;
					lVR.qteMaxCommande = new VRelement();
					lVR.qteMaxCommande.valid = false;
					lVR.qteMaxCommande.erreurs.push(erreur);
					Infobulle.generer(lVR,"pro-");
				} else {
					var lUnite = '';
					if(pType == 2) {
						lUnite = pDialog.find(".ligne-lot-abonnement :checkbox:checked").first().closest(".ligne-lot-abonnement").find(".lot-unite").text();
					} else {
						lUnite = pDialog.find(".ligne-lot :checkbox:checked").first().closest(".ligne-lot").find(".lot-unite").text();
					}
					
					if(lStock == "") {
						lStock = -1;
					}
					if(lQteMax == "") {
						lQteMax = -1;
					}
					
					var lVoProduit = new ProduitMarcheVO();
					lVoProduit.id = pDialog.find("#pro-idProduit").attr("id-produit");
					lVoProduit.unite = lUnite;
					lVoProduit.qteMaxCommande = lQteMax;
					lVoProduit.qteRestante = lStock;
					lVoProduit.type = pType;
					lVoProduit.lotRemplacement = this.mLotRemplacement;			
					
					if(pType == 2) {
						pDialog.find('.ligne-lot-abonnement :checkbox:checked').each( function () {
							// Récupération des lots
							var lVoLot = new DetailCommandeVO();
							lVoLot.id = $(this).closest(".ligne-lot-abonnement").find(".lot-id").text();
							lVoLot.taille = $(this).closest(".ligne-lot-abonnement").find(".lot-quantite").text().numberFrToDb();
							lVoLot.prix = $(this).closest(".ligne-lot-abonnement").find(".lot-prix").text().numberFrToDb();
							
							lVoProduit.lots.push(lVoLot);										
						});						
					} else {
						pDialog.find('.ligne-lot :checkbox:checked').each( function () {
							// Récupération des lots
							var lVoLot = new DetailCommandeVO();
							lVoLot.id = $(this).closest(".ligne-lot").find(".lot-id").text();
							lVoLot.taille = $(this).closest(".ligne-lot").find(".lot-quantite").text().numberFrToDb();
							lVoLot.prix = $(this).closest(".ligne-lot").find(".lot-prix").text().numberFrToDb();
							
							lVoProduit.lots.push(lVoLot);										
						});
					}

					if(pType == 1) { // Si produit Solidaire par de limite de stock
						lVoProduit.qteMaxCommande = -1;
						lVoProduit.qteRestante = -1;
					}
					
					lVoProduit.tailleLotResaMax = this.mTailleLotResaMax;
					lVoProduit.quantiteReservation = this.mQuantiteReservation;
					
					var lValid = new ProduitMarcheValid();
					var lVr = lValid.validUpdate(lVoProduit);
					
					if(lVr.valid) {	
						Infobulle.init();
						lVoProduit.fonction = "modifierProduitMarche";
						$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lVoProduit),
								function (lResponse) {		
									if(lResponse) {
										if(lResponse.valid) {
											
											// Message de confirmation
											var lVR = new Object();
											var erreur = new VRerreur();
											erreur.code = ERR_330_CODE;
											erreur.message = ERR_330_MSG;
											lVR.valid = false;
											lVR.log = new VRelement();
											lVR.log.valid = false;
											lVR.log.erreurs.push(erreur);								
											Infobulle.generer(lVR,"");

											pDialog.dialog('close');
											
		
											that.construct({id_marche:that.mIdMarche,vr:lVR});
											
										} else {
											Infobulle.generer(lResponse,"pro-");
										}
									}
								},"json"
						);
					} else {
						Infobulle.generer(lVr,'pro-');
					}
				}	
			}
		} else {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_112_CODE;
			erreur.message = ERR_112_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
		}
	};
	
	this.affectSupprimerProduit = function(pData) {
		var that = this;
		pData.find(".btn-supprimer-produit").click(function() {
			var lId = $(this).attr("id-produit");
			if($(this).attr("qte-reservation") > 0) {
				that.dialogConfirmationSupprimerProduit(lId);
			} else {
				that.supprimerProduit(lId);
			}			
		});
		return pData;	
	};
	
	this.dialogConfirmationSupprimerProduit = function(pId) {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();
		$(lGestionCommandeTemplate.dialogSupprimerProduit).dialog({
			autoOpen: true,
			modal: true,
			draggable: false,
			resizable: false,
			width:600,
			buttons: {
				'Supprimer': function() {
					that.supprimerProduit(pId);
				},
				'Annuler': function() {
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }	
		});	
	};
	
	this.supprimerProduit = function(pId) {
		var that = this;
		var lParam = {fonction:"supprimerProduitMarche",id:pId};
		$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lParam),
				function (lResponse) {		
					if(lResponse) {
						if(lResponse.valid) {
							that.mNbProduit--;
							
							// Message de confirmation
							var lVR = new Object();
							var erreur = new VRerreur();
							erreur.code = ERR_331_CODE;
							erreur.message = ERR_331_MSG;
							lVR.valid = false;
							lVR.log = new VRelement();
							lVR.log.valid = false;
							lVR.log.erreurs.push(erreur);								
							Infobulle.generer(lVR,"");
							
							
							$("#dialog-supprimer-produit").dialog('close');
							

							that.construct({id_marche:that.mIdMarche,vr:lVR});	
							
						} else {
							Infobulle.generer(lResponse,"marche-");
						}
					}
				},"json"
		);
	};
	
	this.dialogModifierInformationMarche = function() {
		var that = this;
		var lGestionCommandeTemplate = new GestionCommandeTemplate();		
		var lHtml = $(lGestionCommandeTemplate.dialogModifierInfoMarche.template(that.mMarche));		

		lHtml.find(":input[name=heure-debut]").selectOptions(that.mMarche.heureMarcheDebut);
		lHtml.find(":input[name=minute-debut]").selectOptions(that.mMarche.minuteMarcheDebut);
		lHtml.find(":input[name=heure-fin]").selectOptions(that.mMarche.heureMarcheFin);
		lHtml.find(":input[name=minute-fin]").selectOptions(that.mMarche.minuteMarcheFin);
		lHtml.find(":input[name=heure-debut-reservation]").selectOptions(that.mMarche.heureDebutReservation);
		lHtml.find(":input[name=minute-debut-reservation]").selectOptions(that.mMarche.minuteDebutReservation);
		lHtml.find(":input[name=heure-fin-reservation]").selectOptions(that.mMarche.heureFinReservation);
		lHtml.find(":input[name=minute-fin-reservation]").selectOptions(that.mMarche.minuteFinReservation);
		
		lHtml = gCommunVue.lienDatepickerMarche('marche-dateDebutReservation','marche-dateFinReservation','marche-dateMarcheDebut',lHtml);
		lHtml.find('#marche-dateDebutReservation').datepicker("option", "maxDate", that.mMarche.dateFinReservation);
		lHtml.find('#marche-dateFinReservation').datepicker("option", "minDate", that.mMarche.dateDebutReservation).datepicker("option", "maxDate", that.mMarche.dateMarcheDebut);
		lHtml.find('#marche-dateMarcheDebut').datepicker("option", "minDate", that.mMarche.dateFinReservation);
		
		$(lHtml).dialog({
			autoOpen: true,
			modal: true,
			draggable: false,
			resizable: false,
			width:800,
			buttons: {
				'Modifier': function() {
					that.modifierInformationMarche($(this));
				},
				'Annuler': function() {
					$(this).dialog('close');
				}
			},
			close: function(ev, ui) { $(this).remove(); Infobulle.init(); }	
		});	
	};
	
	this.modifierInformationMarche = function(pDialog) {
		var that = this;
		var lVo = new MarcheVO();

		lVo.id = this.mMarche.comId;
		lVo.nom = pDialog.find(':input[name=nom]').val();
		lVo.description = pDialog.find(':input[name=description]').val();
		lVo.dateMarcheDebut = pDialog.find(':input[name=date-debut]').val().dateFrToDb();
		lVo.timeMarcheDebut = pDialog.find(':input[name=heure-debut]').val() + ':' + pDialog.find(':input[name=minute-debut]').val() + ':00';
		lVo.dateMarcheFin = pDialog.find(':input[name=date-debut]').val().dateFrToDb();
		lVo.timeMarcheFin = pDialog.find(':input[name=heure-fin]').val() + ':' + pDialog.find(':input[name=minute-fin]').val() + ':00';
		lVo.dateDebutReservation = pDialog.find(':input[name=date-debut-reservation]').val().dateFrToDb();
		lVo.timeDebutReservation = pDialog.find(':input[name=heure-debut-reservation]').val() + ':' + pDialog.find(':input[name=minute-debut-reservation]').val() + ':00';
		lVo.dateFinReservation = pDialog.find(':input[name=date-fin-reservation]').val().dateFrToDb();
		lVo.timeFinReservation = pDialog.find(':input[name=heure-fin-reservation]').val() + ':' + pDialog.find(':input[name=minute-fin-reservation]').val() + ':00';
				
		var lValid = new MarcheValid();
		var lVR = lValid.validUpdateInformation(lVo);
		
		if(lVR.valid) {
			lVo.fonction = "modifierInformationMarche";
			$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lVo),
					function (lResponse) {		
						if(lResponse) {
							if(lResponse.valid) {
								// Maj des infos								
								that.mMarche.nom = lVo.nom;
								that.mMarche.comDescription = lVo.description;
								var lDateTime = lVo.dateDebutReservation + " " + lVo.timeDebutReservation;
								that.mMarche.dateDebutReservation = lDateTime.extractDbDate().dateDbToFr();
								that.mMarche.heureDebutReservation = lDateTime.extractDbHeure();
								that.mMarche.minuteDebutReservation = lDateTime.extractDbMinute();
								lDateTime = lVo.dateFinReservation + " " + lVo.timeFinReservation;
								that.mMarche.dateFinReservation = lDateTime.extractDbDate().dateDbToFr();
								that.mMarche.heureFinReservation = lDateTime.extractDbHeure();
								that.mMarche.minuteFinReservation = lDateTime.extractDbMinute();
								lDateTime = lVo.dateMarcheDebut + " " + lVo.timeMarcheDebut;
								that.mMarche.dateMarcheDebut = lDateTime.extractDbDate().dateDbToFr();
								that.mMarche.heureMarcheDebut = lDateTime.extractDbHeure();
								that.mMarche.minuteMarcheDebut = lDateTime.extractDbMinute();
								lDateTime = lVo.dateMarcheDebut + " " + lVo.timeMarcheFin;								
								that.mMarche.heureMarcheFin = lDateTime.extractDbHeure();
								that.mMarche.minuteMarcheFin = lDateTime.extractDbMinute();
								
								// Maj de l'affichage
								$("#edt-marche-dateDebutReservation").text(that.mMarche.dateDebutReservation);
								$("#edt-marche-heureDebutReservation").text(that.mMarche.heureDebutReservation);
								$("#edt-marche-minuteDebutReservation").text(that.mMarche.minuteDebutReservation);
								
								$("#edt-marche-dateFinReservation").text(that.mMarche.dateFinReservation);
								$("#edt-marche-heureFinReservation").text(that.mMarche.heureFinReservation);
								$("#edt-marche-minuteFinReservation").text(that.mMarche.minuteFinReservation);

								$("#edt-marche-dateMarcheDebut").text(that.mMarche.dateMarcheDebut);
								$("#edt-marche-heureMarcheDebut").text(that.mMarche.heureMarcheDebut);
								$("#edt-marche-minuteMarcheDebut").text(that.mMarche.minuteMarcheDebut);
								$("#edt-marche-heureMarcheFin").text(that.mMarche.heureMarcheFin);
								$("#edt-marche-minuteMarcheFin").text(that.mMarche.minuteMarcheFin);


								pDialog.dialog('close');
								
								// Message de confirmation
								var lVR = new Object();
								var erreur = new VRerreur();
								erreur.code = ERR_335_CODE;
								erreur.message = ERR_335_MSG;
								lVR.valid = false;
								lVR.log = new VRelement();
								lVR.log.valid = false;
								lVR.log.erreurs.push(erreur);								
								Infobulle.generer(lVR,"");
								
								
								
							} else {
								Infobulle.generer(lResponse,"marche-");
							}
						}
					},"json"
			);
		} else {
			// Affiche les erreurs
			Infobulle.generer(lVR,"marche-");						
		}
	};
	
	this.affectDialogAjoutProduit = function(pData) {
		var that = this;
		pData.find("#btn-ajout-produit").click(function() {
			var lParam = {fonction:"listeFerme"};
			$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lParam),
				function (lResponse) {		
					if(lResponse) {
						if(lResponse.valid) {
							Infobulle.init(); // Supprime les erreurs
		
							var lGestionCommandeTemplate = new GestionCommandeTemplate();
							var lTemplate = lGestionCommandeTemplate.dialogAjoutProduitAjoutMarche;
							
							$(that.affectAjoutProduitSelectFerme($(lTemplate.template(lResponse)))).dialog({			
								autoOpen: true,
								modal: true,
								draggable: true,
								resizable: false,
								width:900,
								position: "top",
								buttons: {
									'Ajouter': function() {
										that.ajouterProduit($(this));
									},
									'Annuler': function() {
										that.mEditionLot = false;
										$(this).dialog('close');
									}
								},
								close: function(ev, ui) { $(this).remove(); Infobulle.init(); }				
							});
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
			);			
		});
		return pData;
	};
	
	this.affectAjoutProduitSelectFerme = function(pData) {
		var that = this;
		pData.find("#pro-idFerme select").change(function() {
			var lId = $(this).val();
			$("#pro-idCategorie select, #pro-idProduit select").prop("disabled",true).selectOptions("0");
			$("#prix-stock-produit").replaceWith("<div id=\"prix-stock-produit\"></div>");	
			if(lId > 0) {
				var lParam = {fonction:"listeProduit",id:lId};
				$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lParam),
					function (lResponse) {		
						if(lResponse) {
							if(lResponse.valid) {
								Infobulle.init(); // Supprime les erreurs
								
								if(lResponse.listeProduit.length > 0 && lResponse.listeProduit[0].nproId != null) {
								
									that.mProduits = [];
									var lIdCategorie = 0;
									var lListeCategorie = [];
									$.each(lResponse.listeProduit,function() {
										if(that.mProduits[this.cproId]) {
											that.mProduits[this.cproId].listeProduit.push(this);
										} else {
											that.mProduits[this.cproId] = {nom:this.cproNom,listeProduit:[this]};
										}
										if(lIdCategorie != this.cproId) {
											lListeCategorie.push({cproId:this.cproId,cproNom:this.cproNom});
											lIdCategorie = this.cproId;
										}
									});
									
	
									var lGestionCommandeTemplate = new GestionCommandeTemplate();
									var lTemplate = lGestionCommandeTemplate.ajoutProduitSelectCategorie;
									
									$("#pro-idCategorie").replaceWith(that.affectAjoutProduitSelectCategorie($(lTemplate.template({listeCategorie:lListeCategorie}))));
									
								} else {
									// Message d'information
									var lVr = new TemplateVR();
									lVr.valid = false;
									lVr.log.valid = false;
									var erreur = new VRerreur();
									erreur.code = ERR_332_CODE;
									erreur.message = ERR_332_MSG;
									lVr.log.erreurs.push(erreur);
									Infobulle.generer(lVr,'');
								}
							} else {
								Infobulle.generer(lResponse,'');
							}
						}
					},"json"
				);
			} 		
		});
		return pData;
	};
	
	this.affectAjoutProduitSelectCategorie = function(pData) {
		var that = this;
		pData.find("select").change(function() {
			$("#pro-idProduit select").prop("disabled",true).selectOptions("0");
			$("#prix-stock-produit").replaceWith("<div id=\"prix-stock-produit\"></div>");
			
			var lId = $(this).val();
			if(lId > 0) {
				
				var lGestionCommandeTemplate = new GestionCommandeTemplate();
				var lTemplate = lGestionCommandeTemplate.ajoutProduitSelectProduit;
				
				$("#pro-idProduit").replaceWith(that.affectAjoutProduitSelectProduit($(lTemplate.template(that.mProduits[lId]))));
				
			} 
				
		});
		return pData;
	};
	
	this.affectAjoutProduitSelectProduit = function(pData) {
		var that = this;
		pData.find("select").change(function() {
			var lId = $(this).val();
			if(lId > 0) {
				if(!that.mMarche.produits[lId] || !that.mMarche.produitsAbonnement[lId]) {
					var lParam = {fonction:"listeModeleLot",idNomProduit:lId};
					$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lParam),
						function (lResponse) {		
							if(lResponse) {
								if(lResponse.valid) {
									Infobulle.init(); // Supprime les erreurs

									if((!that.mMarche.produitsAbonnement[lId] && lResponse.detailAbonnement.idNomProduit == lId) || !that.mMarche.produits[lId]) {

										var lGestionCommandeTemplate = new GestionCommandeTemplate();
										var lData = {sigleMonetaire:gSigleMonetaire};
										if($(lResponse.modelesLot).length > 0) {
											lData.modelesLot = [];
											$.each(lResponse.modelesLot,function() {
												if(this.mLotId != null) {
													this.id = this.mLotId;
													this.quantite = this.mLotQuantite.nombreFormate(2,',',' ');
													this.unite = this.mLotUnite;
													this.prix = this.mLotPrix.nombreFormate(2,',',' ');
													this.sigleMonetaire = gSigleMonetaire;
													lData.modelesLot.push(this);
													lData.unite = this.mLotUnite;
												}
											});	
										}
										
										if(lResponse.detailAbonnement.idNomProduit == lId) { // Si le produit existe en abonnement
											lData.modelesLotAbonnement = [];
											lData.modelesLotAbonnementReservation = [];
											lData.uniteAbonnement = lResponse.detailAbonnement.unite;
											$.each(lResponse.detailAbonnement.lots, function() {
												
												//this.id = this.id;
												this.quantite = this.taille.nombreFormate(2,',',' ');
												this.unite = lData.uniteAbonnement;
												this.prix = this.prix.nombreFormate(2,',',' ');
												this.sigleMonetaire = gSigleMonetaire;
												
												if(this.reservation) {		
													lData.modelesLotAbonnementReservation.push(this);
												} else {											
													lData.modelesLotAbonnement.push(this);
												}
												
											});
										}
										
	
										if(that.mMarche.produits[lId]) { // Le produit existe en normal ou solidaire
											lData.typeNormalSelected = "disabled=\"disabled\"";
											lData.typeSolidaireSelected = "disabled=\"disabled\"";
											lData.typeAbonnementSelected = "checked=\"checked\"";
											
											lData.visibleSolidaire = "ui-helper-hidden";
											lData.visibleNormal = "ui-helper-hidden";
											lData.visibleAbonnement = "";
											
										} else if(that.mMarche.produitsAbonnement[lId]) { // Le produit existe déjà en abonnement
											lData.typeNormalSelected = "checked=\"checked\"";
											lData.typeAbonnementSelected = "disabled=\"disabled\"";		
											
											lData.visibleSolidaire = "";
											lData.visibleNormal = "";
											lData.visibleAbonnement = "ui-helper-hidden";									
										} else { // Le produit n'est pas encore dans le marche
											lData.typeNormalSelected = "checked=\"checked\"";
											
											lData.visibleSolidaire = "";
											lData.visibleNormal = "";
											lData.visibleAbonnement = "ui-helper-hidden";		
										}
										
										if(lResponse.detailAbonnement.idNomProduit == lId) { // Si le produit existe en abonnement
											lData.stockInitialAbonnement = lResponse.detailAbonnement.stockInitial.nombreFormate(2,',',' ');
											
											if(parseFloat(lResponse.detailAbonnement.max) == -1) {
												lData.qMaxAbonnement = "Pas de limite";
											} else {
												lData.qMaxAbonnement = lResponse.detailAbonnement.max.nombreFormate(2,',',' ') + " " + lData.uniteAbonnement;
											}
											lData.qMaxAbonnementValue = lResponse.detailAbonnement.max;
											
											lData.typeProduitAbonnement = lGestionCommandeTemplate.typeProduitAbonnementAjoutProduit.template(lData);
											lData.divLotAbonnement = lGestionCommandeTemplate.prixAbonnementAjoutProduit.template(lData);
											lData.divStockAbonnement = lGestionCommandeTemplate.stockAbonnementAjoutProduit.template(lData);
										}
										
										
										lData.divTypeProduit = lGestionCommandeTemplate.typeProduitAjoutProduit.template(lData);
										lData.divLot = lGestionCommandeTemplate.prixAjoutProduit.template(lData);
										lData.divStock = lGestionCommandeTemplate.stockAjoutProduit.template(lData);
										
										var lTemplate = lGestionCommandeTemplate.prixEtStockAjoutProduit;
										
										$("#prix-stock-produit").replaceWith(that.affectPrixEtStock($(lTemplate.template(lData))));
									} else {
										var lVR = new Object();
										var erreur = new VRerreur();
										erreur.code = ERR_211_CODE;
										erreur.message = ERR_211_MSG;
										lVR.valid = false;
										lVR.log = new VRelement();
										lVR.log.valid = false;
										lVR.log.erreurs.push(erreur);
										Infobulle.generer(lVR,"");
									}
									
								} else {
									Infobulle.generer(lResponse,'');
								}
							}
						},"json"
					);
				} else {
					var lVR = new Object();
					var erreur = new VRerreur();
					erreur.code = ERR_211_CODE;
					erreur.message = ERR_211_MSG;
					lVR.valid = false;
					lVR.log = new VRelement();
					lVR.log.valid = false;
					lVR.log.erreurs.push(erreur);
					Infobulle.generer(lVR,"");
				}
			} else {
				$("#prix-stock-produit").replaceWith($("<div id=\"prix-stock-produit\">"));
			}			
		});
		return pData;
	};
	
	this.ajouterProduit = function(pDialog) {
		var that = this;
		if(!this.mEditionLot) {
			// Préparation du AffichageMarche
			var lIdNomProduit = pDialog.find(':input[name=produit]').val();
			var lTypeProduit = pDialog.find(':input[name=typeProduit]:checked').val();
			
			if(lIdNomProduit != 0) {
				var lStock = -1;
				if(lTypeProduit == 2) {
					lStock = pDialog.find('#stock-abonnement').text().numberFrToDb();
				} else if(lTypeProduit == 0){
					lStock = pDialog.find(':input[name=pro-stock]').val().numberFrToDb();
				}

				if(pDialog.find(':input[name=pro-stock-choix]:checked').val() == 1 && lStock == "" && lTypeProduit == 0) { // Si une limite de stock est sélectionné il faut la saisir
					var lVR = new Object();
					var erreur = new VRerreur();
					erreur.code = ERR_201_CODE;
					erreur.message = ERR_201_MSG;
					lVR.valid = false;
					lVR.qteRestante = new VRelement();
					lVR.qteRestante.valid = false;
					lVR.qteRestante.erreurs.push(erreur);
					Infobulle.generer(lVR,"pro-");
				} else {			
					var lQteMax = -1;
					if(lTypeProduit == 2) {
						lQteMax = pDialog.find('#max-abonnement').text().numberFrToDb();
					} else if(lTypeProduit == 0){
						lQteMax = pDialog.find(':input[name=pro-qte-max]').val().numberFrToDb();
					}
					if(pDialog.find(':input[name=pro-qte-max-choix]:checked').val() == 1 && lQteMax == "" && lTypeProduit == 0) { // Si une Qmax est sélectionné il faut la saisir
						var lVR = new Object();
						var erreur = new VRerreur();
						erreur.code = ERR_201_CODE;
						erreur.message = ERR_201_MSG;
						lVR.valid = false;
						lVR.qteMaxCommande = new VRelement();
						lVR.qteMaxCommande.valid = false;
						lVR.qteMaxCommande.erreurs.push(erreur);
						Infobulle.generer(lVR,"pro-");
					} else {	
						var lUnite = '';
						if(lTypeProduit == 2) {
							lUnite = pDialog.find(".ligne-lot-abonnement :checkbox:checked").first().closest(".ligne-lot-abonnement").find(".lot-unite").text();
						} else {
							lUnite = pDialog.find(".ligne-lot :checkbox:checked").first().closest(".ligne-lot").find(".lot-unite").text();
						}
						if(lTypeProduit == 2 && this.mMarche.produitsAbonnement[lIdNomProduit]) { // Produit déjà présent en abonnement
							var lVR = new Object();
							var erreur = new VRerreur();
							erreur.code = ERR_253_CODE;
							erreur.message = ERR_253_MSG;
							lVR.valid = false;
							lVR.qteMaxCommande = new VRelement();
							lVR.qteMaxCommande.valid = false;
							lVR.qteMaxCommande.erreurs.push(erreur);
							Infobulle.generer(lVR,"pro-");
						} else if ( lTypeProduit < 2 && this.mMarche.produits[lIdNomProduit]) { // Produit déjà présent en normal ou solidaire
							var lVR = new Object();
							var erreur = new VRerreur();
							erreur.code = ERR_211_CODE;
							erreur.message = ERR_211_MSG;
							lVR.valid = false;
							lVR.qteMaxCommande = new VRelement();
							lVR.qteMaxCommande.valid = false;
							lVR.qteMaxCommande.erreurs.push(erreur);
							Infobulle.generer(lVR,"pro-");
						} else {
							if(lStock == "") {
								lStock = -1;
							}
							if(lQteMax == "") {
								lQteMax = -1;
							}

							// Préparation du MarcheVO		
							var lVoProduit = new ProduitMarcheVO();
							lVoProduit.id = that.mIdMarche;
							lVoProduit.idNom = lIdNomProduit;
							lVoProduit.unite = lUnite;
							lVoProduit.qteMaxCommande = lQteMax;
							lVoProduit.qteRestante = lStock;
							lVoProduit.type = lTypeProduit;
							
							if(lTypeProduit == 2) {
								pDialog.find('.ligne-lot-abonnement :checkbox').each( function () {
									// Récupération des lots
									var lVoLot = new DetailCommandeVO();
									var lId = $(this).closest(".ligne-lot-abonnement").find(".lot-id").text();
									if(lId > 0) {
										lVoLot.id = lId;
									}
									lVoLot.taille = $(this).closest(".ligne-lot-abonnement").find(".lot-quantite").text().numberFrToDb();
									lVoLot.prix = $(this).closest(".ligne-lot-abonnement").find(".lot-prix").text().numberFrToDb();
									
									lVoProduit.lots.push(lVoLot);
								});	
							} else {
								pDialog.find('.ligne-lot :checkbox').each( function () {
									// Récupération des lots
									var lVoLot = new DetailCommandeVO();
									lVoLot.taille = $(this).closest(".ligne-lot").find(".lot-quantite").text().numberFrToDb();
									lVoLot.prix = $(this).closest(".ligne-lot").find(".lot-prix").text().numberFrToDb();
									
									lVoProduit.lots.push(lVoLot);	
								});	
							}
								
							var lValid = new CommandeCompleteValid();
							var lVr = lValid.validAjoutProduit(lVoProduit);
							
							if(lVr.valid) {	
								Infobulle.init();
								lVoProduit.fonction = "ajouterProduitMarche";
								$.post(	"./index.php?m=GestionCommande&v=EditerCommande", "pParam=" + $.toJSON(lVoProduit),
										function (lResponse) {		
											if(lResponse) {
												if(lResponse.valid) {
													
													// Message de confirmation
													var lVR = new Object();
													var erreur = new VRerreur();
													erreur.code = ERR_329_CODE;
													erreur.message = ERR_329_MSG;
													lVR.valid = false;
													lVR.log = new VRelement();
													lVR.log.valid = false;
													lVR.log.erreurs.push(erreur);								
													Infobulle.generer(lVR,"");
													
			
													
													pDialog.dialog('close');
													
			
													that.construct({id_marche:that.mIdMarche,vr:lVR});
													
												} else {
													Infobulle.generer(lResponse,"pro-");
												}
											}
										},"json"
								);
							} else {
								Infobulle.generer(lVr,'pro-');
							}		
						}
					}
				}
			}
		} else {
			var lVR = new Object();
			var erreur = new VRerreur();
			erreur.code = ERR_112_CODE;
			erreur.message = ERR_112_MSG;
			lVR.valid = false;
			lVR.log = new VRelement();
			lVR.log.valid = false;
			lVR.log.erreurs.push(erreur);
			Infobulle.generer(lVR,"");
		}
	};

	this.construct(pParam);
}