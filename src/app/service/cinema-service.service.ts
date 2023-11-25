import { Ville } from './../common/ville';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Cinema } from '../common/cinema';
import { Salle } from '../common/salle';
import { Projection } from '../common/projection';

@Injectable({
  providedIn: 'root'
})

export class CinemaServiceService {
  private url ='http://localhost:8080/';

  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  


  getVilles():Observable<getResponseville>{
    const url=`${this.url}villes`;
    return this.http.get<getResponseville>(url);
  }

  getlistcinema(id:number):Observable<getResponsecinema>{
    const url= `${this.url}villes/${id}/cinemaList`;
    return this.http.get<getResponsecinema>(url);
  }

  getsalles(id:Number):Observable<getResponsesalle>{
    const url=`http://localhost:8080/cinemas/${id}/salles`;
    return this.http.get<getResponsesalle>(url);
  }
  
  getProjection(id:number):Observable<getResponseprojection>{
    const url=`http://localhost:8080/salles/${id}/projectionFilmList?projection=p1`;
    return this.http.get<getResponseprojection>(url);
  }
  
 
}

interface getResponseville{
  _embedded:{
    villes:Ville[];
  }

}

interface getResponsecinema{
  _embedded:{
    cinemas:Cinema[];
  }
}

interface getResponsesalle{
  _embedded:{
    salles:Salle[];
  }

}

interface getResponseprojection{
  _embedded:{
    projectionFilms:Array<Projection>;
  }

}
