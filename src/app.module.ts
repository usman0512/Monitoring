import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RecordsService } from './records/records.service';
import { RecordsController } from './records/records.controller';
import { AttendanceService } from './attendance/attendance.service';
import { AttendanceController } from './attendance/attendance.controller';
import { ClearanceController } from './clearance/clearance.controller';
import { ClearanceService } from './clearance/clearance.service';
import { BulletinController } from './bulletin/bulletin.controller';
import { BulletinService } from './bulletin/bulletin.service';
import { Attendance, AttendanceSchema } from './schemas/attendance.schema';
import { Bulletin, BulletinSchema } from './schemas/bulletin.schema';
import { Clearance, ClearanceSchema } from './schemas/clearance.schema';
import { Records, RecordsSchema } from './schemas/records.schema';
import { ArchivedService } from './archived/archived.service';
import { ArchivedController } from './archived/archived.controller';
import { Archived, ArchivedSchema } from './schemas/archived.schema';
import { Media, MediaSchema } from './schemas/Media.schema';
import { MediaController } from './media/media.controller';
import { MediaService } from './media/media.service';
import { Students, StudentsSchema } from './schemas/students.schema';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';
import { Coordinator, CoordinatorSchema } from './schemas/coordinator.schema';
import { CoordinatorController } from './coordinator/coordinators.controller';
import { CoordinatorService } from './coordinator/coordinators.service';
import { Enrollment, EnrollmentSchema } from './schemas/enrollment.schema';
import { EnrollmentController } from './enrollment/enrollment.controller';
import { EnrollmentService } from './enrollment/enrollment.service';
import { Organization, OrganizationSchema } from './schemas/organization.schema';
import { OrganizationController } from './organization/organization.controller';
import { OrganizationService } from './organization/organization.service';
import { Task, TaskSchema } from './schemas/task.schema';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskSubmitted, TaskSubmittedSchema } from './schemas/task-submitted.schema';
import { TaskSubmittedController } from './task-submitted/task-submitted.controller';
import { TaskSubmittedService } from './task-submitted/task-submitted.service';
import { AuthModule } from './user/auth.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env.dev.local', '.env.dev', '.env.prod']
    }),
    MongooseModule.forFeature([{
      name: Attendance.name, schema: AttendanceSchema
    },
    {
      name: Bulletin.name, schema: BulletinSchema
    },
    {
      name: Clearance.name, schema: ClearanceSchema
    },
    {
      name: Records.name, schema: RecordsSchema
    },
    {
      name: Archived.name, schema: ArchivedSchema
    },
    {
      name: Media.name, schema: MediaSchema
    },
    {
      name: Students.name, schema: StudentsSchema
    },
    {
      name: User.name, schema: UserSchema
    },
    {
      name: Coordinator.name, schema: CoordinatorSchema
    },
    {
      name: Enrollment.name, schema: EnrollmentSchema
    },
    {
      name: Organization.name, schema: OrganizationSchema
    },
    {
      name: Task.name, schema: TaskSchema
    },
    {
      name: TaskSubmitted.name, schema: TaskSubmittedSchema
    }
    ]),
    MongooseModule.forRoot('mongodb://localhost/monitoring', {
      useFindAndModify: false
    }),
    AuthModule
  ],
  controllers: [AppController, AttendanceController, BulletinController, ClearanceController, RecordsController, ArchivedController, MediaController, StudentsController, UserController, CoordinatorController, EnrollmentController, OrganizationController, TaskController, TaskSubmittedController],
  providers: [AppService, AttendanceService, BulletinService, ClearanceService, RecordsService, ArchivedService, MediaService, StudentsService, UserService, CoordinatorService, EnrollmentService, OrganizationService, TaskService, TaskSubmittedService]
})
export class AppModule { }
