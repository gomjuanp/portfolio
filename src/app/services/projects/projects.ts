import { Injectable } from '@angular/core';
import { FinishedProjects, WorkingProjects } from './project';
import { finishedProjects, workingProjects } from '../../assets/data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // ArrayList for each type of project
  WorkingProjects: WorkingProjects[] = workingProjects;

  FinishedProjects: FinishedProjects[] = finishedProjects;

  // Getters for each type of project
  getWorkingProjects() {
    return this.WorkingProjects;
  }

  getFinishedProjects() {
    return this.FinishedProjects;
  }
  
}
