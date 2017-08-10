import { Injectable } from '@angular/core';
import {Socket} from 'ng2-socket-io';
@Injectable()
export class SocketService extends Socket {

  constructor() { 
    super({url:"http://localhost:8080",options:{}})

    
  }




}
