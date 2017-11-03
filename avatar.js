function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifPseudo(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMessage(champ)
{
   if(champ.value.length < 2 || champ.value.length >300)
   {
      surligne(champ, true);
      return false;
   }

   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)

{

   var pseudoOk = verifPseudo(f.pseudo);
   var mailOk = verifMail(f.mail);
   var lemessageOk = verifMessage(f.lemessage);

   if(pseudoOk && mailOk && lemessageOk)
   {
    alert("C'est bon");
      return true;
   }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}