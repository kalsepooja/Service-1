import { Injectable } from '@angular/core';
import { Istudent } from '../model/student';

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
    },
  ]

  constructor() { }

  fetchStudentData(): Array<Istudent>{
   return this.stdArray
  }

  onAddStudent(stdObj: Istudent){
    this.stdArray.push(stdObj)
  }
}
