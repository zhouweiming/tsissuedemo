import { Component } from '@angular/core';
import { PassportService } from "../../services/passport.service";

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  providers: [PassportService]
})
export class AppComponent {

}