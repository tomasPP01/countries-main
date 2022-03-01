import { Component, OnInit } from '@angular/core';
import { CountriesService } from './service/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  public Data:any;

  title = 'countries';

  constructor(private countrie:CountriesService){

  }


  ngOnInit(): void {
      this.consultarServicio();
  }


  consultarServicio(){
    this.countrie.getPaises().subscribe(resp =>{
      console.log(resp);
      this.Data =resp;
      console.log(this.Data);
    })
  }
}
