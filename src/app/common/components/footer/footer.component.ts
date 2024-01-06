import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'common-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FooterComponent {

  public currentYear: number;

  constructor() {
    this.currentYear = this.getCurrentYear();
  }

  public getCurrentYear(): number {
    const thisYearIs = new Date().getFullYear();
    return thisYearIs;
  }

}
