import { Component } from '@angular/core';

import { LazyInjectService } from './services/lazy-inject.service';
import { LazyServiceService } from './services/lazy-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lazy-service';

  constructor(private lazyInject: LazyInjectService) {}

  async doSomething(): Promise<void> {
    const lazyService = await this.lazyInject.get<LazyServiceService>(() =>
      import('./services/lazy-service.service').then(
        (m) => m.LazyServiceService
      )
    );

    lazyService.changeBackground();
  }
}
