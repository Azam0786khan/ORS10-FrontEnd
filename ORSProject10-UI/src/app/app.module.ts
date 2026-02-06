import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';


/* ================= CORE / COMMON ================= */
import { HttpServiceService } from './http-service.service';
import { AuthService } from './auth.service';
import { DataValidator } from './utility/data-validator';
import { CookieService } from 'ngx-cookie-service';

/* ================= LAYOUT ================= */
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';

/* ================= AUTH ================= */
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';

/* ================= DASHBOARD ================= */
import { DashboardComponent } from './dashboard/dashboard.component';

/* ================= MESSAGE ================= */
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';

/* ================= USER ================= */
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { MyprofileComponent } from './user/myprofile.component';

/* ================= ROLE ================= */
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role/role-list.component';

/* ================= COLLEGE ================= */
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college/college-list.component';

/* ================= STUDENT ================= */
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';

/* ================= COURSE ================= */
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';

/* ================= SUBJECT ================= */
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject/subject-list.component';

/* ================= FACULTY ================= */
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';

/* ================= TIMETABLE ================= */
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable/timetable-list.component';

/* ================= MARKSHEET ================= */
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { MarksheetmeritListComponent } from './marksheet/marksheetmerit-list.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';

/* ================= FILE ================= */
import { FileComponent } from './file/file.component';

/* ================= PRODUCT ================= */
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';

/* ================= CUSTOMER ================= */
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customer-list.component';

/* ================= SETTINGS ================= */
import { SettingsComponent } from './settings/settings.component';
import { SettingslistComponent } from './settings/settingslist.component';

/* ================= REPORT ================= */
import { ReportComponent } from './report/report.component';
import { ReportlistComponent } from './report/reportlist.component';

/* ================= INQUIRY ================= */
import { InquiryComponent } from './inquiry/inquiry.component';
import { InquiryListComponent } from './inquiry/inquirylist.component';
import { ProjectComponent } from './project/project.component';
import { ProjectlistComponent } from './project/projectlist.component';
import { ActivityLogComponent } from './activitylog/activitylog.component';
import { ActivityLogListComponent } from './activitylog/activityloglist.component';


export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    SpinnerComponent,

    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    DashboardComponent,

    MessageComponent,
    MessageListComponent,

    UserComponent,
    UserListComponent,
    ChangepasswordComponent,
    MyprofileComponent,

    RoleComponent,
    RoleListComponent,

    CollegeComponent,
    CollegeListComponent,

    StudentComponent,
    StudentListComponent,

    CourseComponent,
    CourseListComponent,

    SubjectComponent,
    SubjectListComponent,

    FacultyComponent,
    FacultyListComponent,

    TimetableComponent,
    TimetableListComponent,

    MarksheetComponent,
    MarksheetListComponent,
    MarksheetmeritListComponent,
    GetmarksheetComponent,

    FileComponent,

    ProductComponent,
    ProductListComponent,

    CustomerComponent,
    CustomerlistComponent,

    SettingsComponent,
    SettingslistComponent,

    ReportComponent,
    ReportlistComponent,

    InquiryComponent,
    InquiryListComponent,
    ProjectComponent,
    ProjectlistComponent,
    ActivityLogComponent,
    ActivityLogListComponent,
     PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: myHttpLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    },
    HttpServiceService,
    DataValidator,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
