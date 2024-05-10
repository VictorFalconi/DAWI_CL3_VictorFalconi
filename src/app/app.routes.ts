import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LlamadaComponent } from './llamada/llamada.component';
import { EdadesComponent } from './edades/edades.component';
import { CapicuaComponent } from './capicua/capicua.component';
import { AsciiComponent } from './ascii/ascii.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'llamada', component: LlamadaComponent},
    {path: 'edades', component: EdadesComponent},
    {path: 'capicua', component: CapicuaComponent},
    {path: 'ascii', component: AsciiComponent},
];
