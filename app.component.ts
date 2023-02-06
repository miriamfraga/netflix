import { Component } from '@angular/core';
import { Ifilms} from './models/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'netflix-app';
    public accionFilms: Ifilms[];
    public animeFilms: Ifilms[];
    public dramaFilms: Ifilms[];
    public top5: Ifilms[];
    public wordAnime: string;
    public wordAction: string;
    public wordDrama: string;


      constructor () {
        this.wordAction = "Para desconectar un rato";
        this.wordAnime = "Anime: Amantes de la ilustración y la cultura asiática";
        this.wordDrama = "Un poco de intensidad";
        this.top5 = [
          {
            gender: "Acción",
            tit: "La Casa de Papel",
            imagen: { 
            src: "./assets/1-papel.webp",
            alt: "Casa de Papel"
           }},
           {
              gender: "Acción",
              tit: "La Reina del Flow",
              imagen: { 
              src: "./assets/2-reina.webp",
              alt: "La Reina del Flow"
             }},
             {
              gender: "Drama",
              tit: "Blacklist",
              imagen: { 
              src: "./assets/7-blacklist.webp",
              alt: "Blacklist"
             }},
             {
              gender: "Comedia",
              tit: "Good Doctor",
              imagen: { 
              src: "./assets/10-gooddoctor.webp",
              alt: "Good Doctor"
             }},
             {
              gender: "Drama y Acción",
              tit: "El Poder del Perro",
              imagen: { 
              src: "./assets/9-poder.webp",
              alt: "El Poder del Perro"
             }},
             
             
        ]
        this.accionFilms = [
      {
        gender: "Acción",
        tit: "El Protector",
        imagen: { 
        src: "./assets/elprotector.webp",
        alt: "El Protector"
       }},
       {
        gender: "Acción",
        tit: "Equalizer 2",
        imagen: { 
        src: "./assets/equalizer2.webp",
        alt: "Equalizer 2"
       }},
       {
        gender: "Acción",
        tit: "Heat",
        imagen: { 
        src: "./assets/heat.webp",
        alt: "Heat"
       }},
       {
        gender: "Acción",
        tit: "Jack Reacher",
        imagen: { 
        src: "./assets/jackreacher.webp",
        alt: "Jack Reacher"
       }},
       {
        gender: "Acción",
        tit: "John Wick 2",
        imagen: { 
        src: "./assets/johnwick2.webp",
        alt: "John Wick 2"
       }},
       {
        gender: "Acción",
        tit: "Kill Bill 2",
        imagen: { 
        src: "./assets/killbill2.webp",
        alt: "Kill Bill 2"
       }},
       {
        gender: "Acción",
        tit: "Renacido",
        imagen: { 
        src: "./assets/renacido.webp",
        alt: "Renacido"
       }},
       {
        gender: "Acción",
        tit: "Terminator 2",
        imagen: { 
        src: "./assets/terminator2.webp",
        alt: "Terminator 2"
       }},
       { 
        gender: "Acción",
        tit: "El Ejército de los Muertos",
        imagen: {
        src: "./assets/ejercitomuertos.jpg",
        alt: "El ejército de los muertos"
      }},
       {
        gender: "Acción",
        tit: "World Warz",
        imagen: { 
        src: "./assets/worldwarz.webp",
        alt: "World Warz"
       }},
                           
     ]
     this.animeFilms = [ 

       {
        gender: "Anime",
        tit: "El Castillo Ambulante",
        imagen: { 
        src: "./assets/castilloambulante.webp",
        alt: "El Castillo Ambulante"
       }},
  
      {
        gender: "Anime",
        tit: "El Viaje de Chihiro",
        imagen: {
        src: "./assets/chihiro.webp",
        alt: "Chihiro"
       }},
    
        { 
      
        gender: "Anime",
        tit: "Ajin",
        imagen: {
        src: "./assets/ajin.jpg",
        alt: "Ajin"
      }},

  { 
      
        gender: "Anime",
        tit: "Gundam",
        imagen: {
        src: "./assets/gundam.webp",
        alt: "Gundam"
       }},
    { 
     
       gender: "Anime",
       tit: "Perfect Blue",
       imagen: {
       src: "./assets/perfectblue.webp",
       alt: "Perfect Blue"
       }},
  
    { 
      
        gender: "Anime",
        tit: "Ninokuni",
        imagen: {
        src: "./assets/ninokuni.jpg",
        alt: "Ninokuni"
    }},
 
    { 
      
      gender: "Anime",
      tit: "La Princesa Mononoke",
      imagen: {
      src: "./assets/mononoke.webp",
      alt: "La Princesa Mononoke"
    }},
  
    { 
    
      gender: "Anime",
      tit: "Porcorosso",
      imagen: {
      src: "./assets/porcorosso.webp",
      alt: "Porcorosso"
    }}
     ]
     this.dramaFilms = [ 
      {
       gender: "Drama",
       tit: "La Lista de Schindler",
       imagen: { 
       src: "./assets/schindler.webp",
       alt: "La lista de Schindler"
      }},
      {
        gender: "Drama",
        tit: "Scarface",
        imagen: { 
        src: "./assets/scarface.webp",
        alt: "Scarface"
       }},
       {
        gender: "Drama",
        tit: "Naúfrago",
        imagen: { 
        src: "./assets/naufrago.webp",
        alt: "Naufrago"
       }},
       {
        gender: "Drama",
        tit: "La Milla Verde",
        imagen: { 
        src: "./assets/millaverde.webp",
        alt: "La Milla Verde"
       }},
       {
        gender: "Drama",
        tit: "1917",
        imagen: { 
        src: "./assets/1917.webp",
        alt: "1917"
       }},
       {
        gender: "Drama",
        tit: "El Club de la Lucha",
        imagen: { 
        src: "./assets/clublucha.webp",
        alt: "El Club de la Lucha"
       }},
       {
        gender: "Drama",
        tit: "Corazones",
        imagen: { 
        src: "./assets/corazones.webp",
        alt: "Corazones"
       }},
]}
};