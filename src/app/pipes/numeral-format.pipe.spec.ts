import { NumeralFormatPipe } from './numeral-format.pipe';

describe('NumformatPipe', () => {
    it('create an instance', () => {
        const pipe = new NumeralFormatPipe();
        expect(pipe).toBeTruthy();
    });
});
