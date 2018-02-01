import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Message } from './models/message.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  msg:       Message;
  msgStream: Message[] = [];

  constructor(
    private chatService: ChatService,
    private datePipe: DatePipe
  ) {
    chatService.messages.subscribe(msg => {
      msg.date = this.datePipe.transform(new Date());
      this.msgStream.push(msg);
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
  }
}
