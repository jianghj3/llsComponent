// ThemeDefault.js

'use strict';

import {PixelRatio} from 'react-native';
//Button
//primary color
const primaryColor = '#0887ff';
const primaryPressColor = '#0a64eb';
const primaryDisabledColor = '#d9d9d9';
//secondary color
const secondaryColor = '#fff';
const secondaryTitleColor = '#0887ff';
const secondaryBorderColor = '#d0e6fc';
const secondaryPressColor = '#0a64eb';
//text color
const textColor = '#0887ff';
//default color
const defaultColor = '#fff';
//default text color
const defaultTextColor = '#888';
//primary lineHeight
const largeLineHeight = 24;
const middleLineHeight = 25;
const smallLineHeight = 23;
//middle and small height
const heightMiddle = 49;
const heightSmall = 38;
//middle and small button border-radius
const middleRadius = Math.ceil(heightMiddle / 2);
const smallRadius = Math.ceil(heightSmall / 2);

//checkBox
const capsuleBorderWidth = 1;
const capsuleBorderRadius = 5;

//pixel size
const pixelSize = (function() {
  let pixelRatio = PixelRatio.get();
  if (pixelRatio >= 3) return 0.3333333333333333;
  else if (pixelRatio >= 2) return 0.5;
  else return 1;
})();

