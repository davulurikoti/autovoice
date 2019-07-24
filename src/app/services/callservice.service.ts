import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallserviceService {

  constructor(private http: HttpClient) { }
	endpoint = 'http://localhost:3000/call';
	callMember(id,number): Observable<any>{
	console.log(this.endpoint+'/'+id+'/'+number);
	return this.http.get(this.endpoint+'/'+id+'/'+number);
	}
	
}
