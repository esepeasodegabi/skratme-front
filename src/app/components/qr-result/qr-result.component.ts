import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output, signal } from "@angular/core";
import { QrDemoService } from "../../core/qr-demo.service";

@Component({
  selector: "app-qr-result",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./qr-result.component.html",
})
export class QrResultComponent {
  @Output() tryAnotherEvent = new EventEmitter<void>();

  readonly copied = signal(false);
  readonly shared = signal(false);

  constructor(public demo: QrDemoService) {}

  async copyUrl(): Promise<void> {
    try {
      await navigator.clipboard.writeText(`https://${this.demo.shortUrl()}`);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1800);
    } catch {
      /* clipboard unavailable — silently ignore in demo */
    }
  }

  downloadQr(): void {
    const dataUrl = this.demo.qrDataUrl();
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `skratme-${this.demo.shortCode()}.png`;
    a.click();
  }

  async share(): Promise<void> {
    const url = `https://${this.demo.shortUrl()}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Mi QR de Skratme", url });
        return;
      } catch {
        /* user cancelled share sheet */
      }
    }
    await this.copyUrl();
    this.shared.set(true);
    setTimeout(() => this.shared.set(false), 1800);
  }
}
