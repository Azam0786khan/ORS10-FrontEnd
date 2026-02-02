import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.REPORT, locator, route);
  }

  validateForm(form) {
    let validator = this.serviceLocator.dataValidator;
    let flag = true;

    flag = flag && validator.isNotNullObject(form.reportName);
    flag = flag && validator.isNotNullObject(form.generatedBy);
    flag = flag && validator.isNotNullObject(form.reportStatus);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.reportName = data.reportName;
    form.generatedBy = data.generatedBy;
    form.reportStatus = data.reportStatus;
  }
}
