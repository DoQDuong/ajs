import {Component, Input} from "@angular/core";
@Component({
  selector:'student',
  templateUrl:'./student.component.html'
})
export class StudentComponent{
  @Input()
  classN?:string;
  ny = 10;
  tangbangai(){
    this.ny++;
  }
  giambangai(){
    if (this.ny>0){
      this.ny--;
    }
  }
}
