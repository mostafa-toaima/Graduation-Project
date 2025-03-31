import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'path-container',
  imports: [CommonModule, MatTooltipModule, ModelComponent],
  templateUrl: './path-container.component.html',
  styleUrl: './path-container.component.css'
})
export class PathContainerComponent {
  start: boolean = true;
  inProgress: boolean = false;
  complete: boolean = false;
  hover: boolean = false;
  visibleModel: boolean = false;

  @Input() filteredStages: any[] = [];
  @Input() activeStage: string | null = null;
  @Input() activeStep: string | null = null;
  @Input() completedSteps: string[] = [];
  @Input() inProgressSteps: string[] = [];
  @Input() activeStages: any;

  @Output() stageToggled = new EventEmitter<string>();
  @Output() stepToggled = new EventEmitter<string>();
  @Output() stepStarted = new EventEmitter<string>();
  @Output() stepCompleted = new EventEmitter<string>();
  @Output() stepReset = new EventEmitter<string>();

  toggleStep(stepId: string): void {
    this.stepToggled.emit(stepId);
  }

  startStep(stepId: string): void {
    this.hover = false
    this.start = false;
    this.complete = false;
    this.inProgress = true;
    this.stepStarted.emit(stepId);
  }

  completeStep(stepId: string): void {
    this.start = false;
    this.complete = true;
    this.inProgress = false;
    this.stepCompleted.emit(stepId);
  }

  resetStep(stepId: string): void {
    this.stepReset.emit(stepId);
  }


  constructor() {
    this.activeStages = this.filteredStages.map(stage => stage.id);
  }

  toggleStage(stageId: any): void {
    if (this.activeStages.includes(stageId)) {
      this.activeStages = this.activeStages.filter((id: any) => id !== stageId);
    } else {
      this.activeStages.push(stageId);
    }
    this.stageToggled.emit(this.activeStages);
  }

  openSkillsModal(step: any): void {
    // Implement the logic to open the skills modal here
    console.log('Open skills modal for step:', step);

  }


}
