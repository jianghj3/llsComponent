import React from 'react';
import {
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

export default class LlsButton extends React.Component {
  render() {
    const {text, type, size, disabled, plain} = this.props;
    const defaultBackGroundColor = this._defaultBackGroundColor(type, disabled);
    const minorButtonStyle = this._minorButtonStyle(type, disabled);
    const minorTextStyle = this._minorTextStyle(type, disabled);
    const sizeStyle = this._sizeStyle(size, plain);
    const defaultSmallSizeText = size === 'small' ? {fontSize: 15} : '';

    return (
      <ScrollView>
        <View style={styles.RnLlsButton}>
          <TouchableOpacity
            disabled={this.props.disabled}
            style={[
              styles.touchableOpacity,
              defaultBackGroundColor,
              minorButtonStyle,
              sizeStyle,
              this.props.buttonStyle,
            ]}
            onPress={() => {
              console.log('点击事件');
            }}>
            <Text
              style={[
                styles.buttonTextStyle,
                minorTextStyle,
                defaultSmallSizeText,
                this.props.buttonTextStyle,
              ]}>
              {text}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  //判断不同类型按钮的背景颜色
  _defaultBackGroundColor(type, disabled) {
    if (type === 'primary') {
      if (disabled === 'true')
        return {
          backgroundColor: 'rgb(178, 226, 246)',
        };
      return {
        backgroundColor: 'rgb(0, 160, 228)',
      };
    } else if (type === 'minor') {
      if (disabled === 'true')
        return {
          backgroundColor: 'rgb(255, 255, 255)',
        };
      return {
        backgroundColor: 'transparent',
      };
    } else if (type === 'error') {
      if (disabled === 'true')
        return {
          backgroundColor: 'rgb(255, 148, 142)',
        };
      return {
        backgroundColor: 'rgb(255, 69, 72)',
      };
    }
  }

  //type为minor时button使用的按钮样式
  _minorButtonStyle(type, disabled) {
    if (type === 'minor') {
      if (disabled === 'true')
        return {
          borderWidth: 1,
          borderColor: '#D9D9D9',
          borderStyle: 'solid',
        };
      return {
        borderWidth: 1,
        borderColor: '#00A0E4',
        borderStyle: 'solid',
      };
    }
  }

  //type为minor时设置text的颜色
  _minorTextStyle(type, disabled) {
    if (type === 'minor') {
      if (disabled === 'true') return {color: 'rgb(170, 170, 170)'};
      return {color: '#00A0E4'};
    }
  }

  //设置不同size时button的宽度
  _sizeStyle(size, plain) {
    if (size === 'middle') {
      //big的尺寸已经在styleSheet中设置过了，因此不再重复设置,同时可以也可以直接设置尺寸width
      return {
        width: 155,
      };
    } else if (size === 'small') {
      if (plain === 'true')
        return {
          width: 60,
          minHeight: 30,
          borderRadius: 15,
        };
      return {
        width: 60,
        minHeight: 30,
      };
    }
  }
}

const styles = StyleSheet.create({
  RnLlsButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity: {
    width: 310,
    minHeight: 46,
    padding: 9,
    margin: 9,
    backgroundColor: 'rgb(0, 160, 228)',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 18,
    color: 'white',
  },
});
