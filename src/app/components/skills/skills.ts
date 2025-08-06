import { Component, Input, OnInit, computed, inject } from '@angular/core';
import { SkillsService } from '../../services/skills/skills';
import { StrongSkills, LearningSkills } from '../../services/skills/skill';
import { languages } from '../../assets/data/textContent.json';
import { Language } from '../../language';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})

export class Skills implements OnInit {

  constructor(public skillsService: SkillsService) { }

  // Storing all type of skills
  StrongSkills!: StrongSkills;
  LearningSkills!: LearningSkills;
  strongSkills: StrongSkills[] = [];
  learningSkills: LearningSkills[] = [];

  // Getting the input from the app about the theme mode
  @Input()isDarkMode!: boolean;

  // Get the default language from the app
  private languageService = inject(Language);

  // Define the content of each field
  protected Title = computed(() => this.textContent().title);
  protected Strong = computed(() => this.textContent().strong);
  protected Learning = computed(() => this.textContent().learning);

  // On Init to retrive the skills in its respective array list
  ngOnInit() {
    this.strongSkills = this.skillsService.getStrongSkill()
    this.learningSkills = this.skillsService.getLearningSkill();
  }

  // Use computed signals to derive the text content based on the current language.
  // The template will automatically update when the language changes.
  private textContent = computed(() => {
    const lang = this.languageService.currentLanguage();
    return lang === 'sp' ? languages.spanish.skills : languages.english.skills;
    
  });



}
