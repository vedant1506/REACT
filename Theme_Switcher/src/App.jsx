import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const root = document.documentElement;
    console.log("Theme changed:", themeMode);
    if (themeMode === "dark") {
      root.classList.add("dark");
      console.log("Added 'dark' class to <html>", root.classList.value);
    } else {
      root.classList.remove("dark");
      console.log("Removed 'dark' class from <html>", root.classList.value);
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
