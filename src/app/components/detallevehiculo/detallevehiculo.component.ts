import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServvehiculoService } from 'src/app/servicio/servvehiculo.service';
import { vehiculo } from 'src/modelo/vehiculo';

@Component({
  selector: 'app-detallevehiculo',
  templateUrl: './detallevehiculo.component.html',
  styleUrls: ['./detallevehiculo.component.css']
})
export class DetallevehiculoComponent implements OnInit {

  auto: vehiculo=new vehiculo();
  constructor(private servvehiculo: ServvehiculoService, private router:Router, private activatedRoute: ActivatedRoute) {

    //console.log("ID PARAM " + this.activatedRoute.params['id']);
    this.activatedRoute.params.subscribe(params => {
      console.log(params['idimagen'])
      this.auto = this.servvehiculo.getVehiculoXId(params['idimagen'])
      
    })
  }

  ngOnInit(): void {
    
  }
}
