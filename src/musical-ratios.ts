/* eslint-disable no-unused-vars */
export enum MusicalRatios {
  Unison = 1.00,
  MinorSecond = 1.067,
  MajorSecond = 1.125,
  MinorThird = 1.200,
  MajorThird = 1.250,
  PerfectFourth = 1.333,
  DiminishedFifth = 1.400,
  AugmentedFourth = 1.414,
  PerfectFifth = 1.500,
  MinorSixth = 1.600,
  GoldenRatio = 1.618,
  MajorSixth = 1.667,
  MinorSeventh = 1.750,
  MajorSeventh = 1.875,
  Octave = 2.000
}

export function intervalToRatio(interval: string | MusicalRatios): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (MusicalRatios as { [key: string]: any })[interval];
}

export function ratioToInterval(ratio: number): string | MusicalRatios {
    return MusicalRatios[ratio];
}

export function ratioToPower(ratio: MusicalRatios | number, power: number): number {
    return Math.pow(ratio, power);
}
