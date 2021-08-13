import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
  constructor(private _appStore: AppStore, private _http: HttpClient) { 
    this._appStore.State = appState;
  };
};
