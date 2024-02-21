import { Injectable } from '@angular/core';
import { Istudent } from '../model/student';
import { SanckBarService } from './sanck-bar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentSService {
  stdArray: Array<Istudent> = [
    {
      fname: 'jack',
      lname: 'ma',
      email: 'jackma@gmail.com',
      contact: 8843882498,
      id: '123'
    },
    {
      fname: 'alen',
      lname: 'walker',
      email: 'alenwalker@gmail.com',
      contact: 8843882498,
      id: '124'
    }
  ]

  constructor(private _snackBarService: SanckBarService) { }

  fetchStudentData(): Array<Istudent>{
   return this.stdArray
  }

  onAddStudent(stdObj: Istudent){
    this.stdArray.push(stdObj);
    this._snackBarService.openSnackBar(`student with name ${stdObj.fname} is added`)
  };

  removeStd(id: string){
    // API call to remove student from database
    let getIndex = this.stdArray.findIndex(std => std.id === id);
    this. stdArray.splice(getIndex, 1);
    this._snackBarService.openSnackBar(`student with ${id} is removed `)
  }
}
