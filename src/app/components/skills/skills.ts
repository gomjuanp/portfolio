import { Component } from '@angular/core';
import { SkillsService } from '../../services/skills/skills';
import { StrongSkills, LearningSkills } from '../../services/skills/skill';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  // Constructor to import the SkillServe to use the Getters and Setters
  constructor(public skillsService: SkillsService) { }

  // Creating the Skill objects without initializing them
  StrongSkills!: StrongSkills;
  LearningSkills!: LearningSkills;

  // Creating the list for the Skill types
  strongSkills: StrongSkills[] = [];
  learningSkills: LearningSkills[] = [];

  // As soon as the web starts get the skills
  ngOnInit() {
    this.strongSkills = this.skillsService.getStrongSkill()
    this.learningSkills = this.skillsService.getLearningSkill();
  }

}
