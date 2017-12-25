import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { RegisterComponent } from './pages/register/register.component';

let routes: Routes = [
	{
		path: '',
		component: PokemonListComponent,
		pathMatch: 'full'		
	},
	{
		path: 'details/:id',
		component: PokemonDetailsComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{ 	path: '**', 
		redirectTo: '' 
	}
];

const routesModule = RouterModule.forRoot(routes);
export { routesModule };
