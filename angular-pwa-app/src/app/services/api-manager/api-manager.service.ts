import { Injectable } from '@angular/core';
import { HttpService } from './../http-service/http.service';
import { Observable, of } from 'rxjs';

import { map, catchError, } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  constructor(
    private httpService: HttpService
  ) { }

  getCharacters(): any {
    return new Promise( (resolve, reject) => {
      Promise.race([
        // Uncomment the below method, incase of Low end devices
        // this.getLS({
        //   key:`characters`
        // }),
        this.getCharactersHTTP()
      ])
        .then( (response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
      });
  }

  getCharactersHTTP(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpService.get({ url : `https://swapi.co/api/people/`})
      .pipe(
          catchError(this.handleError('get characters', []))
        ).subscribe( (response) => {
            this.updateLS({
              key: `characters`,
              data: response['results']
            })
            .subscribe( () => {
              resolve({
                error: false,
                data: response['results']
              });
            });
          }, (error) => {
            reject({
              error: true,
              data: null
            });
        });
    });
  }

  getCharacterDetail( {id}: { id: string}): any {
    return new Promise( (resolve, reject) => {
      Promise.race([
        // Uncomment the below method, incase of Low end devices
        // this.getCharactersLS({
        //   key:`characters/${id}`
        // }),
        this.getCharacterDetailHTTP( {id : id})
      ])
        .then( (response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
      });
  }

  getCharacterDetailHTTP( {id}: { id: string} ): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpService.get({ url : `https://swapi.co/api/people/${id}`})
      .pipe(
          catchError(this.handleError(`get character's showDetails`, []))
        ).subscribe( (response) => {
            this.updateLS({
              key: `/characterdetail/${id}`,
              data: response
            })
            .subscribe( () => {
              resolve({
                error: false,
                data: response
              });
            });
          }, (error) => {
            reject({
              error: true,
              data: null
            });
        });
    });
  }

  updateLS({ key, data }: { key: string, data: any }): Observable<boolean> {
    const value = JSON.stringify(data);
    return new Observable(observer => {
      try {
        localStorage.setItem(key, value);
        localStorage.getItem(key) === value ? observer.next(true) : observer.next(false);
      } catch (reason) {
         observer.error(true);
      }
    });
  }

  getLS( {key}: { key: string }): Promise<any> {
    console.log(`Local Storage is called`);
    return new Promise(
      (resolve, reject) => {
        try {
          let lsdata = localStorage.getItem(key);
          if (lsdata !== undefined &&  lsdata !== null) {
            lsdata = JSON.parse(lsdata);
            resolve({
              error: true,
              data : lsdata
            });
          } else {
            resolve({
              error: true,
              data : null
            });
          }

        } catch (reason) {
          reject(reason);
        }
      },
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      return of(result as T);
    };
  }
}
