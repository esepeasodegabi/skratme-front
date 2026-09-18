import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { VERTICALS_FEATURED, VERTICALS_MORE } from "../../core/data";

@Component({
  selector: "app-vertical-solutions",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./vertical-solutions.component.html",
})
export class VerticalSolutionsComponent {
  readonly featured = VERTICALS_FEATURED;
  readonly more = VERTICALS_MORE;
  readonly showAll = signal(false);

  toggle(): void {
    this.showAll.update((v) => !v);
  }
}
