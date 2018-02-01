import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Message } from './models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  author:    string;
  msg:       Message;
  msgStream: Message[] = [];

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      msg.date = Date.now().toString();
      this.msgStream.unshift(msg);
    });
  }

  ngOnInit() {
    this.msg    = new Message();
    this.author = '';
  }

  sendMsg(txt): boolean {
    this.msg.author = this.author;
    this.msg.text   = txt.value;

    this.chatService.messages.next(this.msg);
    this.msg.text = txt.value = '';
    return false;
  }

  enterChat(author): boolean {
    if (author.value) {
      this.author = author.value;
    }

    return false;
  }

  leaveChat(): boolean {
    this.author = '';
    return false;
  }
}
