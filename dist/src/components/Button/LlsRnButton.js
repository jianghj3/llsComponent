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

import Theme from '../../themes/Theme';

export default class LlsRnButton extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'default',
      'primary',
      'secondary',
      'text',
      'icon',
      'iconPrimaryButton',
      'iconSecondaryButton',
      'iconTextButton',
    ]),
    size: PropTypes.oneOf(['large', 'middle', 'small']),
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    titleStyle: Text.propTypes.style,
    iconName: PropTypes.string,
  };

  static defaultProps = {
    type: 'default',
    size: 'large',
  };

  measureInWindow(callback) {
    this.refs.touchableOpacity &&
      this.refs.touchableOpacity.measureInWindow(callback);
  }

  measure(callback) {
    this.refs.touchableOpacity && this.refs.touchableOpacity.measure(callback);
  }

  buildStyle() {
    let {style, type, size, press, disabled, content} = this.props;

    let backgroundColor, borderColor, borderWidth, borderRadius, width, height;
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
      case 'text':
        backgroundColor = Theme.btnTextBackgroundColor;
        borderColor = Theme.btnTextBackgroundColor;
        break;
      case 'icon':
        backgroundColor = Theme.btnTextBackgroundColor;
        borderColor = Theme.btnTextBackgroundColor;
        break;
      case 'iconPrimaryButton':
        backgroundColor = Theme.btnPrimaryColor;
        borderColor = Theme.btnPrimaryColor;
        break;
      case 'iconSecondaryButton':
        backgroundColor = Theme.btnSecondaryColor;
        borderColor = Theme.btnSecondaryBorderColor;
        break;
      case 'iconTextButton':
        backgroundColor = Theme.btnTextBackgroundColor;
        borderColor = Theme.btnTextBackgroundColor;
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
      case 'large':
        borderRadius = Theme.btnBorderRadiusLarge;
        width = Theme.btnWidthLarge;
        height = Theme.btnHeightLarge;
        if (content) {
          height = 60;
        }
        break;
      case 'middle':
        borderRadius = Theme.btnBorderRadiusMiddle;
        width = Theme.btnWidthMiddle;
        height = Theme.btnHeightMiddle;
        if (style && style.height) {
          borderRadius = Math.ceil(style.height / 2);
        }
        break;
      case 'small':
        borderRadius = Theme.btnBorderRadiusSmall;
        width = Theme.btnWidthSmall;
        height = Theme.btnHeightSmall;
        if (style && style.height) {
          borderRadius = Math.ceil(style.height / 2);
        }
        break;
      default:
        if (type !== 'text' && type !== 'icon' && type !== 'iconTextButton') {
          borderRadius = Theme.btnBorderRadiusLarge;
          width = Theme.btnWidthLarge;
          height = Theme.btnHeightLarge;
        }
        if (content) {
          height = Theme.btnMultiLineHeight;
        }
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
      content,
      titleStyle,
      press,
      disabled,
      loading,
      done,
      iconName,
      iconSize,
    } = this.props;

    let buttonTitle,
      textColor,
      textFontSize,
      textLineHeight,
      renderLoading,
      renderDone,
      renderIcon,
      textIconSize,
      renderContent;

    switch (type) {
      case 'primary':
        textColor = Theme.btnPrimaryTitleColor;
        if (size === 'middle') {
          textLineHeight = Theme.btnMiddleLineHeight;
        } else if (size === 'small') {
          textLineHeight = Theme.btnSmallLineHeight;
        } else {
          textLineHeight = Theme.btnLargeLineHeight;
        }
        break;
      case 'secondary':
        textColor = Theme.btnSecondaryTitleColor;
        if (press) {
          textColor = Theme.btnSecondaryPressTitleColor;
        }
        if (disabled) {
          textColor = Theme.btnSecondaryDisabledTitleColor;
        }
        if (size === 'middle') {
          textLineHeight = Theme.btnMiddleLineHeight;
        }
        break;
      case 'text':
        textColor = Theme.btnTextColor;
        if (press) {
          textColor = Theme.btnSecondaryPressTitleColor;
        }
        if (disabled) {
          textColor = Theme.btnSecondaryDisabledTitleColor;
        }
        break;
      case 'icon':
        textColor = Theme.btnTextColor;
        if (press) {
          textColor = Theme.btnSecondaryPressTitleColor;
        }
        if (disabled) {
          textColor = Theme.btnSecondaryDisabledTitleColor;
        }
        break;
      case 'iconPrimaryButton':
        textColor = Theme.btnPrimaryTitleColor;
        break;
      case 'iconSecondaryButton':
        textColor = Theme.btnSecondaryTitleColor;
        break;
      case 'iconTextButton':
        textColor = Theme.btnTextColor;
        break;
      default:
        textColor = Theme.btnPrimaryTitleColor;
    }
    switch (size) {
      case 'large':
        textFontSize = Theme.btnFontSizeLarge;
        break;
      case 'middle':
        textFontSize = Theme.btnFontSizeMiddle;
        break;
      case 'small':
        textFontSize = Theme.btnFontSizeSmall;
        break;
      default:
        textFontSize = Theme.btnFontSizeLarge;
    }
    //设置按钮的默认title
    if (title) {
      buttonTitle = title;
    } else if (type !== 'icon') {
      buttonTitle = '按钮';
    }

    //设置icon的大小
    if (iconSize) {
      textIconSize = iconSize;
    } else {
      textIconSize = Theme.btnIconSize;
    }

    //渲染loading图标
    if (loading) {
      renderLoading = (
        <ActivityIndicator
          color={textColor}
          style={{marginRight: Theme.btnIconMarginRight}}
        />
      );
    }

    //渲染done图标
    if (done) {
      renderDone = (
        <AntDesign
          name={'checkcircleo'}
          size={textIconSize}
          style={{
            color: textColor,
            marginRight: Theme.btnIconMarginRight,
            textAlignVertical: 'center',
          }}
        />
      );
    }

    //渲染图标按钮的图标
    if (!loading) {
      //考虑到图标按钮的loading的渲染，如果loading为true的话，只渲染loading图标
      let iconMarginRight = 0;
      if (
        //type为icon时，不需要右边距
        type === 'iconPrimaryButton' ||
        type === 'iconSecondaryButton' ||
        type === 'iconTextButton'
      ) {
        iconMarginRight = Theme.btnIconMarginRight;
      }

      if (
        type === 'icon' ||
        type === 'iconPrimaryButton' ||
        type === 'iconSecondaryButton' ||
        type === 'iconTextButton'
      ) {
        renderIcon = (
          <AntDesign
            name={iconName}
            size={textIconSize}
            style={{
              color: textColor,
              marginRight: iconMarginRight,
              textAlignVertical: 'center',
            }}
          />
        );
      }
    }
    //渲染释义按钮多行文字的content
    if (content) {
      renderContent = (
        <Text
          style={{
            color: textColor,
            fontSize: 13,
            marginTop: 6,
            lineHeight: 14,
          }}>
          {content}
        </Text>
      );
    }

    titleStyle = [
      {
        color: textColor,
        fontSize: textFontSize,
        lineHeight: textLineHeight,
        overflow: 'hidden',
      },
    ].concat(titleStyle);
    title = (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          {renderLoading}
          {renderDone}
          {renderIcon}
          <Text style={titleStyle} numberOfLines={1}>
            {buttonTitle}
          </Text>
        </View>
        {renderContent}
      </View>
    );

    return title;
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
