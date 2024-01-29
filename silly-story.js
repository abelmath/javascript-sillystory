// VARIABLE DECLARATIONS

// STEP 1:
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

// STEP 3:
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// STEP 4:
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

// STEP 2:
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// STEP 6:
function result() {
    // STEP 7:
    var newStory = storyText;

    // STEP 8:
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // STEP 9:
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    // STEP 10:
    if (customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    // STEP 11:
    if (document.getElementById("metric").checked) {
        // STEP 11a:
        var weight = Math.round(300 * 0.453592);
        // STEP 11b:
        newStory = newStory.replace('300 pounds', weight + ' kilograms');

        // STEP 12a:
        var temp = Math.round((94 - 32) * 5 / 9);
        // STEP 12b:
        newStory = newStory.replace('94 farenheit', temp + ' Celsius');
    }

    // STEP 13:
    story.textContent = newStory;

    // The following line makes the paragraph visible
    story.style.visibility = "visible";
}

// EVENT LISTENERS
// STEP 5:
randomize.addEventListener("click", result);
