import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimsaService } from './prisma/primsa.service';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { ClassStudentsController } from './students/class-students.controller';
import { SchoolController } from './school/school.controller';
import { SchoolService } from './school/school.service';
import { StudentContactsController } from './student-contacts/student-contacts.controller';
import { StudentContactsService } from './student-contacts/student-contacts.service';
import { ClassesController } from './classes/classes.controller';
import { ClassesService } from './classes/classes.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [AuthModule, UsersModule, AuthorizationModule, AuditModule],
  controllers: [AppController, StudentsController, ClassStudentsController, SchoolController, StudentContactsController, ClassesController],
  providers: [AppService, PrimsaService, StudentsService, SchoolService, StudentContactsService, ClassesService],
})
export class AppModule {}
