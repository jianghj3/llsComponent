// Checkbox.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';

import Theme from '../../themes/Theme';

export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
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
    uncheckedIcon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({uri: PropTypes.string}),
      PropTypes.number,
    ]),
    onChange: PropTypes.func,
    checkedDisabled: PropTypes.bool, //禁用勾选判断
    defaultBoxStyle: Image.propTypes.style,
    capsuleBoxStyle: ViewPropTypes.style,
    capsuleTextStyle: Text.propTypes.style,
    checkBoxContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  static defaultProps = {
    defaultChecked: false,
    size: 'small',
    checkedIcon: require('../../icons/checked.png'),
    uncheckedIcon: require('../../icons/unchecked.png'),
    hitSlop: {top: 8, bottom: 8, left: 8, right: 8}, //延伸按钮的作用范围
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
    let {checked} = this.props;
    if (checked === true || checked === false) {
      if (checked !== this.state.checked) {
        this.setState({checked});
      }
    }
  }

  buildStyle() {
    let {style} = this.props;

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
      checkedDisabled,
      disabled,
      checkBoxContent,
      defaultBoxStyle,
      capsuleBoxStyle,
      capsuleTextStyle,
    } = this.props;
    let {checked} = this.state;

    let iconSize,
      tintColor,
      borderWidth,
      borderColor,
      borderRadius,
      renderCapsule;
    switch (size) {
      case 'large':
        //渲染胶囊复选框
        let textColor,
          borderColor,
          textFontSize = Theme.cbFontSizeCapsule,
          textLineHeight = Theme.cbCapsuleLineHeight,
          backgroundColor = Theme.cbCapsuleBackgroundColor,
          borderWidth = Theme.cbCapsuleBorderWidth,
          borderRadius = Theme.cbCapsuleBorderRadius;

        if (checked) {
          backgroundColor = Theme.cbCapsuleCheckedBackgroundColor;
          borderColor = Theme.cbCapsuleCheckedBorderColor;
          textColor = Theme.cbCapsuleCheckedTextColor;
        } else if (disabled) {
          borderColor = Theme.cbCapsuleDisabledBorderColor;
          textColor = Theme.cbCapsuleDisabledTextColor;
        } else {
          borderColor = Theme.cbCapsuleUncheckedBorderColor;
          textColor = Theme.cbCapsuleUncheckedTextColor;
        }

        let capsuleStyle = [
          //胶囊复选框按钮框样式
          {
            width: Theme.cbCapsuleWidth,
            height: Theme.cbCapsuleHeight,
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ].concat(capsuleBoxStyle);

        let textStyle = [
          //胶囊按钮内部文字内容样式
          {
            color: textColor,
            fontSize: textFontSize,
            lineHeight: textLineHeight,
          },
        ].concat(capsuleTextStyle);

        renderCapsule = (
          <View style={capsuleStyle}>
            <Text style={textStyle}>{checkBoxContent}</Text>
          </View>
        );
        break;
      default:
        iconSize = Theme.cbIconSize;
    }

    //渲染小checkBox
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

  //统一渲染小checkBox和胶囊型的标题
  renderTitle() {
    let {title, titleStyle} = this.props;

    if (
      !React.isValidElement(title) &&
      (title || title === '' || title === 0)
    ) {
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
      uncheckedIcon,
      disabled,
      activeOpacity,
      onChange,
      onPress,
      checkedDisabled,
      defaultBoxStyle,
      capsuleBoxStyle,
      capsuleTextStyle,
      ...others
    } = this.props;
    style = this.buildStyle();

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
