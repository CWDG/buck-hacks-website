$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    googleCalendarApiKey: 'AIzaSyAFULaUy9G-lC8j0FtH2GGYZCUoZrjdaj8',
    events: {
      googleCalendarId: 'buckeyehackers@gmail.com',
      timezone: 'America/New_York'
    }
  });
});
