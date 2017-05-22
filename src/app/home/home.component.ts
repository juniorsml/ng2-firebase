import { Component, OnInit } from '@angular/core';
import {LessonsService} from '../shared/model/lessons.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Lesson} from '../shared/model/lesson';
import {log} from "util";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    allLessons: Lesson[];
    filterdLessons : Lesson[];
  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {

    this.lessonsService.findAllLessons().subscribe(
                                    lessons => this.allLessons = this.filterdLessons = lessons);
  }

  search(value: string) {
        this.filterdLessons = this.allLessons.filter(lesson => lesson.description.includes(value));
  }

}
