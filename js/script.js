
//<------------------------------------------------------

const $title = $('#title');
const $temp = $('#temp');
const $index = $('#index');
const $desc = $('#desc');
const $input = $('input[type="text"]');

let weatherData, userInput;


$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
   // calling preventDefault() on a 'submit' event will prevent a page refresh  
   
   userInput = $input.val();
    // getting the user input

   $.ajax({
         url:'http://api.openweathermap.org/data/2.5/weather?appid=3ef3ac19f4ab74e5d4cc0765c07ba5a2&q=' + userInput
      }).then(
        (data) => {
         weatherData = data;
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}
    

function render() {
    $title.text(weatherData.name);
    $temp.text(weatherData.main.temp);
    $index.text(weatherData.main.feels_like);
    $desc.text(weatherData.weather.description);
 }

 console.log("Full Object: ", weatherData.name);
 console.log("Description: ", weatherData.weather.description);
 