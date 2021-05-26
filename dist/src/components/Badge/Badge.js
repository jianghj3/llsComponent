// Badge.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ViewPropTypes} from 'react-native';

import Theme from '../../themes/Theme';

export default class Badge extends Component {
  static propTypes = {
    ...ViewPropTypes,
    type: PropTypes.oneOf(['number', 'text', 'capsule', 'square', 'dot']),
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    countStyle: Text.propTypes.style,
    maxCount: PropTypes.number,
    maxText: PropTypes.number,
  };

  static defaultProps = {
    ...View.defaultProps,
    maxCount: 99,
    maxText: 4,
  };

  buildStyle() {
    let {style, type, count} = this.props;

    let width,
      height,
      minWidth,
      borderRadius,
      borderWidth,
      padding,
      borderBottomLeftRadius;

    switch (type) {
      case 'number':
        height = Theme.badgeSize;
        minWidth = Theme.badgeMinWidth;
        borderWidth = Theme.badgeBorderWidth;
        borderRadius = Theme.badgeSize / 2;
        borderBottomLeftRadius = Theme.badgeBorderBottomLeftRadius;
        padding = (count + '').length === 1 ? 0 : Theme.badgePadding;
        break;
      case 'text':
        height = Theme.badgeSize;
        minWidth = Theme.badgeMinWidth;
        borderRadius = Theme.badgeSize / 2;
        borderWidth = Theme.badgeBorderWidth;
        borderBottomLeftRadius = Theme.badgeBorderBottomLeftRadius;
        padding = (count + '').length === 1 ? 0 : Theme.badgePadding;
        break;
      default:
        width = Theme.badgeDotSize;
        height = Theme.badgeDotSize;
        borderRadius = Theme.badgeDotSize / 2;
        borderWidth = 0;
        padding = 0;
    }

    style = [
      {
        backgroundColor: Theme.badgeColor,
        width: width,
        height: height,
        minWidth: minWidth,
        borderRadius: borderRadius,
        borderColor: Theme.badgeBorderColor,
        borderWidth: borderWidth,
        paddingLeft: padding,
        paddingRight: padding,
        borderBottomLeftRadius,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
    ].concat(style);

    return style;
  }

  renderInner() {
    let {type, count, countStyle, maxCount, maxText} = this.props;
    let color = Theme.badgeTextColor,
      fontSize,
      lineHeight,
      fontWeight;

    switch (type) {
      case 'number':
        fontSize = Theme.badgeNumberFontSize;
        break;
      case 'text':
        fontSize = Theme.badgeTextFontSize;
        break;
    }
    let textStyle = [
      {
        color,
        fontSize,
        lineHeight,
        fontWeight,
      },
    ].concat(countStyle);

    if (count || count === 0) {
      if (type === 'number') {
        return (
          <Text style={textStyle} allowFontScaling={false} numberOfLines={1}>
            {count > maxCount ? maxCount + '+' : count}
          </Text>
        );
      } else {
        let limitedText = '';
        if (count.length > maxText) {
          //文字数量大于规定的值后，不再渲染多余的文字
          for (let i = 0; i < maxText; i++) {
            limitedText += count[i];
          }
        }
        return (
          <Text style={textStyle} allowFontScaling={false} numberOfLines={1}>
            {count.length > maxText ? limitedText : count}
          </Text>
        );
      }
    }
  }

  render() {
    let {
      style,
      children,
      type,
      count,
      countStyle,
      maxCount,
      ...others
    } = this.props;
    return (
      <View style={this.buildStyle()} {...others}>
        {this.renderInner()}
      </View>
    );
  }
}
