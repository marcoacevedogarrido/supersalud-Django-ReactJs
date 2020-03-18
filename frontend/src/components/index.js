import FormGroupInput from "./Inputs/formGroupInput.vue";

import DropDown from "./Dropdown.vue";
import ReclamoTable from "./ReclamoTable.vue";
import ReclamoFiltros from './ReclamoFiltros.vue'
import Button from "./Button";

import Card from "./Cards/Card.vue";
import ChartCard from "./Cards/ChartCard.vue";
import StatsCard from "./Cards/StatsCard.vue";

import SidebarPlugin from "./SidebarPlugin/index";

let components = {
  FormGroupInput,
  Card,
  ChartCard,
  StatsCard,
  ReclamoTable,
  ReclamoFiltros,
  DropDown,
  SidebarPlugin
};

export default components;

export {
  FormGroupInput,
  Card,
  ChartCard,
  StatsCard,
  ReclamoTable,
  ReclamoFiltros,
  DropDown,
  Button,
  SidebarPlugin
};
