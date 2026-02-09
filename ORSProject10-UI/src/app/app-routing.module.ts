import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';

import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { MarksheetmeritListComponent } from './marksheet/marksheetmerit-list.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';

import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college/college-list.component';

import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { MyprofileComponent } from './user/myprofile.component';

import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role/role-list.component';

import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';

import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject/subject-list.component';

import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';

import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable/timetable-list.component';

import { FileComponent } from './file/file.component';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customer-list.component';

import { SettingsComponent } from './settings/settings.component';
import { SettingslistComponent } from './settings/settingslist.component';

import { ReportComponent } from './report/report.component';
import { ReportlistComponent } from './report/reportlist.component';

import { InquiryComponent } from './inquiry/inquiry.component';
import { InquiryListComponent } from './inquiry/inquirylist.component';

import { ProjectComponent } from './project/project.component';
import { ProjectlistComponent } from './project/projectlist.component';

import { ActivityLogComponent } from './activitylog/activitylog.component';
import { ActivityLogListComponent } from './activitylog/activityloglist.component';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

   { path: 'dashboard/myNav', redirectTo: 'dashboard', pathMatch: 'full' },

  // ===== ACTIVITY LOG =====
  { path: 'activitylog', component: ActivityLogComponent },
  { path: 'activitylog/:id', component: ActivityLogComponent },
  { path: 'activityloglist', component: ActivityLogListComponent },

  // ===== PROJECT =====
  { path: 'project', component: ProjectComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'projectlist', component: ProjectlistComponent },

  // ===== INQUIRY =====
  { path: 'inquiry', component: InquiryComponent },
  { path: 'inquiry/:id', component: InquiryComponent },
  { path: 'inquirylist', component: InquiryListComponent },

  // ===== REPORT =====
  { path: 'report', component: ReportComponent },
  { path: 'report/:id', component: ReportComponent },
  { path: 'reportlist', component: ReportlistComponent },

  // ===== SETTINGS =====
  { path: 'settings', component: SettingsComponent },
  { path: 'settings/:id', component: SettingsComponent },
  { path: 'settingslist', component: SettingslistComponent },

  // ===== CUSTOMER =====
  { path: 'customer', component: CustomerComponent },
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'customerlist', component: CustomerlistComponent },

  // ===== PRODUCT =====
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'productlist', component: ProductListComponent },

  // ===== AUTH / COMMON =====
  { path: 'login', component: LoginComponent },
  { path: 'login/:userparams', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'signup', component: SignUpComponent },

  { path: 'loader', component: LoaderComponent },
  { path: 'spinner', component: SpinnerComponent },

  // ===== MESSAGE =====
  { path: 'message', component: MessageComponent },
  { path: 'message/:id', component: MessageComponent },
  { path: 'messagelist', component: MessageListComponent },

  // ===== MARKSHEET =====
  { path: 'marksheet', component: MarksheetComponent },
  { path: 'marksheet/:id', component: MarksheetComponent },
  { path: 'marksheetlist', component: MarksheetListComponent },
  { path: 'marksheetmeritlist', component: MarksheetmeritListComponent },
  { path: 'getmarksheet', component: GetmarksheetComponent },

  // ===== COLLEGE =====
  { path: 'college', component: CollegeComponent },
  { path: 'college/:id', component: CollegeComponent },
  { path: 'collegelist', component: CollegeListComponent },

  // ===== STUDENT =====
  { path: 'student', component: StudentComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'studentlist', component: StudentListComponent },

  // ===== USER =====
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'myprofile', component: MyprofileComponent },

  // ===== ROLE =====
  { path: 'role', component: RoleComponent },
  { path: 'role/:id', component: RoleComponent },
  { path: 'rolelist', component: RoleListComponent },

  // ===== COURSE =====
  { path: 'course', component: CourseComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: 'courselist', component: CourseListComponent },

  // ===== FACULTY =====
  { path: 'faculty', component: FacultyComponent },
  { path: 'faculty/:id', component: FacultyComponent },
  { path: 'facultylist', component: FacultyListComponent },

  // ===== TIMETABLE =====
  { path: 'timetable', component: TimetableComponent },
  { path: 'timetable/:id', component: TimetableComponent },
  { path: 'timetablelist', component: TimetableListComponent },

  // ===== SUBJECT =====
  { path: 'subject', component: SubjectComponent },
  { path: 'subject/:id', component: SubjectComponent },
  { path: 'subjectlist', component: SubjectListComponent },

  // ===== FILE =====
  { path: 'file', component: FileComponent },

  // ===== 404 (ALWAYS LAST) =====
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
