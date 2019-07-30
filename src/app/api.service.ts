import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from './interfaces/libro';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private librosUrl = 'https://demolibros-lean-llama.mybluemix.net';


  constructor(private http: HttpClient) { }

  getLibros(): Observable<Array<Libro>> {

    console.log("Entre al servicio");
    console.log(this.librosUrl + '/libros');
    return this.http.get<Array<Libro>>(this.librosUrl + '/libros');
  }

  postLibro(libro : Libro) {
    return this.http.post<Libro>(this.librosUrl + '/addLibro', libro);

  }
}
