import { ThemeProvider } from "@mui/material";
import Todo from "./Components/Todo";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Todo />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
