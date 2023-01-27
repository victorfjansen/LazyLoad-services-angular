import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class LazyServiceService {
  changeBackground(): void {
    console.log('aqui');
    document.querySelector('body')!.style.backgroundColor = 'red';
  }
}
