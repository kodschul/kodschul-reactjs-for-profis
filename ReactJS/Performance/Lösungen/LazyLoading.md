# Lazy Loading - Lösungen

## Aufgabe 1: Identifizierung geeigneter Ressourcen

Mögliche geeignete Ressourcen für Lazy Loading könnten große Bilder in einem Bildergalerie-Widget, externe Skripte für optionale Funktionen oder Ressourcen für eine sekundäre Ansicht auf einer Seite sein.

## Aufgabe 2: Verwendung der Intersection Observer API

```jsx
import React, { useRef, useEffect } from 'react';

const LazyLoadedImage = ({ src, alt }) => {
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageRef.current.src = src;
          observer.disconnect();
        }
      });
    });

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={imageRef} alt={alt} />;
};
```

## Aufgabe 3: Lazy Loading mit einer Bibliothek

```jsx
import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyLoadedComponent = () => {
  return (
    <div>
      <LazyLoad height={200} offset={100}>
        <img src="placeholder.jpg" alt="Lazy Loaded Image" />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <script src="lazy-loaded-script.js"></script>
      </LazyLoad>
    </div>
  );
};
```

## Aufgabe 4: Lazy Loading für externe Skripte
In dieser Aufgabe sollte die Implementierung abhängig von den spezifischen externen Skripten sein. Eine generische Lösung könnte die Verwendung der async- und defer-Attribute im <script>-Tag sein:

```jsx
<!-- Normalerweise geladenes Skript -->
<script src="normal-script.js"></script>

<!-- Lazy Loaded Skript -->
<script async defer data-src="lazy-loaded-script.js"></script>
```

## Hinweis
Diese Lösungen zeigen verschiedene Ansätze für Lazy Loading in React und allgemein für Webanwendungen. Beachte, dass Lazy Loading-Techniken je nach Anwendungsfall variieren können.