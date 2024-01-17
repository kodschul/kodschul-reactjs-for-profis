import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ThemeConsumer, ThemeProvider } from "./theme";

function MyApp() {
  return (
    <>
      <ThemeConsumer>
        {({ theme, setTheme }) => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />

              <div
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                Theme mode is: {theme}
              </div>
              {/* <ListComponent /> */}
            </header>
          </div>
        )}
      </ThemeConsumer>
    </>
  );
}

const AppContainer = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <MyApp />
    </ThemeProvider>
  );
};

export default AppContainer;
