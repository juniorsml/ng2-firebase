import {log} from "util";
/**
 * Created by admin on 19/05/17.
 */

export class Lesson {

    static fromJson({   $key,
                        description,
                        duration,
                        url,
                        tags,
                        pro,
                        longDescription,
                        courseId}):Lesson {


        return new Lesson ( $key ,
            description ,
            duration ,
            url ,
            tags ,
            pro ,
            longDescription ,
            courseId );
    }
    static fromJsonList(array): Lesson[]{

        return array.map(l => Lesson.fromJson(l));
    }


    constructor(
            public $key: string,
            public description:string,
            public duration:string,
            public url:string,
            public tags:string,
            public pro:boolean,
            public longDescription:  string,
            public courseId: string){
    }

    isBeginner(){
        return this.tags && this.tags.includes('BEGINNER');
    }

}