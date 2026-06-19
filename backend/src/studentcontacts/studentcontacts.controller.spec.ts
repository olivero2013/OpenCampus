import { Test, TestingModule } from '@nestjs/testing';
import { StudentcontactsController } from './studentcontacts.controller';

describe('StudentcontactsController', () => {
  let controller: StudentcontactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentcontactsController],
    }).compile();

    controller = module.get<StudentcontactsController>(StudentcontactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