export default {
  //General
  screenColor: '#444',
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  defaultColor: defaultColor,
  defaultTextColor: defaultTextColor,
  pageColor: '#f8f8f8',
  pixelSize: pixelSize,

  //Label - color
  labelTextColor: defaultTextColor,
  labelTextTitleColor: '#000',
  labelTextDetailColor: '#989898',
  labelTextDangerColor: '#a94442',
  //Label - font size
  labelFontSizeXL: 26,
  labelFontSizeLG: 20,
  labelFontSizeMD: 14,
  labelFontSizeSM: 10,
  labelFontSizeXS: 8,
  labelTitleScale: 1.1, //29, 22, 15, 11, 9
  labelDetailScale: 0.9, //23, 18, 13, 9, 7
  labelDangerScale: 1,

  //Button - default color
  btnColor: defaultColor,
  //Button - primary background color
  btnPrimaryColor: primaryColor,
  btnPrimaryPressColor: primaryPressColor,
  btnPrimaryDisabledColor: primaryDisabledColor,
  //Button - secondary background color
  btnSecondaryColor: secondaryColor,
  //Button - Text background Color
  btnTextBackgroundColor: '#fff',
  //Button - title color
  btnTitleColor: primaryColor,
  //Button - primary title color
  btnPrimaryTitleColor: '#fff',
  //Button - secondary title color
  btnSecondaryTitleColor: secondaryTitleColor,
  btnSecondaryPressTitleColor: secondaryPressColor,
  btnSecondaryDisabledTitleColor: '#999',
  //Button - text title color
  btnTextColor: textColor,
  btnTextPressTitleColor: '#0a64eb',
  btnTextDisabledTitleColor: '#999',
  //Button - title linHeight
  btnLargeLineHeight: largeLineHeight,
  btnMiddleLineHeight: middleLineHeight,
  btnSmallLineHeight: smallLineHeight,
  //Button - border color
  btnBorderColor: primaryColor,
  //Button - secondary border color
  btnSecondaryBorderColor: secondaryBorderColor,
  btnSecondaryPressBorderColor: secondaryPressColor,
  btnSecondaryDisabledBorderColor: '#e2e2e2',
  //Button - border width
  btnBorderWidth: 1,
  //Button - border radius
  btnBorderRadiusLarge: 6,
  btnBorderRadiusMiddle: middleRadius,
  btnBorderRadiusSmall: smallRadius,
  //Button - font size
  btnFontSizeLarge: 18,
  btnFontSizeMiddle: 18,
  btnFontSizeSmall: 16,
  //Button - width
  btnWidthLarge: 310,
  btnWidthMiddle: 156,
  btnWidthSmall: 92,
  //Button - height
  btnHeightLarge: 49,
  btnHeightMiddle: heightMiddle,
  btnHeightSmall: heightSmall,
  btnMultiLineHeight: 60,
  //Button - icon
  btnIconMarginRight: 6,
  btnIconSize: 20,
  //Button - padding vertical
  btnPaddingVerticalXL: 8,
  btnPaddingVerticalLarge: 16,
  btnPaddingVerticalMD: 6,
  btnPaddingVerticalSM: 4,
  btnPaddingVerticalXS: 2,
  //Button - padding horizontal
  btnPaddingHorizontalXL: 20,
  btnPaddingHorizontalLarge: 128,
  btnPaddingHorizontalMD: 12,
  btnPaddingHorizontalSM: 8,
  btnPaddingHorizontalXS: 4,

  //Checkbox
  cbTitleColor: defaultTextColor,
  //checkBox - tintColor
  cbDisabledTintColor: '#f7f8fa',
  cbCheckedTintColor: primaryColor,
  cbUncheckedTintColor: '#999',
  cbCheckedDisabledTintColor: '#d9d9d9',
  //checkBox - fontSize
  cbFontSizeCapsule: 12, //胶囊型字体大小
  cbFontSize: 13,
  cbIconSize: 14,

  cbTitlePaddingLeft: 16,
  cbCapsuleLineHeight: 16,

  cbDisabledBorderRadious: 3,
  cbDisabledBorderWidth: 1,
  //胶囊按钮大小
  cbCapsuleWidth: 104,
  cbCapsuleHeight: 32,

  cbCapsuleBorderWidth: capsuleBorderWidth,
  cbCapsuleBorderRadius: capsuleBorderRadius,
  // checkBox - text color
  cbCapsuleCheckedTextColor: primaryColor,
  cbCapsuleUncheckedTextColor: '#333',
  cbCapsuleDisabledTextColor: '#c8ccd5',
  // checkBox - background color
  cbCapsuleCheckedBackgroundColor: '#f6faff',
  cbCapsuleBackgroundColor: defaultColor,
  // checkBox - border color
  cbDisabledBorderColor: '#dcdee0',
  cbCapsuleCheckedBorderColor: '#0887ff',
  cbCapsuleUncheckedBorderColor: '#c8ccd5',
  cbCapsuleDisabledBorderColor: '#e2e2e2',

  //RadioBtn
  RaidoGroupDefaultColor: primaryColor,
  RadioButtonUnselectedBackgroundColor: defaultColor,
  RadioButtonDisabledBackgroundColor: '#f7f8fa',
  RadioButtonCheckedDisabledBackgroundColor: '#d9d9d9',
  RadioButtonCheckedDisabledBackgroundColor: '#d9d9d9',
  RadioButtonTitleColor: '#888',
  RadioButtonTitlePaddingLeft: 16,
  RadioButtonDisabledBorderColor: '#dcdee0',
  RadioButtonCheckedDisabledBorderColor: '#d9d9d9',
  RadioButtonUncheckedBorderColor: '#999',

  //Mask
  MaskOpacity: 0.7,
  MaskBackgrounColor: '#000',

  //Switch
  switchHeight: 24,
  switchWidth: 40,
  switchOpenedBackgroundColor: primaryColor,
  switchClosedBackgroundColor: '#dddfe4',
  switchDotHeight: 20,
  switchDotwidth: 20,
  switchDotBackgroundColor: 'white',
  switchTextColor: '#888',
  switchTextMarginLeft: 16,
  switchTextFontSize: 13,
  switchTextLineHeight: 19,
  switchOpenedDisabledBackgroundColor: '#b5dbff',
  switchClosedDisabledBackgroundColor: '#eeeff2',

  //Input
  inputColor: defaultColor,
  inputTextColor: defaultTextColor,
  inputPlaceholderTextColor: '#c7c7c7',
  inputBorderColor: '#ccc',
  inputBorderWidth: 1,
  //Input - border radius
  inputBorderRadiusLG: 6,
  inputBorderRadiusMD: 4,
  inputBorderRadiusSM: 3,
  //Input - font size
  inputFontSizeLG: 18,
  inputFontSizeMD: 14,
  inputFontSizeSM: 12,
  //Input - padding vertical
  inputPaddingVerticalLG: 8,
  inputPaddingVerticalMD: 6,
  inputPaddingVerticalSM: 5,
  //Input - padding horizontal
  inputPaddingHorizontalLG: 16,
  inputPaddingHorizontalMD: 12,
  inputPaddingHorizontalSM: 10,
  //Input - height
  inputHeightLG: 46,
  inputHeightMD: 34,
  inputHeightSM: 30,
  //Input - disabled opacity
  inputDisabledOpacity: 0.65,

  //Select
  selectColor: defaultColor,
  selectTextColor: defaultTextColor,
  selectPlaceholderTextColor: '#c7c7c7',
  selectBorderColor: '#ccc',
  selectBorderWidth: 1,
  //Select - border radius
  selectBorderRadiusLG: 6,
  selectBorderRadiusMD: 4,
  selectBorderRadiusSM: 3,
  //Select - font size
  selectFontSizeLG: 18,
  selectFontSizeMD: 14,
  selectFontSizeSM: 12,
  //Select - padding vertical
  selectPaddingTopLG: 8,
  selectPaddingTopMD: 6,
  selectPaddingTopSM: 5,
  selectPaddingBottomLG: 8,
  selectPaddingBottomMD: 6,
  selectPaddingBottomSM: 5,
  //Select - padding horizontal
  selectPaddingLeftLG: 16,
  selectPaddingLeftMD: 12,
  selectPaddingLeftSM: 10,
  selectPaddingRightLG: 26, //include icon size
  selectPaddingRightMD: 20, //include icon size
  selectPaddingRightSM: 16, //include icon size
  //Select - height
  selectHeightLG: 46,
  selectHeightMD: 34,
  selectHeightSM: 30,
  //Select - icon
  selectIconSizeLG: 20,
  selectIconSizeMD: 15,
  selectIconSizeSM: 12,
  selectIconTintColor: '#777',
  //Select - disabled opacity
  selectDisabledOpacity: 0.65,

  //Stepper
  stepperColor: defaultColor,
  stepperBorderColor: '#ccc',
  stepperBorderWidth: 1,
  stepperBorderRadius: 2,
  stepperTextColor: defaultTextColor,
  stepperFontSize: 13,
  stepperBtnTextColor: defaultTextColor,
  stepperBtnFontSize: 13,
  stepperValueMinWidth: 40,
  stepperValuePaddingHorizontal: 8,
  stepperButtonWidth: 20,
  stepperButtonHeight: 20,
  stepperDisabledOpacity: 0.35,

  //SearchInput
  siColor: defaultColor,
  siTextColor: defaultTextColor,
  siPlaceholderTextColor: '#c7c7c7',
  siBorderColor: '#ccc',
  siBorderWidth: 1,
  siBorderRadius: 3,
  siFontSize: 13,
  siPaddingVertical: 4,
  siPaddingHorizontal: 6,
  siHeight: 28,
  siIconSize: 12,
  siDisabledOpacity: 0.65,

  //Badge
  badgeSize: 16,
  badgeMinWidth: 17,
  badgeDotSize: 8,
  badgePadding: 5,
  badgeColor: '#f82418',
  badgeBorderColor: '#f8f8f8',
  badgeBorderWidth: 0,
  badgeTextColor: '#fff',
  badgeFontSize: 11,
  badgeNumberFontSize: 12,
  badgeTextFontSize: 10,
  badgeBorderBottomLeftRadius: 1,

  badgeShadowColor: 'rgba(255,69,72,0.30)',

  //Popover
  popoverColor: defaultColor,
  popoverBorderColor: 'rgba(0, 0, 0, 0.15)',
  popoverBorderRadius: 4,
  popoverBorderWidth: pixelSize,
  popoverPaddingCorner: 8,

  //NavigationBar
  navType: 'ios', //'auto', 'ios', 'android'
  navStatusBarStyle: 'light-content', //'default', 'light-content'
  navBarContentHeight: 44,
  navColor: primaryColor,
  navTintColor: '#fff',
  navTitleColor: '#fff',
  navTitleFontSize: 18,
  navButtonFontSize: 15,
  navSeparatorColor: primaryColor,
  navSeparatorLineWidth: 0,

  //SegmentedBar
  sbColor: defaultColor,
  sbHeight: 40,
  sbBtnPaddingTop: 8,
  sbBtnPaddingBottom: 8,
  sbBtnPaddingLeft: 8,
  sbBtnPaddingRight: 8,
  sbBtnTitleColor: '#989898',
  sbBtnTextFontSize: 13,
  sbBtnActiveTitleColor: primaryColor,
  sbBtnActiveTextFontSize: 13,
  sbIndicatorLineColor: primaryColor,
  sbIndicatorLineWidth: 2,
  sbIndicatorPositionPadding: 0,

  //SegmentedView

  //TabView
  tvBarColor: '#f8f8f8',
  tvBarHeight: 49,
  tvBarPaddingTop: 2,
  tvBarPaddingBottom: 2,
  tvBarSeparatorWidth: pixelSize,
  tvBarSeparatorColor: '#ccc',
  tvBarBtnWidth: 44,
  tvBarBtnIconSize: 22,
  tvBarBtnIconTintColor: '#8f8f8f',
  tvBarBtnIconActiveTintColor: primaryColor,
  tvBarBtnTitleColor: '#8f8f8f',
  tvBarBtnTextFontSize: 10,
  tvBarBtnActiveTitleColor: primaryColor,
  tvBarBtnActiveTextFontSize: 10,

  //ListRow
  rowColor: defaultColor,
  rowMinHeight: 44,
  rowPaddingLeft: 12,
  rowPaddingRight: 12,
  rowPaddingTop: 8,
  rowPaddingBottom: 8,
  rowIconWidth: 20,
  rowIconHeight: 20,
  rowIconPaddingRight: 12,
  rowAccessoryWidth: 10,
  rowAccessoryHeight: 10,
  rowAccessoryPaddingLeft: 8,
  rowAccessoryCheckColor: '#007aff',
  rowAccessoryIndicatorColor: '#bebebe',
  rowSeparatorColor: '#ccc',
  rowSeparatorLineWidth: pixelSize,
  rowPaddingTitleDetail: 4,
  rowDetailLineHeight: 18,
  rowActionButtonColor: '#c8c7cd',
  rowActionButtonDangerColor: '#d9534f',
  rowActionButtonTitleColor: '#fff',
  rowActionButtonDangerTitleColor: '#fff',
  rowActionButtonTitleFontSize: 15,
  rowActionButtonPaddingHorizontal: 12,

  //Carousel
  carouselDotSize: 9,
  carouselDotUseSize: 16,
  carouselDotColor: 'rgba(255, 255, 255, 0.4)',
  carouselActiveDotColor: 'rgba(255, 255, 255, 0.85)',

  //Wheel
  wheelColor: defaultColor,
  wheelFontSize: 14,
  wheelTextColor: defaultTextColor,
  wheelHoleHeight: 28,
  wheelHoleLineWidth: pixelSize,
  wheelHoleLineColor: '#ccc',
  wheelMaskColor: defaultColor,
  wheelMaskOpacity: 0.4,

  //Overlay
  overlayOpacity: 0.4,
  overlayRootScale: 0.93,

  //Toast
  toastColor: 'rgba(0, 0, 0, 0.8)',
  toastPaddingLeft: 12,
  toastPaddingRight: 12,
  toastPaddingTop: 8,
  toastPaddingBottom: 8,
  toastBorderRadius: 4,
  toastIconTintColor: '#ddd',
  toastIconWidth: 40,
  toastIconHeight: 40,
  toastIconPaddingTop: 8,
  toastIconPaddingBottom: 8,
  toastTextColor: '#ddd',
  toastFontSize: 15,
  toastScreenPaddingLeft: 40,
  toastScreenPaddingRight: 40,
  toastScreenPaddingTop: 100,
  toastScreenPaddingBottom: 80,

  //ActionSheet
  asItemDisabledOpacity: 0.65,
  asItemMinHeight: 53,
  asItemPaddingLeft: 12,
  asItemPaddingRight: 12,
  asItemPaddingTop: 8,
  asItemPaddingBottom: 8,
  asItemColor: 'rgba(255, 255, 255, 0.9)',
  asItemSeparatorColor: 'rgba(127, 127, 127, 0.3)',
  asItemSeparatorLineWidth: pixelSize,
  asItemTitleColor: '#000',
  asItemTitleAlign: 'center',
  asItemFontSize: 19,
  asCancelItemColor: 'rgba(255, 255, 255, 0.9)',
  asCancelItemSeparatorColor: 'rgba(127, 127, 127, 0.3)',
  asCancelItemSeparatorLineWidth: 7,
  asCancelItemTitleColor: '#a94442',
  asCancelItemTitleAlign: 'center',
  asCancelItemFontSize: 19,

  //ActionPopover
  apColor: 'rgba(0, 0, 0, 0.9)',
  apPaddingVertical: 0,
  apPaddingHorizontal: 4,
  apBorderRadius: 8,
  apDirectionInsets: 4,
  apItemTitleColor: '#fff',
  apItemFontSize: 14,
  apItemPaddingVertical: 8,
  apItemPaddingHorizontal: 12,
  apSeparatorColor: '#ccc',
  apSeparatorWidth: pixelSize,

  //PullPicker
  pupColor: '#f8f8f8',
  pupMaxHeight: 258,
  pupHeaderColor: defaultColor,
  pupHeaderPaddingLeft: 12,
  pupHeaderPaddingRight: 12,
  pupHeaderPaddingTop: 12,
  pupHeaderPaddingBottom: 12,
  pupHeaderTitleColor: '#000',
  pupHeaderFontSize: 16,
  pupHeaderFontWeight: 'bold',
  pupHeaderSeparatorColor: '#f8f8f8',
  pupHeaderSeparatorHeight: 8,
  pupItemColor: defaultColor,
  pupSeparatorColor: '#ccc',

  //PopoverPicker
  poppColor: '#f8f8f8',
  poppShadowColor: '#333',
  poppMinWidth: 120,
  poppMaxWidth: 260,
  poppMinHeight: 44,
  poppMaxHeight: 246,
  poppDirectionInsets: 4,
  poppItemColor: defaultColor,
  poppItemPaddingLeft: 12,
  poppItemPaddingRight: 12,
  poppItemPaddingTop: 8,
  poppItemPaddingBottom: 8,
  poppItemTitleColor: defaultTextColor,
  poppItemFontSize: 14,
  poppItemSeparatorWidth: pixelSize,
  poppItemSeparatorColor: '#ccc',
  poppAccessoryWidth: 10,
  poppAccessoryHeight: 10,
  poppAccessoryPaddingLeft: 8,
  poppAccessoryCheckColor: '#007aff',

  //Menu
  menuColor: 'rgba(0, 0, 0, 0.9)',
  menuShadowColor: '#777',
  menuDirectionInsets: 4,
  menuItemColor: 'rgba(0, 0, 0, 0)',
  menuItemPaddingLeft: 16,
  menuItemPaddingRight: 16,
  menuItemPaddingTop: 12,
  menuItemPaddingBottom: 12,
  menuItemTitleColor: '#ccc',
  menuItemFontSize: 14,
  menuItemSeparatorWidth: pixelSize,
  menuItemSeparatorColor: '#777',
  menuItemIconWidth: 16,
  menuItemIconHeight: 16,
  menuItemIconColor: '#ccc',
  menuItemIconPaddingRight: 12,

  //ModalIndicator
  miIndicatorColor: '#fff',
  miTextColor: '#fff',
  miFontSize: 15,
  miTextPaddingTop: 12,
  miScreenPaddingLeft: 40,
  miScreenPaddingRight: 40,
  miScreenPaddingTop: 100,
  miScreenPaddingBottom: 80,

  //NavigationPage
  backButtonTitle: 'Back',
};
