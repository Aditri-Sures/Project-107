function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XjgkPVDv9/model.json",modelReady);
}

function modelReady(){
    console.log("model Loaded");
    classifier.classify(gotResults);
}