export declare class CurvedScale {
    step: number;
    domain: number[];
    range: number[];
    getRange(): number[];
    getDomain(): number[];
    setDomain: (val: number[]) => this;
    setRange: (val: number[]) => this;
    setStep: (val: number) => this;
    getValue: (x: number) => number;
    getValueFromPosition: (x: number) => number;
}
