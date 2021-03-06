import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('pt');
  }

  ngOnInit() {
  }


  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
