_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{Juyh:function(e,t,o){"use strict";o.r(t);var s=o("q1tI"),n=o.n(s).a.createElement;t.default=function(){return n("div",{style:{marginTop:"2em"}},n("div",{className:"jumbotron text-center"},n("h1",null,"Signify - ASL Translator"),n("h4",null,"Signify uses machine learning to transform webcam input into readable sign language using a variety of different techniques. The series of texts below detail the steps taken for signify to translate an image into a final word.")),n("div",{className:"bg-secondary jumbotron"},n("h3",{className:"text-center"},"1. OpenCV Pipeline"),n("div",{className:"row justify-content-center"},n("img",{src:"opencv.png",alt:"OpenCV Pipeline Demo",className:"img-responsive col-xs-12 col-md-6",style:{height:"100%"}}),n("div",{className:"col-xs-12 col-md-6"},n("p",null,"The first step of the process to transform an image to a letter output is our OpenCV pipeline. This pipeline is written as the following:",n("br",null),n("code",null,"cv.cvtColor(img, result, cv.COLOR_BGR2GRAY);",n("br",null),"cv.adaptiveThreshold( result, result, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 21, 2 );",n("br",null),"cv.cvtColor(result, result, cv.COLOR_GRAY2RGB);"),n("br",null),"The above pipeline simply performs an adaptive threshold on a grayscaled version on the image, highlighting its edges which make the image easier to process through the next step, the tensorflow model.")))),n("div",{className:"bg-secondary jumbotron"},n("h3",{className:"text-center"},"2. Tensorflow CNN"),n("div",{className:"row justify-content-center"},n("img",{src:"model-architecture.png",alt:"OpenCV Pipeline Demo",className:"img-responsive col-xs-12 col-md-6",style:{height:"100%"}}),n("div",{className:"col-xs-12 col-md-6"},n("p",null,"After experimenting with various different model architectures, transfer learning from various different base convolutional neural network including vgg19, alexnet, and more, we settled on the architecture shown here, which both allowed the model to be run in real time as well as be fairly accurate. We took the output of a pre-trained convolutional neural network (mobile net) and added three dense layers to alter the output to classify hand signs.")))),n("div",{className:"bg-secondary jumbotron"},n("h3",{className:"text-center"},"3. Interpreting The Results"),n("div",{className:"row justify-content-center"},n("img",{src:"interpretation.png",alt:"OpenCV Pipeline Demo",className:"img-responsive col-xs-12 col-md-6",style:{height:"100%"}}),n("div",{className:"col-xs-12 col-md-6"},n("p",null,"The Tensorflow CNN mentioned above only gave us a stream of outputs, which had to be translated into a readable english word / set of letters, as shown in the image. To accomplish this, we developed a small algorithm like the following: If the previous detected letter is different from the current detector letter, and the previous detected letter has been repeated at least x number of times, then add the previous letter to the running predicted word. However, the threshold x may change from letter to letter, and we had to experiment with different values of x: smaller values for letters which the model had trouble with, and larger values for letters which the model was more confident with. Then, when a space character is detected, we run autocorrection and text to speech as mentioned in the text below.")))),n("div",{className:"bg-secondary jumbotron"},n("h3",{className:"text-center"},"4. Autocorrection And Text To Speech"),n("div",{className:"row justify-content-center"},n("img",{src:"tts.jpeg",alt:"OpenCV Pipeline Demo",className:"img-responsive col-xs-12 col-md-6",style:{height:"100%"}}),n("div",{className:"col-xs-12 col-md-6"},n("p",null,"However, the letters output by the previous step were not always 100% perfect, which is why we included autocorrection. For the select times where the previous steps are not able to accurately translate a word, we use simple autocorrection to change it to the nearest english word. Additionally, we used the browser text to speech API to speak out loud the predicted word, allowing for even more use cases.")))))}},Qetd:function(e,t,o){"use strict";var s=Object.assign.bind(Object);e.exports=s,e.exports.default=e.exports},rB5V:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return o("Juyh")}])}},[["rB5V",0,1]]]);