import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-how-it-works",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./how-it-works.component.html",
})
export class HowItWorksComponent {
  readonly steps = [
    { n: "1", title: "Pegas tu enlace", desc: "Cualquier URL, tan larga como sea." },
    { n: "2", title: "Creamos tu URL corta", desc: "skrat.me/xxxxx, lista al instante." },
    { n: "3", title: "Generamos tu QR", desc: "Descárgalo o compártelo donde quieras." },
    { n: "4", title: "Ves las estadísticas", desc: "Y cambias su comportamiento cuando quieras." },
  ];

  readonly useCases = [
    { icon: "📣", label: "Campañas publicitarias" },
    { icon: "📄", label: "Folletos" },
    { icon: "🪟", label: "Escaparates" },
    { icon: "🍽️", label: "Mesas de restaurantes" },
    { icon: "💳", label: "Tarjetas de visita" },
    { icon: "📦", label: "Packaging" },
    { icon: "🪧", label: "Carteles" },
    { icon: "🎫", label: "Eventos" },
    { icon: "📱", label: "Redes sociales" },
    { icon: "🏠", label: "Inmobiliarias" },
  ];
}
