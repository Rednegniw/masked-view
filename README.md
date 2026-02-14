# @rednegniw/masked-view

React Native MaskedView component with Fabric (New Architecture) support.

This is a fork of [`@react-native-masked-view/masked-view`](https://github.com/react-native-masked-view/masked-view) with:
- Fabric / New Architecture support
- Renamed native module (`NFMaskedView`) to avoid conflicts with the original package

## Attribution

Based on `@react-native-masked-view/masked-view`
Copyright (c) React Native Community
MIT License

## Platforms Supported

- [x] iOS
- [x] Android

## Installation

```sh
npm install @rednegniw/masked-view
```

or

```sh
yarn add @rednegniw/masked-view
```

## Usage

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@rednegniw/masked-view';

const App = () => {
  return (
    <MaskedView
      style={{ flex: 1, flexDirection: 'row', height: '100%' }}
      maskElement={
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Basic Mask
          </Text>
        </View>
      }
    >
      <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
    </MaskedView>
  );
}

export default App
```

### Props

- [View props...](https://reactnative.dev/docs/view#props)
- [`maskElement`](#maskelement) — Required. The React element used as the mask.
- [`androidRenderingMode`](#androidrenderingmode) — Android only. `'software'` or `'hardware'` (default).

### `maskElement`

| Type    | Required |
| ------- | -------- |
| element | Yes      |

### `androidRenderingMode`

By default `hardware` rendering mode will be used for best performance, however if you need to animate your `maskElement` then you'll need to switch to `software` to get your mask to update. This prop only affects Android.

| Type                   | Required | Default    |
| ---------------------- | -------- | ---------- |
| `software`, `hardware` | No       | `hardware` |
