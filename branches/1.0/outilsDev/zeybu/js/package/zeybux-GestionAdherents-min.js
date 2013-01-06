function GestionAdherentsTemplate(){this.formulaireAjoutAdherent='<div id="contenu"><div class="com-barre-menu-2"><button class="ui-state-default ui-corner-top com-button" id="lien-retour"><span class="com-float-left ui-icon ui-icon-arrowthick-1-w"></span>Retour</button></div><div id="formulaire_modifier_adherent_int"><form><div class="com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all" id="div-info-adherent"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Information</div><div class="com-widget-content"><table class="com-table-form"><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Nom *</th><td class="com-table-form-td"><input type="hidden" name="{NAME_ID}" value="{VALUE_ID}" /><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="nom" value="{adhNom}" maxlength="50" id="nom"/></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Prénom *</th><td class="com-table-form-td"><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="prenom" value="{adhPrenom}" maxlength="50" id="prenom"/></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Date de Naissance</th><td class="com-table-form-td"><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="date_naissance" value="{adhDateNaissance}" maxlength="10" id="dateNaissance"/></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Date d\'adhésion *</th><td class="com-table-form-td"> <input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="date_adhesion" value="{adhDateAdhesion}" maxlength="10" id="dateAdhesion" /></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all" id="compte">Compte</th><td class="com-table-form-td">{formCompte}</tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Commentaire</th><td class="com-table-form-td"><textarea class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" name="commentaire" id="commentaire">{adhCommentaire}</textarea></td></tr></table></div></div><div class="com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all" id="div-coord-adherent"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Coordonnées</div><div class="com-widget-content"><table class="com-table-form"><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Courriel 1</th><td class="com-table-form-td"><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="courriel_principal" value="{adhCourrielPrincipal}" maxlength="100" id="courrielPrincipal"/></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Courriel 2</th><td class="com-table-form-td"><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" ype="text" name="courriel_secondaire" value="{adhCourrielSecondaire}" maxlength="100" id="courrielSecondaire"/></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Téléphone 1</th><td class="com-table-form-td"><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="telephone_principal" value="{adhTelephonePrincipal}" maxlength="20" id="telephonePrincipal"/></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Téléphone 2</th><td class="com-table-form-td"><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="telephone_secondaire" value="{adhTelephoneSecondaire}" maxlength="20" id="telephoneSecondaire"/></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Adresse</th><td class="com-table-form-td"><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="adresse" value="{adhAdresse}" maxlength="300" id="adresse"/></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Code Postal</th><td class="com-table-form-td"><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="code_postal" value="{adhCodePostal}" maxlength="10" id="codePostal"/></td></tr><tr><th class="ui-widget-content ui-widget-content-transparent ui-corner-all">Ville</th><td class="com-table-form-td"><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-all" type="text" name="ville" value="{adhVille}" maxlength="100" id="ville"/></td></tr></table></div></div>{autorisation}<div class="com-widget-header ui-widget ui-widget-header ui-corner-all com-center" id="div-submit-ajout-adherent"><input class="ui-state-default ui-corner-all com-button com-center" type="submit" value="Valider" /></div></form></div></div>';this.formulaireCompteAjoutAdherent='<input type="radio" name="choix_compte" value="auto" checked="checked"/> Automatique <br/><input type="radio" name="choix_compte" value="lier" /> Lier <span class="ui-helper-hidden" id="label_compte_lier"></span> <span class="ui-helper-hidden ui-state-default ui-corner-all com-button com-center" id="choix_compte_liaison">Choisir</span>';this.formulaireCompteModificationAdherent='<input type="radio" name="choix_compte" value="actuel" checked="checked"/> Actuel {cptLabel} <br/><input type="radio" name="choix_compte" value="auto"/> Nouveau<input type="radio" name="choix_compte" value="lier" /> Lier <span class="ui-helper-hidden" id="label_compte_lier"></span> <span class="ui-helper-hidden ui-state-default ui-corner-all com-button com-center" id="choix_compte_liaison">Choisir</span>';this.formulaireAutorisationAdherent='<div class="com-clear-float-left com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Autorisations<span class="com-btn-header-multiples ui-widget-content ui-widget-content-transparent ui-corner-all com-cursor-pointer" id="btn-toggle-autorisation"><span class="ui-icon ui-icon-triangle-1-s"></span></span></div><div class="com-widget-content"><table id="formulaire-modifier-adherent-table-autorisation" class="com-table-form"><!-- BEGIN modules --><tr class="ui-widget-content ui-widget-content-transparent" ><td class="com-table-form-td" ><input type="checkbox" name="modules[]" value="{modules.id}" {modules.checked}/>{modules.label}</td></tr><!-- END modules --></table></div></div>';this.dialogListeAdherent='<div id="dialog-liste-adherent" title="Adhérents"><div id="liste-adh-recherche" class="recherche com-widget-header ui-widget ui-widget-header ui-corner-all"><form id="filter-form"><div><span class="conteneur-icon com-float-left ui-widget-content ui-corner-left" title="Chercher"><span class="ui-icon ui-icon-search"></span></span><input class="com-input-text ui-widget-content ui-corner-right" name="filter" id="filter" value="" maxlength="30" size="15" type="text" /></div></form></div><table class="com-table"><thead><tr class="ui-widget ui-widget-header"><th class="com-table-th-debut com-underline-hover com-cursor-pointer marche-com-th-num-adh"><span class="ui-icon span-icon"></span>N°</th><th class="com-table-th-med com-underline-hover com-cursor-pointer marche-com-th-num-adh"><span class="ui-icon span-icon"></span>Compte</th><th class="com-table-th-med com-underline-hover com-cursor-pointer marche-com-th-nom"><span class="ui-icon span-icon"></span>Nom</th>	<th class="com-table-th-med com-underline-hover com-cursor-pointer"><span class="ui-icon span-icon"></span>Prénom</th><th class="com-table-th-fin com-underline-hover"></th></tr></thead><tbody><!-- BEGIN listeAdherent --><tr class="com-cursor-pointer compte-ligne" data-id-compte="{listeAdherent.adhIdCompte}" data-label-compte="{listeAdherent.cptLabel}"><td class="com-table-td-debut com-underline-hover"><span class="ui-helper-hidden">{listeAdherent.adhIdTri}</span>{listeAdherent.adhNumero}</td><td class="com-table-td-med com-underline-hover"><span class="ui-helper-hidden">{listeAdherent.cptIdTri}</span>{listeAdherent.cptLabel}</td><td class="com-table-td-med com-underline-hover">{listeAdherent.adhNom}</td><td class="com-table-td-med com-underline-hover">{listeAdherent.adhPrenom}</td><td class="com-table-td-fin"><span class="com-cursor-pointer com-btn-header-multiples ui-widget-content ui-corner-all"><span class="ui-icon ui-icon-triangle-1-e"></span></span></td></tr><!-- END listeAdherent --></tbody></table></div>';this.listeAdherent='<div id="contenu"><div id="liste_adherent_solde_int"><div class="com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">{totalAdherent}<span class="com-btn-header-text ui-widget-content ui-corner-all" id="btn-nv-adherent" title="Ajouter un adhérent"><span class="com-float-left ui-icon ui-icon-plusthick"></span>Ajouter</span></div><div id="liste-adh-recherche" class="recherche com-widget-header ui-widget ui-widget-header ui-corner-all"><form id="filter-form"><div><span class="conteneur-icon com-float-left ui-widget-content ui-widget-content-transparent ui-corner-left" title="Chercher"><span class="ui-icon ui-icon-search"></span></span><input class="com-input-text ui-widget-content ui-widget-content-transparent ui-corner-right" name="filter" id="filter" value="" maxlength="30" size="15" type="text" /></div></form></div><table class="com-table"><thead><tr class="ui-widget ui-widget-header"><th class="com-table-th-debut com-underline-hover liste-adh-th-num com-cursor-pointer"><span class="ui-icon span-icon"></span>N°</th><th class="com-table-th-med com-underline-hover liste-adh-th-cpt com-cursor-pointer"><span class="ui-icon span-icon"></span>Compte</th><th class="com-table-th-med com-underline-hover liste-adh-th-nom com-cursor-pointer"><span class="ui-icon span-icon"></span>Nom</th><th class="com-table-th-med com-underline-hover liste-adh-th-nom com-cursor-pointer"><span class="ui-icon span-icon"></span>Prénom</th><th class="com-table-th-med com-underline-hover com-cursor-pointer"><span class="ui-icon span-icon"></span>Courriel</th><th class="com-table-th-fin liste-adh-th-solde">Solde</th></tr></thead><tbody><!-- BEGIN listeAdherent --><tr class="com-cursor-pointer compte-ligne" id-adherent="{listeAdherent.adhId}"><td class="com-table-td-debut com-underline-hover"><span class="ui-helper-hidden">{listeAdherent.adhIdTri}</span>{listeAdherent.adhNumero}</td><td class="com-table-td-med com-underline-hover"><span class="ui-helper-hidden">{listeAdherent.cptIdTri}</span>{listeAdherent.cptLabel}</td><td class="com-table-td-med com-underline-hover">{listeAdherent.adhNom}</td><td class="com-table-td-med com-underline-hover">{listeAdherent.adhPrenom}</td><td class="com-table-td-med com-underline-hover">{listeAdherent.adhCourrielPrincipal}</td><td class="com-table-td-fin com-underline-hover liste-adh-td-solde"><span class="{listeAdherent.classSolde}">{listeAdherent.cptSolde} {sigleMonetaire}</span></td></tr><!-- END listeAdherent --></tbody></table></div></div></div>';this.listeAdherentVide='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Les adhérents<span class="com-cursor-pointer com-btn-header-multiples ui-widget-content ui-widget-content-transparent ui-corner-all" id="btn-nv-adherent" title="Ajouter un adhérent"><span class="ui-icon ui-icon-plusthick"></span></span></div><p id="texte-liste-vide">Aucun adhérent dans la base.</p></div></div>';this.dialogSuppressionAdherent='<div id="dialog-supp-adh" title="Supprimer l\'adhérent {adhNumero}"><p class="ui-state-error ui-corner-all"><span class="ui-icon ui-icon-alert com-float-left"></span>ATTENTION : Voulez-vous réellement supprimer l\'adherent : {adhNumero}</p></div>';this.infoCompteAdherentDebut='<div class="com-barre-menu-2"><button class="ui-state-default ui-corner-top com-button" id="lien-retour"><span class="com-float-left ui-icon ui-icon-arrowthick-1-w"></span>Retour</button></div><div id="info_compte_solde_adherent_ext"><div id="info_compte_solde_adherent_int"><div class="com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Informations<span class="com-btn-header-multiples ui-widget-content ui-widget-content-transparent ui-corner-all com-cursor-pointer" id="btn-supp" title="Supprimer"><span class="ui-icon ui-icon-trash"></span></span><span class="com-btn-header-multiples ui-widget-content ui-widget-content-transparent ui-corner-all com-cursor-pointer" id="btn-edt" title="Modifier"><span class="ui-icon ui-icon-pencil"></span></span></div><div class="com-widget-content"><div>Numéro d\'adhérent : {adhNumero}</div><div>Numéro de Compte : {cptLabel}</div><div>Nom : {adhNom}</div><div>Prénom : {adhPrenom}</div><div>Date de naissance : {adhDateNaissance}</div><div>Date d\'adhésion : {adhDateAdhesion}</div><div>Commentaire : {adhCommentaire}</div></div></div><div class="com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Coordonnées</div><div class="com-widget-content"><div>Courriel Principal : {adhCourrielPrincipal}</div><div>Courriel Secondaire : {adhCourrielSecondaire}</div><div>Téléphone Principal : {adhTelephonePrincipal}</div><div>Téléphone Secondaire : {adhTelephoneSecondaire}</div><div>Adresse : {adhAdresse}</div><div>Ville : {adhVille}</div><div>Code Postal : {adhCodePostal}</div></div></div>';this.infoCompteAdherentAutorisation='<div id="info_compte_autorisations_int"><div class="com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Autorisations</div><div class="com-widget-content"><!-- BEGIN modules --><div><span class="com-float-left ui-icon {modules.classAutorisation}"></span>{modules.label}</div><!-- END modules --></div></div></div>';this.infoCompteAdherentFin="</div></div>";this.listeOperationPassee='<div class="com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Solde : <span id="solde">{opeMontant} {sigleMonetaire}</span></div>	<div><div id="content-nav-liste-operation" class="ui-helper-clearfix ui-state-default ui-corner-all"><form>	<span id="icone-nav-liste-operation-w" class="prev ui-helper-hidden ui-state-default ui-corner-all com-button" ><span class="ui-icon ui-icon-circle-arrow-w"></span></span>	<span id="page-compteur">Page : <span type="text" class="pagedisplay"></span></span>	<span id="icone-nav-liste-operation-e" class="next ui-state-default ui-corner-all com-button" ><span class="ui-icon ui-icon-circle-arrow-e"></span></span>	<input type="hidden" class="pagesize" value="10"></form></div><table id="table-operation" class="com-table"><thead><tr class="ui-widget ui-widget-header" ><th class="com-table-th">Date</th><th class="com-table-th">Libellé</th><th class="com-table-th">Type de paiement</th><th class="com-table-th">Débit</th><th class="com-table-th">Crédit</th></tr></thead><tbody><!-- BEGIN operationPassee --><tr><td class="com-table-td td-date ">{operationPassee.opeDate}</td><td class="com-table-td td-libelle">{operationPassee.opeLibelle}</td><td class="com-table-td td-type-paiement">{operationPassee.tppType}</td><td class="com-table-td td-montant">{operationPassee.debit}</td><td class="com-table-td td-montant">{operationPassee.credit}</td></tr><!-- END operationPassee --></tbody></table></div></div>';this.listeOperationAdherentDebut='<div id="liste_operation_adherent_ext"><div id="liste_operation_adherent_int">';this.listeOperationAdherentFin="</div></div>";this.listeOperationAvenir='<div class="com-widget-window ui-widget ui-widget-content ui-widget-content-transparent ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Achat(s) Futur(s)</div><div><table class="com-table"><tr class="ui-widget ui-widget-header" ><th class="com-table-th">Réservation</th><th class="com-table-th">Libellé</th><th class="com-table-th">Marché</th><th class="com-table-th">Prix</th><th class="com-table-th">Solde</th><th class="com-table-th">Recharger</th></tr><!-- BEGIN operationAvenir --><tr><td class="com-table-td td-date">{operationAvenir.opeDate}</td><td class="com-table-td td-libelle ">{operationAvenir.opeLibelle}</td><td class="com-table-td td-date">{operationAvenir.comDateMarche}</td><td class="com-table-td td-montant">{operationAvenir.opeMontant}  {sigleMonetaire}</td><td class="com-table-td td-montant"><span class="nouveau-solde"><span class="nouveau-solde-val">{operationAvenir.nouveauSolde}</span>  {sigleMonetaire}</span></td><td class="com-table-td td-montant">{operationAvenir.rechargement}  {sigleMonetaire}</td></tr><!-- END operationAvenir --></table></div></div>'}function AjoutAdherentVue(a){this.construct=function(b){$.history({vue:function(){AjoutAdherentVue(b)}});this.afficher()};this.afficher=function(){var c=this;var b={adhDateAdhesion:getDateAujourdhuiDb().dateDbToFr()};var d=new GestionAdherentsTemplate();b.formCompte=d.formulaireCompteAjoutAdherent;var e=d.formulaireAjoutAdherent;$("#contenu").replaceWith(c.affect($(e.template(b))))};this.affect=function(b){b=this.boutonLienCompte(b);b=this.affectControleDatepicker(b);b=this.affectSubmit(b);b=this.affectChoixGenerationCompte(b);b=this.affectLienRetour(b);b=gCommunVue.comHoverBtn(b);b=gCommunVue.comNumeric(b);return b};this.affectLienRetour=function(b){b.find("#lien-retour").click(function(){ListeAdherentVue()});return b};this.affectChoixGenerationCompte=function(b){b.find('[name="choix_compte"]').change(function(){var c=$(this).val();if(c=="auto"){$("#choix_compte_liaison").hide();$("#label_compte_lier").hide().text("").attr("data-id-compte","")}else{$("#choix_compte_liaison, #label_compte_lier").show()}});return b};this.boutonLienCompte=function(b){var c=this;b.find("#choix_compte_liaison").click(function(){c.dialogListeAdherent()});return b};this.dialogListeAdherent=function(){var c=this;var b={fonction:"listeAdherent"};$.post("./index.php?m=GestionAdherents&v=AjoutAdherent","pParam="+$.toJSON(b),function(d){Infobulle.init();if(d){if(d.valid){var e=new GestionAdherentsTemplate();var f=e.dialogListeAdherent;$.each(d.listeAdherent,function(){this.adhIdTri=this.adhNumero.replace("Z","");this.cptIdTri=this.cptLabel.replace("C","")});$(c.affectDialoglisteAdherent($(f.template(d)))).dialog({autoOpen:true,modal:true,draggable:true,resizable:false,width:900,buttons:{Fermer:function(){$(this).dialog("close")}},close:function(g,h){$(this).remove();Infobulle.init()}})}else{Infobulle.generer(d,"")}}},"json")};this.affectDialoglisteAdherent=function(b){b=this.affectSelectCompte(b);b=this.affectTri(b);b=this.affectRecherche(b);return b};this.affectSelectCompte=function(b){b.find(".compte-ligne").click(function(){$("#label_compte_lier").text($(this).attr("data-label-compte")).attr("data-id-compte",$(this).attr("data-id-compte"));$("#dialog-liste-adherent").dialog("close")});return b};this.affectTri=function(b){b.find(".com-table").tablesorter({sortList:[[0,0]],headers:{4:{sorter:false}}});return b};this.affectRecherche=function(b){b.find("#filter").keyup(function(){$.uiTableFilter($(".com-table"),this.value)});b.find("#filter-form").submit(function(){return false});return b};this.affectControleDatepicker=function(b){b=gCommunVue.comLienDatepicker("dateNaissance","dateAdhesion",b);b.find("#dateNaissance").datepicker("option","yearRange","1900:c");b.find("#dateAdhesion").datepicker("option","yearRange","1900:c");return b};this.affectSubmit=function(b){var c=this;b.find("form").submit(function(){c.ajoutAdherent();return false});return b};this.ajoutAdherent=function(){var b=new AdherentVO();if($(":input[name=choix_compte]:checked").val()=="auto"){b.idCompte=0}else{b.idCompte=$("#label_compte_lier").attr("data-id-compte")}b.nom=$(":input[name=nom]").val();b.prenom=$(":input[name=prenom]").val();b.courrielPrincipal=$(":input[name=courriel_principal]").val();b.courrielSecondaire=$(":input[name=courriel_secondaire]").val();b.telephonePrincipal=$(":input[name=telephone_principal]").val();b.telephoneSecondaire=$(":input[name=telephone_secondaire]").val();b.adresse=$(":input[name=adresse]").val();b.codePostal=$(":input[name=code_postal]").val();b.ville=$(":input[name=ville]").val();b.dateNaissance=$(":input[name=date_naissance]").val().dateFrToDb();b.dateAdhesion=$(":input[name=date_adhesion]").val().dateFrToDb();b.commentaire=$(":input[name=commentaire]").val();b.fonction="ajouter";var c=new AdherentValid();var d=c.validAjout(b);if(d.valid){Infobulle.init();$.post("./index.php?m=GestionAdherents&v=AjoutAdherent","pParam="+$.toJSON(b),function(f){Infobulle.init();if(f){if(f.valid){var g=new Object();var e=new VRerreur();e.code=ERR_355_CODE;e.message=ERR_355_MSG;g.valid=false;g.log=new VRelement();g.log.valid=false;g.log.erreurs.push(e);CompteAdherentVue({id:f.id,vr:g})}else{Infobulle.generer(f,"")}}},"json")}else{Infobulle.generer(d,"")}};this.construct(a)}function CompteAdherentVue(a){this.mIdAdherent=null;this.mAdhNumero=null;this.construct=function(b){$.history({vue:function(){CompteAdherentVue(b)}});var c=this;b.fonction="afficher";$.post("./index.php?m=GestionAdherents&v=CompteAdherent","pParam="+$.toJSON(b),function(d){Infobulle.init();if(d){if(d.valid){if(b&&b.vr){Infobulle.generer(b.vr,"")}c.afficher(d)}else{Infobulle.generer(d,"")}}},"json")};this.afficher=function(f){var e=this;this.mIdAdherent=f.adherent.adhId;this.mAdhNumero=f.adherent.adhNumero;f.opeMontant=f.adherent.cptSolde.nombreFormate(2,","," ");f.sigleMonetaire=gSigleMonetaire;f.adherent.adhDateNaissance=f.adherent.adhDateNaissance.extractDbDate().dateDbToFr();f.adherent.adhDateAdhesion=f.adherent.adhDateAdhesion.extractDbDate().dateDbToFr();$(f.operationPassee).each(function(){this.opeDate=this.opeDate.extractDbDate().dateDbToFr();if(this.tppType==null){this.tppType=""}if(this.opeMontant<0){this.debit=(this.opeMontant*-1).nombreFormate(2,","," ")+" "+gSigleMonetaire;this.credit=""}else{this.debit="";this.credit=this.opeMontant.nombreFormate(2,","," ")+" "+gSigleMonetaire}});var d=parseFloat(f.adherent.cptSolde);var c=0;$(f.operationAvenir).each(function(){if(this.opeDate!=null){d+=parseFloat(this.opeMontant);this.nouveauSolde=d.nombreFormate(2,","," ");this.rechargement=(0).nombreFormate(2,","," ");var i=5;if(d<i){this.rechargement=(Math.ceil((i-d)/i)*i)-c}c+=this.rechargement;this.rechargement=this.rechargement.nombreFormate(2,","," ");this.opeDate=this.opeDate.extractDbDate().dateDbToFr();this.comDateMarche=this.comDateMarche.extractDbDate().dateDbToFr();this.opeMontant=(this.opeMontant*-1).nombreFormate(2,","," ")}});$(f.modules).each(function(){var i=this;this.classAutorisation="ui-icon-closethick";$(f.autorisations).each(function(){if(this.idModule==i.id){i.classAutorisation="ui-icon-check"}})});var g=new GestionAdherentsTemplate();var h=new CommunTemplate();var b=h.debutContenu;b+=g.infoCompteAdherentDebut.template(f.adherent);b+=g.infoCompteAdherentAutorisation.template(f);b+=g.infoCompteAdherentFin.template(f);b+=g.listeOperationAdherentDebut.template(f);b+=g.listeOperationPassee.template(f);if(isArray(f.operationAvenir)&&f.operationAvenir[0].opeLibelle!=null){b+=g.listeOperationAvenir.template(f)}b+=g.listeOperationAdherentFin.template(f);b+=h.finContenu;b=$(b);if(f.adherent.cptSolde<0){b=this.soldeNegatif(b)}if(f.operationPassee.length<11){b=this.masquerPagination(b)}else{b=this.paginnation(b)}$("#contenu").replaceWith(e.affect(b))};this.affect=function(b){b=this.nouveauSoldeNegatif(b);b=this.affectHover(b);b=this.affectLienModifier(b);b=this.affectDialogSuppAdherent(b);b=this.affectRetour(b);b=gCommunVue.comHoverBtn(b);return b};this.paginnation=function(b){b.find("#table-operation").tablesorter({headers:{0:{sorter:false},1:{sorter:false},2:{sorter:false},3:{sorter:false},4:{sorter:false}}}).tablesorterPager({container:b.find("#content-nav-liste-operation"),positionFixed:false});return b};this.nouveauSoldeNegatif=function(b){b.find(".nouveau-solde-val").each(function(){if(parseFloat($(this).text().numberFrToDb())<0){$(this).closest(".nouveau-solde").addClass("com-nombre-negatif")}});return b};this.soldeNegatif=function(b){b.find("#solde").addClass("com-nombre-negatif");return b};this.affectHover=function(b){b.find("#icone-nav-liste-operation-w,#icone-nav-liste-operation-e").hover(function(){$(this).addClass("ui-state-hover")},function(){$(this).removeClass("ui-state-hover")});return b};this.masquerPagination=function(b){b.find("#content-nav-liste-operation").hide();return b};this.affectLienModifier=function(b){var c=this;b.find("#btn-edt").click(function(){ModificationAdherentVue({id:c.mIdAdherent})});return b};this.affectDialogSuppAdherent=function(b){var c=this;b.find("#btn-supp").click(function(){var d=new GestionAdherentsTemplate();var e=d.dialogSuppressionAdherent;$(e.template({adhNumero:c.mAdhNumero})).dialog({autoOpen:true,modal:true,draggable:false,resizable:false,width:600,buttons:{Supprimer:function(){var f=new AdherentVO();f.id=c.mIdAdherent;f.fonction="supprimer";var g=new AdherentValid();var i=g.validDelete(f);var h=this;if(i.valid){Infobulle.init();$.post("./index.php?m=GestionAdherents&v=SuppressionAdherent","pParam="+$.toJSON(f),function(k){Infobulle.init();if(k){if(k.valid){var l=new Object();var j=new VRerreur();j.code=ERR_357_CODE;j.message=ERR_357_MSG;l.valid=false;l.log=new VRelement();l.log.valid=false;l.log.erreurs.push(j);ListeAdherentVue({vr:l});$(h).dialog("close")}else{Infobulle.generer(k,"")}}},"json")}else{Infobulle.generer(i,"")}},Annuler:function(){$(this).dialog("close")}},close:function(f,g){$(this).remove()}})});return b};this.affectRetour=function(b){b.find("#lien-retour").click(function(){ListeAdherentVue()});return b};this.construct(a)}function ListeAdherentVue(a){this.construct=function(c){$.history({vue:function(){ListeAdherentVue(c)}});var d=this;var b={fonction:"afficher"};$.post("./index.php?m=GestionAdherents&v=ListeAdherent","pParam="+$.toJSON(b),function(e){Infobulle.init();if(e){if(e.valid){if(c&&c.vr){Infobulle.generer(c.vr,"")}d.afficher(e)}else{Infobulle.generer(e,"")}}},"json")};this.afficher=function(c){var b=this;var d=new GestionAdherentsTemplate();if(c.listeAdherent.length>0&&c.listeAdherent[0].adhId!=null){var e=d.listeAdherent;c.sigleMonetaire=gSigleMonetaire;$(c.listeAdherent).each(function(){this.classSolde="";if(this.cptSolde<0){this.classSolde="com-nombre-negatif"}this.cptSolde=this.cptSolde.nombreFormate(2,","," ");this.adhIdTri=this.adhNumero.replace("Z","");this.cptIdTri=this.cptLabel.replace("C","")});if(c.listeAdherent.length==1){c.totalAdherent="L'adhérent"}else{c.totalAdherent="Les "+c.listeAdherent.length+" adhérents"}$("#contenu").replaceWith(b.affect($(e.template(c))))}else{$("#contenu").replaceWith(b.affect($(d.listeAdherentVide)))}};this.affect=function(b){b=this.affectTri(b);b=this.affectRecherche(b);b=this.affectLienCompte(b);b=this.affectAjoutAdherent(b);return b};this.affectAjoutAdherent=function(b){b.find("#btn-nv-adherent").click(function(){AjoutAdherentVue()});return b};this.affectTri=function(b){b.find(".com-table").tablesorter({sortList:[[0,0]],headers:{5:{sorter:false}}});return b};this.affectRecherche=function(b){b.find("#filter").keyup(function(){$.uiTableFilter($(".com-table"),this.value)});b.find("#filter-form").submit(function(){return false});return b};this.affectLienCompte=function(b){b.find(".compte-ligne").click(function(){CompteAdherentVue({id:$(this).attr("id-adherent")})});return b};this.construct(a)}function ModificationAdherentVue(a){this.mIdAdherent=null;this.mIdCompte=null;this.construct=function(b){$.history({vue:function(){ModificationAdherentVue(b)}});var c=this;b.fonction="afficher";$.post("./index.php?m=GestionAdherents&v=ModificationAdherent","pParam="+$.toJSON(b),function(d){Infobulle.init();if(d){if(d.valid){if(b&&b.vr){Infobulle.generer(b.vr,"")}c.mIdAdherent=b.id;c.mIdCompte=d.adherent.adhIdCompte;c.afficher(d)}else{Infobulle.generer(d,"")}}},"json")};this.afficher=function(d){var c=this;var b=d.adherent;b.adhDateAdhesion=d.adherent.adhDateAdhesion.extractDbDate().dateDbToFr();b.adhDateNaissance=d.adherent.adhDateNaissance.extractDbDate().dateDbToFr();b.modules=d.modules;$(d.autorisations).each(function(){var g=this.idModule;$(b.modules).each(function(){if(this.id==g){this.checked='checked="checked"'}})});var e=new GestionAdherentsTemplate();b.formCompte=e.formulaireCompteModificationAdherent.template(b);b.autorisation=e.formulaireAutorisationAdherent.template(b);var f=e.formulaireAjoutAdherent;$("#contenu").replaceWith(c.affect($(f.template(b))))};this.affect=function(b){b=this.boutonLienCompte(b);b=this.affectControleDatepicker(b);b=this.affectSubmit(b);b=this.affectRetour(b);b=this.toggleAutorisation(b);b=this.affectChoixGenerationCompte(b);b=gCommunVue.comNumeric(b);b=gCommunVue.comHoverBtn(b);return b};this.affectChoixGenerationCompte=function(b){b.find('[name="choix_compte"]').change(function(){var c=$(this).val();if(c=="lier"){$("#choix_compte_liaison, #label_compte_lier").show()}else{$("#choix_compte_liaison").hide();$("#label_compte_lier").hide().text("").attr("data-id-compte","")}});return b};this.boutonLienCompte=function(b){var c=this;b.find("#choix_compte_liaison").click(function(){c.dialogListeAdherent()});return b};this.dialogListeAdherent=function(){var c=this;var b={fonction:"listeAdherent"};$.post("./index.php?m=GestionAdherents&v=AjoutAdherent","pParam="+$.toJSON(b),function(d){Infobulle.init();if(d){if(d.valid){var e=new GestionAdherentsTemplate();var f=e.dialogListeAdherent;$.each(d.listeAdherent,function(){this.adhIdTri=this.adhNumero.replace("Z","");this.cptIdTri=this.cptLabel.replace("C","")});$(c.affectDialoglisteAdherent($(f.template(d)))).dialog({autoOpen:true,modal:true,draggable:true,resizable:false,width:900,buttons:{Fermer:function(){$(this).dialog("close")}},close:function(g,h){$(this).remove();Infobulle.init()}})}else{Infobulle.generer(d,"")}}},"json")};this.affectDialoglisteAdherent=function(b){b=this.affectSelectCompte(b);b=this.affectTri(b);b=this.affectRecherche(b);return b};this.affectSelectCompte=function(b){b.find(".compte-ligne").click(function(){$("#label_compte_lier").text($(this).attr("data-label-compte")).attr("data-id-compte",$(this).attr("data-id-compte"));$("#dialog-liste-adherent").dialog("close")});return b};this.affectTri=function(b){b.find(".com-table").tablesorter({sortList:[[0,0]],headers:{4:{sorter:false}}});return b};this.affectRecherche=function(b){b.find("#filter").keyup(function(){$.uiTableFilter($(".com-table"),this.value)});b.find("#filter-form").submit(function(){return false});return b};this.toggleAutorisation=function(b){b.find("#formulaire-modifier-adherent-table-autorisation").hide();b.find("#btn-toggle-autorisation").click(function(){$(this).find("span").toggleClass("ui-icon-triangle-1-s").toggleClass("ui-icon-triangle-1-n");$("#formulaire-modifier-adherent-table-autorisation").toggle()});return b};this.affectControleDatepicker=function(b){b=gCommunVue.comLienDatepicker("dateNaissance","dateAdhesion",b);b.find("#dateNaissance").datepicker("option","yearRange","1900:c");b.find("#dateAdhesion").datepicker("option","yearRange","1900:c");return b};this.affectSubmit=function(b){var c=this;b.find("form").submit(function(){c.modifAdherent();return false});return b};this.modifAdherent=function(){var b=new AdherentVO();b.id=this.mIdAdherent;var d=$(":input[name=choix_compte]:checked").val();if(d=="actuel"){b.idCompte=this.mIdCompte}else{if(d=="auto"){b.idCompte=0}else{b.idCompte=$("#label_compte_lier").attr("data-id-compte")}}b.nom=$(":input[name=nom]").val();b.prenom=$(":input[name=prenom]").val();b.courrielPrincipal=$(":input[name=courriel_principal]").val();b.courrielSecondaire=$(":input[name=courriel_secondaire]").val();b.telephonePrincipal=$(":input[name=telephone_principal]").val();b.telephoneSecondaire=$(":input[name=telephone_secondaire]").val();b.adresse=$(":input[name=adresse]").val();b.codePostal=$(":input[name=code_postal]").val();b.ville=$(":input[name=ville]").val();b.dateNaissance=$(":input[name=date_naissance]").val().dateFrToDb();b.dateAdhesion=$(":input[name=date_adhesion]").val().dateFrToDb();b.commentaire=$(":input[name=commentaire]").val();$(":input[name=modules[]]:checked").each(function(){b.modules.push($(this).val())});var c=new AdherentValid();var e=c.validUpdate(b);if(e.valid){Infobulle.init();b.fonction="modifier";$.post("./index.php?m=GestionAdherents&v=ModificationAdherent","pParam="+$.toJSON(b),function(g){Infobulle.init();if(g){if(g.valid){var h=new Object();var f=new VRerreur();f.code=ERR_356_CODE;f.message=ERR_356_MSG;h.valid=false;h.log=new VRelement();h.log.valid=false;h.log.erreurs.push(f);CompteAdherentVue({id:g.id,vr:h})}else{Infobulle.generer(g,"")}}},"json")}else{Infobulle.generer(e,"")}};this.affectRetour=function(b){var c=this;b.find("#lien-retour").click(function(){CompteAdherentVue({id:c.mIdAdherent})});return b};this.construct(a)};