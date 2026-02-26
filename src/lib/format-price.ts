/** Format price in Philippine pesos (PHP) with two decimal places. */
export function formatPricePHP(price: number): string {
  return `₱${price.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
