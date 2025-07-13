import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  // Function to copy email address to clipboard
  copied = false;

  copyEmail() {
  navigator.clipboard.writeText('gomjuan@sheridancollege.ca');
  this.copied = true;
  setTimeout(() => this.copied = false, 500);
  }

}
