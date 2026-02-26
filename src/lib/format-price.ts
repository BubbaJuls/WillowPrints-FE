/** Format price in Philippine pesos (PHP). */
export function formatPricePHP(price: number): string {
  return `₱${price.toLocaleString('en-PH', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}
