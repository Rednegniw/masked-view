/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "NFMaskedViewManager.h"

#ifndef RCT_NEW_ARCH_ENABLED
#import "NFMaskedView.h"
#endif

@implementation NFMaskedViewManager

RCT_EXPORT_MODULE()

#ifndef RCT_NEW_ARCH_ENABLED
- (UIView *)view
{
  return [NFMaskedView new];
}
#endif

@end
