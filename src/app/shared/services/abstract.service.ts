
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { LoaderService } from './components/loader.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AbstractService {
    constructor(private _http: Http,
        private _loaderService: LoaderService) { }

    private buildHeader() {
        return new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' });
    }

    get<T>(apiUrl): Observable<T> {
        this._loaderService.displayLoader(true);
        return this._http.get(apiUrl, new RequestOptions({ headers: this.buildHeader() }))
            .pipe(map((data: Response) => {
                this._loaderService.displayLoader(false);
                return data.json();
            }));
    }

    getBy(apiUrl, param): Observable<any> {
        this._loaderService.displayLoader(true);
        return this._http.get(apiUrl, new RequestOptions({ headers: this.buildHeader(), params: param }))
            .pipe(map((data: Response) => {
                this._loaderService.displayLoader(false);
                return data.json();
            }));
    }

    post(apiUrl, param): Observable<any> {
        this._loaderService.displayLoader(true);
        return this._http.post(apiUrl, param)
            .pipe(map((data: Response) => {
                this._loaderService.displayLoader(false);
                return data.json();
            }));
    }

    put(apiUrl, param): Observable<any> {
        this._loaderService.displayLoader(true);
        return this._http.put(apiUrl, param, new RequestOptions({ headers: this.buildHeader() }))
            .pipe(map((data: Response) => {
                this._loaderService.displayLoader(false);
                return data.json();
            }));
    }

    delete(apiUrl, param): Observable<any> {
        this._loaderService.displayLoader(true);
        return this._http.delete(apiUrl + param, new RequestOptions({ headers: this.buildHeader() }))
            .pipe(map((data: Response) => {
                this._loaderService.displayLoader(false);
                return data.json();
            }));
    }
}
