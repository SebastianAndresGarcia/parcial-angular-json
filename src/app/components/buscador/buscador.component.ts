import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServvehiculoService } from 'src/app/servicio/servvehiculo.service'; 
import { vehiculo } from 'src/modelo/vehiculo';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  vehiculosArr:vehiculo[] = [];
  termino:string | undefined

  constructor(private servvehiculo: ServvehiculoService, private router:Router, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.vehiculosArr = this.servvehiculo.buscarvehiculos(params['termino']);
    });
  }
  public detalleVehiculo(idimagen:string){
    this.router.navigate(['/detallevehiculo', idimagen]) 
  }

}
