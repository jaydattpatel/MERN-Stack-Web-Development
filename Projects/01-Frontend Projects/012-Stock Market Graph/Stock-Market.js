import getstocksdata from "./getstocksdata.js";
import getstocksprofiledata from "./getstocksprofiledata.js";
import getstockstatsdata from "./getstockstatsdata.js";

let stocks = {};
let stocksProfileData = {};
let stocksStatsData = {};

let currentStock;
let periodList = ["1mo", "3mo", "1y", "5y"];
let currentStockPeriod = periodList[0];

async function fetchStocks() {
  try {
    //bypass program and fetch manual with error
    throw new Error("Failed to fetch Stocks");
    // let response1 = await fetch(
    //   `https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata`
    // );
    // if (!response1.ok) {
    //   throw new Error("Failed to fetch Stocks");
    // }
    // let data1 = await response1.json();
    // if (!data1 || !data1.stocksData || !Array.isArray(data1.stocksData)) {
    //   throw new Error("Invalid data format of Stocks");
    // }
    // stocks = data1.stocksData[0];

    // let response2 = await fetch(
    //   `https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata`
    // );
    // if (!response2.ok) {
    //   throw new Error("Failed to fetch Stocks Data");
    // }
    // let data2 = await response2.json();
    // if (
    //   !data2 ||
    //   !data2.stocksProfileData ||
    //   !Array.isArray(data2.stocksProfileData)
    // ) {
    //   throw new Error("Invalid data format of Stocks Data");
    // }
    // stocksProfileData = data2.stocksProfileData[0];

    // let response3 = await fetch(
    //   `https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata`
    // );
    // if (!response3.ok) {
    //   throw new Error("Failed to fetch Stocks status");
    // }
    // let data3 = await response3.json();
    // if (
    //   !data3 ||
    //   !data3.stocksStatsData ||
    //   !Array.isArray(data3.stocksStatsData)
    // ) {
    //   throw new Error("Invalid data format of Stocks status");
    // }
    // stocksStatsData = data3.stocksStatsData[0];
  } catch (error) {
    stocks = getstocksdata.stocksData[0];
    stocksProfileData = getstocksprofiledata.stocksProfileData[0];
    stocksStatsData = getstockstatsdata.stocksStatsData[0];
    // console.error("Error fetching Stocks:", error);
  } finally {
    // console.log(stocks);
    // console.log(stocksProfileData);
    // console.log(stocksStatsData);
    updateStockData();
  }
}

function addStockBtn(stock) {
  let div = document.createElement("div");

  let btn = document.createElement("button");
  btn.textContent = stock;
  btn.classList.add("stock");
  btn.addEventListener("click", () => {
    currentStock = stock;
    updateGraph();
    updateStockInfo();
  });
  div.appendChild(btn);

  if (!currentStock) {
    currentStock = stock;
    updateGraph();
    updateStockInfo();
  }

  let span = document.createElement("span");
  span.innerHTML = `
    <span style="color:${
      stocksStatsData[stock]["profit"] > 0 ? "green" : "red"
    }">${stocksStatsData[stock]["profit"].toFixed(2)}%</span>
    <span>$${stocksStatsData[stock]["bookValue"].toFixed(2)}</span>`;

  div.appendChild(span);
  document.querySelector("#stocks").appendChild(div);
}

function addPeriodsBtn() {
  periodList.forEach((period) => {
    let btn = document.createElement("button");
    btn.textContent = period;
    btn.classList.add("period");
    btn.addEventListener("click", () => {
      currentStockPeriod = period;
      updateGraph();
    });
    document.querySelector("#periods").appendChild(btn);
  });
}

function updateStockData() {
  for (let stock of Object.keys(stocks)) {
    if (stock === "_id") {
      continue;
    }
    // console.log(stock);
    for (let period of Object.keys(stocks[stock])) {
      if (period === "_id") {
        continue;
      }
      let timeStampArr = stocks[stock][period]["timeStamp"].map((date) => {
        return new Date(date * 1000).toLocaleDateString();
      });
      stocks[stock][period]["timeStamp"] = timeStampArr;
      // console.log(stocks[stock][duration]['timeStamp']);
    }

    addStockBtn(stock);
  }
  addPeriodsBtn();
}

function updateGraph() {
  var trace = {
    type: "scatter",
    x: stocks[currentStock][currentStockPeriod]["timeStamp"],
    y: stocks[currentStock][currentStockPeriod]["value"],
    mode: "lines",
    line: {
      color: "rgb(219, 64, 82)",
      width: 2,
    },
  };

  var data = [trace];
  //   console.log(currentStock,currentStockPeriod);
  Plotly.newPlot("graphDiv", data);
}

function updateStockInfo() {
  document.querySelector("#stockInfo").innerHTML = `
    <span id='name'>${currentStock}</span>
    <span id='profit' style="color:${
      stocksStatsData[currentStock]["profit"] > 0 ? "green" : "red"
    }">${stocksStatsData[currentStock]["profit"]}%</span>
    <span id='bookValue'>$${stocksStatsData[currentStock]["bookValue"]}</span>`;

  document.querySelector("#summary").textContent =
    stocksProfileData[currentStock]["summary"];
}

fetchStocks();
