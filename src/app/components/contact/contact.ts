import { Component, Input, Inject, PLATFORM_ID, computed, inject, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { languages } from '../../assets/data/textContent.json';
import { Language } from '../../language';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  // Store if the email has been copied
  copied = false;
  
  // Getting the input from the app about the theme mode
  @Input()isDarkMode!: boolean;

  // Get the default language from the app
  private languageService = inject(Language);
  
  // Define the content of each field
  protected Contact = computed(() => this.textContent().title);
  protected text1 = computed(() => this.textContent().text1);
  protected text2 = computed(() => this.textContent().text2);
  protected text3 = computed(() => this.textContent().text3);

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {}

  // Method to copy the email
  copyEmail() {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText('gomjuan@sheridancollege.ca');
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
        this.cdr.markForCheck();
      }, 1000);
    }
  }

  // On init set the theme from the app
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if(this.isDarkMode == true){
        document.documentElement.classList.add('dark-theme');
      }else{
        document.documentElement.classList.remove('dark-theme');
      }
    }
  }

  // Use computed signals to derive the text content based on the current language.
  // The template will automatically update when the language changes.
  private textContent = computed(() => {
    const lang = this.languageService.currentLanguage();
    return lang === 'sp' ? languages.spanish.contact : languages.english.contact
  });

  
}
