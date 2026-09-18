import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { COMPARISON_ROWS } from "../../core/data";

@Component({
  selector: "app-pricing-comparison",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pricing-comparison.component.html",
})
export class PricingComparisonComponent {
  readonly rows = COMPARISON_ROWS;
  readonly columns = ["Sin registro", "Con cuenta", "Pro", "Monetiza"];
}
