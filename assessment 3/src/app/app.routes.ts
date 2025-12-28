import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Industries } from './pages/industries/industries';
import { Services } from './pages/services/services';

export const routes: Routes = [
    {
        path:'about',
        component: About
    },
    {
        path:'contactus',
        component: Contact
    },
    {
        path:'industries',
        component: Industries
    },
    {
        path:'services',
        component: Services
    },
    {
      path:'',
      component: About
    }
];
