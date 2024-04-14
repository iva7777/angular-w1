import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My First Angular App';

  items = [
    {title: "About Me", text: "Hi! My name is Iva and I'm 21 years old. Let's be creative together! 😀", expanded: false, showLink: false},
    {title: "Hobbies & Interests", text: "I am really passionate about design and German language 🤩", expanded: false, showLink: false},
    {title: "Favourite Content Creator", text: "Polly Nedkova",expanded: false, showLink: true},
    {title: "About My Channel", text: "Here is the place where we are going to have fun and learn new things together. The most important thing is to become a better version of ourselves every day 💙", expanded: false, showLink: false},
    {title: "Pricing", text: "Basic Video Editing: 50$ | Thumbnail Design: $10 - $20 per thumbnail, with potential discounts for bulk orders | Channel Branding Package: $200 - $500 for a complete package, tailored to the channel's style and preferences 💥", expanded: false, showLink: false},
  ];

  toggle(item : any) {
    this.items.forEach(i => {
      if(i !== item) i.expanded = false;
  });
    item.expanded = !item.expanded;
  }

  handleLinkClick(link: string): void {
    window.open(link, '_blank');
  }
}
