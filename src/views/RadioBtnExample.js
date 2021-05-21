// CheckboxExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';

// import {NavigationPage, ListRow, Checkbox, Text} from 'teaset';
import {
  NavigationPage,
  ListRow,
  LlsRnRadioGroup,
  LlsRnRadioButton,
} from '../component-path';

export default class CheckboxExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'LlsRnRadioBtn',
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
          detail={
            <LlsRnRadioGroup>
              <LlsRnRadioButton />
            </LlsRnRadioGroup>
          }
          bottomSeparator="none"
        />
        <View style={styles.category}>
          <Text style={styles.categoryText}>状态</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnRadioGroup>
              <LlsRnRadioButton title="勾选" />
              <LlsRnRadioButton title="默认" />
              <LlsRnRadioButton title="禁用勾选" checkedDisabled={true} />
              <LlsRnRadioButton title="禁用" disabled={true} />
            </LlsRnRadioGroup>
          }
          bottomSeparator="none"
        />
        <View style={{height: 20}} />
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
  listRowContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
