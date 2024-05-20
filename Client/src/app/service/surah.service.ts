import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surah } from '../interfaces/surah';

@Injectable({
  providedIn: 'root',
})
export class SurahService {
  private apiUrl = 'http://localhost:5000/Surah'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllSurahs(): Observable<Surah[]> {
    return this.http.get<Surah[]>(`${this.apiUrl}/all`);
  }

  addSurah(surah: Surah): Observable<Surah> {
    return this.http.post<Surah>(`${this.apiUrl}/addSurah`, surah);
  }

  deleteSurah(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteSurah/${id}`);
  }
  getSurahById(id: number): Observable<Surah> {
    return this.http.get<Surah>(`${this.apiUrl}/getSurah/${id}`);
  }

  updateSurah(surah: Surah): Observable<void> {
    console.log(surah);
    return this.http.put<void>(`${this.apiUrl}/updateSurah`, surah);
  }
}
