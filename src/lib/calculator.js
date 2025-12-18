// Single file for all calculation logic (FR2 core)
// Exports a function that performs the averaging-down calculation
// Handles validation and error cases

export function calculateAverageDown(params) {
  const { currentAmount, currentAverage, targetAverage, marketPrice } = params;

  // Parse inputs to numbers
  const currAmt = parseFloat(currentAmount);
  const currAvg = parseFloat(currentAverage);
  const tgtAvg = parseFloat(targetAverage);
  const mktPrice = parseFloat(marketPrice);

  // Validation (part of FR1, but logic here for isolation)
  if (isNaN(currAmt) || isNaN(currAvg) || isNaN(tgtAvg) || isNaN(mktPrice)) {
    return { error: 'All inputs must be valid numbers.' };
  }
  if (currAmt <= 0 || currAvg <= 0 || tgtAvg <= 0 || mktPrice <= 0) {
    return { error: 'All values must be positive numbers.' };
  }
  if (tgtAvg >= currAvg) {
    return { error: 'Target average must be lower than current average.' };
  }
  if (mktPrice >= tgtAvg) {
    return { error: 'Market price must be lower than target average to average down.' };
  }

  // Calculation formula
  const amountToBuy = (currAmt * (currAvg - tgtAvg)) / (tgtAvg - mktPrice);

  // Derived values
  const newTotalAmount = currAmt + amountToBuy;
  const newTotalCost = (currAmt * currAvg) + (amountToBuy * mktPrice);
  const newAverage = newTotalCost / newTotalAmount;

  // Round to reasonable decimals (e.g., 8 for crypto amounts, 2 for prices)
  return {
    amountToBuy: amountToBuy.toFixed(8),
    newTotalAmount: newTotalAmount.toFixed(8),
    newTotalCost: newTotalCost.toFixed(2),
    newAverage: newAverage.toFixed(2),
    explanation: `To lower your average from $${currAvg} to $${tgtAvg} by buying at $${mktPrice}, buy ${amountToBuy.toFixed(8)} units.`
  };
}