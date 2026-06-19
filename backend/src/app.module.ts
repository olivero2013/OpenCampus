import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimsaService } from './prisma/primsa.service';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { SchoolController } from './school/school.controller';
import { SchoolService } from './school/school.service';
import { StudentContactsController } from './student-contacts/student-contacts.controller';
import { StudentContactsService } from './student-contacts/student-contacts.service';

@Module({
  imports: [],
  controllers: [AppController, StudentsController, SchoolController, StudentContactsController],
  providers: [AppService, PrimsaService, StudentsService, SchoolService, StudentContactsService],
})
export class AppModule {}
