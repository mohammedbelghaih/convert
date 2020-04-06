function dollar(){

    let nu=parseFloat(document.getElementById('priceFr').value);
    let deviseCh=document.getElementById('deviseTo');
    let optText=deviseCh.options[deviseCh.selectedIndex].text;
    if(optText=='euro'){
        document.getElementById('priceTo').value=nu*0.9;
    }
    else if(optText=="MAD"){
        document.getElementById('priceTo').value=nu*10.03;
    }

  }
function euro(){

    let nu=parseFloat(document.getElementById('priceFr').value);
    let deviseCh=document.getElementById('deviseTo');
    let optText=deviseCh.options[deviseCh.selectedIndex].text;
    if(optText=='MAD'){
        document.getElementById('priceTo').value=nu*11.12;
    }
    else if(optText=="dollar"){
        document.getElementById('priceTo').value=nu*1.08;
    }


}

function MAD(){
    let deviseCh=document.getElementById('deviseTo');
    let optText=deviseCh.options[deviseCh.selectedIndex].text;

  let nu=parseFloat(document.getElementById('priceFr').value);

  if(optText=='euro'){
    document.getElementById('priceTo').value=nu*0.08;
}
else if (optText=="dollar"){
    document.getElementById('priceTo').value=nu*0.097;
}



}
function chooseDevise(){
    let deviseCh=document.getElementById('deviseFrom');
    let optTex=deviseCh.options[deviseCh.selectedIndex].text;
    if(optTex=='MAD'){
        MAD();
    }
    else  if(optTex=='euro'){
         euro();
    }
    else if (optTex=='dollar'){
     dollar();
    }
}
