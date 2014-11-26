//Include script - <script type="text/javascript" src="res/aifuncs.js"></script>

function dateFmt(dateStr) {
    if(!dateStr) return "";
	dateStr = new Date(dateStr);
    var res =  (dateStr.getMonth()+1) + "/" + dateStr.getDate() + "/" + dateStr.getFullYear() + " ";
    var hour = dateStr.getHours()+1;
    var ampm = "AM";
	if(hour === 12) ampm = "PM";
    if(hour > 12){
        hour-=12;
        ampm = "PM";
    }
    var minute = dateStr.getMinutes()+1;
    if(minute < 10) minute = "0" + minute;
    res += hour + ":" + minute + " " + ampm;
    return res;
}

function dayName(dateStr) {
	if(!dateStr) return "";
	var weekday = new Array(7);
	weekday[0]=  "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tue";
	weekday[3] = "Wed";
	weekday[4] = "Thu";
	weekday[5] = "Fri";
	weekday[6] = "Sat";
	
	var dayName = weekday[dateStr.getDay()];
	return dayName;
}