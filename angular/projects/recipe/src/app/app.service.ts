import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppStore } from './app.store';
import { AppState, appState } from './app.state';

@Injectable()
export class AppService {
  public get State(): AppState{
    return this._appStore.State;
  };

  public set State(app){
    this._appStore.State = app;
  };

 set Title(title: string){
    this._titleService.setTitle(title);
  };

  get title(): string{
    return this._titleService.getTitle();
  }
  
  constructor(private _titleService: Title, private _appStore: AppStore) {
    this.Title = this.State.title;
   };
};
