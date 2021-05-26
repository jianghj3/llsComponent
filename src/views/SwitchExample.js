// LlsRnIndicatorExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import styles from './styles';

import {NavigationPage, ListRow, Theme, LlsRnSwitch} from '../component-path';

export default class LlsRnSwitchExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'LlsRnSwitch',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    Object.assign(this.state, {
      toggle: false,
    });
  }

  setToggle(switchValue) {
    this.setState({
      toggle: switchValue,
    });
    console.log(1111);
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>标准型</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnSwitch />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnSwitch
              value={this.state.toggle}
              onValueChange={switchValue => this.setToggle(switchValue)}
            />
          }
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>状态(可操作)</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnSwitch title="开启" type="text" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnSwitch title="关闭" type="text" value={false} />}
          bottomSeparator="none"
        />
        <View style={styles.category}>
          <Text style={styles.categoryText}>状态(不可操作)</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnSwitch title="开启" type="text" disabled={true} />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnSwitch
              title="关闭"
              type="text"
              value={false}
              disabled={true}
            />
          }
          bottomSeparator="none"
        />
      </ScrollView>
    );
  }
}
