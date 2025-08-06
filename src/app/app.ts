import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App implements OnInit {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  isDarkMode = true; // Store the theme mode

  // Toggle the theme of the entire application
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateThemeClass();
  }

  // Set the css to the components depending on the theme mode selected
  private updateThemeClass() {
    if (this.isDarkMode) {
      this.renderer.addClass(this.document.documentElement, 'dark-theme');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'dark-theme');
    }
  }

  // Set DarkMode theme as soon as the app starts
  ngOnInit(): void {
    this.updateThemeClass();
  }

}
