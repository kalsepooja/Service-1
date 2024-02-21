import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SanckBarService {

  constructor(private _sanckbar: MatSnackBar) {
   
   };

   openSnackBar(msg: string){
    this._sanckbar.open(msg, "close", {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    })
  }
}
