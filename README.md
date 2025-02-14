# ObservableDiv for React

This library provides a React component that creates a `<div>` element for
embedding non-React things into, that dispatches events when it's mounted,
unmounted or resized.

```ts
<ObservableDiv
  onMount={(domElement) => console.log("Mounted", domElement)}
  onUnmount={() => console.log("Unmounted")}
  onResize={({ width, height }) =>
    console.log(`Resized to ${width} x ${height}`)
  }
>
  {/* You can optionally put content here */}
</ObservableDiv>
```

This component provides the ideal host for things like a [Three.js](https://threejs.org)
canvas, for example.

## Strict mode

Please keep in mind that React's `<StrictMode>` may cause this component to
dispatch the mount event twice in development. This is a know issue with
`<StrictMode>` that affects all components and should be managed appropriately.
