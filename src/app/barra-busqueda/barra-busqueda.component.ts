import { Component, OnInit } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  public autores: Array<string>;
  public selectedAutor: string;
  public nLibro: Libro;
  constructor(private api : ApiService) {
    this.autores = ['Mario Mendoza', 'Hector Abad', 'Gabriel Garcia Marques', 'George R. R. Martin'];
    this.nLibro = { autor: "", nombre: "", fecha: new Date() };
  }

  ngOnInit() {
  }

  onSelect(autor: string)
  {
    console.log(autor);
    this.selectedAutor = autor;
  }

  guardarLibro(infoLibro: string)
  {
    var prelib = infoLibro.split("-");
    this.nLibro.autor = prelib[0];
    this.nLibro.nombre = prelib[1];
    console.log(this.nLibro);
    this.api.postLibro(this.nLibro).subscribe(
      res=> {
        console.log(res);
      },
      err => {
        console.log("Algo anda mal");
      }
    );
  }

  receiveMessage($event) {
    this.autores = $event
  }

}
