import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

import { fullColorIcons } from '@app/icons-provider.module';
import { CivicIconLiteral } from './generated/civic.icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  constructor(private iconService: NzIconService) {
    this.addIcons(fullColorIcons);
  }

  // TODO: switch to twotone civic custom icons ('civic-[entity]') exclusively.
  // Registering 'civic:[entity]' full color icons here for backwards compatibility
  private addIcons(icons: CivicIconLiteral[]): void {
    icons.forEach((icon: CivicIconLiteral) => {
      const regex = /Fullcolor/i;
      const name = 'civic:' + icon.name.replace(regex, '');
      this.iconService.addIconLiteral(name, icon.data);
    })
  }
}