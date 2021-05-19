// CheckboxExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';

// import {NavigationPage, ListRow, Checkbox, Text} from 'teaset';
import {NavigationPage, ListRow, Checkbox} from '../component-path';

export default class CheckboxExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'LlsCheckbox',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    Object.assign(this.state, {
      checkedSM: false,
      checkedStandard: true,
      checked: true,
      default: false,
      checkedDisabled: true,
      checkedCustom: false,

      checkedLG: false,
      checkedEmpty: false,
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
            <Checkbox
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
            <Checkbox
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
            <Checkbox
              title="默认"
              checked={this.state.default}
              onChange={value => this.setState({default: value})}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<Checkbox title="禁用勾选" checkedDisabled={true} />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<Checkbox title="禁用" disabled={true} />}
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>胶囊型</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Checkbox
              size="large"
              title="已选"
              checkBoxContent="选项"
              checked={this.state.checked}
              onChange={value => this.setState({checked: value})}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Checkbox
              size="large"
              title="未选"
              checkBoxContent="选项"
              checked={this.state.default}
              onChange={value => this.setState({default: value})}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Checkbox
              size="large"
              title="禁用"
              checkBoxContent="选项"
              disabled={true}
            />
          }
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>空</Text>
        </View>

        <ListRow
          title="Size sm"
          detail={
            <Checkbox
              title="Checkbox"
              size="sm"
              checked={this.state.checkedSM}
              onChange={value => this.setState({checkedSM: value})}
            />
          }
          topSeparator="full"
        />
        <ListRow
          title="Size md"
          detail={
            <Checkbox
              title="Checkbox"
              size="md"
              checked={this.state.checkedMD}
              onChange={value => this.setState({checkedMD: value})}
            />
          }
        />
        <ListRow
          title="Size lg"
          detail={
            <Checkbox
              title="Checkbox"
              size="lg"
              checked={this.state.checkedLG}
              onChange={value => this.setState({checkedLG: value})}
            />
          }
          bottomSeparator="full"
        />
        <View style={{height: 20}} />
        <ListRow
          title="Empty title"
          detail={
            <Checkbox
              checked={this.state.checkedEmpty}
              onChange={value => this.setState({checkedEmpty: value})}
            />
          }
          topSeparator="full"
        />
        <ListRow
          title="Disabled"
          detail={
            <Checkbox
              title="Checkbox"
              disabled={true}
              checked={this.state.checkedDisable}
              onChange={value => this.setState({checkedDisable: value})}
            />
          }
          bottomSeparator="full"
        />
        <View style={{height: 20}} />
        <ListRow
          title="Custom"
          detail={
            <Checkbox
              title="Custom"
              titleStyle={{color: '#8a6d3b', paddingLeft: 4}}
              checkedIcon={
                <Image
                  style={{width: 15, height: 15, tintColor: '#8a6d3b'}}
                  source={require('../icons/checkbox_checked.png')}
                />
              }
              uncheckedIcon={
                <Image
                  style={{width: 15, height: 15, tintColor: '#8a6d3b'}}
                  source={require('../icons/checkbox_unchecked.png')}
                />
              }
              checked={this.state.checkedCustom}
              onChange={value => this.setState({checkedCustom: value})}
            />
          }
          topSeparator="full"
          bottomSeparator="full"
        />
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
