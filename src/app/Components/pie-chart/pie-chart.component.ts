import { Component, OnInit } from '@angular/core';
import { productSales, productSalesMulti } from '../data/products';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  productSales: any[] | undefined
  productSalesMulti: any[] | undefined

  view: any[] = [700, 370];

  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = false;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  constructor() { Object.assign(this, { productSales }) }

  ngOnInit(): void {
  }



}
