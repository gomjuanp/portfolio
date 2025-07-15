import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects/projects';
import { WorkingProjects, FinishedProjects } from '../../services/projects/project';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  // Constructor to inject the ProjectsService
 constructor( public projectsService: ProjectsService, private breakpointObserver: BreakpointObserver) { }

  // Properties to store the projects
  WorkingProjects!: WorkingProjects[];
  FinishedProjects!: FinishedProjects[];

  // Redirect to the web site of the project:
  //index of the project
  indexProject!: number;

  // Method header
  redirectToWebSite(isProjectFinished: boolean, projectId: number ){

    // If statement to iterate in FinishedProjects if the boolean input is true
    if(isProjectFinished){

      // For each statment to find the id attached to the correct project
      this.FinishedProjects.forEach(element => {

        // Assing the correct index of the elemnt to the variable
        if(element.id == projectId){

          this.indexProject = this.FinishedProjects.indexOf(element) 

        }
      });
      
      // Redirect the user to the corresponding link
      window.location.href = this.FinishedProjects[this.indexProject].links[1].url;

    }
    // In the case the boolean is false we do the same process in but in the WorkingProject List
    else{

        this.WorkingProjects.forEach(element => {

        if(element.id == projectId){

          this.indexProject = this.WorkingProjects.indexOf(element) 

        }
      });
      
      window.location.href = this.WorkingProjects[this.indexProject].links[1].url;
    }
  }

  // Visual Purpose:
  // This component will change the display of the projects on the page depending on the size of the screen.

  isSmallScreen: boolean = false;

  //ngOnInit to get the projects from the service as soon as the component is initialized
  ngOnInit() {

    this.WorkingProjects = this.projectsService.getWorkingProjects();
    this.FinishedProjects = this.projectsService.getFinishedProjects();
  
    this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .subscribe(result => {
      this.isSmallScreen = result.matches;
    });

  }

}
