import { Test, TestingModule } from '@nestjs/testing';
import { TaskSubmittedController } from './task-submitted.controller';

describe('StudentsController', () => {
  let controller: TaskSubmittedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskSubmittedController],
    }).compile();

    controller = module.get<TaskSubmittedController>(TaskSubmittedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
