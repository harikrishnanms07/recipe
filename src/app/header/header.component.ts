import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();
  OnSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
