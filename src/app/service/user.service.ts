import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modele/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL:string = "http://localhost:8080/api/";

  private HTTPOPTIONS = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL + 'users');
                    //.catch(this.errorHandler);
  }
  errorHandler(error : HttpErrorResponse){
    return Observable.throw(error.message||'');
  }

  getUser(id): Observable<User>{
    return this.http.get<User>(this.BASE_URL + 'user/' + id);
  }
  /**
   * 
   * getUser(id: number): Observable<any>{
   * return this.http.get('${this.BASE_URL + 'users'}/${id}');}
   */

  deleteUser(id: number): Observable<any>{
    return this.http.delete(this.BASE_URL + 'user/' + id);
  }

  createUser(user : User): Observable<User>{
    return this.http.post<User>(this.BASE_URL + 'user', user, this.HTTPOPTIONS);
  }

  updateUser(user : User, id: number): Observable<any>{
    return this.http.put(this.BASE_URL + 'user/'+id, user, this.HTTPOPTIONS);
  }
}
