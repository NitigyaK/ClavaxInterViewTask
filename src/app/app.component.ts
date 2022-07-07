import { Component, OnInit } from '@angular/core';
import json from '../assets/datasource.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  test:any;

  test1:any;

  displayedColumns = ['machineNumber', 'serialNumber', 'machineType']

  uniqueArray:any;

  data:any

  constructor(){}

  ngOnInit()
  {
      
    var arr=[]
    
    var arr1=[]

    for (let i = 0; i < json.length; i++) {
      if(json[i].content.machineInformation !=null)
      {

        this.test1 = json[i].content.machineInformation

        this.test = json[i].content.machineInformation

        arr1.push(this.test1)

        arr.push(this.test)
      }
    }
    
      this.data = arr1  

      this.uniqueArray = arr.reduce((unique:any, o:any) => {
        if(!unique.some((obj: { machineNumber: any; serialNumber: any; machineType:any}) =>
          obj.machineNumber === o.machineNumber && obj.serialNumber === o.serialNumber && obj.machineType === o.machineType)) 
          {
            unique.push(o);
          }
          return unique;
        },[]);
  
  }

}
