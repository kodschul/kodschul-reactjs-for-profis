# React: XSS-Vermeidung - Übungsaufgaben

## Aufgabe 1: JSX Escape-Funktionen

Erstelle eine React-Komponente namens `XSSExample`, die eine Benutzereingabe (`userInput`) als Prop akzeptiert und diese sicher anzeigt. Verwende dabei JSX Escape-Funktionen, um potenziell unsichere Inhalte zu verhindern.

## Aufgabe 2: Sichere Verwendung von `dangerouslySetInnerHTML`

Erstelle eine React-Komponente namens `HTMLRenderer`, die eine Benutzereingabe (`htmlContent`) als Prop akzeptiert und diese sicher mit `dangerouslySetInnerHTML` anzeigt. Stelle sicher, dass die Eingabe vor der Verwendung ordnungsgemäß gesäubert und validiert wird.

## Aufgabe 3: Validierung von Benutzereingaben

Implementiere eine Funktion namens `validateInput`, die eine Benutzereingabe als Parameter erhält und sicherstellt, dass nur erwartete Daten akzeptiert werden. Verwende diese Funktion in einer React-Komponente, um die Benutzereingabe zu validieren, bevor sie angezeigt wird.

## Aufgabe 4: Einsatz von DOMPurify

Erstelle eine React-Komponente namens `DOMPurifyExample`, die DOMPurify verwendet, um eine Benutzereingabe (`userInput`) sicher anzuzeigen. Verwende die `DOMPurify.sanitize`-Funktion, um potenzielle XSS-Angriffe zu verhindern.

## Aufgabe 5: Aktualisierung von Abhängigkeiten

Aktualisiere die React-Abhängigkeit in deinem React-Projekt auf die neueste Version. Überprüfe auch, ob du die neueste Version von DOMPurify oder anderen Sicherheitsbibliotheken verwendest, die du in deiner Anwendung einsetzt.

### Hinweis

Für die Aufgaben 1 bis 4 kannst du mit simulierten Benutzereingaben arbeiten, um die Sicherheitsmechanismen zu testen. Achte darauf, dass die Implementierungen sicher und robust sind, um XSS-Angriffe zu vermeiden.
