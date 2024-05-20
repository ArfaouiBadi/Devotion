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

  getSurahById(id: number): Observable<Surah> {
    return this.http.get<Surah>(`${this.apiUrl}/getSurah/${id}`);
  }

  addSurah(surah: Surah): Observable<Surah> {
    console.log(surah);
    return this.http.post<Surah>(`${this.apiUrl}/addSurah`, surah);
  }

  updateSurah(surah: Surah): Observable<Surah> {
    return this.http.put<Surah>(`${this.apiUrl}/updateSurah`, surah);
  }

  deleteSurah(id: number): Observable<void> {
    console.log(id);
    return this.http.delete<void>(`${this.apiUrl}/deleteSurah?id=${id}`);
  }
}
