import {Component, Input} from "@angular/core";

@Component({
  selector:'classroom',
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent{
  className = 'T2207A';
  siso = 27;

  themsinhvien(){
    this.siso++;
  }
  giamsinhvien(){
    if (this.siso>0){
      this.siso--;
    }
  }
}
