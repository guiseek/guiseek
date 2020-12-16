import { Test, TestingModule } from '@nestjs/testing';
import { W3Controller } from './w3.controller';

describe('W3Controller', () => {
  let controller: W3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [W3Controller],
    }).compile();

    controller = module.get<W3Controller>(W3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
