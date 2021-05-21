// CheckboxExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';

// import {NavigationPage, ListRow, Checkbox, Text} from 'teaset';
import {NavigationPage, ListRow, LlsRnCheckBox} from '../component-path';

export default class CheckboxExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'LlsRnCheckBox',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    Object.assign(this.state, {
      checkedStandard: true,
      checked: true,
      default: false,
      checkedDisabled: true,
      capsuleChecked: true,
      capsuleUnchecked: false,
      checkedDisable: true,
    });
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>标准型</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnCheckBox
              checked={this.state.checkedStandard}
              onChange={value => this.setState({checkedStandard: value})}
            />
          }
          bottomSeparator="none"
        />
        <View style={styles.category}>
          <Text style={styles.categoryText}>状态</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnCheckBox
              title="勾选"
              checked={this.state.checked}
              onChange={value => this.setState({checked: value})}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnCheckBox
              title="默认"
              checked={this.state.default}
              onChange={value => this.setState({default: value})}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnCheckBox title="禁用勾选" checkedDisabled={true} />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnCheckBox title="禁用" disabled={true} />}
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>胶囊型</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnCheckBox
              size="large"
              title="已选"
              checkBoxContent="选项"
              checked={this.state.capsuleChecked}
              onChange={value => this.setState({capsuleChecked: value})}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnCheckBox
              size="large"
              title="未选"
              checkBoxContent="选项"
              checked={this.state.capsuleUnchecked}
              onChange={value => this.setState({capsuleUnchecked: value})}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnCheckBox
              size="large"
              title="禁用"
              checkBoxContent="选项"
              disabled={true}
            />
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
