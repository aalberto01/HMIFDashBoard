import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  private breakpointObserver = inject(BreakpointObserver);

  public menuItems = [
    { text: 'Indicadores KPI' , icon: 'bar_chart_4_bars', route: '/dashboard/kpi' },
    { text: 'Contactos' , icon: 'support_agent', route: '/dashboard/clientes' },
    { text: 'Leads' , icon: 'my_location', route: '/dashboard/leads' },
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
