import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import BOTH HttpClient and HttpClientModule
import { CvServiceService } from './service/cv-service.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  providers: [CvServiceService]
})
export class CvComponent implements OnInit {
  
  profileData: any = [];
  constructor(private profileService: CvServiceService) {}

  ngOnInit(): void {
    this.profileService.getProfileData().subscribe(data => {
      this.profileData = data;
      console.info(data)
    });
  }

  deletedElement(id:number){
    console.info(this.profileData.technologies)
    this.profileData.technologies.splice(id,1)
  }
}
