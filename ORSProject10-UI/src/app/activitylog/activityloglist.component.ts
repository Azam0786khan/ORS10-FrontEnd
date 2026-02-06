import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-activityloglist',
  templateUrl: './activityloglist.component.html',
  styleUrls: ['./activityloglist.component.css']
})
export class ActivityLogListComponent extends BaseListCtl {

  constructor(
    public locator: ServiceLocatorService,
    public route: ActivatedRoute
  ) {
    super(locator.endpoints.ACTIVITY_LOG, locator, route);
  }
}
