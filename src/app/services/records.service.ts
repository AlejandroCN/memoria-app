import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Record } from '../models/record.model';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {

  constructor(private firestore: AngularFirestore) {}

  public save(record: Record): Promise<DocumentReference<any>> {
    return this.firestore.collection('records').add({
      fecha: record.fecha,
      tiempo: record.tiempo,
      totalIntentos: record.totalIntentos,
      nickname: record.nickname
    });
  }

  public findAll(): Observable<QuerySnapshot<any>> {
    return this.firestore.collection('records').get();
  }

}
