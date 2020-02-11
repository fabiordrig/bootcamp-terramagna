const Cards = () =>
  import(/* webpackChunkName: "Cards" */ "../views/Cards.vue");

export default [
  {
    path: "/lists",
    component: Cards
  }
];
