# React: Aufbau und Verwendung eines eigenen Hooks

In dieser Mini-Übung wirst du lernen, wie du einen eigenen React Hook erstellst, die Hook-Konvention befolgst und den Rückgabewert typisierst.

## Schritt 1: Neues React-Projekt erstellen (falls noch nicht vorhanden)

Falls du noch kein React-Projekt erstellt hast, führe die Schritte im ersten Abschnitt "React Installation" aus, um ein neues Projekt zu erstellen.

## Schritt 2: Eigenen Hook erstellen

Erstelle eine neue Datei `src/useCustomHook.js` und füge den folgenden Code ein:

```jsx
import { useState, useEffect } from 'react';

const useCustomHook = (initialValue) => {

  ToDo

  return { value, increment, decrement };
};

export default useCustomHook;
```

In diesem Beispiel wird ein einfacher Counter-Hook erstellt. Der Hook verfügt über einen Wert (`value`), eine Funktion zum Inkrementieren (`increment`) und eine Funktion zum Dekrementieren (`decrement`). Der Effekt wird genutzt, um Aktionen bei jeder Änderung des Werts auszuführen.

## Schritt 3: Verwendung des eigenen Hooks

Öffne die Datei src/App.js und integriere den eigenen Hook in deiner Anwendung:

```jsx
import React from 'react';
import useCustomHook from './useCustomHook';

function App() {
  const { value, increment, decrement } = useCustomHook(0);

  return (
    <div>
      <h1>Hello World!</h1>
      <p>Aktueller Wert: {value}</p>
      <button onClick={increment}>Inkrementieren</button>
      <button onClick={decrement}>Dekrementieren</button>
    </div>
  );
}

export default App;
```

Speichere die Dateien und beobachte, wie der Wert des Hooks aktualisiert wird, wenn du die Buttons klickst.

Das war's! Du hast erfolgreich einen eigenen React Hook erstellt, die Hook-Konvention befolgt und den Rückgabewert typisiert. Viel Spaß beim Erstellen eigener benutzerdefinierter Hooks!