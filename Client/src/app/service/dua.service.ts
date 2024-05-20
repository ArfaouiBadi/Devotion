import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dua } from '../interfaces/dua';

@Injectable({
  providedIn: 'root',
})
export class DuaService {
  private apiUrl = 'http://localhost:5000/Dua'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllDuas(): Observable<Dua[]> {
    return this.http.get<Dua[]>(`${this.apiUrl}/all`);
  }

  getDuaById(id: number): Observable<Dua> {
    return this.http.get<Dua>(`${this.apiUrl}/getDua`, {
      params: { id: id.toString() },
    });
  }

  getDuasByCategory(category: string): Observable<Dua[]> {
    return this.http.get<Dua[]>(`${this.apiUrl}/getDuaByCategory`, {
      params: { category },
    });
  }

  addDua(dua: Dua): Observable<Dua> {
    return this.http.post<Dua>(`${this.apiUrl}/addDua`, dua);
  }

  updateDua(dua: Dua): Observable<Dua> {
    return this.http.put<Dua>(`${this.apiUrl}/updateDua`, dua);
  }

  deleteDua(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteDua/${id}`);
  }
}
