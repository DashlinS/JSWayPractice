const name = (prompt('How many days in this month?'));
switch (name) {
  case 'February':
    console.log('Only 28 days in this Month')
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    console.log('There are 30 days in these Months')
    break;
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    console.log('There are 31 days in these Months')
    break;
    
  default:
    console.log('Enter a Valid Month');
}
