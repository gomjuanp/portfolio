import { Component, Input } from '@angular/core';
import { App } from '../../app';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(public app: App) { }

  // Function to download the resume
  downloadResume() {
    const link = document.createElement('a');
    link.href = '/pdf/Juan Pablo Ordonez Gomez Resume.pdf';
    link.download = 'Juan Pablo Ordonez Gomez Resume.pdf';
    link.click();
  }
  
  @Input()isDarkMode!: boolean;

  changeBackgroundToDark() {
    this.app.toggleTheme();
    document.documentElement.classList.add('dark-theme');
  }

  changeBackgroundToLight() {
    this.app.toggleTheme();
    document.documentElement.classList.remove('dark-theme');
  }

  toggleTheme() {
    if (this.isDarkMode) {
      this.changeBackgroundToLight();
    } else {
      this.changeBackgroundToDark();
    }
  }
}
