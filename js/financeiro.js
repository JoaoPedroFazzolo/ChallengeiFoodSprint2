import { createSalesChart } from "./graficos/salesChart.js";
import { createExpensesChart, updateExpensesChart } from "./graficos/expensesChart.js";
import {
  createHorizontalBarChart,
  updateHorizontalChart,
} from "./graficos/horizontalBarChart.js";

const salesCtx = document.getElementById("salesChart").getContext("2d");
const expensesCtx = document.getElementById("expensesChart").getContext("2d");
const horizontalCtx = document
  .getElementById("horizontalBarChart")
  .getContext("2d");
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

// Criação dos gráficos
const salesChart = createSalesChart(salesCtx);
const expensesChart = createExpensesChart(expensesCtx);
const horizontalBarChart = createHorizontalBarChart(horizontalCtx);

// Atualizar os gráficos com base nos checkboxes
const checkboxesExpenses = {
  carne: document.getElementById("checkboxCarne"),
  bacon: document.getElementById("checkboxBacon"),
  pao: document.getElementById("checkboxPao"),
  leite: document.getElementById("checkboxLeite"),
  outros: document.getElementById("checkboxOutros"),
};

const checkboxesHorizontal = {
  xBurguer: document.getElementById("checkboxXBurguer"),
  xBacon2: document.getElementById("checkboxXBacon2"),
  xBaconEgg: document.getElementById("checkboxXBaconEgg"),
  xTudo: document.getElementById("checkboxXTudo"),
  outros2: document.getElementById("checkboxOutros2"),
};

const updateCharts = () => {
  updateExpensesChart(expensesChart, checkboxesExpenses);
  updateHorizontalChart(horizontalBarChart, checkboxesHorizontal);
};

// Registrando eventos
const registerCheckboxEvents = (checkboxes, updateFunction) => {
  Object.values(checkboxes).forEach((checkbox) => {
    checkbox.addEventListener("change", updateFunction);
  });
};

registerCheckboxEvents(checkboxesExpenses, updateCharts);
registerCheckboxEvents(checkboxesHorizontal, updateCharts);

window.addEventListener("resize", function () {
  salesChart.resize();
  expensesChart.resize();
  horizontalBarChart.resize();
});

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
