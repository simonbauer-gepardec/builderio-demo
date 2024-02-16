import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BuilderModule } from '@builder.io/angular';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BuilderModule, PageNotFoundComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  noBuilderPageForUrl = signal(false);

  onBuilderComponentLoad($event: unknown) {
    this.noBuilderPageForUrl.set(!$event);
  }

  onBuilderComponentError() {
    this.noBuilderPageForUrl.set(false);
  }
}
