import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.css']
})
export class ActivityLogComponent extends BaseCtl {

  constructor(
    public locator: ServiceLocatorService,
    public route: ActivatedRoute
  ) {
    super(locator.endpoints.ACTIVITY_LOG, locator, route);
  }

  // ================= Validation =================
  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;

    flag = flag && validator.isNotNullObject(form.activityName);
    flag = flag && validator.isNotNullObject(form.performedBy);
    flag = flag && validator.isNotNullObject(form.activityTime);
    flag = flag && validator.isNotNullObject(form.activityStatus);

    return flag;
  }

  // ================= Populate Form =================
  populateForm(form, data) {
    form.id = data.id;
    form.activityName = data.activityName;
    form.performedBy = data.performedBy;
    form.activityTime = data.activityTime;
    form.activityStatus = data.activityStatus;
  }
}
