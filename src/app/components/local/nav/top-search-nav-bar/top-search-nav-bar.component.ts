import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-top-search-nav-bar',
  templateUrl: './top-search-nav-bar.component.html',
  styleUrls: ['./top-search-nav-bar.component.scss'],
})
export class TopSearchNavBarComponent implements OnInit {
  public sidebarShow: boolean = false;
  isLoginUserFlag = false;
  constructor(private cookieService: CookieService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoginUser();
  }

  isLoginUser() {
    this.authService.isloggedInUser.subscribe(value => this.isLoginUserFlag = value);
    if (
      this.cookieService.get('userToken') !== null &&
      this.cookieService.get('userToken') !== ''
    ) {
      this.isLoginUserFlag = true;
    } else {
      this.isLoginUserFlag = false;
    }
  }

  closeSideNav(sidebarShow: boolean) {
    this.sidebarShow = sidebarShow;
  }
  navigateProfile() {
    this.sidebarShow = !this.sidebarShow;
  }
  navigateLogin() {
    this.router.navigate(['/login']);
  }

  isLogout(event: boolean) {

    if (event) {
      this.isLoginUser();
    }

  }
}
