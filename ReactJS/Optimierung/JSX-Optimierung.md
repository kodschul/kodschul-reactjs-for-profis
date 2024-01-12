# React: JSX Optimierung

In dieser Erläuterung wirst du lernen, wie du JSX optimieren kannst, um den Code sauberer, lesbarer und effizienter zu gestalten.

## Vermeide komplexe Ausdrücke in JSX

Stelle sicher, dass JSX-Ausdrücke nicht zu komplex werden, um die Lesbarkeit zu erhalten. Bei Bedarf zerlege komplexe Logik in separate Funktionen außerhalb der JSX-Ausdrücke.

```jsx
// Schlecht
const ExampleComponent = () => {
  return (
    <div>
      {condition1 && condition2 ? <p>Bedingung erfüllt</p> : <p>Bedingung nicht erfüllt</p>}
    </div>
  );
};

// Besser
const renderContent = () => {
  return condition1 && condition2 ? <p>Bedingung erfüllt</p> : <p>Bedingung nicht erfüllt</p>;
};

const ExampleComponent = () => {
  return <div>{renderContent()}</div>;
};
```

## Verwende Fragments für mehrere Elemente
Wenn du mehrere JSX-Elemente zurückgeben möchtest, verwende Fragments, um zusätzliche unnötige Elternelemente zu vermeiden.

```jsx
// Schlecht
const ExampleComponent = () => {
  return (
    <div>
      <p>Element 1</p>
      <p>Element 2</p>
    </div>
  );
};

// Besser
const ExampleComponent = () => {
  return (
    <>
      <p>Element 1</p>
      <p>Element 2</p>
    </>
  );
};
```

## Vermeide direkte Manipulation von DOM-Elementen
In React sollten DOM-Manipulationen vermieden werden. Verwende statt dessen den React-Datenfluss, um den Zustand der Komponenten zu aktualisieren.

```jsx
// Schlecht
const ExampleComponent = () => {
  const handleClick = () => {
    document.getElementById('myElement').style.color = 'red';
  };

  return (
    <div>
      <button onClick={handleClick}>Ändere Farbe</button>
      <p id="myElement">Text</p>
    </div>
  );
};

// Besser
const ExampleComponent = () => {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor('red');
  };

  return (
    <div>
      <button onClick={handleClick}>Ändere Farbe</button>
      <p style={{ color }}>Text</p>
    </div>
  );
};
```

## Escape und Säuberung von Daten
Stelle sicher, dass du Eingabedaten richtig bereinigst und escapst, um XSS-Angriffe zu verhindern. Verwende dazu Funktionen wie dangerouslySetInnerHTML mit Bedacht und filtere unerwünschte Inhalte.

```jsx
// Schlecht
const ExampleComponent = ({ userInput }) => {
  return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
};

// Besser
const ExampleComponent = ({ userInput }) => {
  const sanitizedInput = sanitize(userInput);
  return <div>{sanitizedInput}</div>;
};
```

Mit diesen Optimierungstipps kannst du deine React-Anwendungen sauberer und effizienter gestalten.