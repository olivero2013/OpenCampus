import { Test, TestingModule } from '@nestjs/testing';
import { StudentcontactsService } from './studentcontacts.service';

describe('StudentcontactsService', () => {
  let service: StudentcontactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentcontactsService],
    }).compile();

    service = module.get<StudentcontactsService>(StudentcontactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
