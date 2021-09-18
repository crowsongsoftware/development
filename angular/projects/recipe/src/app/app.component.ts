import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'recipe';

  constructor(private appService: AppService){
    this.title = this.appService.State.title;
  };

  ngOnInit(){
    console.log("AppComponent");
    console.log("title: ", this.title);
  }
};
