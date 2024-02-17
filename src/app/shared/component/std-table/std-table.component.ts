import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../model/student';
import { StudentSService } from '../../service/student-s.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
 stdArr !: Array<Istudent> 
  constructor(private _stdService: StudentSService ) { }

  ngOnInit(): void {
   this.stdArr = this._stdService.fetchStudentData()
   console.log(this.stdArr);
  }

}
