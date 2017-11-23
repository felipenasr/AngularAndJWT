import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { RouterModule } from "@angular/router";
import { TableComponent } from "./list/table/table.component";
import { AuthGuardRouterService } from "./services/auth-guard-router.service";


const appRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },{
        path: 'funcionarios',
        component: TableComponent,
        canActivate: [AuthGuardRouterService]
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    }
]

const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export default routing;