import { Test, TestingModule } from '@nestjs/testing';
import { W3Service } from './w3.service';

describe('W3Service', () => {
  let service: W3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [W3Service],
    }).compile();

    service = module.get<W3Service>(W3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
