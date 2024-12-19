function checkSeason(month) {
  switch (month) {
    case "December":
    case "January":
    case "Februrary":
      return "Winter";
    case "March":
    case "April":
    case "May":
      return "Spring";
    case "June":
    case "July":
    case "August":
      return "Summer";
    case "September":
    case "October":
    case "November":
      return "Autumn";
  }
}
//Input the month in PascalCase and run the code to know the season
console.log(`We are in ${checkSeason("December")}`);
