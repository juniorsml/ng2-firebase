import {Component, OnDestroy} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  courses$: FirebaseListObservable<any[]>;
  courseSubscription ;
  lastCourse: any;

  constructor(private af: AngularFireDatabase ) {
        this.courses$ = af.list(`courses`);
        this.courseSubscription = this.courses$.subscribe( console.log );
        this.courses$.map(couses => couses[0]).subscribe(course => {this.lastCourse = course ;
                                                         console.log(course); });

  }

  pushList() {
        this.courses$.push({description : 'testePush'}).then(console.log , console.error);
  }

   removeCourse(course) {

        this.courses$.remove(course).then(console.log , console.error);
    }

    updateCourse(course) {

        this.courses$.update(course , {description : 'teste description' , newField : 'field'}).then(console.log , console.error);
    }


}
