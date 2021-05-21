import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';

import LlsRnRadioButton from './LlsRnRadioButton';

const defaultSize = 16;
const defaultThickness = 1;

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  getChildContext() {
    return {
      onSelect: this.onSelect,
      size: this.props.size,
      thickness: this.props.thickness,
      color: this.props.color,
    };
  }

  onSelect(index, value) {
    this.setState({
      selectedIndex: index,
    });
    if (this.props.onSelect) this.props.onSelect(index, value);
  }

  render() {
    var radioButtons = React.Children.map(
      //React.Children中的map函数重写了，第一个参数必须为children,第二个参数为函数
      this.props.children,
      (radioButton, index) => {
        let isSelected = this.state.selectedIndex == index;
        let color =
          isSelected && this.props.activeColor
            ? this.props.activeColor
            : this.props.color;
        return (
          <LlsRnRadioButton
            color={color}
            activeColor={this.props.activeColor}
            {...radioButton.props}
            index={index}
            isSelected={isSelected}
            onSelect={this.onSelect}
          />
        );
      },
    );

    return <View style={this.props.style}>{radioButtons}</View>;
  }
}

RadioGroup.childContextTypes = {
  onSelect: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string,
  activeColor: PropTypes.string,
};

RadioGroup.defaultProps = {
  size: defaultSize,
  thickness: defaultThickness,
};
