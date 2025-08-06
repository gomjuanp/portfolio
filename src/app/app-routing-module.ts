import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes having empty childern to have the URL path for language selection
export const routes: Routes = [
    {
        path: 'en',
        children: []
    },
    {
        path: 'sp',
        children: []
    },
    { path: '', redirectTo: '/en', pathMatch: 'full' },
    { path: '**', redirectTo: '/en', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
