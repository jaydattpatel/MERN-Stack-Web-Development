import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialTheme = () => localStorage.getItem('CODING_SAMURAI_THEME');

  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () =>
    setTheme((theme) => {
      if (theme === 'light-theme') return 'dark-theme';
      if (theme === 'dark-theme') return 'light-theme';
      return 'dark-theme';
    });

  useEffect(() => {
    localStorage.setItem('CODING_NINJASA_PROJECT_THEME', theme);
    if (theme === 'dark-theme') {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
export { ThemeProvider };
