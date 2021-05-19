// ButtonExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

// import { NavigationPage, ListRow, Button, Label, Theme } from 'teaset';
import {
  NavigationPage,
  ListRow,
  LlsRnButton,
  Label,
  Theme,
} from '../component-path';

export default class LlsRnButtonExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'LlsRnButton',
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
          detail={<LlsRnButton title="主按钮" type="primary" size="large" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="主按钮"
              type="primary"
              size="large"
              press={true}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
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
            <LlsRnButton
              title="主按钮"
              type="primary"
              size="large"
              loading={true}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="主按钮"
              type="primary"
              size="large"
              done={true}
            />
          }
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>次按钮</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="次按钮" type="secondary" size="large" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="次按钮"
              type="secondary"
              size="large"
              press={true}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
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
            <LlsRnButton
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
            <LlsRnButton
              title="次按钮"
              type="secondary"
              size="large"
              done={true}
            />
          }
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>文字按钮</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="文字按钮" type="text" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="文字按钮" type="text" press={true} />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="文字按钮" type="text" disabled={true} />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="文字按钮" type="text" loading={true} />}
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>图标按钮</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton type="icon" iconName="upload" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton type="icon" iconName="upload" press={true} />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton type="icon" iconName="upload" disabled={true} />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton type="icon" loading={true} />}
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>中按钮Primary</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="Normal" type="primary" size="middle" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="Press"
              type="primary"
              size="middle"
              press={true}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="Disable"
              type="primary"
              size="middle"
              disabled={true}
            />
          }
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>中按钮Secondary</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="Normal" type="secondary" size="middle" />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="Press"
              type="secondary"
              size="middle"
              press={true}
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="Disable"
              type="secondary"
              size="middle"
              disabled={true}
            />
          }
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>小按钮</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="小按钮" type="primary" size="small" />}
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>图标组合按钮</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="图标按钮"
              type="iconPrimaryButton"
              iconName="upload"
              size="large"
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="图标按钮"
              iconName="upload"
              type="iconSecondaryButton"
              size="large"
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="图标按钮"
              iconName="upload"
              type="iconTextButton"
            />
          }
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>置底按钮</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>释义按钮带角标</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="释义按钮" type="primary" mark={true} />}
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={<LlsRnButton title="释义按钮" type="secondary" mark={true} />}
          bottomSeparator="none"
        />

        <View style={styles.category}>
          <Text style={styles.categoryText}>释义按钮multiLine</Text>
        </View>
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="释义按钮"
              content="此处为描述性文案此处为描述性文案"
              type="primary"
            />
          }
          bottomSeparator="none"
        />
        <ListRow
          style={styles.listRowContainer}
          detail={
            <LlsRnButton
              title="释义按钮"
              content="此处为描述性文案此处为描述性文案"
              type="secondary"
            />
          }
          bottomSeparator="none"
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
