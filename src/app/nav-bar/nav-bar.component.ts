import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @ViewChild(SideNavComponent, { static: false }) sidenav!: SideNavComponent;

  onShowMenu() {
    this.sidenav.onDraw();
  }
}
