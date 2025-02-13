let isCelsiusToFahrenheit = true;

function isNumberKey(evt) {
  let charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}

function convert() {
  let inputValue = parseFloat(document.getElementById("inputValue").value);
  if (isNaN(inputValue)) {
    document.getElementById("outputValue").value = "";
    document.getElementById("calculation").value = "";
    return;
}

  let outputValue;
  
  if (isCelsiusToFahrenheit) {
      outputValue = (inputValue * 9/5) + 32;
      document.getElementById("calculation").value = inputValue + "°C * (9/5) + 32 = " + outputValue + "°F";
  } else {
      outputValue = (inputValue - 32) * 5/9;
      document.getElementById("calculation").value = "(" + inputValue + "°F - 32) * (5/9) = " + outputValue + "°C";
  }
  
  document.getElementById("outputValue").value = outputValue;
}

function convertWithValidation() {
  let inputValue = document.getElementById("inputValue").value.trim();
  if (inputValue === "") {
      alert("Harap masukkan nilai suhu sebelum melakukan konversi.");
      return;
  }
  convert();
}

function reset() {
  document.getElementById("inputValue").value = "";
  document.getElementById("outputValue").value = "";
  document.getElementById("calculation").value = "";
}

function toggleConversion() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  
  if (isCelsiusToFahrenheit) {
      document.getElementById("unit-label").textContent = "Celsius (°C)";
      document.getElementById("unit-label-2").textContent = "Celsius (°C)";
      document.getElementById("converted-unit-label").textContent = "Fahrenheit (°F)";
      document.getElementById("converted-unit-label-2").textContent = "Fahrenheit (°F)";
      document.getElementById("conversion-title").textContent = "Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)";
      document.getElementById("conversion-formula").innerHTML = "Suhu <em>S</em> dalam derajat Fahrenheit (°F) sama dengan suhu <em>S</em> dalam derajat Celsius (°C) <br> kali 9/5 tambah <strong>32</strong>.";
      document.getElementById("formula").textContent = "S(°F) = (S(°C) × 9/5) + 32";
      document.getElementById("formula-alt").textContent = "S(°F) = (S(°C) × 1.8) + 32";
      document.getElementById("toggle-link").textContent = "Fahrenheit ke Celsius";
  } else {
      document.getElementById("unit-label").textContent = "Fahrenheit (°F)";
      document.getElementById("unit-label-2").textContent = "Fahrenheit (°F)";
      document.getElementById("converted-unit-label").textContent = "Celsius (°C)";
      document.getElementById("converted-unit-label-2").textContent = "Celsius (°C)";
      document.getElementById("conversion-title").textContent = "Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)";
      document.getElementById("conversion-formula").innerHTML = "Suhu <em>S</em> dalam derajat Celsius (°C) sama dengan suhu <em>S</em> dalam derajat Fahrenheit (°F) <br> dikurangi <strong>32</strong>, lalu dikali 5/9.";
      document.getElementById("formula").textContent = "S(°C) = (S(°F) - 32) × 5/9";
      document.getElementById("formula-alt").textContent = "S(°C) = (S(°F) - 32) × 0.5556";
      document.getElementById("toggle-link").textContent = "Celsius ke Fahrenheit";
  }
}               

function createSnowflakes() {
  for (let i = 0; i < 50; i++) {
      let snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      document.body.appendChild(snowflake);
      
      let size = Math.random() * 5 + 5;
      snowflake.style.width = size + "px";
      snowflake.style.height = size + "px";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
  }
}
createSnowflakes();
