package com.facebook.react.viewmanagers;

import android.view.View;
import androidx.annotation.Nullable;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.BaseViewManagerInterface;

public class NFMaskedViewManagerDelegate<T extends View,
    U extends BaseViewManagerInterface<T> & NFMaskedViewManagerInterface<T>>
    extends BaseViewManagerDelegate<T, U> {

    public NFMaskedViewManagerDelegate(U viewManager) {
        super(viewManager);
    }

    @Override
    public void setProperty(T view, String propName, @Nullable Object value) {
        switch (propName) {
            case "androidRenderingMode":
                mViewManager.setAndroidRenderingMode(view, (String) value);
                break;
            default:
                super.setProperty(view, propName, value);
        }
    }
}
