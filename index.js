/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



const createEmployeeRecord = function (array) {
	return {
		firstName: array[0],
		familyName: array[1],
		title: array[2],
		payPerHour: array[3],
		timeInEvents: [],
		timeOutEvents: [],
	};
};

const createEmployeeRecords = function (arrayOfArrays) {
	return arrayOfArrays.map(createEmployeeRecord);
};

const createTimeInEvent = function (dateTimeString) {
	const [date, hour] = dateTimeString.split(" ");

	this.timeInEvents.push({
		type: "TimeIn",
		hour: parseInt(hour, 10),
		date: date,
	});

	return this;
};

const createTimeOutEvent = function (dateTimeString) {
	const [date, hour] = dateTimeString.split(" ");

	this.timeOutEvents.push({
		type: "TimeOut",
		hour: parseInt(hour, 10),
		date: date,
	});

	return this;
};

const hoursWorkedOnDate = function (date) {
	const timeInEvent = this.timeInEvents.find((e) => e.date === date);
	const timeOutEvent = this.timeOutEvents.find((e) => e.date === date);

	return (timeOutEvent.hour - timeInEvent.hour) / 100;
};

const wagesEarnedOnDate = function (date) {
	const hours = hoursWorkedOnDate.call(this, date);
	return hours * this.payPerHour;
};



const findEmployeeByFirstName = function (collection, firstNameString) {
	return collection.find(function (employee) {
		return employee.firstName === firstNameString;
	});
};

const calculatePayroll = function (employeeRecords) {
	return employeeRecords.reduce(function (total, record) {
		return total + allWagesFor.call(record);
	}, 0);
};

const allWagesFor = function () {
	const eligibleDates = this.timeInEvents.map(function (e) {
		return e.date;
	});

	const payable = eligibleDates.reduce(
		function (memo, d) {
			return memo + wagesEarnedOnDate.call(this, d);
		}.bind(this),
		0
	); // <== Hm, why did we need to add bind() there? We'll discuss soon!

	return payable;
};
const employeeRecords = createEmployeeRecords([
	["Thor", "Odinsson", "Electrical Engineer", 45],
	["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
	["Natalia", "Romanov", "CEO", 150],
]);

createTimeInEvent.call(employeeRecords[0], "2023-07-01 0800");
createTimeOutEvent.call(employeeRecords[0], "2023-07-01 1600");
createTimeInEvent.call(employeeRecords[1], "2023-07-01 0700");
createTimeOutEvent.call(employeeRecords[1], "2023-07-01 1700");

console.log(
	`Total wages for ${employeeRecords[0].firstName} ${
		employeeRecords[0].familyName
	}: $${allWagesFor.call(employeeRecords[0])}`
);
console.log(
	`Total wages for ${employeeRecords[1].firstName} ${
		employeeRecords[1].familyName
	}: $${allWagesFor.call(employeeRecords[1])}`
);
console.log(`Total payroll: $${calculatePayroll(employeeRecords)}`);
