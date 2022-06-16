import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServvehiculoService } from 'src/app/servicio/servvehiculo.service';
import { vehiculo } from 'src/modelo/vehiculo';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  vehiculosArr:any[] = [];
  
  //al instanciar el componente se llama al servicio
  constructor(private servvehiculo: ServvehiculoService, private router:Router) { }

  ngOnInit(): void {
    this.vehiculosArr = this.servvehiculo.getVehiculos(); 
    console.log(this.vehiculosArr);
  }
  public detalleVehiculo(idimagen:string){
    this.router.navigate(['/detallevehiculo', idimagen]) 
  }

}
