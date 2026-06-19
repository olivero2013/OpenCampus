import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimsaService } from './prisma/primsa.service';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { SchoolController } from './school/school.controller';
import { SchoolService } from './school/school.service';

@Module({
  imports: [],
  controllers: [AppController, StudentsController, SchoolController],
  providers: [AppService, PrimsaService, StudentsService, SchoolService],
})
export class AppModule {}
