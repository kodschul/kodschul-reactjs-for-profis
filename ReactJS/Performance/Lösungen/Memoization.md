# React: Memoization-Technik - Lösungen

## Aufgabe 1: Verwendung der `memo`-Funktion

```jsx
import React, { memo } from 'react';

const MemoComponent = memo(({ data }) => {
  console.log('MemoComponent wurde gerendert.');
  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
});
```

## Aufgabe 2: Verwendung von useMemo

```jsx
import React, { useMemo } from 'react';

const MemoHookComponent = ({ data, counter }) => {
  const listLength = useMemo(() => {
    console.log('Länge der Liste wurde berechnet.');
    return data.length;
  }, [data]);

  console.log('MemoHookComponent wurde gerendert.');

  return (
    <div>
      <p>Liste Länge: {listLength}</p>
      <p>Zähler: {counter}</p>
    </div>
  );
};
```

## Aufgabe 3: Verwendung von useCallback

```jsx
import React, { useCallback } from 'react';

const CallbackComponent = ({ handleClick, handleReset }) => {
  const handleClickCallback = useCallback(() => {
    console.log('Klick-Funktion wurde aufgerufen.');
    handleClick();
  }, [handleClick]);

  const handleResetCallback = useCallback(() => {
    console.log('Reset-Funktion wurde aufgerufen.');
    handleReset();
  }, [handleReset]);

  console.log('CallbackComponent wurde gerendert.');

  return (
    <div>
      <button onClick={handleClickCallback}>Klick mich</button>
      <button onClick={handleResetCallback}>Zurücksetzen</button>
    </div>
  );
};
```

## Aufgabe 4: Kombination von useMemo und useCallback

```jsx
import React, { useMemo, useCallback } from 'react';

const CombinedMemoCallbackComponent = ({ data, handleClick, handleReset }) => {
  const listLength = useMemo(() => {
    console.log('Länge der Liste wurde berechnet.');
    return data.length;
  }, [data]);

  const handleClickCallback = useCallback(() => {
    console.log('Klick-Funktion wurde aufgerufen.');
    handleClick();
  }, [handleClick]);

  const handleResetCallback = useCallback(() => {
    console.log('Reset-Funktion wurde aufgerufen.');
    handleReset();
  }, [handleReset]);

  console.log('CombinedMemoCallbackComponent wurde gerendert.');

  return (
    <div>
      <p>Liste Länge: {listLength}</p>
      <button onClick={handleClickCallback}>Klick mich</button>
      <button onClick={handleResetCallback}>Zurücksetzen</button>
    </div>
  );
};
```

Diese Lösungen zeigen die korrekte Verwendung von memo, useMemo und useCallback für die Memoization-Technik in React-Komponenten.