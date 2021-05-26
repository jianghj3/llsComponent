// OverlayExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {NavigationPage, ListRow, Overlay, LlsRnMask} from '../component-path';

export default class OverlayExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'LlsMask',
    showBackButton: true,
  };

  showMask() {
    let overlayView = <LlsRnMask />;
    Overlay.show(overlayView);
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow
          title="Mask"
          onPress={() => this.showMask()}
          topSeparator="none"
          bottomSeparator="none"
        />
      </ScrollView>
    );
  }
}
