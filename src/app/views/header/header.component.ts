import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  userProfile = {
    name: "John Doe", // This would come from your auth service
    isLoggedIn: true,
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  get showAnalyticsButton(): boolean {
    return (
      this.router.url.includes("dashboard") ||
      this.router.url.includes("analytics")
    );
  }

  get showSettingsButton(): boolean {
    return this.userProfile.isLoggedIn;
  }

  logout() {
    // Implement logout logic
    console.log("Logging out...");
  }
}
