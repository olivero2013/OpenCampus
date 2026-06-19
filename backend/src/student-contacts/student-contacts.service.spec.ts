import { Test, TestingModule } from '@nestjs/testing';
import { StudentContactsService } from './student-contacts.service';

describe('StudentContactsService', () => {
  let service: StudentContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentContactsService],
    }).compile();

    service = module.get<StudentContactsService>(StudentContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
