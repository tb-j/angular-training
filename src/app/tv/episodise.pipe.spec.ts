import { EpisodisePipe } from './episodise.pipe';
import { Episode } from './tv.models';

describe('EpisodisePipe', () => {
  let pipe: EpisodisePipe;
  beforeEach(() => {
    pipe = new EpisodisePipe();
  });

  it('returns "" when no input given', () => {
    const input: undefined = undefined;
    expect(pipe.transform(input)).toBe('');
  });

  it(`returns unchanged values when they're > 9 (eg. s12e23)`, () => {
    const input: Partial<Episode> = { season: 12, number: 23 };
    expect(pipe.transform(input as Episode)).toBe('s12e23');
  });

  it(`returns padded values when they're <= 9 (eg. 02e05)`, () => {
    const input: Partial<Episode> = { season: 2, number: 5 };
    expect(pipe.transform(input as Episode)).toBe('s02e05');
  });
});
