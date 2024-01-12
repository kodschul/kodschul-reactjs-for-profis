# React: Verwendung von HOCs in React-Komponenten

In dieser Mini-Übung wirst du lernen, wie du Higher Order Components (HOCs) verwenden kannst, um die Funktionalität einer React-Komponente zu erweitern. HOCs können dazu verwendet werden, Props hinzuzufügen oder das Verhalten einer Komponente zu verändern.

## Erstellen eines HOCs

Ein HOC wird erstellt, indem eine Funktion erstellt wird, die eine Komponente als Parameter annimmt und eine neue Klasse oder Funktion zurückgibt, die die gewünschte Funktionalität hinzufügt.

```jsx
const withExample = (WrappedComponent) => {
  return class WithExample extends React.Component {
    // Hier kann zusätzliche Logik hinzugefügt werden
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
```

In diesem Beispiel wird ein HOC namens withExample erstellt, das die Funktionalität der übergebenen Komponente erweitert.

## Verwenden eines HOCs
Um ein HOC zu verwenden, rufe die Funktion mit der gewünschten Komponente auf und verwende das resultierende Komponenten-Wrapper.

```jsx
import React from 'react';
import withExample from './withExample';

class MyComponent extends React.Component {
  render() {
    return <div>Hallo, Welt!</div>;
  }
}

const MyComponentWithExample = withExample(MyComponent);
```

Hier wird die MyComponent-Komponente durch das withExample-HOC erweitert, indem withExample(MyComponent) aufgerufen wird. Das resultierende MyComponentWithExample kann nun wie jede andere React-Komponente verwendet werden.

```jsx
// Verwendung in einer anderen Komponente oder in App.js
<MyComponentWithExample />
```

## Aufgabe 1: Hinzufügen von Authentifizierungslogik mit `withAuth`

Erstelle ein HOC namens `withAuth`, das Authentifizierungslogik zur Verfügung stellt. Dieses HOC soll sicherstellen, dass die umgebene Komponente nur gerendert wird, wenn der Benutzer authentifiziert ist.

## Aufgabe 2: Anzeigen eines Ladezustands mit `withLoading`

Erstelle ein HOC namens `withLoading`, das einen Ladezustand während des Datenladens anzeigt. Dieses HOC soll sicherstellen, dass die umgebene Komponente erst gerendert wird, wenn die benötigten Daten vollständig geladen wurden.

## Aufgabe 3: Fehlerbehandlung mit `withErrorHandling`

Erstelle ein HOC namens `withErrorHandling`, das Fehler behandelt und entsprechende Fehlermeldungen anzeigt. Dieses HOC soll sicherstellen, dass die umgebene Komponente trotz auftretender Fehler weiterhin benutzerfreundlich bleibt.
