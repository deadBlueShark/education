import { RouterModule, Routes } from '@angular/router';

import { RedditComponent } from './reddit/reddit.component'
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'reddit' },
  { path: 'reddit', component: RedditComponent },
  { path: 'inventory', component: InventoryComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
