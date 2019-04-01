import { TestBed } from '@angular/core/testing';

import { PlayerStatsService } from './player-stats.service';

describe('PlayerStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerStatsService = TestBed.get(PlayerStatsService);
    expect(service).toBeTruthy();
  });
});
