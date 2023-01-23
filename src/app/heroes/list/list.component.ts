import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  deletedHeroe : string = "";
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];

  deleteHeroe( heroe : string ) {
    this.deletedHeroe = heroe;
    this.heroes = [...this.heroes].filter( item => item !== heroe );
  };

  restore() {
    this.deletedHeroe = "";
    this.heroes = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America"];
  };
};
