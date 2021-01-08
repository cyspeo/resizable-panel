import { Component, Input } from "@angular/core";

@Component({
  selector: "rszbl-panel",
  templateUrl: "./rszbl-panel.component.html",
  styles: [`./rszbl-panel.component.css`]
})
export class RszblPanelComponent {
  @Input() name: string;
}
