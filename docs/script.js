function previewImage() {
    var preview = document.getElementById('imagePreview');
    var file    = document.getElementById('imageInput').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        preview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = 'none';
    }
}

document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData();
    var imageFile = document.getElementById('imageInput').files[0];
    formData.append('image', imageFile);

    fetch('https://production1-dta7tckbua-uk.a.run.app/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
      //  document.getElementById('response').innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
       // console.error('Error:', error);
       // document.getElementById('response').innerText = 'Error: ' + error.toString();
    });
});


function previewImage() {
    var preview = document.getElementById('imagePreview');
    var file = document.getElementById('imageInput').files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
        preview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = 'none';
    }
}

document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('progressContainer').style.display = 'block';
    document.getElementById('submitButton').style.display = 'none';


    var formData = new FormData();
    var imageFile = document.getElementById('imageInput').files[0];
    formData.append('image', imageFile);

    fetch('https://production1-dta7tckbua-uk.a.run.app/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
console.log(data.predictions[0])
document.getElementById('response').innerHTML = "";
        let predictions = data.predictions[0]; // Access the first array of predictions

        // Find the index and value of the highest number in the predictions array
        let maxIndex = 0;
        let maxValue = predictions[0];

        predictions.forEach((value, index) => {
            if (value > maxValue) {
                maxValue = value;
                maxIndex = index;
            }
        });

        let animals = ['dog', 'horse', 'elephant', 'butterfly', 'hen', 'cat', 'cow', 'sheep', 'spider', 'squirrel'];

        // Display these values on your webpage
        document.getElementById('response').innerHTML += `<p>Predicted Animal: ${animals[maxIndex]}</p>`;
        document.getElementById('response').innerHTML += `Confidence Level: ${maxValue.toFixed(4)*100}%</p>`;

        document.getElementById('progressContainer').style.display = 'none';
        document.getElementById('submitButton').style.display = 'block';

    })
    .catch(error => {
    document.getElementById('progressContainer').style.display = 'none';
        document.getElementById('submitButton').style.display = 'block';
    });
});
