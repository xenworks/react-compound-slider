function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export class CurvedScale {
  step: number = 1;
  domain: number[] = [0, 1];
  range: number[] = [0, 1];

  getRange() {
    return this.range;
  }
  getDomain() {
    return this.domain;
  }

  setDomain = (val: number[]) => {
    this.domain = [val[0], val[1]];

    return this;
  };

  setRange = (val: number[]) => {
    this.range = [val[0], val[1]];

    return this;
  };

  setStep = (val: number) => {
    this.step = val;

    return this;
  };

  getValue = (x: number) => {
    const {
      domain: [a, z],
      range: [r, s],
      step,
    } = this;

    const p = (clamp(x, a, z) - a) / (z - a);
    const b = step * Math.round(this.getValueFromPosition(p * 100)/step);
    // console.log(`(C)X->Y||= x: ${x} | Domain: ${this.domain} | Range: ${this.range} | Ret Val: ${b}`);

    return clamp(b, r < s ? r : s, s > r ? s : r);
  };

  // this function is slightly different from the one in LinearScale as in the range/domains are different when this is called
  // hence the hardcoded r/s
  getValueFromPosition = (x: number) => {
    const {
      // @ts-ignore
      range: [a, z],
    } = this;

    // @ts-ignore
    const r = 0;
    const s = 100;
    return Math.round(- (z-a) * Math.sqrt((1 - (x*x)/(s*s))) + z); // y
  }
}
