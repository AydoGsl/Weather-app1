<h1> Weather-App </h1>


A weather app that changes every 3 minutes.

We got some Challenge questions from the course. I will add the question and my answers here.

1. How can you ensure the weather updates automatically at regular intervals?

    Answer: By using the setInterval() function.

2. What is the best way to generate random values for the weather properties?

    Answer: By using the Math.random() function combined with Math.floor function, I generate random weather values for properties like temperature, condition and cloudiness

3. How can you dynamically check for extreme weather conditions and update warnings?

    Answer: To check for extreme weather conditions (such as snow and cold temperatures) and update warnings dynamically, you can evaluate conditions in your updateWeatherDisplay() function and modify the warning message. If the condition is "Snow" and the temperature is     below -10°C, it shows the warning "Do not go outside!". If the conditions are not met, it hides the warning message. This ensures that warnings are updated based on the current weather.

4. How will you structure the CSS so the warning message stands out?

    Answer: What i did was make a small box with a red background, with a white text to make it stand out. I also made it bold to make it more noticable. The font size is increased to ensure its easy to read. Also i added blinking, the @keyframes animation makes the          warning blink to attract attention when its visible.
