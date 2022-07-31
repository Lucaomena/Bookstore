import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { SuporteComponent } from './components/pages/suporte/suporte.component';


const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'suporte', component: SuporteComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'sign', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
