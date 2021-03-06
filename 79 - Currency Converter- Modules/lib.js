const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {}; // store all of the rates in it

export async function fetechRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}

export async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `Oh no we don't have ${from} to convert to ${to}. So lets go get it`
    );
    const rates = await fetechRates(from);
    console.log(rates);
    // store them for next time
    ratesByBase[from] = rates;
  }
  // convert that amout that they passed it
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}
