import { Component, OnInit } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chamar API teste';

  constructor(private api: GetApiService) { }

  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      console.warn("Dados da Api: ", data);
    })
  }

}
