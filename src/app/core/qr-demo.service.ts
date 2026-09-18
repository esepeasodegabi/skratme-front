import { Injectable, computed, signal } from "@angular/core";
import * as QRCode from "qrcode";
import { PlanId } from "./models";

function randomShortCode(): string {
  const chars = "abcdefghjkmnpqrstuvwxyz23456789ABCDEFGHJKMNPQRSTUVWXYZ";
  let out = "";
  for (let i = 0; i < 6; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

function normalizeUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(candidate);
    if (!url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

@Injectable({ providedIn: "root" })
export class QrDemoService {
  readonly originalUrl = signal<string>("");
  readonly shortCode = signal<string>("");
  readonly qrDataUrl = signal<string | null>(null);
  readonly generated = signal(false);
  readonly generating = signal(false);
  readonly error = signal<string | null>(null);
  readonly selectedPlan = signal<PlanId>("free-guest");
  readonly adSharePercent = signal(50);

  readonly shortUrl = computed(() =>
    this.shortCode() ? `skrat.me/${this.shortCode()}` : ""
  );

  readonly revenuePotential = computed(() => {
    const p = this.adSharePercent();
    if (p < 35) return { label: "Moderado", width: 28 };
    if (p < 65) return { label: "Bueno", width: 55 };
    if (p < 90) return { label: "Alto", width: 78 };
    return { label: "Máximo", width: 100 };
  });

  async generate(rawUrl: string): Promise<void> {
    const normalized = normalizeUrl(rawUrl);
    if (!normalized) {
      this.error.set("Introduce una URL válida, por ejemplo https://misitio.com/promocion");
      return;
    }
    this.error.set(null);
    this.generating.set(true);
    try {
      const code = randomShortCode();
      const dataUrl = await QRCode.toDataURL(normalized, {
        width: 480,
        margin: 1,
        color: { dark: "#0f0f17ff", light: "#ffffffff" },
        errorCorrectionLevel: "M",
      });
      this.originalUrl.set(normalized);
      this.shortCode.set(code);
      this.qrDataUrl.set(dataUrl);
      this.generated.set(true);
    } finally {
      this.generating.set(false);
    }
  }

  reset(): void {
    this.generated.set(false);
    this.qrDataUrl.set(null);
    this.shortCode.set("");
    this.originalUrl.set("");
    this.error.set(null);
  }

  selectPlan(plan: PlanId): void {
    this.selectedPlan.set(plan);
  }
}
