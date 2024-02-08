import { RouterProvider } from "react-router-dom";
import { Provider as AppStore } from "react-redux";
import { router } from "./router";
import { store } from "./store";
export const App = () => {
  return (
    <AppStore store={store}>
      <RouterProvider router={router} />
    </AppStore>
  );
};
