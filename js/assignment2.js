// Get length of Data array
var lengthy = data.length
// lengthy

// Get 4th element of the array
var fourth_meal = data[3]
// fourth_meal

// Use array "map" to create a variable "city_names" with the name of each city
var city_names = data.map(function(d) {
	return d.city
})

// Use array "map" to create a variable "populations with the pop of each city
var populations = data.map(function(d) {
	return d.pop
})

// Sort the data variable by median age
data.sort(function(a,b){
	return a.age - b.age 	
})

// What are the cities with the youngest/oldest median ages?
var youngest = data[0].city
// youngest

data.sort(function(a,b){
	return b.age - a.age 	
})
var oldest = data[0].city
// oldest