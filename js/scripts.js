/*!
* Start Bootstrap - Business Casual v7.0.3 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page

class personal {
    constructor (edad, birthday, idiomas, padre, madre){
        this.edad=edad;
        this.birthday=birthday;
        this.idiomas=idiomas;
        this.padre=padre;
        this.madre=madre;
    }
}

class hobbies{
    constructor(bandaFavorita,vjFavorito,equipoFut,equipoBas,equipoAme){
        this.bandaFavorita=bandaFavorita;
        this.vjFavorito=vjFavorito;
        this.equipoFut=equipoFut;
        this.equipoBas=equipoBas;
        this.equipoAme=equipoAme;
    }
}

class trabajo{
    constructor(customerService,roadside,techSupport){
        this.customerService=customerService;
        this.roadside=roadside;
        this.techSupport=techSupport;
    }
}
const pers=new personal("25","15 de agosto","Español e ingles nativo","Fidel Duran", "Teresa Rocha");

function imprimirPersonal(){
  
    document.getElementById("edad").innerHTML="Edad: " + pers.edad;
    document.getElementById("birhtday").innerHTML="Cumpleaños: "+pers.birthday;
    document.getElementById("idiomas").innerHTML="Idiomas: "+pers.idiomas;
    document.getElementById("padre").innerHTML="Padre: "+pers.padre;
    document.getElementById("madre").innerHTML="Madre: "+pers.madre;
}

const hob=new hobbies("Shinedown","Mass Effect","Chivas","Lakers","Raiders");

function imprimirHobbies(){
    document.getElementById("banda").innerHTML="Banda favorita: " + hob.bandaFavorita;
    document.getElementById("vjFavorito").innerHTML="Videojuego favorito: " + hob.vjFavorito;
    document.getElementById("equipoFut").innerHTML="Equipo favorito de futbol: " + hob.equipoFut;
    document.getElementById("equipoBas").innerHTML="Equipo de favorito basquetbol: " + hob.equipoBas;
    document.getElementById("equipoAme").innerHTML="Equipo favorito de futbol americano: " + hob.equipoAme;
}

const work=new trabajo("Bitesquad!","Allstate","Charter Communications");

function imprimirTrabajo(){
    document.getElementById("cs").innerHTML="Empresa de customer service: "+work.customerService;
    document.getElementById("rs").innerHTML="Empresa de roadside service: "+work.roadside;
    document.getElementById("ts").innerHTML="Empresa de techsupport: "+work.techSupport;
}