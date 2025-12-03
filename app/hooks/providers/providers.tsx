import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import { StudentProvider } from "../../components/pages/studentpage/studentContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <StudentProvider>{children}</StudentProvider>
    </Provider>
  );
}
