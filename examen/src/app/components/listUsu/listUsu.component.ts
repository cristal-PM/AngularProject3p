import { Component, OnInit } from '@angular/core';
import { ServicioUsuario } from 'src/app/Servicio/usuario.service';
@Component({
  providers : [ServicioUsuario],
  selector: 'app-listUsu',
  templateUrl: './listUsu.component.html',
  styleUrls: ['./listUsu.component.css']
})
export class ListUsuComponent implements OnInit {
 public  datos: any=[];
  
  constructor(public usuServicio : ServicioUsuario) { 
    
  }

  ngOnInit(): void {
    this.usuServicio.getUserList().subscribe({
      next : (r : any) => {
        
      
        this.datos=r;
        
        this.datos = Array.of(this.datos);
      console.log(this.datos); },
      error : (e:any) => {
        console.log(e);
      },
      complete : () =>  {
        console.log("Request completed!")
      },
    });
  }
 
}
