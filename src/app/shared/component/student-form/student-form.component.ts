import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { StudentSService } from '../../service/student-s.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  stdForm !: FormGroup
  constructor(
    private _uuidService: UuidService,
    private _stdService: StudentSService
    ) { }

  ngOnInit(): void {
    this.createStudentForm()
  }

  createStudentForm(){
    this.stdForm = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required]),
    })
  }

  onStdFormSubmit(){
    if(this.stdForm.valid){
      console.log(this.stdForm.value);
      let obj = {...this.stdForm.value, id: this._uuidService.generateUUID()}
      this._stdService.onAddStudent(obj)

      this.stdForm.reset();
    }
  }

}
