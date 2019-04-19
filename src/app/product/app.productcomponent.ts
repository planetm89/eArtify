import { Component } from '@angular/core';

export interface Tile {
    cols: number;
    rows: number;
    text: string;
    border: string;
   }

@Component({
    selector:'app-product',
    templateUrl:'./app.productcomponent.html'
})

export class ProductComponent{

    tiles: Tile[] = [
        {text: 'Tile 1', cols: 1, rows: 1 ,border: '3px double purple'},
        {text: 'Tile 2', cols: 1, rows: 1 ,border: '3px double red'},
        {text: 'Tile 3', cols: 1, rows: 1 ,border: '3px double skyblue'},
        {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow'},
        {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow'},
        {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow'},
        {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow'},
        {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow'},
        {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow'},
        ];
}