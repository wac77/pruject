import { Injectable } from '@angular/core';
import { Villano } from '../components/shared/interfaces/villano.interface';

@Injectable()
export class VillanosService{

    private villanos: Villano[] = [
        {
            nombre: "Thanos",
            bio: "Es uno de los villanos más poderosos de todo el Universo Marvel,  Fuerza, velocidad, agilidad, durabilidad y resistencia sobrehumana.",
            img: "assets/img/thanos.png",
            aparicion: "1973-02-01",
            casa:"Marvel"
        },
        {
            nombre: "Ultron",
            bio: "Es un supervillano tecnológico que no se parece a ningún otro. Ultrón es aterrador y fruto de un programa piloto dañado.",
            img: "assets/img/ultron.png",
            aparicion: "1963-07-01",
            casa:"Marvel"
        },
        {
            nombre: "Lex Luthor",
            bio: "Lex Luthor era originalmente un científico loco, pero desde finales de la década de 1980, ha sido retratado más a menudo como un magnate de los negocios loco por el poder.",
            img: "assets/img/luthor.png",
            aparicion: "1940-01-01",
            casa: "DC"
        }
      ];

    constructor(){
        console.log("servicio arriba");
    }

    getVillanos(): Villano[]{
        return this.villanos
    }
    getVillano(idx: string){
       return this.villanos[idx]; 
    }

    buscarVillanos(termino: string):Villano[]{
    
        let villanosArr: Villano[] = [];
        termino = termino.toLowerCase();
    
        for (let index = 0; index < this.villanos.length; index++) {
          
          let villano = this.villanos[index];
    
          let nombre = villano.nombre.toLowerCase();
    
           // batman  == b
          if (nombre.indexOf(termino) >= 0) {
            villano.idx = index;
            villanosArr.push(villano);
          }
          
        }
        return villanosArr;
      }
}