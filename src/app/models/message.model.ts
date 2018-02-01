export class Message {
  author: string;
  text: string;
  date: string;

  constructor(obj?: any) {
    this.author = obj && obj.author || null;
    this.text   = obj && obj.text   || null;
    this.date   = null;
  }
}
