// Checkbox.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// import Theme from 'teaset/themes/Theme';
import Theme from '../../component-path';

export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'lg', 'md', 'sm']),
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    titleStyle: Text.propTypes.style,
    checkedIcon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({uri: PropTypes.string}),
      PropTypes.number,
    ]),
    checkedIconStyle: Image.propTypes.style,
    uncheckedIcon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({uri: PropTypes.string}),
      PropTypes.number,
    ]),
    uncheckedIconStyle: Image.propTypes.style,
    onChange: PropTypes.func,
    checkedDisabled: PropTypes.bool, //禁用勾选判断
    checkedDisabledIconStyle: Image.propTypes.style,
    disabledIconStyle: Image.propTypes.style,
  };

  static defaultProps = {
    defaultChecked: false,
    size: 'md',
    checkedIcon: require('../../icons/checked.png'),
    uncheckedIcon: require('../../icons/unchecked.png'),
    hitSlop: {top: 8, bottom: 8, left: 8, right: 8},
  };

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      checked:
        props.checked === true || props.checked === false
          ? props.checked
          : props.defaultChecked,
    };
  }

  componentDidUpdate(prevProps) {
    let {checked, disabled} = this.props;
    if (checked === true || checked === false) {
      if (checked !== this.state.checked) {
        this.setState({checked});
      }
    }
  }

  buildStyle() {
    let {style, disabled} = this.props;

    style = [
      {
        backgroundColor: '#fff',
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
      },
    ].concat(style);
    style = StyleSheet.flatten(style);

    return style;
  }

  renderIcon() {
    let {
      size,
      checkedIcon,
      uncheckedIcon,
      checkedIconStyle,
      uncheckedIconStyle,
      checkedDisabled,
      checkedDisabledIconStyle,
      disabled,
      disabledIconStyle,
      checkBoxContent,
      defaultBoxStyle,
    } = this.props;
    let {checked} = this.state;

    let iconSize,
      tintColor,
      borderWidth,
      borderColor,
      borderRadius,
      renderCapsule;
    switch (size) {
      case 'lg':
        iconSize = Theme.cbIconSizeLG;
        break;
      case 'sm':
        iconSize = Theme.cbIconSizeSM;
        break;
      case 'large':
        let capsuleStyle = [
          {
            width: Theme.cbCapsuleWidth,
            height: Theme.cbCapsuleHeight,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          },
        ];
        renderCapsule = (
          <TouchableOpacity style={capsuleStyle}>
            <Text>{checkBoxContent}</Text>
          </TouchableOpacity>
        );
        break;
      default:
        iconSize = Theme.cbIconSize;
    }

    if (checked) {
      tintColor = Theme.cbCheckedTintColor;
    } else if (checkedDisabled) {
      tintColor = Theme.cbCheckedDisabledTintColor;
    } else if (disabled) {
      tintColor = Theme.cbDisabledTintColor;
      borderWidth = Theme.cbDisabledBorderWidth;
      borderColor = Theme.cbDisabledBorderColor;
      borderRadius = Theme.cbDisabledBorderRadious;
    } else {
      tintColor = Theme.cbUncheckedTintColor;
    }

    let iconStyle = [
      {
        tintColor,
        width: iconSize,
        height: iconSize,
        borderWidth,
        borderColor,
        borderRadius,
      },
    ].concat(defaultBoxStyle);

    if (
      !React.isValidElement(checkedIcon) &&
      (checkedIcon || checkedIcon === 0)
    ) {
      checkedIcon = <Image key="icon" style={iconStyle} source={checkedIcon} />;
    }
    if (
      !React.isValidElement(uncheckedIcon) &&
      (uncheckedIcon || uncheckedIcon === 0)
    ) {
      uncheckedIcon = (
        <Image key="icon" style={iconStyle} source={uncheckedIcon} />
      );
    }

    if (size === 'large') {
      return renderCapsule;
    } else {
      return checked || checkedDisabled ? checkedIcon : uncheckedIcon;
    }
  }

  renderTitle() {
    let {size, title, titleStyle} = this.props;

    if (
      !React.isValidElement(title) &&
      (title || title === '' || title === 0)
    ) {
      let textFontSize, textPaddingLeft;
      switch (size) {
        case 'lg':
          textFontSize = Theme.cbFontSizeLG;
          textPaddingLeft = Theme.cbTitlePaddingLeftLG;
          break;
        default:
          textFontSize = Theme.cbFontSizeDefault;
          textPaddingLeft = Theme.cbTitlePaddingLeftDefault;
      }

      let textStyle = [
        {
          color: Theme.cbTitleColor,
          fontSize: Theme.cbFontSize,
          overflow: 'hidden',
          paddingLeft: Theme.cbTitlePaddingLeft,
        },
      ].concat(titleStyle);

      title = (
        <Text key="title" style={textStyle} numberOfLines={1}>
          {title}
        </Text>
      );
    }

    return title;
  }

  render() {
    let {
      style,
      children,
      checked,
      defaultChecked,
      size,
      title,
      titleStyle,
      checkedIcon,
      checkedIconStyle,
      uncheckedIcon,
      uncheckedIconStyle,
      disabled,
      activeOpacity,
      onChange,
      onPress,
      checkedDisabled,
      ...others
    } = this.props;
    style = this.buildStyle();
    if (disabled) activeOpacity = style.opacity;
    return (
      <TouchableOpacity
        style={style}
        disabled={disabled || checkedDisabled}
        activeOpacity={activeOpacity}
        onPress={e => {
          this.setState({checked: !checked});
          onChange && onChange(!checked);
          onPress && onPress(e);
        }}
        {...others}>
        {this.renderIcon()}
        {this.renderTitle()}
      </TouchableOpacity>
    );
  }
}
