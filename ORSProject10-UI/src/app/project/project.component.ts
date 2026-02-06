import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.PROJECT, locator, route);
  }

  validateForm(form) {
    let validator = this.serviceLocator.dataValidator;
    let flag = true;

    flag = flag && validator.isNotNullObject(form.projectName);
    flag = flag && validator.isNotNullObject(form.projectCategory);
    flag = flag && validator.isNotNullObject(form.projectDob);
    flag = flag && validator.isNotNullObject(form.projectVersion);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.projectName = data.projectName;
    form.projectCategory = data.projectCategory;
    form.projectDob = data.projectDob;
    form.projectVersion = data.projectVersion;
  }
}
