///<reference path="../../../../node_modules/rxjs/add/operator/switchMap.d.ts"/>
///<reference path="../../../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from '@angular/core';
import {Course} from './course';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Lesson} from "./lesson";


@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

    findAllCourses (): Observable<Course[]> {
        return this.db.list('courses').map(Course.fromJsonList);
    }

    findCourseByUrl(url) {
        const courses$ = this.db.list('courses', { query: {
            orderByChild : 'url',
            equalTo : url
        }}).map(results => results[0]);

        return courses$;
    }

    findLessonsKeyPerCourse(courseURL: string): Observable<string[]> {
        return this.findCourseByUrl(courseURL)
            .switchMap(course => this.db.list('lessonsPerCourse/' + course.$key))
            .map(lpcs => lpcs.map(lpc => lpc.$key));
    }

    findLessonsForCourse (courseUrl): Observable<Lesson[]> {

    return this.findLessonsKeyPerCourse(courseUrl).
        map(lskey => lskey.map(lessonKey => this.db.object('lessons/' + lessonKey)))
        .flatMap(lsobs => Observable.combineLatest(lsobs)).do(console.log);
    }
}
