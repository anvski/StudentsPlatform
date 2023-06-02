import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  showFiller = false;
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

  onDraw() {
    this.drawer.toggle();
  }
}
