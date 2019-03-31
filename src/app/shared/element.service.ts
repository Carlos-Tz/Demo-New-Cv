import { Injectable } from '@angular/core';
import { Element } from '../shared/element';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  elementsList: AngularFireList<any>;
  elementObject: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  AddElement(element: Element){
    this.elementsList.push(element);
  }

  GetElementsList(){
    this.elementsList = this.db.list('elements');
    return this.elementsList;
  }
}
