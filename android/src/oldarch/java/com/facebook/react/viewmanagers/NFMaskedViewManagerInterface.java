package com.facebook.react.viewmanagers;

import android.view.View;
import androidx.annotation.Nullable;

public interface NFMaskedViewManagerInterface<T extends View> {
    void setAndroidRenderingMode(T view, @Nullable String value);
}
