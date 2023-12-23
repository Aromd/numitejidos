import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  public copyright: string;
  public disabledButton: boolean;


  constructor(){
    this.copyright = this.createCopyright();
    this.disabledButton = true;
  }

  ngOnInit(): void {
  }

  private getYear(): number {
    return new Date().getFullYear();
  }

  private createCopyright(): string {
    const copyrightText = `© ${this.getYear()} - Todos los derechos registrados`;
    return copyrightText;
  }

  public goNumi(): void {
    console.log('ir a numi');
  }

}
