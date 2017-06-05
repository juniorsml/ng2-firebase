///<reference path="../shared/model/courses.service.ts"/>
import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../shared/model/courses.service';
import {Observable} from 'rxjs/Observable';
import {Lesson} from '../shared/model/lesson';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../shared/model/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course$: Observable<Course> ;
  lessons$: Observable<Lesson[]>;


  constructor(private route: ActivatedRoute , private courseService: CoursesService) { }

  ngOnInit() {
      const courseUrl = this.route.snapshot.params['id'];

      this.course$ = this.courseService.findCourseByUrl(courseUrl);
      this.lessons$ = this.courseService.findLessonsForCourse(courseUrl);
  }


}
