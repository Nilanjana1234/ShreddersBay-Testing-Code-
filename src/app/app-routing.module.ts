import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'frontend',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'frontend',
    loadChildren: () => import('./frontend/frontend.module').then( m => m.FrontendPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'my-cart',
    loadChildren: () => import('./customer/my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'my-booking',
    loadChildren: () => import('./customer/my-booking/my-booking.module').then( m => m.MyBookingPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./customer/my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'scrap-items',
    loadChildren: () => import('./customer/scrap-items/scrap-items.module').then( m => m.ScrapItemsPageModule)
  },
  {
    path: 'booking-details',
    loadChildren: () => import('./customer/booking-details/booking-details.module').then( m => m.BookingDetailsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./customer/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./customer/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'my-addr',
    loadChildren: () => import('./customer/my-addr/my-addr.module').then( m => m.MyAddrPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./customer/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'change-pass',
    loadChildren: () => import('./customer/change-pass/change-pass.module').then( m => m.ChangePassPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./customer/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./customer/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'customer-home',
    loadChildren: () => import('./customer/customer-home/customer-home.module').then( m => m.CustomerHomePageModule)
  },
  {
    path: 'dealer-home',
    loadChildren: () => import('./dealer/dealer-home/dealer-home.module').then( m => m.DealerHomePageModule)
  },
  {
    path: 'dealer',
    loadChildren: () => import('./dealer/dealer/dealer.module').then( m => m.DealerPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

