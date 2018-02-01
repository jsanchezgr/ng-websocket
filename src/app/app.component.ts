import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Message } from './models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  msg:       Message;
  msgStream: Message[] = [];

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      msg.date = Date.now().toString();
      this.msgStream.unshift(msg);
    });
  }

  ngOnInit() {
    this.msg = new Message();
  }

  sendMsg(txt) {
    this.msg.author = 'Pepito de copas';
    this.msg.text   =  txt.value;
    this.chatService.messages.next(this.msg);
    this.msg.text = txt.value = '';
    return false;
  }
}
