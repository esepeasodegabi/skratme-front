import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { FAQ_ITEMS } from "../../core/data";

@Component({
  selector: "app-faq",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./faq.component.html",
})
export class FaqComponent {
  readonly items = FAQ_ITEMS;
  readonly openIndex = signal<number | null>(0);

  toggle(i: number): void {
    this.openIndex.update((current) => (current === i ? null : i));
  }
}
