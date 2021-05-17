// ButtonExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

// import { NavigationPage, ListRow, Button, Label, Theme } from 'teaset';
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
        <View style={styles.category}>
          <Text style={styles.categoryText}>主按钮</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<Button title="主按钮" type="primary" size="large" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Button title="主按钮" type="primary" size="large" press={true} />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Button
              title="主按钮"
              type="primary"
              size="large"
              disabled={true}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Button title="主按钮" type="primary" size="large" loading={true} />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Button title="主按钮" type="primary" size="large" done={true} />
          }
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>次按钮</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<Button title="次按钮" type="secondary" size="large" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Button title="次按钮" type="secondary" size="large" press={true} />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Button
              title="次按钮"
              type="secondary"
              size="large"
              disabled={true}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Button
              title="次按钮"
              type="secondary"
              size="large"
              loading={true}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <Button title="次按钮" type="secondary" size="large" done={true} />
          }
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>文字按钮</Text>
        </View>

        <ListRow
          style={styles.listRowContainer}
          detail={<Button title="Button" />}
          topSeparator="none"
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<Button title="Button" type="secondary" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<Button title="Button" type="danger" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<Button title="Button" type="link" />}
          bottomSeparator="none"
          bottomSeparator="full"
        />
        <View style={{height: 20}} />
        <ListRow
          title="Size xs"
          detail={<Button title="Button" size="xs" />}
          topSeparator="full"
        />
        <ListRow title="Size sm" detail={<Button title="Button" size="sm" />} />
        <ListRow title="Size md" detail={<Button title="Button" size="md" />} />
        <ListRow
          title="Size lg"
          detail={<Button title="Button" size="large" />}
        />
        <ListRow
          title="Size xl"
          detail={<Button title="Button" size="xl" />}
          bottomSeparator="full"
        />
        <View style={{height: 20}} />
        <ListRow
          title="Type default disabled"
          detail={<Button title="Button" disabled={true} />}
          topSeparator="full"
        />
        <ListRow
          title="Type primary disabled"
          detail={<Button title="Button" type="primary" disabled={true} />}
        />
        <ListRow
          title="Type secondary disabled"
          detail={<Button title="Button" type="secondary" disabled={true} />}
        />
        <ListRow
          title="Type danger disabled"
          detail={<Button title="Button" type="danger" disabled={true} />}
        />
        <ListRow
          title="Type link disabled"
          detail={<Button title="Button" type="link" disabled={true} />}
          bottomSeparator="full"
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
