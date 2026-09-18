import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { QrDemoService } from "../../core/qr-demo.service";

@Component({
  selector: "app-final-cta",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./final-cta.component.html",
})
export class FinalCtaComponent {
  readonly url = signal("");

  constructor(public demo: QrDemoService) {}

  async onSubmit(): Promise<void> {
    await this.demo.generate(this.url());
    if (this.demo.generated()) {
      document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
