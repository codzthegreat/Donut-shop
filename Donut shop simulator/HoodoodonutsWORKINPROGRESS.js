<script>

function HoodooDonuts(site, openingTime, closingTime, minimumCustomersPerHour, maximumCustomersPerHour, donutsPerCustomer) {
	this.site = site;
	this.openingTime = openingTime;
	this.closingTime = closingTime;
	this.minimumCustomersPerHour = minimumCustomersPerHour;
	this.maximumCustomersPerHour = maximumCustomersPerHour;
	this.donutsPerCustomer = donutsPerCustomer;
	this.randomCustomersPerHour = return (Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);
	this.hoursOpen = return (this.closingTime - this.openingTime);
	this.dailyDonutsBake = return (this.donutsPerCustomer * this.hoursOpen() * this.randomCustomersPerHour());
	this.hourlyDonutsBake = return (this.dailyDonutsBake() % this.hoursOpen());

}	


var downtownHD = new HoodooDonuts("downtown", 6, 17, 8, 43, 4.5);
var capitalHillHD = new HoodooDonuts("capital hill", 6, 17, 4, 37, 2);
var southLakeUnionHD = new HoodooDonuts("south lake union", 6, 17, 9, 23, 6.33);
var wedgewoodHD = new HoodooDonuts("wedgewood", 6, 17, 2, 28, 1.25);
var ballardHD = new HoodooDonuts("ballard", 6, 17, 8, 58, 3.75);



console.log([downtownHD, capitalHillHD, southLakeUnionHD, wedgewoodHD, ballardHD]);


</script>