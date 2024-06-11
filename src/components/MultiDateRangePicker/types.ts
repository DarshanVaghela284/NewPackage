interface staticDateRanges {
    label: string;
    range: any;
    isSelected: any;
}

export interface DateRange {
    startDate: Date;
    endDate: Date;
}

export interface MultiDateRangePickerProps {
    minDate?: Date;
    maxDate?: Date;
    dateFormat?: string;
    disabledDates?: Date[];
    disabledDay?: (date: Date) => boolean;
    staticDateRanges?: staticDateRanges[];
    selectedDate: DateRange;
    onChange: (date: DateRange) => void;
    showFooter?: boolean;
    onApply?: (date: DateRange) => void;
    onCancel?: (date: DateRange) => void;
}
