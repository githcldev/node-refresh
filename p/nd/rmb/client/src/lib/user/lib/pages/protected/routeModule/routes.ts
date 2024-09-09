import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { LogoutComp } from '../pages/logout/comp';
import { ProfileComp } from '../pages/profile/comp';
import { PostsComp } from '../pages/posts/comp';
import { PostComp } from '../pages/post/comp';
import { PostEditComp } from '../pages/post-edit/comp';
export const ProtectedRoutes: Routes = [
  {
    path: 'user',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'logout',
        component: LogoutComp },
      {
        path: 'profile',
        component: ProfileComp },
      {
        path: 'posts',
        component: PostsComp,
        children: [
          { path: ':id', component: PostComp },
          { path: 'edit/:id', component: PostEditComp }
        ]
      }
    ]
  }
  // { path: 'profile', component: ProfileComp, canActivate: [AuthGuard] },
  // { path: 'posts', component: PostsComp, canActivate: [AuthGuard] },
  // { path: 'edit-post', component: EditPostComp, canActivate: [AuthGuard] },
];
