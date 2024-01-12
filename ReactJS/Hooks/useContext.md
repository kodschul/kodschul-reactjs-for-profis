# React: useContext

In dieser Mini-Übung wirst du die Verwendung der `useContext`-Hook in React kennenlernen, um den Theme-Context in deiner Komponente zu nutzen und das Thema basierend auf dem aktuellen Kontext anzuzeigen. Stelle sicher, dass der Theme-Context richtig eingerichtet und an den entsprechenden Stellen in der Komponentenstruktur bereitgestellt wird.

## Schritt 1: Neues React-Projekt erstellen (falls noch nicht vorhanden)

Falls du noch kein React-Projekt erstellt hast, führe die Schritte im ersten Abschnitt "React Installation" aus, um ein neues Projekt zu erstellen.

## Schritt 2: Theme-Context einrichten

Erstelle eine neue Datei `src/ThemeContext.js` und füge den folgenden Code ein:

```jsx
import { createContext, useState } from 'react';

ToDo
```

In dieser Datei wird ein Theme-Context erstellt und durch den `ThemeProvider` bereitgestellt. Der `toggleTheme`-Funktion ermöglicht das Umschalten zwischen den Themen.

## Schritt 3: Nutzung von useContext in einer Komponente

Erstelle eine neue Datei src/ThemedComponent.js und füge den folgenden Code ein:

```jsx
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

ToDo
```

In dieser Komponente wird `useContext` verwendet, um auf den Theme-Context zuzugreifen. Der aktuelle Theme-Status und die Funktion zum Umschalten des Themas werden verwendet, um Informationen anzuzeigen und das Thema zu ändern.

## Schritt 4: Integriere den Theme-Provider und die Komponente

Öffne die Datei src/App.js und integriere den Theme-Provider sowie die erstellte Themed-Komponente:

```jsx
ToDo
```

Speichere die Dateien und beobachte, wie das Theme basierend auf dem Context aktualisiert wird, wenn du den Button in der Themed-Komponente klickst.

Das war's! Du hast erfolgreich `useContext` genutzt, um den Theme-Context in einer Komponente zu verwenden. Viel Spaß beim Experimentieren!