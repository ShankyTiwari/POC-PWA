import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
		path: 'list',
		loadChildren: './components/character-list/character-list.module#CharacterListModule'
	}, {
		path: 'details/:id',
		loadChildren: './components/details/details.module#DetailsModule',
	}, {
		path: '',
		redirectTo: 'list',
		pathMatch: 'full'
	}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
