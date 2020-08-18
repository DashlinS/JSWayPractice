const day = (prompt("Enter a day and you'll get the next day!"));
switch (day) {
  case 'Monday':
  case 'monday':
    console.log('Tuesday')
    break;

  case 'Tuesday':
  case 'tuesday':
    console.log('Wednesday')
    break;

  case 'Wednesday':
  case 'wednesday':
    console.log('Thursday')
    break;

  case 'Thursday':
  case 'thursday':
    console.log('Friday')
    break;

  case 'Friday':
  case 'friday':
    console.log('Saturday')
    break;

  case 'Saturday':
  case 'saturday':
    console.log('Sunday')
    break;

  case 'Sunday':
  case 'sunday':
    console.log('Monday')
    break;

  default:
    console.log('I Do not Understand');
}