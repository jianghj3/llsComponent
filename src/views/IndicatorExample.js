// LlsRnIndicatorExample.js

'use strict';

import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  Modal,
} from 'react-native';

import {
  NavigationPage,
  ListRow,
  LlsRnIndicator,
  Theme,
} from '../component-path';

export default class LlsRnIndicatorExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'LlsRnIndicator',
    showBackButton: true,
  };

  showModal() {
    LlsRnIndicator.show({
      text: '加载中...',
      icon: <ActivityIndicator size="large" color={Theme.toastIconTintColor} />,
      // position: 'center',
      // duration: 5000,
      // overlayOpacity: 0.4, //控制大背景是否透明
      // modal: true, //都可以自定义
    });
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>标准型</Text>
        </View>
        <ListRow
          title="左右布局"
          onPress={() => LlsRnIndicator.message('加载中')}
          topSeparator="full"
        />
        <ListRow
          title="上下布局"
          onPress={() => LlsRnIndicator.message('加载中')}
          topSeparator="full"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>模态型</Text>
        </View>
        <ListRow title="模态型" onPress={() => this.showModal()} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  category: {
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 10,
    paddingLeft: 5,
    borderLeftColor: '#0887ff',
    borderLeftWidth: 5,
  },
  categoryText: {
    fontSize: 18,
  },
});
