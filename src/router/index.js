import Vue from "vue";
import Router from "vue-router";
// import JollofForm from "../components/QuestionForm";
// import SubmissionFail from "../components/SubmissionFail.vue";
import App from "../App.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    },
  ]
});

export default router;