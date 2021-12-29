import { Component } from '@angular/core';
import { Meal } from './model';
import { ApiService } from './services/api.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  mealResult: Meal[] = [];
  ingredient: any[] = [];
  anyData2: any = null;

  constructor(
    private apiService: ApiService
  ) {
    this.searchMeals();
  }

  searchMeals() {
    var query: string = 'Arrabiata';
    this.apiService.getMeals(query).subscribe((resp) => {
      this.mealResult = resp.meals;
      this.filterIngridents(resp.meals[0]);
    });
  }

  filterIngridents(result: any) {
    var data: string[] = Object.getOwnPropertyNames(result);

    for (var i = 0; i <= data.length; i++) {
      if (data[i] && data[i].includes('Ingredient')) {
        var property = 'strMeasure' + data[i].slice(-1);
        this.ingredient.push({ name: result[property], value: result[data[i]] });
      }
    }
    this.ingredient = this.ingredient.filter(x => x.value && (x.value.length > 1));
  }

}


