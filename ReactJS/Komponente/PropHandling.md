# React: Arbeit mit Props in React-Komponenten

In dieser Mini-Übung wirst du lernen, wie du voreingestellte Werte für Props setzt, die erwarteten Typen überprüfst, Inhalte zwischen öffnenden und schließenden Tags einer Komponente überträgst, effizient alle Props an eine andere Komponente weitergibst und eine Funktion als Prop übergibst, um wiederverwendbare Logik zu teilen.

## Schritt 1: Neues React-Projekt erstellen (falls noch nicht vorhanden)

Falls du noch kein React-Projekt erstellt hast, führe die Schritte im ersten Abschnitt "React Installation" aus, um ein neues Projekt zu erstellen.

## Schritt 2: Voreingestellte Werte für Props

Erstelle eine React-Komponente namens `DefaultPropsComponent`, die eine Prop namens `message` akzeptiert. Setze einen voreingestellten Wert für `message`, falls keine Prop übergeben wird. Die voreingestellte Nachricht soll "Hello, World!" sein.

## Schritt 3: Überprüfung der erwarteten Typen oder Anforderungen der Props

Erstelle eine React-Komponente namens `PropTypesComponent`, die zwei Props akzeptiert: `name` (String) und `age` (Number). Überprüfe, ob die übergebenen Props die erwarteten Typen und Anforderungen erfüllen. Verwende dafür die `propTypes`-Bibliothek oder die entsprechende integrierte Funktionalität.

## Schritt 4: Übertragung von Inhalten zwischen öffnenden und schließenden Tags

Erstelle eine React-Komponente namens `ContentBetweenTags`, die als Kindkomponenten beliebigen Inhalt zwischen den öffnenden und schließenden Tags akzeptiert. Diese Inhalte sollen innerhalb der Komponente angezeigt werden.

## Schritt 5: Effiziente Übertragung aller Props an eine andere Komponente

Erstelle eine React-Komponente namens `PropTransferComponent`, die eine andere Komponente namens `DisplayComponent` enthält. Übertrage alle Props, die an `PropTransferComponent` übergeben werden, effizient an `DisplayComponent`, ohne jede Prop einzeln zu deklarieren.

## Schritt 6: Übertragung einer Funktion als Prop

Erstelle eine React-Komponente namens `FunctionPropComponent`, die eine Funktion namens `onClick` als Prop akzeptiert. Die Funktion soll beim Klick auf einen Button innerhalb der Komponente ausgelöst werden. Übergebe diese Komponente an eine andere Komponente namens `App`, und lass `App` die Funktion `onClick` definieren, um wiederverwendbare Logik zu teilen.
