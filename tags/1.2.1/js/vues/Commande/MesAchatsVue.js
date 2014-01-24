;function MesAchatsVue(pParam) {	
	this.construct = function(pParam) {
		$.history( {'vue':function() {MesAchatsVue(pParam);}} );
		var that = this;
		$.post(	"./index.php?m=Commande&v=MesAchats", 
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.afficher(lResponse);
							// Maj du Menu
							gCommunVue.majMenu('Commande','MesAchats');
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {
		Infobulle.init(); // Supprime les erreurs
		var that = this;
		
		var lCommandeTemplate = new CommandeTemplate();
		
		var lListeAchats = {achat:[]};		
		// Transforme les dates pour l'affichage
			$(lResponse.achats).each(function() {
				if(this.comNumero != null) {
					var lachat = {};
					lachat.numero = this.comNumero;
					lachat.dateMarcheDebut = this.comDateMarcheDebut.extractDbDate().dateDbToFr();					
					lachat.idCommande = '"' + this.comId + '"';
					lachat.jourMarcheDebut = jourSem(this.comDateMarcheDebut.extractDbDate());
					lachat.nom = this.comNom;
					lListeAchats.achat.push(lachat);
				}
			});
			
		// Affiche la liste ou un message si celle-ci est vide
		if(lListeAchats.achat.length > 0) {
			$('#contenu').replaceWith(that.affect($(lCommandeTemplate.listeAchats.template(lListeAchats))));		
		} else {
			$('#contenu').replaceWith(that.affect($(lCommandeTemplate.listeAchatVide)));
		}
	};
	
	this.affect = function(pData) {
		pData = this.affectVisualiser(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
	
	this.affectVisualiser = function(pData) {
		pData.find('.ligne-achat').click(function() {
				MesAchatsDetailVue({id_commande:$(this).attr('id')});
			});		
		return pData;
	};
		
	this.construct(pParam);
}