import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { AdminClientesComponent } from './pages/admin/admin-clientes/admin-clientes.component';
import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'login', 
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'sobre',
        component: SobreComponent,
        title: 'Sobre'
    },
    {
        path: 'ajuda',
        component: AjudaComponent,
        title: 'Ajuda'
    },
    {
        path: 'admin-clientes-listar',
        component: AdminClientesComponent,
        title: 'Listar Clientes'
    },
    {
        path: 'cliente-cadastro',
        component: ClienteFormComponent,
        title: 'Cadastro Clientes'
    }
];
