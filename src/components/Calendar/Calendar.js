import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, onSelectEvent, onDoubleClickEvent }) => {
  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
        onSelectEvent={onSelectEvent}
        onDoubleClickEvent={onDoubleClickEvent}
      />
    </div>
  );
};

export default MyCalendar;
