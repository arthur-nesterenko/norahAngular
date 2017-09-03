import { Injectable } from '@angular/core';
import {Socket} from 'ng2-socket-io';
@Injectable()
export class GunSocketService extends Socket {

  constructor() { 
    super({url:"http://35.197.31.80:8000",options:{}})

    
  }




}
