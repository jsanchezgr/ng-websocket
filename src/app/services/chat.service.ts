import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { WsService } from './ws.service';
import { Message } from '../models/message.model';

const CHAT_URL = 'ws://echo.websocket.org/';

@Injectable()
export class ChatService {
  public messages: Subject<Message>;

  constructor(wsService: WsService) {
    this.messages = <Subject<Message>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): Message => {
        return new Message(JSON.parse(response.data));
      });
  }
}
