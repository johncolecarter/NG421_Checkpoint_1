import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { TodotableComponent } from './todotable/todotable.component';


const routes: Routes = [
    { path: 'board', component: BoardComponent },
    { path: 'table', component: TodotableComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
