import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ViewPropTypes,
} from 'react-native';
import Theme from '../../themes/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class RadioButton extends Component {
  renderTitle() {
    let {titleStyle, title} = this.props;
    let textColor = Theme.RadioButtonTitleColor,
      textPaddingLeft = Theme.RadioButtonTitlePaddingLeft;
    let textStyle = [
      {
        color: textColor,
        paddingLeft: textPaddingLeft,
      },
    ].concat(titleStyle);

    return <Text style={textStyle}>{title}</Text>;
  }
  getRadioStyle() {
    let {isSelected, checkedDisabled, disabled, radioStyle} = this.props;
    let borderColor,
      backgroundColor,
      customColor = this.props.color || this.context.color;
    if (disabled) {
      borderColor = customColor || Theme.RadioButtonDisabledBorderColor;
      backgroundColor = customColor || Theme.RadioButtonDisabledBackgroundColor;
    } else if (checkedDisabled) {
      borderColor = customColor || Theme.RadioButtonCheckedDisabledBorderColor;
      backgroundColor =
        customColor || Theme.RadioButtonCheckedDisabledBackgroundColor;
    } else if (isSelected) {
      borderColor =
        this.props.isSelected && this.props.activeColor
          ? this.props.activeColor
          : customColor || Theme.RaidoGroupDefaultColor;
      backgroundColor =
        this.props.isSelected && this.props.activeColor
          ? this.props.activeColor
          : customColor || Theme.RaidoGroupDefaultColor;
    } else {
      borderColor = customColor || Theme.RadioButtonUncheckedBorderColor;
      backgroundColor = customColor || Theme.defaultColor;
    }
    return [
      {
        height: this.context.size,
        width: this.context.size,
        borderRadius: this.context.size / 2,
        borderWidth: this.context.thickness,
        borderColor,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      },
    ].concat(radioStyle);
  }

  isSelected() {
    let {isSelected, checkedDisabled, checked, iconName} = this.props;
    if (isSelected || checkedDisabled || checked)
      return (
        <AntDesign
          name={iconName || 'check'}
          size={this.context.size - 4}
          style={{
            color: Theme.defaultColor,
            textAlignVertical: 'center',
          }}
        />
      );
  }
  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          disabled={this.props.disabled}
          onPress={() =>
            this.props.onSelect(this.props.index, this.props.value)
          }>
          <View style={[styles.container, this.props.style]}>
            <View style={this.getRadioStyle()}>{this.isSelected()}</View>
            {this.renderTitle()}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

RadioButton.contextTypes = {
  onSelect: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
  titleStyle: Text.propTypes.style,
  checked: PropTypes.bool,
  checkedDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  radioStyle: ViewPropTypes.style,
};

let styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: 10,
  },
});
