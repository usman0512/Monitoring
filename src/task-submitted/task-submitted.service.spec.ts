import { Test, TestingModule } from '@nestjs/testing';
import { TaskSubmittedService } from './task-submitted.service';

describe('StudentsService', () => {
  let service: TaskSubmittedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskSubmittedService],
    }).compile();

    service = module.get<TaskSubmittedService>(TaskSubmittedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
