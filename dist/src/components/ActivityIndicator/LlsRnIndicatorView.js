// LlsRnIndicatorView.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native';

import Theme from '../../themes/Theme';
import Overlay from '../Overlay/Overlay';

export default class LlsRnIndicatorView extends Overlay.View {
  static propTypes = {
    ...Overlay.View.propTypes,
    text: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({uri: PropTypes.string}), //{uri: 'http://...'}
      PropTypes.number, //require('path/to/image')
    ]),
    position: PropTypes.oneOf(['top', 'bottom', 'center']),
  };

  static defaultProps = {
    ...Overlay.View.defaultProps,
    overlayOpacity: 0,
    closeOnHardwareBackPress: false,
    position: 'center',
  };

  buildStyle() {
    let {style, position} = this.props;
    style = [
      {
        paddingLeft: Theme.toastScreenPaddingLeft,
        paddingRight: Theme.toastScreenPaddingRight,
        paddingTop: Theme.toastScreenPaddingTop,
        paddingBottom: Theme.toastScreenPaddingBottom,
        justifyContent:
          position === 'top'
            ? 'flex-start'
            : position === 'bottom'
            ? 'flex-end'
            : 'center',
        alignItems: 'center',
      },
    ].concat(super.buildStyle());
    return style;
  }

  renderIcon() {
    let {icon} = this.props;
    if (!icon && icon !== 0) return null;

    let image;
    if (!React.isValidElement(icon)) {
      let imageSource;
      if (typeof icon === 'string') {
        switch (icon) {
          case 'success':
            imageSource = require('../../icons/success.png');
            break;
          default:
            imageSource = null;
            break;
        }
      } else {
        imageSource = icon;
      }
      image = (
        <Image
          style={{
            width: Theme.toastIconWidth,
            height: Theme.toastIconHeight,
            tintColor: Theme.toastIconTintColor,
          }}
          source={imageSource}
        />
      );
    } else {
      image = icon;
    }
    return (
      <View
        style={{
          paddingTop: Theme.toastIconPaddingTop,
          paddingBottom: Theme.toastIconPaddingBottom,
        }}>
        {image}
      </View>
    );
  }

  renderText() {
    let {text} = this.props;
    if (typeof text === 'string' || typeof text === 'number') {
      text = (
        <Text
          style={{color: Theme.toastTextColor, fontSize: Theme.toastFontSize}}>
          {text}
        </Text>
      );
    }
    return text;
  }

  renderContent() {
    let contentStyle = {
      backgroundColor: Theme.toastColor,
      paddingLeft: Theme.toastPaddingLeft,
      paddingRight: Theme.toastPaddingRight,
      paddingTop: Theme.toastPaddingTop,
      paddingBottom: Theme.toastPaddingBottom,
      borderRadius: Theme.toastBorderRadius,
      alignItems: 'center',
    };
    return (
      <View style={contentStyle}>
        {this.renderIcon()}
        {this.renderText()}
      </View>
    );
  }
}
