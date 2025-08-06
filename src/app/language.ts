import { Injectable, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Language implements OnDestroy {

  // Use a signal to store the current language. Defaults to 'en'.
  public currentLanguage = signal('en');
  private routerSubscription: Subscription;

  constructor(private router: Router) {

    // Subscribe to router events to detect language changes from the URL
    this.routerSubscription = this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      // e.g. /en -> 'en'
      const lang = event.url.split('/')[1];
      // set the lang
      if (lang === 'en' || lang === 'sp') {
        this.currentLanguage.set(lang);
      }
    });

  }

  // Unsubscribe from the router subscription when the component is destroyed
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
  
}
