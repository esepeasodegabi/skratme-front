import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly columns = [
    {
      title: "Producto",
      links: ["Generador de QR", "URLs cortas", "Estadísticas", "Precios", "API"],
    },
    {
      title: "Soluciones",
      links: ["Restaurantes", "Alojamientos", "Eventos", "Inmobiliarias", "Profesionales"],
    },
    {
      title: "Compañía",
      links: ["Sobre Skratme", "Blog", "Contacto"],
    },
    {
      title: "Legal",
      links: ["Privacidad", "Términos", "Cookies"],
    },
  ];
}
