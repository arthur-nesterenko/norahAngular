import { Injectable } from '@angular/core';
import {Socket} from 'ng2-socket-io';
@Injectable()
export class HeightMapSocketService extends Socket {

  constructor() { 
    super({url:"https://absentiaterraingen.com",options:{}})

    
  }




}
