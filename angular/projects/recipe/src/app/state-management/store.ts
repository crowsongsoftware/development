import { Observable, BehaviorSubject} from 'rxjs';

export class Store<T>{
    private _state$: BehaviorSubject<T>;
    public state$: Observable<T>;

    protected constructor(initialState: T){
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    };

    public get State(): T{
        return this._state$.getValue();
    };

    public set State(state: T){
        this._state$.next(state);
    };
};