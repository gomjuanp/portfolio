import { Component, Input } from '@angular/core';

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

  @Input()isDarkMode!: boolean;

  NgOnInit() {
    if(this.isDarkMode == true){
      document.documentElement.classList.add('dark-theme');
    }else{
      document.documentElement.classList.remove('dark-theme');
    }
  }

}
