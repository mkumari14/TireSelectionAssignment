import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TireService {

  constructor(private http: HttpClient) {}
  BASE_URL = `https://6080be3273292b0017cdbf2a.mockapi.io`
  getData(urlInput:any):Observable<[]>{
  console.log("userInput", urlInput)
  return this.http.get(`${this.BASE_URL}/${urlInput ==='trim'? 'trim' : (urlInput+'s')}`).pipe(
    map((res: { [x: string]: any; })=>res[urlInput])
  )
}
}


