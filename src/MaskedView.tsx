import * as React from 'react';
import { useRef } from 'react';
import { View, StyleSheet, requireNativeComponent } from 'react-native';

const RNCMaskedView = requireNativeComponent<any>('RNCMaskedView');

import type { MaskedViewProps } from './MaskedViewTypes';

/**
 * Renders the child view with a mask specified in the `maskElement` prop.
 *
 * ```
 * import React from 'react';
 * import { Text, View } from 'react-native';
 * import MaskedView from 'react-native-masked-view';
 *
 * function MyMaskedView() {
 *   return (
 *     <MaskedView
 *       style={{ flex: 1 }}
 *       maskElement={
 *         <View style={styles.maskContainerStyle}>
 *           <Text style={styles.maskTextStyle}>
 *             Basic Mask
 *           </Text>
 *         </View>
 *       }
 *     >
 *       <View style={{ flex: 1, backgroundColor: 'blue' }} />
 *     </MaskedView>
 *   );
 * }
 * ```
 *
 * The above example will render a view with a blue background that fills its
 * parent, and then mask that view with text that says "Basic Mask".
 *
 * The alpha channel of the view rendered by the `maskElement` prop determines how
 * much of the view's content and background shows through. Fully or partially
 * opaque pixels allow the underlying content to show through but fully
 * transparent pixels block that content.
 *
 */
const MaskedView = ({
  maskElement,
  children,
  ...otherViewProps
}: MaskedViewProps) => {
  const hasWarnedInvalidRenderMask = useRef(false);

  if (!React.isValidElement(maskElement)) {
    if (!hasWarnedInvalidRenderMask.current) {
      console.warn(
        'MaskedView: Invalid `maskElement` prop was passed to MaskedView. ' +
          'Expected a React Element. No mask will render.'
      );
      hasWarnedInvalidRenderMask.current = true;
    }
    return <View {...otherViewProps}>{children}</View>;
  }

  return (
    <RNCMaskedView {...otherViewProps}>
      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        {maskElement}
      </View>
      {children}
    </RNCMaskedView>
  );
};

export default MaskedView;
