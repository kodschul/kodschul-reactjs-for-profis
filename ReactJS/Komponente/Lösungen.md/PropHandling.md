# React: Arbeit mit Props in React-Komponenten

In dieser Mini-Übung wirst du lernen, wie du voreingestellte Werte für Props setzt, die erwarteten Typen überprüfst, Inhalte zwischen öffnenden und schließenden Tags einer Komponente überträgst, effizient alle Props an eine andere Komponente weitergibst und eine Funktion als Prop übergibst, um wiederverwendbare Logik zu teilen.

## Schritt 1: Neues React-Projekt erstellen (falls noch nicht vorhanden)

Falls du noch kein React-Projekt erstellt hast, führe die Schritte im ersten Abschnitt "React Installation" aus, um ein neues Projekt zu erstellen.

## Schritt 2: Voreingestellte Werte für Props

Erstelle eine React-Komponente namens `DefaultPropsComponent`, die eine Prop namens `message` akzeptiert. Setze einen voreingestellten Wert für `message`, falls keine Prop übergeben wird. Die voreingestellte Nachricht soll "Hello, World!" sein.

```jsx
import React from 'react';

const DefaultPropsComponent = ({ message = "Hello, World!" }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default DefaultPropsComponent;
```

## Schritt 3: Überprüfung der erwarteten Typen oder Anforderungen der Props

Erstelle eine React-Komponente namens `PropTypesComponent`, die zwei Props akzeptiert: `name` (String) und `age` (Number). Überprüfe, ob die übergebenen Props die erwarteten Typen und Anforderungen erfüllen. Verwende dafür die `propTypes`-Bibliothek oder die entsprechende integrierte Funktionalität.

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const PropTypesComponent = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Alter: {age}</p>
    </div>
  );
};

PropTypesComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default PropTypesComponent;
```

## Schritt 4: Übertragung von Inhalten zwischen öffnenden und schließenden Tags

Erstelle eine React-Komponente namens `ContentBetweenTags`, die als Kindkomponenten beliebigen Inhalt zwischen den öffnenden und schließenden Tags akzeptiert. Diese Inhalte sollen innerhalb der Komponente angezeigt werden.

```jsx
import React from 'react';

const ContentBetweenTags = ({ children }) => {
  return (
    <div>
      <p>Hier ist der übergebene Inhalt: {children}</p>
    </div>
  );
};

export default ContentBetweenTags;
```

## Schritt 5: Effiziente Übertragung aller Props an eine andere Komponente

Erstelle eine React-Komponente namens `PropTransferComponent`, die eine andere Komponente namens `DisplayComponent` enthält. Übertrage alle Props, die an `PropTransferComponent` übergeben werden, effizient an `DisplayComponent`, ohne jede Prop einzeln zu deklarieren.

```jsx
import React from 'react';
import DisplayComponent from './DisplayComponent';

const PropTransferComponent = (props) => {
  return <DisplayComponent {...props} />;
};

export default PropTransferComponent;
```

## Schritt 6: Übertragung einer Funktion als Prop

Erstelle eine React-Komponente namens `FunctionPropComponent`, die eine Funktion namens `onClick` als Prop akzeptiert. Die Funktion soll beim Klick auf einen Button innerhalb der Komponente ausgelöst werden. Übergebe diese Komponente an eine andere Komponente namens `App`, und lass `App` die Funktion `onClick` definieren, um wiederverwendbare Logik zu teilen.

```jsx
import React from 'react';

const FunctionPropComponent = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Klick mich!</button>
    </div>
  );
};
```