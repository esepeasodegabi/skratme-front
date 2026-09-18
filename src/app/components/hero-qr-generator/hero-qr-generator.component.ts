import { CommonModule } from "@angular/common";
import { Component, ElementRef, ViewChild, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { QrDemoService } from "../../core/qr-demo.service";
import { QrResultComponent } from "../qr-result/qr-result.component";

@Component({
  selector: "app-hero-qr-generator",
  standalone: true,
  imports: [CommonModule, FormsModule, QrResultComponent],
  templateUrl: "./hero-qr-generator.component.html",
})
export class HeroQrGeneratorComponent {
  @ViewChild("urlInput") urlInputRef?: ElementRef<HTMLInputElement>;

  readonly url = signal("");
  readonly touched = signal(false);

  constructor(public demo: QrDemoService) {}

  async onSubmit(): Promise<void> {
    this.touched.set(true);
    await this.demo.generate(this.url());
    if (this.demo.generated()) {
      queueMicrotask(() => {
        document.getElementById("qr-result-anchor")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    }
  }

  fillExample(): void {
    this.url.set("https://misitio.com/promocion");
    this.urlInputRef?.nativeElement.focus();
  }

  tryAnother(): void {
    this.demo.reset();
    this.url.set("");
    this.touched.set(false);
    this.urlInputRef?.nativeElement.focus();
  }
}
