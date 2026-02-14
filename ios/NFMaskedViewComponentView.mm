#ifdef RCT_NEW_ARCH_ENABLED
#import "NFMaskedViewComponentView.h"

#import <react/renderer/components/NFMaskedViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/NFMaskedViewSpec/Props.h>
#import <react/renderer/components/NFMaskedViewSpec/RCTComponentViewHelpers.h>
#import <React/RCTFabricComponentsPlugins.h>

using namespace facebook::react;

@interface NFMaskedViewComponentView () <RCTNFMaskedViewViewProtocol>
@end

@implementation NFMaskedViewComponentView

- (instancetype)initWithFrame:(CGRect)frame
{
    if (self = [super initWithFrame:frame]) {
        static const auto defaultProps = std::make_shared<const NFMaskedViewProps>();
        _props = defaultProps;
    }
    return self;
}

- (void)mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView
                          index:(NSInteger)index
{
    if (index == 0) {
        self.maskView = childComponentView;
        return;
    }
    [self addSubview:childComponentView];
}

- (void)unmountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView
                            index:(NSInteger)index
{
    if (index == 0) {
        self.maskView = nil;
        return;
    }
    [childComponentView removeFromSuperview];
}

- (void)invalidateLayer
{
    // Stub: prevent RCTViewComponentView border rendering
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<NFMaskedViewComponentDescriptor>();
}

@end

Class<RCTComponentViewProtocol> NFMaskedViewCls(void)
{
    return NFMaskedViewComponentView.class;
}
#endif
