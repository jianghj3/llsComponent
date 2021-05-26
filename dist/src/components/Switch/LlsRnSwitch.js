import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  TouchableOpacity,
  ViewPropTypes,
  View,
  Text,
} from 'react-native';

import Theme from '../../themes/Theme';

export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false,
    };
    this.toggerPostion = new Animated.Value(2);
    this.scaleBg = new Animated.Value(1);
  }

  static propTypes = {
    openedStyle: ViewPropTypes.style,
    closedStyle: ViewPropTypes.style,
    dotStyle: ViewPropTypes.style,
    value: PropTypes.bool,
    onValueChange: PropTypes.func,
    type: PropTypes.oneOf(['text', 'default']),
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    value: true,
    type: 'default',
    disabled: false,
  };

  componentDidMount() {
    const {value} = this.props;
    if (value) {
      this.setState({toggleOn: true});
      Animated.spring(this.toggerPostion, {
        toValue: Theme.switchWidth - (Theme.switchDotwidth + 2),
        useNativeDriver: false,
      }).start();
      Animated.timing(this.scaleBg, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }
  }

  toggleSwitch = () => {
    const {onValueChange, disabled} = this.props;
    if (!disabled) {
      if (this.state.toggleOn) {
        this.setState({
          toggleOn: false,
        });
        Animated.spring(this.toggerPostion, {
          toValue: 2,
          useNativeDriver: false,
        }).start();
        Animated.timing(this.scaleBg, {
          toValue: 1,
          duration: 0,
          useNativeDriver: false,
        }).start();
        onValueChange && onValueChange(false);
      } else {
        this.setState({
          toggleOn: true,
        });
        Animated.spring(this.toggerPostion, {
          toValue: Theme.switchWidth - (Theme.switchDotwidth + 2),
          useNativeDriver: false,
        }).start();
        Animated.timing(this.scaleBg, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
        onValueChange && onValueChange(true);
      }
    }
  };

  //获取按钮打开时的颜色
  getOpenedStyle() {
    let {openedStyle, disabled} = this.props;
    let height = Theme.switchHeight,
      width = Theme.switchWidth,
      borderRadius = Theme.switchHeight / 2,
      backgroundColor;
    if (disabled) {
      backgroundColor = Theme.switchOpenedDisabledBackgroundColor;
    } else {
      backgroundColor = Theme.switchOpenedBackgroundColor;
    }
    let openedStyles = [
      {
        height,
        width,
        borderRadius,
        backgroundColor,
        justifyContent: 'center',
      },
    ].concat(openedStyle);
    return openedStyles;
  }

  //获取按钮关闭时的颜色
  getClosedStyle() {
    let {closedStyle, disabled} = this.props;
    let height = Theme.switchHeight,
      width = Theme.switchWidth,
      borderRadius = Theme.switchHeight / 2,
      backgroundColor;
    if (disabled) {
      backgroundColor = Theme.switchClosedDisabledBackgroundColor;
    } else {
      backgroundColor = Theme.switchClosedBackgroundColor;
    }
    let closedStyles = [
      {
        height,
        width,
        borderRadius,
        backgroundColor,
        position: 'absolute',
      },
    ].concat(closedStyle);
    return closedStyles;
  }

  //获取圆点按钮的颜色
  getDotStyle() {
    let {dotStyle} = this.props;
    let height = Theme.switchDotHeight,
      width = Theme.switchDotwidth,
      borderRadius = Theme.switchDotHeight / 2,
      backgroundColor = Theme.switchDotBackgroundColor;
    let dotStyles = [
      {
        height,
        width,
        backgroundColor,
        borderRadius,
      },
    ].concat(dotStyle);
    return dotStyles;
  }

  //渲染文字
  renderText() {
    let {textStyle, type, title} = this.props;
    if (type === 'text') {
      let textStyles = [
        {
          color: Theme.switchTextColor,
          marginLeft: Theme.switchTextMarginLeft,
          fontSize: Theme.switchTextFontSize,
          lineHeight: Theme.switchTextLineHeight,
        },
      ].concat(textStyle);
      return <Text style={textStyles}>{title}</Text>;
    } else return;
  }

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={this.getOpenedStyle()}
          onPress={this.toggleSwitch}
          activeOpacity={1}
          disabled={this.props.disabled}>
          <Animated.View
            style={[
              this.getClosedStyle(),
              {transform: [{scale: this.scaleBg}]},
            ]}
          />
          <Animated.View
            style={[this.getDotStyle(), {left: this.toggerPostion}]}
          />
        </TouchableOpacity>
        {this.renderText()}
      </View>
    );
  }
}
