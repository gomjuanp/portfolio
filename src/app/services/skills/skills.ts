import { Injectable } from '@angular/core';
import { StrongSkills, LearningSkills } from './skill';
import { strong, learning } from '../../assets/data/skills.json';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  // ArrayList for each type of Skill
  strongSkills: StrongSkills[] = strong;
  learningSkills: LearningSkills[] = learning;

  // Getters fot each type of Skill
  getStrongSkill() {
    return this.strongSkills;
  }

  getLearningSkill() {
    return this.learningSkills;
  }

}
