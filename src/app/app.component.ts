import { Component } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroQrGeneratorComponent } from "./components/hero-qr-generator/hero-qr-generator.component";
import { PricingSelectorComponent } from "./components/pricing-selector/pricing-selector.component";
import { PricingComparisonComponent } from "./components/pricing-comparison/pricing-comparison.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { VerticalSolutionsComponent } from "./components/vertical-solutions/vertical-solutions.component";
import { AnalyticsPreviewComponent } from "./components/analytics-preview/analytics-preview.component";
import { DynamicQrSectionComponent } from "./components/dynamic-qr-section/dynamic-qr-section.component";
import { FeaturesComponent } from "./components/features/features.component";
import { FaqComponent } from "./components/faq/faq.component";
import { FinalCtaComponent } from "./components/final-cta/final-cta.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavbarComponent,
    HeroQrGeneratorComponent,
    PricingSelectorComponent,
    PricingComparisonComponent,
    HowItWorksComponent,
    VerticalSolutionsComponent,
    AnalyticsPreviewComponent,
    DynamicQrSectionComponent,
    FeaturesComponent,
    FaqComponent,
    FinalCtaComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
