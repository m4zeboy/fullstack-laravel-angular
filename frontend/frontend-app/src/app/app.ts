import { Component, inject, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Mensagens da API</h1>
    <ul>
      <li *ngFor="let m of messages">{{ m.texto }} </li>
    </ul>
  ` 
})
export class App implements OnInit {
  messages: any[] = [];
  http = inject(HttpClient);

  ngOnInit() {
    this.http.get<any[]>('https://refactored-potato-xp745jvq96w2pr79-8000.app.github.dev/api/mensagens')
    .subscribe(data => this.messages = data);
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
})