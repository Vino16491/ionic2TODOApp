import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }

  getData() {
    return this.storage.get('todos');
  }

  save(data){
    this.storage.set('todos', data);
  }
}
