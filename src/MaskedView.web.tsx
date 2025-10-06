import { type ReactNode, useEffect, useRef, useState } from 'react';
import { View, type ViewStyle, type StyleProp } from 'react-native';
// TODO: Fix this
// @ts-ignore
import { domToPng } from 'modern-screenshot';

interface MaskedViewProps {
  children: ReactNode;
  maskElement: ReactNode;
  style?: StyleProp<ViewStyle>;
  [key: string]: any;
}

const MaskedView = ({
  children,
  maskElement,
  style,
  ...rest
}: MaskedViewProps) => {
  const maskRef = useRef<HTMLDivElement>(null);
  const [mask, setMask] = useState<string>('');

  const snapShot = (): void => {
    if (!maskRef.current) {
      return;
    }
    domToPng(maskRef.current).then((dataUrl: string) => {
      setMask(dataUrl);
    });
  };

  useEffect(() => {
    // TODO: FIX this
    // @ts-ignore
    const observer = new ResizeObserver(snapShot);
    if (maskRef.current) {
      observer.observe(maskRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [maskElement]);

  return (
    <>
      <View
        style={{
          position: 'absolute',
          transform: [{ translateX: '-100%' }, { translateY: '-100%' }],
        }}
      >
        <div ref={maskRef}>{maskElement}</div>
      </View>

      <View
        style={[
          style,
          {
            //@ts-ignore
            mask: `url(${mask}) center no-repeat`,
          },
        ]}
        {...rest}
      >
        {children}
      </View>
    </>
  );
};

export default MaskedView;
