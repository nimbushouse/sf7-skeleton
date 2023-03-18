import Home from "./pages/home.svelte";
import NotFound from "./pages/404.svelte";

export default [
  {
    path: "/",
    component: Home,
    master(f7) {
      return f7.theme === "aurora";
    },
  },
  {
    path: "(.*)",
    component: NotFound,
  },
];
