import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  readonly mobileOpen = signal(false);

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  scrollTo(id: string): void {
    this.mobileOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
