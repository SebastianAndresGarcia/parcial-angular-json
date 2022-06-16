import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { vehiculo } from 'src/modelo/vehiculo';
import  * as data from 'autos.json';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServvehiculoService {

  //  instrumentosFile: any = (data as any).default;
  public vehiculosData: vehiculo[] = [];
  public vehiculoencontrado: vehiculo = new vehiculo();
  vehiculosFile: any = (data as any).default;

  constructor() {
    console.log("Servicio Cargado!!!");
    console.log(this.vehiculosFile);
  }
  public getVehiculos(): any[] {
    console.log(this.vehiculosFile);
    return this.vehiculosFile;
    
  }


  public getVehiculoXId(idimagen:string):any{
      for(let vehiculo of this.vehiculosFile){
          if(vehiculo.imagen == idimagen){
            return vehiculo;
          }
      }
  }

  public buscarvehiculos(termino: string): any[] {
    let vehiculosArr: any[] = [];
    termino = termino.toLowerCase();
    for (let auto of this.vehiculosFile) {
      let modelo = auto.modelo.toLowerCase();
      let marca = auto.marca.toLowerCase();
      if (modelo.indexOf(termino) >= 0 || marca.indexOf(termino )>=0) {
        vehiculosArr.push(auto);
      }
    }
    return vehiculosArr;
  }
  
 /*
  //lee todos los instrumentos
  getInstrumentos():any {
    return this.http.get("http://localhost:3001/instrumentos").pipe(
      map(instrumentosData => instrumentosData));
  }
  //busca un instrumento por el id
  getInstrumentoXIdFecth(idx: string):any {
    return this.http.get("http://localhost:3001/instrumentos/" + idx).pipe(
      map(instrumentoencontrado => instrumentoencontrado));
  }
  
  async deleteInstrumento(idinstrumento: number){
    let urlServer = 'http://localhost:3001/eliminarInstrumento/'+idinstrumento;
    console.log(urlServer);
    let result = await fetch(urlServer, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        mode: 'cors'
    });
  }
  async guardarInstrumento(ins:instrumento){
    let urlServer = 'http://localhost:3001/crearInstrumento/';
    let method:string= 'POST';
    if(ins.id!==0){
    urlServer = 'http://localhost:3001/actualizarInstrumento/'+ins.id;
    method = 'PUT';
    }
    await fetch(urlServer, { 
      "method": method,
      "body": JSON.stringify(ins),
      "headers": {
        "Content-type": 'application/json'
      },
      mode:'cors'
    });
  } */


  
}
