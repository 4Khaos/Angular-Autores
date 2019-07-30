import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { ApiService } from '../api.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() autor: string;
  public libros : Array<Libro>;
  public autores = [];

  @Output() messageEvent = new EventEmitter<string[]>();

  constructor(private api : ApiService) {
      console.log ('libros:');
      //console.log( api.getLibros() );

  }

  ngOnInit() {
    /*
    this.libros = [
    {autor: 'Mario Mendoza',
    nombre: 'Satanás',
    fecha: new Date()},
    {autor: 'Hector Abad',
    nombre: 'Memoria de mis putas tristes',
    fecha: new Date()},
    {autor: 'Gabriel Garcia Marques',
    nombre: 'Cien años de soledad',
    fecha: new Date()}
  ]*/
  this.getLibros();
  }
  getLibros()
  {
    this.api.getLibros().subscribe((libros: Array<Libro>) =>{
      this.libros = libros;
      for ( let i in this.libros )
      {
        this.autores.push(libros[i].autor);
      }
      this.sendMessage();
    });
  }

  sendMessage() {
    console.log("Estoy enviando el mensaje");
    console.log(this.autores);
    this.messageEvent.emit(this.autores);
  }
}
