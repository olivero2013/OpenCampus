import { Test, TestingModule } from '@nestjs/testing';
import { StudentContactsController } from './student-contacts.controller';

describe('StudentContactsController', () => {
  let controller: StudentContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentContactsController],
    }).compile();

    controller = module.get<StudentContactsController>(StudentContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
