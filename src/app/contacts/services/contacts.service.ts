import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) {}
  loadContacts(): Observable<Contact[]> {
    const url: string = environment.apiUrl
    return this.http.get<Contact[]>(url);
}
}
