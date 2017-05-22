/**
 * Created by admin on 20/05/17.
 */



export class Course {



    static fromJson({   $key,
                        url,
                        description,
                        iconUrl,
                        courseListIcon,
                        longDescription
                        }): Course {


        return new Course ( $key,
            url,
            description,
            iconUrl,
            courseListIcon,
            longDescription );
    }

    static fromJsonList(array): Course[]{

        return array.map(c => Course.fromJson(c));
    }


    constructor (public $key: string ,
                 public url: string ,
                 public description: string ,
                 public iconUrl: string ,
                 public courseListIcon: string ,
                 public longDescription: string) {

    }
}