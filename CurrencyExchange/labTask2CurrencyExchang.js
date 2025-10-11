let usd = {
  usd: 1,
  eur: 0.86,
  gbp: 0.74,
};
let eur = {
  eur: 1,
  usd: 1.16,
  gbp: 0.86,
};
let gbp = {
  gbp: 1,
  eur: 1.14,
  usd: 1.33,
};
function exchange(amount, inputCur, outputCur) {
  let exchangedSum;
  if (inputCur === "usd") {
    exchangedSum = amount * usd[outputCur];
  } else if (inputCur === "eur") {
    exchangedSum = amount * eur[outputCur];
  } else if (inputCur === "gbp") {
    exchangedSum = amount * gbp[outputCur];
  }
  console.log(exchangedSum + " " + outputCur);
}
exchange(6, "gbp", "eur");
exchange(8, "eur", "usd");
