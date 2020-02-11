const List = () => import(/* webpackChunkName: "about" */ "../views/Cards.vue");

export default {
  path: "/lists",
  component: List
};
