// cv-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Still use 'root' in standalone components
})
export class CvServiceService {
  private dataUrl = './profile-data.json';

  constructor(private http: HttpClient) { }

  getProfileData(): Observable<any> { // Or Observable<Profile> if you have interface
    return this.http.get(this.dataUrl); // No need for <any> with correct type
  }
}