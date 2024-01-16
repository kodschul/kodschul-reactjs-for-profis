# React: XSS-Vermeidung

In dieser Erläuterung wirst du lernen, wie du XSS-Angriffe (Cross-Site Scripting) in React vermeiden kannst, indem du bewährte Praktiken zur sicheren Handhabung von Benutzereingaben und der Verwendung von JSX anwendest.

## Verwendung von JSX Escape-Funktionen

Stelle sicher, dass du JSX Escape-Funktionen verwendest, um potenziell unsichere Benutzereingaben sicher anzuzeigen. Dies verhindert die Ausführung von unerwünschtem JavaScript-Code.

```jsx
const userInput = '<script>alert("XSS");</script>';

// Schlecht
const ExampleComponent = () => {
  return <div>{userInput}</div>;
};

// Besser
const ExampleComponent = () => {
  return <div>{ReactHtmlParser(userInput)}</div>;
};
```

In diesem Beispiel wurde die ReactHtmlParser-Bibliothek verwendet, um den Benutzereingabe-String sicher zu parsen und anzuzeigen.

## Sichere Verwendung von dangerouslySetInnerHTML
Wenn du dangerouslySetInnerHTML verwendest, um HTML-Inhalte anzuzeigen, stelle sicher, dass die Eingaben ordnungsgemäß gesäubert und validiert werden, um XSS-Angriffe zu verhindern.

```jsx
const userInput = '<script>alert("XSS");</script>';

// Schlecht
const ExampleComponent = () => {
  return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
};

// Besser
const ExampleComponent = () => {
  const sanitizedInput = sanitize(userInput);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedInput }} />;
};
```

Hier wurde die sanitize-Funktion verwendet, um den Benutzereingabe-String sicher zu säubern.

## Validierung von Benutzereingaben
Validiere und säubere Benutzereingaben immer, bevor du sie in deine Anwendung einfügst. Verwende Validierungsregeln und Bibliotheken, um sicherzustellen, dass nur erwartete Daten akzeptiert werden.

```jsx
const userInput = '<script>alert("XSS");</script>';

// Schlecht
const sanitizedInput = userInput.replace(/<\/?script>/g, '');

// Besser
const sanitizedInput = sanitize(userInput);
```

## Einsatz von Sicherheitsbibliotheken
Nutze spezialisierte Sicherheitsbibliotheken wie DOMPurify, um XSS-Angriffe zu verhindern. Diese Bibliotheken bieten fortgeschrittene Mechanismen zur Säuberung von HTML-Inhalten.

```jsx
import DOMPurify from 'dompurify';

const userInput = '<script>alert("XSS");</script>';

// Besser
const sanitizedInput = DOMPurify.sanitize(userInput);
```

## Aktualisierung von Abhängigkeiten
Halte deine Abhängigkeiten, einschließlich React und Sicherheitsbibliotheken, auf dem neuesten Stand, um von Sicherheitsupdates zu profitieren und potenzielle Sicherheitslücken zu schließen.

```jsx
npm update react
npm update dompurify
```

Indem du diese bewährten Praktiken befolgst, kannst du effektiv XSS-Angriffe in deinen React-Anwendungen vermeiden und eine sicherere Benutzererfahrung gewährleisten.