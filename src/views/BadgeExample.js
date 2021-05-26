// BadgeExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import styles from './styles';

import {NavigationPage, ListRow, Badge} from '../component-path';

export default class BadgeExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'LlsRnBadge',
    showBackButton: true,
  };

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>标准型</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<Badge />}
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>数字型</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={
            <View style={{flexDirection: 'row'}}>
              <Badge type="number" count={8} />
              <View style={{width: 4}} />
              <Badge type="number" count={88} />
              <View style={{width: 4}} />
              <Badge type="number" count={689} />
            </View>
          }
          bottomSeparator="none"
          topSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>文字型</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={
            <View style={{flexDirection: 'row'}}>
              <Badge type="text" count="NEW" />
              <View style={{width: 4}} />
              <Badge type="text" count="文字文字文字" />
            </View>
          }
          topSeparator="none"
          bottomSeparator="none"
        />
      </ScrollView>
    );
  }
}
