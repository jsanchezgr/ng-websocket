import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { WsService } from './services/ws.service';
import { ChatService } from './services/chat.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DatePipe,
    WsService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
