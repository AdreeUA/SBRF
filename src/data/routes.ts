import App from "src/components/App";
import Child from "src/components/Child";
import Home from "src/components/Home";
import Parent from "src/components/Parent";

export const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/parent",
        component: Parent,
        routes: [
          {
            path: "/parent/:id/child",
            component: Child
          }
        ]
      }
    ]
  }
];
