import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../shared/model/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private courses$ ;

  constructor(private coursesSevice: CoursesService) { }

  ngOnInit() {
      this.courses$ = this.coursesSevice.findAllCourses();
  }



}
