# React: Verwendung von HOCs in React-Komponenten - Lösungen

In dieser Mini-Übung wirst du lernen, wie du Higher Order Components (HOCs) verwenden kannst, um die Funktionalität einer React-Komponente zu erweitern. HOCs können dazu verwendet werden, Props hinzuzufügen oder das Verhalten einer Komponente zu verändern.

## Lösung 1: Hinzufügen von Authentifizierungslogik mit `withAuth`

Erstelle ein HOC namens `withAuth`, das Authentifizierungslogik zur Verfügung stellt. Dieses HOC soll sicherstellen, dass die umgebene Komponente nur gerendert wird, wenn der Benutzer authentifiziert ist.

```jsx
import React from 'react';

const withAuth = (WrappedComponent) => {
  return class WithAuth extends React.Component {
    isAuthenticated = () => {
      // Hier sollte die eigentliche Authentifizierungslogik implementiert werden
      return true; // Beispiel: Immer authentifiziert
    };

    render() {
      if (this.isAuthenticated()) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <p>Benutzer nicht authentifiziert.</p>;
      }
    }
  };
};

export default withAuth;
```

## Lösung 2: Anzeigen eines Ladezustands mit withLoading
Erstelle ein HOC namens withLoading, das einen Ladezustand während des Datenladens anzeigt. Dieses HOC soll sicherstellen, dass die umgebene Komponente erst gerendert wird, wenn die benötigten Daten vollständig geladen wurden.

```jsx
import React from 'react';

const withLoading = (WrappedComponent) => {
  return class WithLoading extends React.Component {
    state = {
      isLoading: true,
    };

    componentDidMount() {
      // Hier sollte die Logik zum Laden der Daten implementiert werden
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000); // Beispiel: Daten werden nach 2 Sekunden geladen
    }

    render() {
      if (this.state.isLoading) {
        return <p>Lade Daten...</p>;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  };
};

export default withLoading;
```

## Lösung 3: Fehlerbehandlung mit withErrorHandling
Erstelle ein HOC namens withErrorHandling, das Fehler behandelt und entsprechende Fehlermeldungen anzeigt. Dieses HOC soll sicherstellen, dass die umgebene Komponente trotz auftretender Fehler weiterhin benutzerfreundlich bleibt.

```jsx
import React from 'react';

const withErrorHandling = (WrappedComponent) => {
  return class WithErrorHandling extends React.Component {
    state = {
      error: null,
    };

    componentDidCatch(error, info) {
      // Hier sollte die Logik zur Fehlerbehandlung implementiert werden
      console.error('Fehler aufgetreten:', error, info);
      this.setState({ error });
    }

    render() {
      if (this.state.error) {
        return <p>Ein Fehler ist aufgetreten. Bitte versuche es später erneut.</p>;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  };
};

export default withErrorHandling;

```