import { currencyFormat } from './numberFormat';

describe('numberFormat', () => {
  describe('#currencyFormat', () => {
    it('should return indonesian rupiah currency format when currency is IDR', () => {
      const amount = 1000000;
      const expectedFormattedNumber = new Intl.NumberFormat(
        'id-ID', { style: 'currency', currency: 'IDR' }
      ).format(amount);

      const formattedNumber = currencyFormat('IDR', amount);

      expect(formattedNumber).toEqual(expectedFormattedNumber);
    });
  });
});
