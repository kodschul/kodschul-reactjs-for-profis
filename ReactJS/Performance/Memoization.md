# React: Memoization-Technik - Übungsaufgaben

## Aufgabe 1: Verwendung der `memo`-Funktion

Erstelle eine React-Komponente namens `MemoComponent`, die eine Liste von Daten als Prop annimmt und diese Liste rendert. Verwende die `memo`-Funktion, um die Komponente zu memoisieren und die Leistung zu verbessern. Überprüfe die Konsolenprotokolle, um sicherzustellen, dass die Komponente nur bei Änderungen in den Daten neu gerendert wird.

## Aufgabe 2: Verwendung von `useMemo`

Erstelle eine React-Komponente namens `MemoHookComponent`, die eine Liste von Daten und einen Zähler als Props annimmt. Die Komponente soll die Länge der Liste und den Zähler anzeigen. Verwende die `useMemo`-Hook, um die Berechnung der Länge der Liste zu memoisieren und die Leistung zu verbessern.

## Aufgabe 3: Verwendung von `useCallback`

Erstelle eine React-Komponente namens `CallbackComponent`, die zwei Funktionen als Props annimmt: `handleClick` und `handleReset`. Die Komponente soll zwei Buttons rendern, einen für das Klicken und einen für das Zurücksetzen. Verwende die `useCallback`-Hook, um sicherzustellen, dass die Funktionen nur bei Änderungen in den Abhängigkeiten neu erstellt werden.

## Aufgabe 4: Kombination von `useMemo` und `useCallback`

Erstelle eine React-Komponente namens `CombinedMemoCallbackComponent`, die eine Liste von Daten und zwei Funktionen (`handleClick` und `handleReset`) als Props annimmt. Die Komponente soll die Länge der Liste und zwei Buttons anzeigen. Verwende `useMemo` für die Längenberechnung und `useCallback` für die Klick- und Zurücksetz-Funktionen, um eine optimale Leistung zu erreichen.

### Hinweis

Für die Aufgaben 1 bis 4 kannst du Dummy-Daten verwenden, um die Memoization-Effekte zu überprüfen. Beachte die Konsolenprotokolle und stelle sicher, dass die Komponenten nur bei relevanten Änderungen neu gerendert werden.
