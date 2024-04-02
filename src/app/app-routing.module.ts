import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '', canActivate: [authGuard] , loadComponent: () => import('./layouts/blank-layout/blank-layout.component').then((m) => m.BlankLayoutComponent), children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent) },
      { path: 'cart', loadComponent: () => import('./components/cart/cart.component').then((m) => m.CartComponent) },
      { path: 'products', loadComponent:()=> import('./components/products/products.component').then((m)=>m.ProductsComponent) },
      { path: 'categories', loadComponent: () => import('./components/categories/categories.component').then((m) => m.CategoriesComponent) },
      { path: 'specificCategory/:id', loadComponent: () => import('./components/specific-category/specific-category.component').then((m) => m.SpecificCategoryComponent) },
      { path: 'brands', loadComponent: () => import('./components/brands/brands.component').then((m) => m.BrandsComponent) },
      { path: 'specificBrand/:id', loadComponent: () => import('./components/specific-brand/specific-brand.component').then((m) => m.SpecificBrandComponent) },
      { path: 'details/:id', loadComponent: () => import('./components/details/details.component').then((m) => m.DetailsComponent) },
      { path: 'wishList', loadComponent: () => import('./components/wish-list/wish-list.component').then((m) => m.WishListComponent) },
      { path: 'userAddress/:id', loadComponent: () => import('./components/user-adderss/user-adderss.component').then((m) => m.UserAdderssComponent) },
      { path: 'cashDetails/:id', loadComponent: () => import('./components/cash-details/cash-details.component').then((m) => m.CashDetailsComponent) },
      { path: 'allorders', loadComponent: () => import('./components/all-orders/all-orders.component').then((m) => m.AllOrdersComponent) },
      { path: 'updatePassword', loadComponent: () => import('./components/reset-password/reset-password.component').then((m) => m.ResetPasswordComponent) },
    ]
  },
  {
    path: '', loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent), children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./components/register/register.component').then((m) => m.RegisterComponent) },
      { path: 'forgotPassword', loadComponent: () => import('./components/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent) },
      { path: '**', loadComponent: () => import('./components/not-found/not-found.component').then((m) => m.NotFoundComponent) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
