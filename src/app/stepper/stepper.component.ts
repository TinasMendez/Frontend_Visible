import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Job {
  value: string;
  viewValue: string;
}

interface Industry {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  selectedJob: string = ''; 
  selectedIndustry: string = ''; 
  selectedCelebrities: string[] = [];

  jobs: Job[] = [
    { value: 'developer', viewValue: 'Cargo 1' },
    { value: 'designer', viewValue: 'Cargo 2' },
    { value: 'manager', viewValue: 'Cargo 3' }
  ];

  industry: Industry[] = [
    { value: 'industry1', viewValue: 'Industria 1' }, 
    { value: 'industry2', viewValue: 'Industria 2' },
    { value: 'industry3', viewValue: 'Industria 3' }
  ];

  celebrityOptions: string[] = [
    'Barak Obama',
    'Angela Merkel',
    'Xi Jinping',
    'Elon Musk',
    'Malala Yousafzai',
    'Papa Francisco',
    'Vladimir Putin',
    'Greta Thunberg',
    'Nelson Mandela',
    'Jeff Bezos',
    'Jacinda Ardern',
    'Kim Jong-un',
    'Kamala Harris',
    'Donald Trump',
    'Michelle Obama',
    'Megan Markle',
  ]
userInput1: any;
userInput2: any;
userInput3: any;
  isSelected(option: string): boolean {
    const isSelected = this.selectedCelebrities.includes(option);
    console.log('Is Selected:', option, isSelected);
    return isSelected;
  }

  toggleSelection(option: string): void {
    console.log('Toggle Selection:', option);
    const index = this.selectedCelebrities.indexOf(option);
    if (index >= 0) {
      // If already selected, deselect
      this.selectedCelebrities.splice(index, 1);
    } else {
      // If not selected, select
      this.selectedCelebrities.push(option);
    }
    console.log('Selected Celebrities:', this.selectedCelebrities);
  }


  onJobSelectionChange() {
    console.log('Selected Job:', this.selectedJob);
  }

  onIndustrySelectionChange() {
    console.log('Selected Industry:', this.selectedIndustry);
  }

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  navigateProfileResult() {
    this.router.navigate(['/profile-result']);
  }

}