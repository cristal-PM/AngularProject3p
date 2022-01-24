import { Component, OnInit } from '@angular/core';
import { articulo  } from 'src/app/models/articulo';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl,Validators }from '@angular/forms';
import { debounceTime } from 'rxjs/operators'; 
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public art : Array<articulo>;
  public departamento : Array<string>;
  public nomDepartamento : string;
  public nomA : string;
  public desA : string;
  public depA : string;
  public pu   : string;
  
  //form: FormGroup;
  
  constructor(
    private route : ActivatedRoute,
    private router : Router) { 
    this.art = [
      new articulo("Cortina 3p","Cortina oscura","hogar",120,"null"),
      new articulo("Leche Almendras GV","leche natural eventual","Lacteos",35,"null"),
      new articulo("Cereal chocko","Cereal de chocolate","Abarrotes",18,"null"),
      new articulo("Toalla 2p","Toalla extensa","Hogar",100,"null")
    ];
    this.departamento = [];
    this.nomDepartamento = "";
    this.nomA="";
    this.desA=" ";
    this.depA="";
    this.pu="";
    this.route.params.subscribe((params : Params) => {
      console.log(params["lang"]);
      console.log(params["duration"]);

      if(params["lang"] == "HOME")
        this.router.navigate(["/home"]);
    });
    //this.consForm();
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.getdepa()
    },1000);
    console.log("OnInit executed!");
  }
  agregarD() {
    this.addDepa(this.nomDepartamento);
  }
  addDepa(depa : string) {
    if(this.departamento.indexOf(depa)<0)
        this.departamento.push(depa);
  }
  agregarA() {
    var numberValue = Number(this.pu);
    this.addArt(new articulo(this.nomA,this.desA,this.depA,numberValue,""));
  }
  addArt(arti : articulo) {
        this.art.push(arti);
  }
  getdepa() {
    this.art.forEach((articulo) => {
      this.addDepa(articulo.departamento)
    });
}
enter(array? : Array<string>) {
  if (array !== undefined)
    this.addDepa(this.nomDepartamento)
}
eliminarD(index : number) {
  this.departamento.splice(index, 1);
}
irHome() {
  this.router.navigate(["/home"]);
}}

