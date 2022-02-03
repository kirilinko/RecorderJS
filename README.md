# :movie_camera: RecorderJS (JavaScript plugin)
RecorderJs is a plugin developed in JavaScript. It allows you to instantiate a web-cam recorder from the browser. It offers you two possibilities. The one to download directly the recorded video and the one to get the link of the video and to make a move to the folder of your choice. Bootstrap resources have also been used for the layout of the different buttons, which you can also customize.
## :information_source: To know !
The external resource used for button alignment is bootstrap and can also be modified or customized
* Bootstrap 5 ([Available here](https://getbootstrap.com/docs/5.0/getting-started/download/) )
## :books: How to use ?
Once after importing the RecoderJs resource into your code with the ``` <script src='...'> </script> ``` tag or the ```import``` for those running on a nodejs server, you need to declare a JavaScript variable in JSON format that will be used to parameterize the plugin. This variable must respect this architecture.
```javascript

var Json_RecordJs={

  'Start_Btn': {"class":"btn btn-success", "value":"Démarrer l'enrégistrement"},
  'Stop_Btn': { "class":"btn btn-danger", "value":"Sauvégarder"},
  'Next_Btn': { "class":"btn btn-primary", "value":"Étape suivante"},
  'Message': 
  {
        "befor_html":" Démarrer l'enrégistrement ",
        "in_html":"<p class='alert alert-danger'>En cours d'enrégistrement</p>",
        "after_html":"<p class='alert alert-success'>Enregistrement ok</p>",
        "erreur_text":"Autorisé la webcam pour continuer"
  },

  'Download': false
}

```
* The ```Start_Btn``` is the button to start the recording
* the ```Stop_Btn``` is the button to stop the recording,
* the ``` Next_Btn```, the one to submit the video once recorded.
 ### Next_Btn button is optional
The Next_Btn button is only used in case you don't allow the user to upload the video. Class is used to assign a class to the button and value to assign a value in text format and not HTML. 
### :speech_balloon: Message config
```Message``` is used to display the different dialogues following the actions with the button. The content of the message attributes takes into account the HTML format, so you can use tags here :grin:
* The ```befor_html``` is the message display before registration
* The ```in_html``` is the message displayed during the recording
* The ```after_html``` is the message display after registration
* The ```erreur_text``` in Text format and not HTML, is the message that will be displayed if the user does not authorize his webcam and microphone.
