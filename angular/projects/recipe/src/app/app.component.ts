import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'recipe';

  constructor(private appService: AppService, private activatedRoute: ActivatedRoute){
    this.title = this.appService.State.title;
  };

  ngOnInit(){
    console.log("AppComponent");
    console.log('activatedRoute: ', this.activatedRoute);
    console.log("title: ", this.title);
  }
};
