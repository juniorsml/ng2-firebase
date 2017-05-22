import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Course} from "./course";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

    findAllCourses (): Observable<Course[]> {
        return this.db.list('courses').map(Course.fromJsonList);
    }

    findLessonsForCourse (courseUrl) {

    }
}
