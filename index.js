// Function to convert Celsius to Fahrenheit
function fahrenheitToCelsius(celsius) {
  // TODO: Implement the conversion logic here
  let inCelsius = (celsius * 9) / 5 + 32;
  return inCelsius;
  // document.write(celsius + " " + "C" + "is" + inFahrenheit + "" + "F");
}

// Function to convert Fahrenheit to Celsius
function celsiusToFahrenheit(fahrenheit) {
  // TODO: Implement the conversion logic here
  let inFahrenheit = ((fahrenheit - 32) * 5) / 9;
  return inFahrenheit;
}

// Prompt the user for input
let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt(
  "Choose the conversion type: (c or f) "
);

if (conversionType.toLowerCase() === "c") {
  // TODO: Call the celsiusToFahrenheit function and display the result
  let output = fahrenheitToCelsius(temperature);
  alert (output + "°C");
} else if (conversionType.toLowerCase() === "f") {
  // TODO: Call the fahrenheitToCelsius function and display the result
  let output = celsiusToFahrenheit(temperature);
  alert(output + "°F");
} else {
  alert("Invalid conversion type.");
}
