import { Injectable } from '@angular/core';
import {Socket} from 'ng2-socket-io';
@Injectable()
export class SocketService extends Socket {

  constructor() { 
    super({url:"http://13.229.49.106:8080",options:{}})

    
  }




}
