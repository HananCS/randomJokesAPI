import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(private httpClient:HttpClient){}

  getJokes(){
    try{
      return this.httpClient.get('https://api.chucknorris.io/jokes/random').toPromise()
    } catch(error){
        console.log(`[ERROR] ==> getJokes ==> ${error.message}`,error);
        return null;
    }
  }



}
