import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  // Function to download the resume
  downloadResume() {
    const link = document.createElement('a');
    link.href = '/pdf/Juan Pablo Ordonez Gomez Resume.pdf';
    link.download = 'Juan Pablo Ordonez Gomez Resume.pdf';
    link.click();
  }

}
