import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-analytics-preview",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./analytics-preview.component.html",
})
export class AnalyticsPreviewComponent {
  readonly stats = [
    { label: "Escaneos", value: "2,847", delta: "+18%" },
    { label: "Visitantes únicos", value: "2,103", delta: "+12%" },
    { label: "Conversión", value: "68%", delta: "+4%" },
  ];

  readonly countries = [
    { name: "España", pct: 58 },
    { name: "México", pct: 21 },
    { name: "Argentina", pct: 12 },
    { name: "Otros", pct: 9 },
  ];

  readonly devices = [
    { name: "Móvil", pct: 81 },
    { name: "Escritorio", pct: 14 },
    { name: "Tablet", pct: 5 },
  ];

  readonly bars = [30, 42, 38, 55, 48, 62, 70, 58, 75, 68, 82, 90];

  readonly details = [
    { label: "Sistema operativo", value: "iOS · Android · Windows" },
    { label: "Navegador", value: "Safari · Chrome" },
    { label: "Campaña", value: "escaparate-verano" },
    { label: "QR utilizado", value: "skrat.me/x7kd2" },
  ];
}
