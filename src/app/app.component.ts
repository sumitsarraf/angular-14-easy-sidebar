import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  openSidebar: boolean = true;
  showSidebar: boolean = false;
  isLoginPage: boolean = true;

  menuSidebar = [
    {
      link_name: "Dashboard",
      link: "/dashboard",
      icon: "bx bx-grid-alt",
      sub_menu: []
    }, {
      link_name: "Category",
      link: null,
      icon: "bx bx-collection",
      sub_menu: [
        {
          link_name: "HTML & CSS",
          link: "/html-n-css",
        }, {
          link_name: "JavaScript",
          link: "/javascript",
        }, {
          link_name: "PHP & MySQL",
          link: "/php-n-mysql",
        }
      ]
    }, {
      link_name: "Posts",
      link: null,
      icon: "bx bx-book-alt",
      sub_menu: [
        {
          link_name: "Web Design",
          link: "/posts/web-design",
        }, {
          link_name: "Login Form",
          link: "/posts/login-form",
        }, {
          link_name: "Card Design",
          link: "/posts/card-design",
        }
      ]
    }, {
      link_name: "Analytics",
      link: "/analytics",
      icon: "bx bx-pie-chart-alt-2",
      sub_menu: []
    }, {
      link_name: "Chart",
      link: "/chart",
      icon: "bx bx-line-chart",
      sub_menu: []
    }, {
      link_name: "Plugins",
      link: null,
      icon: "bx bx-plug",
      sub_menu: [
        {
          link_name: "UI Face",
          link: "/ui-face",
        }, {
          link_name: "Pigments",
          link: "/pigments",
        }, {
          link_name: "Box Icons",
          link: "/box-icons",
        }
      ]
    }, {
      link_name: "Explore",
      link: "/explore",
      icon: "bx bx-compass",
      sub_menu: []
    }, {
      link_name: "History",
      link: "/history",
      icon: "bx bx-history",
      sub_menu: []
    }, {
      link_name: "Setting",
      link: "/setting",
      icon: "bx bx-cog",
      sub_menu: []
    }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = event.url === '/login' || event.url === '/';
      this.showSidebar = this.authService.isLoggedIn() && !this.isLoginPage;
    });
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }

  logout() {
    this.authService.logout();
  }
}