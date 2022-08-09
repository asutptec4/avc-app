import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent {
  langList: string[] = ['en', 'ru'];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.langList);
    this.translate.setDefaultLang(this.langList[0]);
  }

  selected(lang: string) {
    this.translate.use(lang);
  }
}
