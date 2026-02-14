package com.numberflow.maskedview;

import androidx.annotation.Nullable;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

public class NFMaskedViewManager extends ViewGroupManager<NFMaskedView> {

  private static final String REACT_CLASS = "NFMaskedView";

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  protected NFMaskedView createViewInstance(ThemedReactContext themedReactContext) {
    return new NFMaskedView(themedReactContext);
  }

  @ReactProp(name = "androidRenderingMode")
  public void setAndroidRenderingMode(NFMaskedView view, @Nullable String renderingMode) {
    if (renderingMode != null) {
      view.setRenderingMode(renderingMode);
    }
  }
}
