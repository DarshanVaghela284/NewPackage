import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { addDays, format } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./MultiDateRangePicker.css";
import { DateRange, MultiDateRangePickerProps } from "./types";

const KEY_NAME = "selection";

const MultiDateRangePicker = ({
  maxDate,
  minDate,
  dateFormat = "MMM dd, yyyy",
  showFooter = false,
  disabledDates,
  selectedDate = {
    startDate: addDays(new Date(), -7),
    endDate: new Date(),
  },
  staticDateRanges = [],
  disabledDay,
  onChange,
  onApply,
  onCancel,
}: MultiDateRangePickerProps) => {
  const [localState, setLocalState] = useState<DateRange & { key: string }>({
    ...selectedDate,
    key: KEY_NAME,
  });

  const selectedDateView = `${format(
    localState.startDate,
    dateFormat
  )} - ${format(localState.endDate, dateFormat)}`;

  return (
    <>
      <div className="multi-calender-range dateWrapper">
        <DateRangePicker
          direction="horizontal"
          disabledDates={disabledDates}
          disabledDay={disabledDay}
          minDate={minDate}
          maxDate={maxDate}
          months={2}
          ranges={[localState]}
          rangeColors={["#4b51e7", "#3ecf8e", "#fed14c"]}
          staticRanges={staticDateRanges}
          showDateDisplay={false}
          showPreview={false}
          onChange={(item: any) => {
            setLocalState(item.selection);
            if (!showFooter && onChange) onChange(item.selection);
          }}
        />
        <div className="flex">
          <div className="header-line"></div>
          <div className="rangeClass">
            <div className="flex gap-4">
              <div className="text-gray">Range:</div>
              <div className="text-gray">{selectedDateView}</div>
            </div>
          </div>
          {showFooter && (
            <div className="flex gap-8 pr8 py8">
              <button
                className="cancel-btn cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setLocalState({ ...selectedDate, key: KEY_NAME });
                  onCancel && onCancel(localState);
                }}
              >
                Cancel
              </button>
              <button
                className="fill-width cursor-pointer justify-center font-semiold primary white--text apply-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange && onChange(localState);
                  onApply && onApply(localState);
                }}
              >
                Apply
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiDateRangePicker;
