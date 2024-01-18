import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ThemeConsumer, ThemeProvider } from "./theme";

const withTheme = (Component) => {
  return (props) => {
    return (
      <ThemeConsumer>
        {({ theme, setTheme }) => (
          <Component {...props} theme={theme} setTheme={setTheme} />
        )}
      </ThemeConsumer>
    );
  };
};

function MyAppDummy({ theme, setTheme }) {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Theme mode is: {theme}
          </div>
          {/* <ListComponent /> */}
        </header>
      </div>
    </>
  );
}

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

const ThemedApp = withTheme(MyAppDummy);

const AppContainer = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default AppContainer;
