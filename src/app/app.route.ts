import { Routes } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";  
import { SignUpComponent } from "./menu/sign-up/sign-up.component"; 
import { UserProfileComponent } from "./menu/user-profile/user-profile.component";


const ROUTES: Routes = [
    {path:'menu', component: MenuComponent },
    {path:'sign-up', component: SignUpComponent},
    {path:'user-profile', component: UserProfileComponent},
    {path: '', redirectTo:'user-profile' ,pathMatch:'full'},
];


export{ROUTES};