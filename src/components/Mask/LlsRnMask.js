// OverlayView.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
  View,
  PanResponder,
  Platform,
  ViewPropTypes,
} from 'react-native';

import Theme from '../../themes/Theme';

export default class OverlayView extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    closeOnHardwareBackPress: PropTypes.bool, //android only
    onAppearCompleted: PropTypes.func,
    onDisappearCompleted: PropTypes.func,
  };

  static defaultProps = {
    closeOnHardwareBackPress: true,
  };

  constructor(props) {
    super(props);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) =>
        (this.touchStateID = gestureState.stateID),
      onPanResponderRelease: (e, gestureState) =>
        this.touchStateID == gestureState.stateID ? this.close() : null,
    });
  }

  componentDidMount() {
    this.appearCompleted();
    if (Platform.OS === 'android') {
      let BackHandler = ReactNative.BackHandler
        ? ReactNative.BackHandler
        : ReactNative.BackAndroid;
      this.backListener = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          if (this.props.closeOnHardwareBackPress) {
            this.close();
            return true;
          } else {
            return false;
          }
        },
      );
    }
  }

  componentWillUnmount() {
    this.removeBackListener();
  }

  removeBackListener() {
    if (this.backListener) {
      this.backListener.remove();
      this.backListener = null;
    }
  }

  appearCompleted() {
    let {onAppearCompleted} = this.props;
    onAppearCompleted && onAppearCompleted();
  }

  disappearCompleted() {
    let {onDisappearCompleted} = this.props;
    onDisappearCompleted && onDisappearCompleted();
  }

  close() {
    if (this.closed) return true;
    this.closed = true;
    this.removeBackListener();
    this.disappearCompleted();
    return true;
  }

  buildStyle() {
    let {style} = this.props;
    style = [
      {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Theme.MaskBackgrounColor,
        opacity: Theme.MaskOpacity,
      },
    ].concat(style);
    return style;
  }

  render() {
    return <View style={this.buildStyle()} />;
  }
}
