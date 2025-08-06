import { Component, Input, computed, inject } from '@angular/core';
import { App } from '../../app';
import { languages } from '../../assets/data/textContent.json';
import { Language } from '../../language';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(public app: App) { }

  // Getting the input from the app about the theme mode
  @Input()isDarkMode!: boolean;
  
  
  // Get the default language from the app
  private languageService = inject(Language);
  
  // Define the content of each field
  protected Skills = computed(() => this.textContent().toolbar.skills);
  protected Projects = computed(() => this.textContent().toolbar.projects);
  protected Contact = computed(() => this.textContent().toolbar.contact);
  protected text1 = computed(() => this.textContent().article.text1);
  protected text2 = computed(() => this.textContent().article.text2);
  protected text3 = computed(() => this.textContent().article.text3);
  protected text4 = computed(() => this.textContent().article.text4);
  protected Resume = computed(() => this.textContent().article.resume);
  protected Available = computed(() => this.textContent().article.available);

  // Method to download the resume
  downloadResume() {
    const link = document.createElement('a');
    link.href = '/pdf/Juan Pablo Ordonez Gomez Resume.pdf';
    link.download = 'Juan Pablo Ordonez Gomez Resume.pdf';
    link.click();
  }

  // Method to change the color theme of the app
  toggleTheme() {
    this.app.toggleTheme();
  }

  // Use computed signals to derive the text content based on the current language.
  // The template will automatically update when the language changes.
  private textContent = computed(() => {
    const lang = this.languageService.currentLanguage();
    return lang === 'sp' ? languages.spanish.header : languages.english.header;
    
  });

  
}
