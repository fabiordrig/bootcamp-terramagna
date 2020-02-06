const About = () => import(/* webpackChunkName: "about" */ "../views/Card.vue");

export default {
  path: "/about",
  component: About
};
