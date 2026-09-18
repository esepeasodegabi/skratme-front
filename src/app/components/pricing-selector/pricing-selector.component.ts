import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PRICING_PLANS } from "../../core/data";
import { PlanId } from "../../core/models";
import { QrDemoService } from "../../core/qr-demo.service";

@Component({
  selector: "app-pricing-selector",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./pricing-selector.component.html",
})
export class PricingSelectorComponent {
  readonly plans = PRICING_PLANS;

  constructor(public demo: QrDemoService) {}

  select(id: PlanId): void {
    this.demo.selectPlan(id);
  }

  onSlider(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.demo.adSharePercent.set(value);
  }

  accentClasses(accent: string, selected: boolean): string {
    const map: Record<string, string> = {
      ink: selected
        ? "border-ink-950 ring-2 ring-ink-950/10"
        : "border-ink-950/[0.08] hover:border-ink-950/20",
      brand: selected
        ? "border-brand-500 ring-2 ring-brand-500/15"
        : "border-ink-950/[0.08] hover:border-brand-300",
      amber: selected
        ? "border-amber-500 ring-2 ring-amber-500/15"
        : "border-ink-950/[0.08] hover:border-amber-300",
      mint: selected
        ? "border-mint-500 ring-2 ring-mint-500/15"
        : "border-ink-950/[0.08] hover:border-mint-300",
    };
    return map[accent] ?? map["ink"];
  }
}
