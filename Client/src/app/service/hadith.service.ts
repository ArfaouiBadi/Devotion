import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hadith } from '../interfaces/hadith';

@Injectable({
  providedIn: 'root',
})
export class HadithService {
  private apiUrl = 'http://localhost:5000/Hadith'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllHadiths(): Observable<Hadith[]> {
    return this.http.get<Hadith[]>(`${this.apiUrl}/all`);
  }

  addHadith(hadith: Hadith): Observable<Hadith> {
    console.log(hadith);
    return this.http.post<Hadith>(`${this.apiUrl}/addHadith`, hadith);
  }
  getHadithById(id: number): Observable<Hadith> {
    return this.http.get<Hadith>(`${this.apiUrl}/getHadith/${id}`);
  }

  updateHadith(hadith: Hadith): Observable<Hadith> {
    return this.http.put<Hadith>(`${this.apiUrl}/updateHadith`, hadith);
  }

  deleteHadith(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteHadith/${id}`);
  }
}
