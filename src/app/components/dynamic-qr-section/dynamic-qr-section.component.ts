import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-dynamic-qr-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dynamic-qr-section.component.html",
})
export class DynamicQrSectionComponent {
  readonly examples = [
    "Cambiar promociones",
    "Modificar una carta",
    "Cambiar una landing",
    "Sustituir un PDF",
    "Lanzar una campaña diferente",
  ];
}
