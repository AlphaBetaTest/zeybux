insert into dfac_detail_facture
select
sto_id_operation, 
pro_id_nom_produit,
sto_id,
dope_id,
0
from ope_operation 
join sto_stock on ope_id = sto_id_operation AND sto_type = 4
join dope_detail_operation on dope_id_operation = sto_id_operation
join dcom_detail_commande on sto_id_detail_commande = dcom_id
join pro_produit on dcom_id_produit = pro_id
where  ope_type_paiement = 6;

insert into dfac_detail_facture
select
sto_id_operation, 
pro_id_nom_produit,
0,
0,
sto_id
from ope_operation 
join sto_stock on ope_id = sto_id_operation AND sto_type = 2
join dcom_detail_commande on sto_id_detail_commande = dcom_id
join pro_produit on dcom_id_produit = pro_id
where  ope_type_paiement = 6;