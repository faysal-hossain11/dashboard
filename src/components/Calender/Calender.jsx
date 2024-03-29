import React from 'react';
import dayjs from 'react-dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');
const todayStartOfTheDay = today.startOf('day');

const Calender = () => {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DatePicker',
                        'DateTimePicker',
                        'TimePicker',
                        'DateRangePicker',
                    ]}
                >
                    <DemoItem label="DatePicker">
                        <DatePicker
                            defaultValue={yesterday}
                            disablePast
                            views={['year', 'month', 'day']}
                        />
                    </DemoItem>
                    <DemoItem label="TimePicker">
                        <TimePicker defaultValue={todayStartOfTheDay} disablePast />
                    </DemoItem>
                    <DemoItem label="DateTimePicker">
                        <DateTimePicker
                            defaultValue={yesterday}
                            disablePast
                            views={['year', 'month', 'day', 'hours', 'minutes']}
                        />
                    </DemoItem>
                    <DemoItem label="DateRangePicker" component="DateRangePicker">
                        <DateRangePicker defaultValue={[yesterday, today]} disablePast />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </div>
    );
};

export default Calender;