import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
  {
    path: '',
    component: CvComponent,
  },
];
