$(document).ready(() => {
    $("#questions").hide();
    search();
});

function search() {
    new Promise((resolve, reject) => {
    $.get({
        url: `https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=boolean`,
        success: resolve,
        error: reject,
    });
    })
    .then(createQuestions)
    .catch(error => {
        
        console.log(`Something went wrong...`);
    });
}

function createQuestions(result) {
    $("#questions").empty().show()
    for (let i=0; i < result.results.length ; i++){
        $("#questions").append(`
            <div class="question q${i} mb-3">
            <p>${i+1} - ${result.results[i].question}</p>
            <form>
            <div >
            <input type="radio" name="question${i}" id="true${i}">
            <label  for="true${i}">True</label>
            </div>
            <div >
            <input type="radio" name="question${i}" id="false${i}" >
            <labelfor="false${i}">False</label>
            </div>
            </div>
            </form>
        `)
    }
}