# :movie_camera: RecorderJS (JavaScript plugin)
RecorderJs is a plugin developed in JavaScript. It allows you to instantiate a web-cam recorder from the browser. It offers you two possibilities. The one to download directly the recorded video and the one to get the link of the video and to make a move to the folder of your choice. Bootstrap resources have also been used for the layout of the different buttons, which you can also customize.
## :information_source: To know !
The external resource used for button alignment is bootstrap and can also be modified or customized
* Bootstrap 5 ([Available here](https://getbootstrap.com/docs/5.0/getting-started/download/) )
## :books: How to use ?
Once after importing the RecoderJs resource into your code with the ``` <script src='...'> </script> ``` tag or the ```import``` for those running on a nodejs server, you need to declare a JavaScript variable in JSON format that will be used to parameterize the plugin. This variable must respect this architecture.
```javascript

var Json_RecordJs={

  'Start_Btn': {"class":"btn btn-success", "value":"Démarrer l'enregistrement"},
  'Stop_Btn': { "class":"btn btn-danger", "value":"Sauvegarder"},
  'Next_Btn': { "class":"btn btn-primary", "value":"Étape suivante"},
  'Message': 
  {
        "befor_html":" Démarrer l'enregistrement ",
        "in_html":"<p class='alert alert-danger'>En cours d'enregistrement</p>",
        "after_html":"<p class='alert alert-success'>Enregistrement ok</p>",
        "erreur_text":"Autorisé la webcam pour continuer"
  },

  'Download': true
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
### :floppy_disk: Download option
You have the possibility to use the download function and in this case the user will be able to download the video once registered. To do this, you need to set ```true``` to the download level like this:
```javascript
var Json_RecordJs={

   'Download': true
}

```
To not allow the user to download and retrieve the video once he has made the recording, you must put ```false``` before download like this: 
```javascript
var Json_RecordJs={

   'Download': false
}

```
### :white_check_mark: Initialization of the plugin
To initialize the plugin, you only need to call the ``` RecordJs_Init() ``` function, which will have to take as parameter the variable ```Json_RecordJs``` in the JSON form of parameterization, after importing the RecorderJs resource.  It will come down to this:  

```javascript
<script src='RecorderJs.js'></script>

var Json_RecordJs={

  'Start_Btn': {"class":"btn btn-success", "value":"Démarrer l'enrégistrement"},
  'Stop_Btn': { "class":"btn btn-danger", "value":"Sauvégarder"},
  'Next_Btn': { "class":"btn btn-primary", "value":"Étape suivante"},
  'Message': 
  {
        "befor_html":" Démarrer l'enregistrement ",
        "in_html":"<p class='alert alert-danger'>En cours d'enregistrement</p>",
        "after_html":"<p class='alert alert-success'>Enregistrement ok</p>",
        "erreur_text":"Autorisé la webcam pour continuer"
  },

  'Download': true
}

RecordJs_Init(Json_RecordJs)

```
### :red_circle:Highly important
If you are not using the download function, i.e. the value assigned to ```Download ``` is ```false```, you need to add this code to generate a form that would return the url of the video once the user has submitted the video :

```javascript
 
 document.querySelector('#next-rec').onclick=(e)=>{
  var url_video=document.querySelector('#Url_video').value
  e.preventDefault()
  console(url_video)
}


```

## :computer:Code example

### Sample code (with download)
[view example online](https://recorderjsd.netlify.app)
 ```javascript
 
<script type="text/javascript" src="RecordJs.js"></script>

<script type="text/javascript">

var Json_RecordJs={
  'Start_Btn': {'class':'btn btn-success', 'value':'Démarrer l\'enrégistrement'},
  'Stop_Btn': { "class":"btn btn-danger", "value":"Sauvégarder"},
  'Next_Btn': { "class":"btn btn-primary", "value":"Étape suivante"},
  'Message': 
  {
        "befor_html":" Démarrer l'enrégistrement ",
        "in_html":"<p class='alert alert-danger'>En cours d'enrégistrement</p>",
        "after_html":"<p class='alert alert-success'>Enrégistrement ok</p>",
        "erreur_text":"Autorisé la webcam pour contunier"
  },

  'Download': true
}

RecordJs_Init(Json_RecordJs)

</script>

```
### Sample code (no download)
[view example online](https://recorderjs.netlify.app)
 ```javascript
 
<script type="text/javascript" src="RecordJs.js"></script>

<script type="text/javascript">

var Json_RecordJs={
  'Start_Btn': {'class':'btn btn-success', 'value':'Démarrer l\'enrégistrement'},
  'Stop_Btn': { "class":"btn btn-danger", "value":"Sauvégarder"},
  'Next_Btn': { "class":"btn btn-primary", "value":"Étape suivante"},
  'Message': 
  {
        "befor_html":" Démarrer l'enrégistrement ",
        "in_html":"<p class='alert alert-danger'>En cours d'enrégistrement</p>",
        "after_html":"<p class='alert alert-success'>Enrégistrement ok</p>",
        "erreur_text":"Autorisé la webcam pour contunier"
  },

  'Download': false
}

RecordJs_Init(Json_RecordJs)

document.querySelector('#next-rec').onclick=(e)=>{
var url_video=document.querySelector('#Url_video').value
  e.preventDefault()
  console(url_video)
}

</script>

```
