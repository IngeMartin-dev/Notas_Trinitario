import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'students',
    loadComponent: () => import('./students/students').then(m => m.Students)
  },
  {
    path: 'grades',
    loadComponent: () => import('./grades/grades').then(m => m.Grades)
  },
  {
    path: 'boletines',
    loadComponent: () => import('./boletines/boletines').then(m => m.Boletines)
  },
  {
    path: 'recoveries',
    loadComponent: () => import('./recoveries/recoveries').then(m => m.Recoveries)
  },
  {
    path: 'subjects',
    loadComponent: () => import('./subjects/subjects').then(m => m.Subjects)
  },
  {
    path: 'teachers',
    loadComponent: () => import('./teachers/teachers').then(m => m.Teachers)
  },
  {
    path: 'reports',
    loadComponent: () => import('./reports/reports').then(m => m.Reports)
  },
  {
    path: 'chats',
    loadComponent: () => import('./chats/chats').then(m => m.Chats)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings').then(m => m.Settings)
  },
  {
    path: 'directors-group',
    loadComponent: () => import('./directors-group/directors-group').then(m => m.DirectorsGroup)
  },
  {
    path: 'parents',
    loadComponent: () => import('./parents/parents').then(m => m.Parents)
  },
  {
    path: 'periods',
    loadComponent: () => import('./periods/periods').then(m => m.Periods)
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)
  }
];
