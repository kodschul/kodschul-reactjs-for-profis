# React: useRef

In dieser Mini-Übung wirst du die Verwendung der `useRef`-Hook in React kennenlernen, um den Theme-Context in deiner Komponente zu nutzen und das Thema basierend auf dem aktuellen Kontext anzuzeigen. Stelle sicher, dass der Theme-Context richtig eingerichtet und an den entsprechenden Stellen in der Komponentenstruktur bereitgestellt wird.

## Schritt 1: Neues React-Projekt erstellen (falls noch nicht vorhanden)

Falls du noch kein React-Projekt erstellt hast, führe die Schritte im ersten Abschnitt "React Installation" aus, um ein neues Projekt zu erstellen.

## Schritt 2: Theme-Context einrichten

Verwende die bereits erstellte `ThemeContext.js`-Datei aus der vorherigen Übung.

## Schritt 3: Nutzung von useRef in einer Komponente

Erstelle eine neue Datei `src/RefThemedComponent.js` und füge den folgenden Code ein:

```jsx
import React, { useContext, useRef, useEffect } from 'react';
import ThemeContext from './ThemeContext';

ToDo
```

In dieser Komponente wird `useRef` verwendet, um auf den aktuellen Theme-Context zuzugreifen. Das `themeRef` wird durch `useEffect` aktualisiert, wenn sich das Thema ändert.

## Schritt 4: Integriere den Theme-Provider und die Komponente

Öffne die Datei src/App.js und integriere den Theme-Provider sowie die erstellte RefThemed-Komponente:

```jsx
ToDo
```

Speichere die Dateien und beobachte, wie das Thema basierend auf dem Context aktualisiert wird.

Das war's! Du hast erfolgreich `useRef` genutzt, um den Theme-Context in einer Komponente zu verwenden. Viel Spaß beim weiteren Entwickeln!