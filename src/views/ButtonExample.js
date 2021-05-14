// ButtonExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

// import {NavigationPage, ListRow, Button, Label, Theme} from 'teaset';
import {NavigationPage, ListRow, Button, Label, Theme} from '../component-path';

export default class ButtonExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Button',
    showBackButton: true,
  };

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <View style={styles.category}>
          <Text style={styles.categoryText}>大按钮</Text>
        </View>
        <ListRow
          detail={<Button title="页面主要操作" type="primary" />}
          topSeparator="none"
          bottomSeparator="none"
        />
        <ListRow
          detail={<Button title="不可点击" type="primary" disabled={true} />}
          bottomSeparator="none"
        />
        <ListRow
          detail={<Button title="页面次要操作" type="secondary" />}
          bottomSeparator="none"
        />
        <ListRow
          detail={<Button title="不可点击" type="secondary" disabled={true} />}
          bottomSeparator="none"
        />
        <ListRow
          detail={<Button title="警示类操作" type="danger" />}
          bottomSeparator="none"
        />
        <ListRow
          detail={<Button title="不可点击" type="danger" disabled={true} />}
          bottomSeparator="none"
        />
        <View style={{height: 20}} />
        <ListRow title="Size xs" detail={<Button title="Button" size="xs" />} />
        <ListRow title="Size sm" detail={<Button title="Button" size="sm" />} />
        <ListRow title="Size md" detail={<Button title="Button" size="md" />} />
        <ListRow title="Size lg" detail={<Button title="Button" size="lg" />} />
        <ListRow title="Size xl" detail={<Button title="Button" size="xl" />} />
        <View style={{height: 20}} />
        <ListRow
          title="Type primary disabled"
          detail={<Button title="Button" type="primary" disabled={true} />}
        />
        <ListRow
          title="Type link disabled"
          detail={<Button title="Button" type="link" disabled={true} />}
        />
        <View style={{height: 20}} />
        <ListRow
          title="Custom"
          detail={
            <Button
              style={{
                backgroundColor: '#rgba(238, 169, 91, 0.1)',
                borderColor: '#8a6d3b',
              }}>
              <Image
                style={{width: 16, height: 16, tintColor: '#8a6d3b'}}
                source={require('../icons/search.png')}
              />
              <Label
                style={{color: '#8a6d3b', fontSize: 16, paddingLeft: 8}}
                text="Search"
              />
            </Button>
          }
          topSeparator="full"
          bottomSeparator="full"
        />
        <View style={{height: Theme.screenInset.bottom}} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  category: {
    marginLeft: 9,
    marginBottom: 15,
    paddingLeft: 5,
    borderLeftColor: '#00A0E4',
    borderLeftWidth: 6,
    borderStyle: 'solid',
  },
  categoryText: {
    fontSize: 18,
  },
});
