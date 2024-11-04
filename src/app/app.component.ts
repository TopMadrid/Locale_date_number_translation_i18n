import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private translate = inject(TranslateService);

  param = {
    value: 'Internacionalización de Angular'
  }
  title = 'ejercicios_i18n';
  currentDate = new Date();
  currentLocale!: string;
  	
sampleNumber = 123456.789;
currentRegion!: string;
language!: string; 

  ngOnInit() {
    this.translate.setDefaultLang('es-ES'); // Si no encuentra un idioma por defecto es español
    this.translate.use('en');

    //Traducción modo lógico: 

    //De modo asincrono
    this.translate.get('WELCOME').subscribe((texto: string) => console.log(texto));
    //De modo síncrono
    console.log(this.translate.instant('WELCOME'));

    
      this.language = 'es-ES';
    
  }

  changeLanguage(event: any){
    this.language = event.target.value; 
    this.translate.use(this.language);
   if (this.language !== 'es-ES' && this.language !== 'es-MX' ) 
        this.currentLocale = 'en-US'
    
  }

  changeRegion(event: any){
    this.language = event.target.value;
    this.translate.use( this.language);
  }
}
