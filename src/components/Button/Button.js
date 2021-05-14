// Button.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// import Theme from 'teaset/themes/Theme';
import {Theme} from '../../component-path';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'default',
      'primary',
      'secondary',
      'danger',
      'link',
    ]),
    size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    titleStyle: Text.propTypes.style,
  };

  static defaultProps = {
    type: 'default',
    size: 'md',
  };

  measureInWindow(callback) {
    this.refs.touchableOpacity &&
      this.refs.touchableOpacity.measureInWindow(callback);
  }

  measure(callback) {
    this.refs.touchableOpacity && this.refs.touchableOpacity.measure(callback);
  }

  buildStyle() {
    let {style, type, size, disabled} = this.props;

    let backgroundColor,
      borderColor,
      borderWidth,
      borderRadius,
      paddingVertical,
      paddingHorizontal;
    switch (type) {
      case 'primary':
        backgroundColor = Theme.btnPrimaryColor;
        borderColor = Theme.btnPrimaryBorderColor;
        break;
      case 'secondary':
        backgroundColor = Theme.btnSecondaryColor;
        borderColor = Theme.btnSecondaryBorderColor;
        break;
      case 'danger':
        backgroundColor = Theme.btnDangerColor;
        borderColor = Theme.btnDangerBorderColor;
        break;
      default:
        backgroundColor = Theme.btnPrimaryColor;
        borderColor = Theme.btnPrimaryBorderColor;
    }
    switch (size) {
      case 'xl':
        borderRadius = Theme.btnBorderRadiusXL;
        paddingVertical = Theme.btnPaddingVerticalXL;
        paddingHorizontal = Theme.btnPaddingHorizontalXL;
        break;
      case 'lg':
        borderRadius = Theme.btnBorderRadiusLG;
        paddingVertical = Theme.btnPaddingVerticalLG;
        paddingHorizontal = Theme.btnPaddingHorizontalLG;
        break;
      case 'sm':
        borderRadius = Theme.btnBorderRadiusSM;
        paddingVertical = Theme.btnPaddingVerticalSM;
        paddingHorizontal = Theme.btnPaddingHorizontalSM;
        break;
      case 'xs':
        borderRadius = Theme.btnBorderRadiusXS;
        paddingVertical = Theme.btnPaddingVerticalXS;
        paddingHorizontal = Theme.btnPaddingHorizontalXS;
        break;
      default:
        borderRadius = Theme.btnBorderRadiusMD;
        paddingVertical = Theme.btnPaddingVerticalMD;
        paddingHorizontal = Theme.btnPaddingHorizontalMD;
    }
    borderWidth = Theme.btnBorderWidth;

    style = [
      {
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    ].concat(style);
    style = StyleSheet.flatten(style);
    if (disabled) {
      switch (type) {
        //button为disabled且在不同的type下显示不同的backgroundColor
        case 'primary':
          style.backgroundColor = Theme.btndisabledPrimaryColor;
          style.borderColor = Theme.btndisabledBorderPrimaryColor;
          break;
        case 'secondary':
          backgroundColor = Theme.btnSecondaryColor;
          borderColor = Theme.btnSecondaryBorderColor;
          break;
        case 'danger':
          backgroundColor = Theme.btnDangerColor;
          borderColor = Theme.btnDangerBorderColor;
          break;
        default:
          backgroundColor = Theme.btnSecondaryColor;
          borderColor = Theme.btnBorderColor;
      }
    }

    return style;
  }

  renderTitle() {
    let {type, size, title, titleStyle, children} = this.props;

    if (
      !React.isValidElement(title) &&
      (title || title === '' || title === 0)
    ) {
      let textColor, textFontSize;
      switch (type) {
        case 'primary':
          textColor = Theme.btnPrimaryTitleColor;
          break;
        case 'secondary':
          textColor = Theme.btnSecondaryTitleColor;
          break;
        case 'danger':
          textColor = Theme.btnDangerTitleColor;
          break;
        case 'link':
          textColor = Theme.btnLinkTitleColor;
          break;
        default:
          textColor = Theme.btnTitleColor;
      }
      switch (size) {
        case 'xl':
          textFontSize = Theme.btnFontSizeXL;
          break;
        case 'lg':
          textFontSize = Theme.btnFontSizeLG;
          break;
        case 'sm':
          textFontSize = Theme.btnFontSizeSM;
          break;
        case 'xs':
          textFontSize = Theme.btnFontSizeXS;
          break;
        default:
          textFontSize = Theme.btnFontSizeMD;
      }
      titleStyle = [
        {
          color: textColor,
          fontSize: textFontSize,
          overflow: 'hidden',
        },
      ].concat(titleStyle);
      title = (
        <Text style={titleStyle} numberOfLines={1}>
          {title}
        </Text>
      );
    }

    return title ? title : children;
  }

  render() {
    let {
      style,
      type,
      size,
      title,
      titleStyle,
      disabled,
      activeOpacity,
      children,
      ...others
    } = this.props;
    style = this.buildStyle();
    if (disabled) activeOpacity = style.opacity;
    return (
      <TouchableOpacity
        style={style}
        disabled={disabled}
        activeOpacity={activeOpacity}
        {...others}
        ref="touchableOpacity">
        {this.renderTitle()}
      </TouchableOpacity>
    );
  }
}
