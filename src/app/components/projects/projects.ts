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
