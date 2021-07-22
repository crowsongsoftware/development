import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { userViewModel } from '../view-models/user.viewmodel';
import { users } from '../data/users';
import { of } from 'rxjs';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class ViewmodelService {
  private _userViewModel: Subject<userViewModel> = new Subject();
  private _users!: Array<Subject<userViewModel>>;

  private getUsers(){
    users.forEach(user => console.log(user));
  };
  
  //public get allUsers(): Array<Observable<userViewModel>>{

  //}

  //public get user(): Observable<userViewModel{
  //  
  //}

  constructor() { 
    this.getUsers();
  };
};
