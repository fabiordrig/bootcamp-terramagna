const List = () => import(/* webpackChunkName: "about" */ "../views/Cards.vue");
const CreateCard = () =>
  import(/* webpackChunkName: "about" */ "../views/CreateCard.vue");

export default {
  path: "/cards",
  component: List,
  children: [
    {
      path: "/:id",
      component: CreateCard
    }
  ]
};
