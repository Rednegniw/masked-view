import { type ReactNode } from 'react';
import { type ViewProps } from 'react-native';

export type MaskedViewProps = Partial<ViewProps> & {
  children: ReactNode;
  /**
   * Should be a React element to be rendered and applied as the
   * mask for the child element.
   */
  maskElement: ReactNode;
  /**
   * Opt into software rendering to enable animated masks.
   */
  androidRenderingMode?: 'software' | 'hardware';
};
