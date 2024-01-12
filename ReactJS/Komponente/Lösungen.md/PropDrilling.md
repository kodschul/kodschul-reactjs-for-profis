# React: Vermeidung von Prop Drilling - Lösungen

In dieser Erläuterung wirst du lernen, wie du das sogenannte "Prop Drilling" in React vermeiden kannst. Prop Drilling tritt auf, wenn Props durch mehrere Ebenen von Komponenten weitergegeben werden, auch wenn die Zwischenkomponenten diese Props nicht benötigen.

## Vermeidung von Prop Drilling mit Context API

Die React Context API ermöglicht es, Daten global in einer React-Komponentenstruktur bereitzustellen, ohne Props manuell durch jede Ebene weiterzugeben. Dies kann dazu beitragen, Prop Drilling zu vermeiden.

**Context erstellen:**
Erstelle ein Context-Objekt in einer separaten Datei, z.B. `MyContext.js`.

```jsx
import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    // Hier können die globalen Daten oder Funktionen initialisiert werden
    const sharedData = 'Globale Daten';

    return (
    <MyContext.Provider value={sharedData}>
        {children}
    </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};
```

## Context in der obersten Ebene bereitstellen:
Wickel deine App-Komponente oder eine darüberliegende Komponente mit MyContextProvider ein.

```jsx
import React from 'react';
import { MyContextProvider } from './MyContext';
import App from './App';

const RootComponent = () => {
  return (
    <MyContextProvider>
      <App />
    </MyContextProvider>
  );
};

export default RootComponent;
```

## Context in einer untergeordneten Komponente verwenden:
Verwende die useMyContext-Hook, um auf die globalen Daten zuzugreifen, ohne Prop Drilling.

```jsx
import React from 'react';
import { useMyContext } from './MyContext';

const ChildComponent = () => {
  const sharedData = useMyContext();

  return <p>{sharedData}</p>;
};

export default ChildComponent;
```

Mit dieser Methode können Komponenten auf globalen Daten zugreifen, ohne dass Props durch jede Ebene hindurchgereicht werden müssen. Prop Drilling wird vermieden, und die Komponenten bleiben sauberer und wartbarer.