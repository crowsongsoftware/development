/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderStore } from './header.store';
import { HeaderState, headerState } from './header.state';

@Injectable()
export class HeaderService {
  public get State(): HeaderState{
    return this._headerStore.State;
  };

  public set State(header: HeaderState){
    this._headerStore.State = header;
  };

  constructor(private _headerStore: HeaderStore, private _http: HttpClient) { 
    this._headerStore.State = headerState;
  };
};
*/