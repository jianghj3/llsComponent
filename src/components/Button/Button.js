// Button.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';

// import Theme from 'teaset/themes/Theme';
import Theme from '../../component-path';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'default',
      'primary',
      'secondary',
      'danger',
      'link',
    ]),
    size: PropTypes.oneOf(['xl', 'large', 'md', 'sm', 'xs']),
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
    let {style, type, size, press, disabled} = this.props;

    let backgroundColor,
      borderColor,
      borderWidth,
      borderRadius,
      width,
      height,
      paddingVertical,
      paddingHorizontal;
    switch (type) {
      case 'primary':
        backgroundColor = Theme.btnPrimaryColor;
        borderColor = Theme.btnPrimaryColor;
        if (press) {
          backgroundColor = Theme.btnPrimaryPressColor;
          borderColor = Theme.btnPrimaryPressColor;
        }
        if (disabled) {
          backgroundColor = Theme.btnPrimaryDisabledColor;
          borderColor = Theme.btnPrimaryDisabledColor;
        }
        break;
      case 'secondary':
        backgroundColor = Theme.btnSecondaryColor;
        borderColor = Theme.btnSecondaryBorderColor;
        if (press) {
          borderColor = Theme.btnSecondaryPressBorderColor;
        }
        if (disabled) {
          borderColor = Theme.btnSecondaryDisabledBorderColor;
        }
        break;
      case 'danger':
        backgroundColor = Theme.btnDangerColor;
        borderColor = Theme.btnDangerBorderColor;
        break;
      case 'link':
        backgroundColor = Theme.btnLinkColor;
        borderColor = Theme.btnLinkBorderColor;
        break;
      default:
        backgroundColor = Theme.btnPrimaryColor;
        borderColor = Theme.btnPrimaryColor;
        if (press) {
          backgroundColor = Theme.btnPrimaryPressColor;
          borderColor = Theme.btnPrimaryPressColor;
        }
        if (disabled) {
          backgroundColor = Theme.btnPrimaryDisabledColor;
          borderColor = Theme.btnPrimaryDisabledColor;
        }
        break;
    }
    switch (size) {
      case 'xl':
        borderRadius = Theme.btnBorderRadiusXL;
        paddingVertical = Theme.btnPaddingVerticalXL;
        paddingHorizontal = Theme.btnPaddingHorizontalXL;
        break;
      case 'large':
        borderRadius = Theme.btnBorderRadiusLarge;
        width = Theme.btnWidthLarge;
        height = Theme.btnHeightLarge;
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
        borderRadius = Theme.btnBorderRadiusLarge;
        width = Theme.btnWidthLarge;
        height = Theme.btnHeightLarge;
    }
    borderWidth = Theme.btnBorderWidth;

    style = [
      {
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
        width,
        height,
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    ].concat(style);
    style = StyleSheet.flatten(style);

    return style;
  }

  renderTitle() {
    let {
      type,
      size,
      title,
      titleStyle,
      children,
      press,
      disabled,
      loading,
      done,
    } = this.props;

    if (
      !React.isValidElement(title) &&
      (title || title === '' || title === 0)
    ) {
      let textColor, textFontSize, renderLoading, renderDone;
      switch (type) {
        case 'primary':
          textColor = Theme.btnPrimaryTitleColor;
          break;
        case 'secondary':
          textColor = Theme.btnSecondaryTitleColor;
          if (press) {
            textColor = Theme.btnSecondaryPressTitleColor;
          }
          if (disabled) {
            textColor = Theme.btnSecondaryDisabledTitleColor;
          }
          break;
        case 'danger':
          textColor = Theme.btnDangerTitleColor;
          break;
        case 'link':
          textColor = Theme.btnLinkTitleColor;
          break;
        default:
          textColor = Theme.btnPrimaryTitleColor;
      }
      switch (size) {
        case 'xl':
          textFontSize = Theme.btnFontSizeXL;
          break;
        case 'large':
          textFontSize = Theme.btnFontSizeLarge;
          break;
        case 'sm':
          textFontSize = Theme.btnFontSizeSM;
          break;
        case 'xs':
          textFontSize = Theme.btnFontSizeXS;
          break;
        default:
          textFontSize = Theme.btnFontSizeLarge;
      }

      //渲染loading图标
      if (loading) {
        renderLoading = (
          <ActivityIndicator color={textColor} style={{marginRight: 6}} />
        );
      }

      //渲染done图标
      if (done) {
        renderDone = (
          <AntDesign
            name={'checkcircleo'}
            size={20}
            style={{
              color: textColor,
              marginRight: 6,
              textAlignVertical: 'center',
            }}
          />
        );
      }

      titleStyle = [
        {
          color: textColor,
          fontSize: textFontSize,
          overflow: 'hidden',
        },
      ].concat(titleStyle);
      title = (
        <View style={{flexDirection: 'row'}}>
          {renderLoading}
          {renderDone}
          <Text style={titleStyle} numberOfLines={1}>
            {title}
          </Text>
        </View>
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
