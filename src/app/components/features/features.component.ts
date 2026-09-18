import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-features",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./features.component.html",
})
export class FeaturesComponent {
  readonly upcoming = [
    "Redirección según horario",
    "Redirección según idioma",
    "Redirección según ubicación",
    "Tests A/B",
    "Campañas",
    "Enlaces con caducidad",
    "Protección con contraseña",
    "API para generación masiva",
    "Webhooks",
    "Integraciones",
  ];
}
