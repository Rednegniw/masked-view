// @flow strict-local
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';
import type { HostComponent } from 'react-native';

type NativeProps = $ReadOnly<{
  ...ViewProps,
}>;

export default (codegenNativeComponent<NativeProps>(
  'NFMaskedView',
): HostComponent<NativeProps>);
