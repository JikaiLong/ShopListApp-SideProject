import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {

    console.log('Data service connected ...');
  }
  getData(){
       return this.http.get('http://localhost:3000/shoplists')
        .map(res=>res.json());
  }

  updateData(newtrip){
    return this.http.post('http://localhost:3000/shoplists',newtrip)
    .map(res=>res.json());
  }
}
