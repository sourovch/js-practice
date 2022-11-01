// getting input
const currnetBill = 1450;
const gasBill = 1800;
const waterBill = 700;
const telephoneBill = 5000;
const internetBill = 500;
const tvBill = 250;

// printing the bill
calcBill({
  currnetBill,
  gasBill,
  waterBill,
  internetBill,
  tvBill,
  telephoneBill,
});

//function definations
function calcBill({
  currnetBill,
  gasBill,
  waterBill,
  telephoneBill,
  internetBill,
  tvBill,
}) {
  const currnetSrvs = calcCurrnetSrvs(currnetBill);
  const gasSrvs = calcGasWtrTelSrvs(gasBill);
  const waterSrvs = calcGasWtrTelSrvs(waterBill);
  const telephoneSrvs = calcGasWtrTelSrvs(telephoneBill);

  const totBill =
    currnetBill +
    gasBill +
    waterBill +
    telephoneBill +
    internetBill +
    tvBill;

  const totSrvs = currnetSrvs + gasSrvs + waterSrvs + telephoneSrvs;

  console.log(`Total: ${totBill + totSrvs}`);
}

function calcGasWtrTelSrvs(bill) {
  const srvs = bill * (1 / 100); // calculating 1%

  if (srvs > 30) return 30;

  return Math.round(srvs);
}

function calcCurrnetSrvs(bill) {
  if (bill < 0) {
    bill *= -1;
  }

  if (bill > 0 && bill <= 400) return 5;
  if (bill > 400 && bill <= 1500) return 10;
  if (bill > 1500 && bill <= 5000) return 15;
  return 25;
}
