import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { searchMealsResult } from '../model';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    baseUrl: string = 'https://www.themealdb.com/';
    // apiKey: string = 'nbXYM09NsQ8N3DuhYm9r0sW15FT4UcUU'; 

    constructor(
        private httpClient: HttpClient
    ) { }

    getMeals(query: string): Observable<searchMealsResult> {
        var url = this.baseUrl + "api/json/v1/1/search.php?s=" + query;
        return this.httpClient.get<searchMealsResult>(url)
    }

}