;function CaisseListeCommandeVue(pParam) {
	this.mCommunVue = new CommunVue();
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {CaisseListeCommandeVue(pParam);}} );
		var that = this;
		$.post(	"./index.php?m=Caisse&v=CaisseListeCommande", 
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
	}	
	
	this.afficher = function(lResponse) {
		var that = this;
		var lCaisseTemplate = new CaisseTemplate();
		if(lResponse.listeCommande.length > 0 && lResponse.listeCommande[0].id != null) {
		
			var lListeCommande = new Object;
			lListeCommande.commande = new Array();
			
				$(lResponse.listeCommande).each(function() {
					var lCommande = {};
					lCommande.id = this.id;
					lCommande.numero = this.numero;
					lCommande.dateFinReservation = this.dateFinReservation.extractDbDate().dateDbToFr();
					lCommande.heureFinReservation = this.dateFinReservation.extractDbHeure();
					lCommande.minuteFinReservation = this.dateFinReservation.extractDbMinute();
					
					lCommande.dateMarcheDebut = this.dateMarcheDebut.extractDbDate().dateDbToFr();
					lCommande.heureMarcheDebut = this.dateMarcheDebut.extractDbHeure();
					lCommande.minuteMarcheDebut = this.dateMarcheDebut.extractDbMinute();
					
					lCommande.heureMarcheFin = this.dateMarcheFin.extractDbHeure();
					lCommande.minuteMarcheFin = this.dateMarcheFin.extractDbMinute();
	
					lListeCommande.commande.push(lCommande);
				});
			
			var lTemplate = lCaisseTemplate.listeCommandePage;
			$('#contenu').replaceWith(that.affect($(lTemplate.template(lListeCommande))));
		} else {
			$('#contenu').replaceWith(that.affect($(lCaisseTemplate.listeCommandeVide)));
		}
	}
	
	this.affect = function(pData) {
		pData = this.affectLienMarche(pData);
		pData = this.mCommunVue.comHoverBtn(pData);
		return pData;
	}
	
	this.affectLienMarche = function(pData) {
		pData.find('.btn-marche').click(function() {
			var lparam = {"id_commande":$(this).attr('id')};
			CaisseMarcheCommandeVue(lparam);
		});
		return pData;
	}	
	this.construct(pParam);
}