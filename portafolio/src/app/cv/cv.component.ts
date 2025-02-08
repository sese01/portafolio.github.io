import { Component,inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component';
import { PortfolioDialogComponent } from './portfolio-dialog/portfolio-dialog.component';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';
import { EducationDialogComponent } from './education-dialog/education-dialog.component';

@Component({
  selector: 'app-cv',
  imports: [MatIconModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

  readonly dialog = inject(MatDialog);

  openExperienceDialog(): void {
    const dialogRef = this.dialog.open(ExperienceDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }

  openPortfolioDialog(): void {
    const dialogRef = this.dialog.open(PortfolioDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }

  openSkillsDialog(): void {
    const dialogRef = this.dialog.open(SkillsDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }

  openEducationDialog(): void {
    const dialogRef = this.dialog.open(EducationDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }


}
