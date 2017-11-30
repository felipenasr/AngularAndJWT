import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { RouterModule } from "@angular/router";
import { TableComponent } from "./list/table/table.component";
import { AuthGuardRouterService } from "./services/auth-guard-router.service";
import { LogoutComponent } from "./logout/logout.component";
import { TesteComponent } from "./teste/teste.component";


const appRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "logout",
        component: LogoutComponent,
        canActivate: [AuthGuardRouterService]        
    },
    {
        path: 'funcionarios',
        component: TableComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: "teste",
        component: TesteComponent
    }
]

const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export default routing;