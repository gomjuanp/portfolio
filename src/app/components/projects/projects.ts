import { Component, Input, Inject, PLATFORM_ID, computed, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProjectsService } from '../../services/projects/projects';
import { WorkingProjects, FinishedProjects } from '../../services/projects/project';
import { BreakpointObserver } from '@angular/cdk/layout';
import { languages } from '../../assets/data/textContent.json';
import { Language } from '../../language';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

 constructor( public projectsService: ProjectsService, private breakpointObserver: BreakpointObserver, @Inject(PLATFORM_ID) private platformId: Object) { }

  // Storing all type of projects
  WorkingProjects!: WorkingProjects[];
  FinishedProjects!: FinishedProjects[];

  // Variable that stores the index needed for each project
  indexProject!: number;

  // This component will change the display of the projects on the page depending on the size of the screen.
  isSmallScreen: boolean = false;

  // Getting the input from the app about the theme mode
  @Input()isDarkMode!: boolean;

  // Get the default language from the app
  private languageService = inject(Language);

// Define the content of each field
  protected Title = computed(() => this.textContent().title);
  protected Finished = computed(() => this.textContent().finished);
  protected Working = computed(() => this.textContent().working);

  // Method to send the user the assigned web site of the project
  redirectToWebSite(isProjectFinished: boolean, projectId: number ){

    // If statement to iterate in FinishedProjects if input is true
    if(isProjectFinished){
      // forEach statment to find the id attached to each project
      this.FinishedProjects.forEach(element => {
        // Assing the correct index to the variable
        if(element.id == projectId){
          this.indexProject = this.FinishedProjects.indexOf(element) 
        }
      });
      // Redirect the user to the corresponding link
      window.location.href = this.FinishedProjects[this.indexProject].links[1].url;
    }
    // In the case the boolean is false we do the same process but in the WorkingProject List
    else{
        this.WorkingProjects.forEach(element => {
        if(element.id == projectId){
          this.indexProject = this.WorkingProjects.indexOf(element) 
        }
      });
      window.location.href = this.WorkingProjects[this.indexProject].links[1].url;
    }

  }

  // On Init get the projects from the service
  // Determine the size of the screen
  ngOnInit() {

    this.WorkingProjects = this.projectsService.getWorkingProjects();
    this.FinishedProjects = this.projectsService.getFinishedProjects();
    this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .subscribe(result => {
      this.isSmallScreen = result.matches;
    });

    // Set the theme color based on the app
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
    return lang === 'sp' ? languages.spanish.projects : languages.english.projects
  });

}
