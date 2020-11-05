/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
const DEFAULT_SELECTED_BACKGROUND_COLOR = '#5ce600';
const DEFAULT_SELECTED_TEXT_COLOR = '#000000';
const DEFAULT_TODAY_BACKGROUND_COLOR = '#CCCCCC';

function getBorderRadiusByShape(scaler, dayShape) {
  if (dayShape === 'square') {
    return 0;
  } else {
    return 30*scaler;
  }
}

export function makeStyles(params) {
  const {
    containerWidth,
    containerHeight,
    scaleFactor,
    selectedDayColor,
    selectedRangeDayBgColor,
    selectedDayTextColor,
    todayBackgroundColor,
    weekTextColor,
    dayShape
  } = params;
  const scaler = Math.min(containerWidth, containerHeight) / scaleFactor;
  const SELECTED_BG_COLOR = selectedDayColor ? selectedDayColor : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_RANGE_BG_COLOR = selectedRangeDayBgColor ? selectedRangeDayBgColor : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_TEXT_COLOR = selectedDayTextColor ? selectedDayTextColor : DEFAULT_SELECTED_TEXT_COLOR;
  const WEEK_TEXT_COLOR = weekTextColor ? weekTextColor : DEFAULT_SELECTED_TEXT_COLOR;
  const TODAY_BG_COLOR = todayBackgroundColor ? todayBackgroundColor : DEFAULT_TODAY_BACKGROUND_COLOR;

  return {
    containerWidth,
    containerHeight,

    calendar: {
      height: 320*scaler,
      marginTop: 10*scaler
    },

    dayButton: {
      width: 30*scaler,
      height: 30*scaler,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabel: {
      fontSize: 16*scaler,
      color: '#000',
      alignSelf: 'center'
    },

    selectedDayLabel: {
      color: SELECTED_TEXT_COLOR,
    },

    dayLabelsWrapper: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
    },

    daysWrapper: {
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabels: {
      fontSize: 14*scaler,
      color: WEEK_TEXT_COLOR,
      textAlign: 'center',
      fontWeight: '400',
    },

    selectedDay: {
      width: 36*scaler,
      height: 36*scaler,
      borderRadius: 18*scaler,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    selectedDayBackground: {
      backgroundColor: SELECTED_BG_COLOR,
    },

    selectedToday: {
      width: 36*scaler,
      height: 36*scaler,
      backgroundColor: TODAY_BG_COLOR,
      borderRadius: 18*scaler,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 44*scaler,
      height: 44*scaler,
      marginVertical: 4*scaler,
    },

    startDayWrapper: {
      width: 36*scaler,
      height: 36*scaler,
      borderRadius: 18*scaler,
      color: '#fff',
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'flex-start',
      justifyContent: 'center',
    },

    endDayWrapper: {
      width: 36*scaler,
      height: 36*scaler,
      borderRadius: 18*scaler,
      color: '#fff',
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'flex-end',
      justifyContent: 'center',
    },

    inRangeDay: {
      width: 44*scaler,
      height: 36*scaler,
      color: '#000',
      backgroundColor: SELECTED_RANGE_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      height: 44,
      width: '100%',
    },

    monthYearHeaderWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    previousContainer: {
    },

    nextContainer: {
    },

    navButtonText: {
      fontSize: 14*scaler,
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    },

    disabledText: {
      fontSize: 14*scaler,
      color: '#BBBBBB',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    selectedDisabledText: {
      fontSize: 14*scaler,
      color: '#DDDDDD',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    monthHeaderMainText: {
      fontSize: 16*scaler,
      color: '#000',
      textAlign: 'right',
      marginHorizontal: 3*scaler,
      fontWeight: '500',
    },

    monthButton: {
      width: 30*scaler,
      height: 30*scaler,
      borderRadius: 30*scaler,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    monthsHeaderText: {
      flex: 1,
      fontSize: 16*scaler,
      color: '#000',
      textAlign: 'center',
      fontWeight: '500',
    },

    monthContainer: {
      flex: 1,
      alignItems: 'center',
    },

    monthText: {
      fontSize: 14*scaler,
      color: '#000',
      alignSelf: 'center',
    },

    monthsWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: containerWidth,
    },

    monthsRow: {
      flexDirection: 'row',
      padding: 20*scaler,
    },

    yearHeaderMainText: {
      fontSize: 16*scaler,
      color: '#000',
      marginHorizontal: 3*scaler,
      fontWeight: '500',
    },

    yearContainer: {
      flex: 1,
      alignItems: 'center',
    },

    yearText: {
      fontSize: 16*scaler,
      color: '#000',
      alignSelf: 'center',
    },

    yearsHeaderText: {
      fontSize: 16*scaler,
      color: '#000',
      textAlign: 'center',
      fontWeight: '500',
    },

    yearsWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: containerWidth,
    },

    yearsRow: {
      flexDirection: 'row',
      padding: 20*scaler,
    },

    paddingRangeStart: {
      marginLeft: 4*scaler,
    },

    paddingRangeEnd: {
      marginRight: 4*scaler,
    },

    warpperRangeStart: {
      height: 36*scaler,
      width: 40*scaler,
      borderTopLeftRadius: 18*scaler,
      borderBottomLeftRadius: 18*scaler,
      backgroundColor: SELECTED_RANGE_BG_COLOR,
    },

    warpperRangeEnd: {
      height: 36*scaler,
      width: 40*scaler,
      borderTopRightRadius: 18*scaler,
      borderBottomRightRadius: 18*scaler,
      backgroundColor: SELECTED_RANGE_BG_COLOR,
    },

    weekWrapper: {
      width: 44*scaler,
      height: 44*scaler,
      alignItems: 'center',
      justifyContent: 'center',
    }

  };
}
