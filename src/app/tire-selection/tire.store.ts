import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TireStore {
  private subjectYears = new BehaviorSubject<[]>([]);
  private subjectMakes = new BehaviorSubject<[]>([]);
  private subjectModels = new BehaviorSubject<[]>([]);
  private subjectTrims = new BehaviorSubject<[]>([]);

  BASE_URL = `https://6080be3273292b0017cdbf2a.mockapi.io`;
  yearsData$: Observable<[]> = this.subjectYears.asObservable();
  makesData$: Observable<[]> = this.subjectMakes.asObservable();
  modelsData$: Observable<[]> = this.subjectModels.asObservable();
  trimsData$: Observable<[]> = this.subjectTrims.asObservable();
  constructor(private http: HttpClient) {
    this.fetchYears();
    this.fetchMakes();
    this.fetchModels();
    this.fetchTrims();
  }

  private fetchYears() {
    const loadYears$ = this.http.get(`${this.BASE_URL}/years`).pipe(
      map((res: { [x: string]: any }) => res['year']),
      tap((data) => this.subjectYears.next(data))
    );
    loadYears$.subscribe();
  }
  grtYears(): Observable<[]> {
    return this.yearsData$;
  }
  private fetchMakes() {
    const loadMakes$ = this.http.get(`${this.BASE_URL}/makes`).pipe(
      map((res: { [x: string]: any }) => res['make']),
      tap((data) => this.subjectMakes.next(data))
    );
    loadMakes$.subscribe();
  }
  getMakes(): Observable<[]> {
    return this.makesData$;
  }

  private fetchModels() {
    const loadModels$ = this.http.get(`${this.BASE_URL}/models`).pipe(
      map((res: { [x: string]: any }) => res['model']),
      tap((data) => this.subjectModels.next(data))
    );
    loadModels$.subscribe();
  }
  getModels(): Observable<[]> {
    return this.modelsData$;
  }

  private fetchTrims() {
    const loadTrims$ = this.http.get(`${this.BASE_URL}/trim`).pipe(
      map((res: { [x: string]: any }) => res['trim']),
      tap((data) => this.subjectTrims.next(data))
    );
    loadTrims$.subscribe();
  }
  getTrims(): Observable<[]> {
    return this.trimsData$;
  }
}
