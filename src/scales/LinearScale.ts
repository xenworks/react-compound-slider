import { ticks } from 'd3-array';

import { Interpolator } from '../types';

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export class LinearScale {
  interpolator: Interpolator | null;
  domain: number[] = [0, 1];
  range: number[] = [0, 1];
  curved: boolean = true;

  constructor() {
    this.domain = [0, 1];
    this.range = [0, 1];
    this.interpolator = null;
  }

  createInterpolator(domain: number[], range: number[]) {
    const d0 = domain[0];
    const d1 = domain[1];

    const r0 = range[0];
    const r1 = range[1];

    if (d1 < d0) {
      return (x: number) =>
        this.interpolateValue(r1, r0)(this.deinterpolateValue(d1, d0)(x));
    } else {
      return (x: number) =>
        this.interpolateValue(r0, r1)(this.deinterpolateValue(d0, d1)(x));
    }
  }

  interpolateValue(a: number, b: number) {
    return (
      (a = +a),
      (b -= a),
      function i(t: number) {
        return a + b * t;
      }
    );
  }

  deinterpolateValue(a: number, b: number) {
    return (b -= a = +a) ? (x: number) => (x - a) / b : () => b;
  }

  rescale() {
    this.interpolator = null;

    return this;
  }

  getValue(x: number) {
    if (!this.curved) {
        const { domain, range } = this;
        return (
            this.interpolator ||
            (this.interpolator = this.createInterpolator(domain, range))
        )(+x);
    }
    // for our code, x axis is slider (0 to 100); y axis is price (min to max price)
    // for this part, even tho var name is "x", it is referring to our price (y)
    // here domain is price; range is slider
    // given a price (y), we want to find the position in the slider range (x)
    // const { domain, range } = this;
    const retVal = this.getPositionFromPrice(x);
    // console.log(`Y->X||= x: ${x} | Domain: ${domain} | Range: ${range} | Ret Val: ${retVal}`);
    return retVal;
  }

  setDomain(val: number[]) {
    this.domain = [val[0], val[1]];

    this.rescale();

    return this;
  }

  getDomain() {
    return this.domain;
  }

  setRange(val: number[]) {
    this.range = [val[0], val[1]];

    return this;
  }

  getRange() {
    return this.range;
  }

  getTicks(count: number) {
    const d = this.curved ? this.range : this.domain;   // we want to use slider values as our stuff is curved
    return ticks(d[0], d[d.length - 1], count ? count : 10);
  }

    getPositionFromPrice = (y: number) => {
        // for our code, a to z is y axis i.e., price
        // r to s is x axis i.e., slider
        const {
            // @ts-ignore
            domain: [a, z],
            // @ts-ignore
            range: [r, s]
        } = this;

        // const r = 0;
        // const s = 100;
        // standard ellipse eq: x^2/a^2 + y^2/b^2 = 1 where -a<=x<=a
        // converting to our coordinates:

        //         |
        //         |z    *
        //         |    *
        //         |  .*
        // –―–―–―–―|*―–―–―–―
        //         |r    s
        //         |
        //         |-z
        //         |

        // standard eq becomes a z unit translate in y axis hence the (y-z)^2 instead of y^2
        // we also need to do a (z-a) in the bottom since our domain does not always start from zero; but a.
        // https://www.desmos.com/calculator/j7glwotha2
        return s * Math.sqrt((1 - (y - z) * (y - z) / ((z-a) * (z-a))));    //x
    }

    // this is opposite function of above; give x and get y
    getValueFromPosition = (x: number) => {
        const {
            // @ts-ignore
            domain: [a, z],
            // @ts-ignore
            range: [r, s]
        } = this;

        // @ts-ignore
        // const r = 0;
        // const s = 100;
        // we add a - at start since we want the bottom part of curve and a +z transform along y
        return Math.round(- (z-a) * Math.sqrt((1 - (x * x) / (s * s))) + z); // y
    }

    getValueFromPixel = (x: number) => {
        const {
            domain: [a, z],
            range: [r, s],
        } = this;

        const step = 100;
        const p = (clamp(x, r, s) - r) / (s - r);   // percentage (0 to 1)
        const b = step * Math.round(this.getValueFromPosition(p * 100) / step); // round to step int
        // console.log(`P->X->Y||= x: ${x} | Domain: ${this.domain} | Range: ${this.range} | Ret Val: ${b}`);

        return clamp(b, a < z ? a : z, z > a ? z : a);
    };
}
