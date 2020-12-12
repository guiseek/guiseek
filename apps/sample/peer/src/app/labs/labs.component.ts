import { AfterViewInit, Component, OnInit, Type, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

type ChildWithDrawerToggle = Type<any> & {
  drawer$: Observable<boolean>
  drawerToggle(): void
}

@Component({
  selector: 'sample-peer-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements AfterViewInit {
  @ViewChild('drawer') drawer: MatDrawer;

  constructor() { }

  onActivate(child: ChildWithDrawerToggle) {
    child.drawer$.subscribe(state => {
      if (this.drawer) {
        this.drawer.toggle()
      }
      console.log('ahahaha: ', state);

    })
  }

  ngAfterViewInit(): void {
    console.log(this.drawer);

  }

}
