function RecordJs_Init(JsonData){
//Déclaration du tableau video
let videoData=[];

const DRecordJs='<video autoplay id="web-cam" class="screen-no-record" style="background: black;width: 700px;height: 400px;"> Votre navigateur ne support le format vidéo </video>'+
      '<p class="mg-b1" id="message">'+JsonData.Message.befor_html+'</p><div id="btn-group" class="row">'+
      '<div class="col-3"><button id="start-rec" >'+JsonData.Start_Btn.value+'</button></div>'+ 
      '<div class="col-3"><button id="stop-rec" class='+JsonData.Stop_Btn.class+' disabled> '+JsonData.Stop_Btn.value+'</button></div></div>'+
      '<div id=recodeVide_Download style="margin-top:30px"></div>'


const RecordJs='<video autoplay id="web-cam" class="screen-no-record" style="background: black;width: 700px;height: 400px;"> Votre navigateur ne support le format vidéo </video>'+
      '<p class="mg-b1" id="message">'+JsonData.Message.befor_html+'</p><div id="btn-group" class="row">'+
      '<div class="col-4"><button id="start-rec" >'+JsonData.Start_Btn.value+'</button></div>'+ 
      '<div class="col-4"><button id="stop-rec" class='+JsonData.Stop_Btn.class+' disabled> '+JsonData.Stop_Btn.value+'</button></div>'+
      '<div class="col-4">'+
      '<form>'+
      '<input type="hidden" id="Url_video" name="url_record" value="">'+
      '<button id="next-rec" class='+JsonData.Next_Btn.class+' disabled> '+JsonData.Next_Btn.value+'</button></from></div></div>'+
      '<div id=recodeVide_Download style="margin-top:30px"></div>'



if (document.querySelector("#RecordJs") )
 {
    
   document.querySelector("#RecordJs").innerHTML=JsonData.Download ? DRecordJs : RecordJs
    
   const startRecordBtn=document.querySelector('#start-rec');
   const stopRecordBtn=document.querySelector('#stop-rec');
   startRecordBtn.setAttribute('class',JsonData.Start_Btn.class)
   stopRecordBtn.setAttribute('class',JsonData.Stop_Btn.class)

   // Si l'enregistrement ne doit pas être télécharger
 if(JsonData.Download==false){
   const nextRecordBtn=document.querySelector('#next-rec');
   nextRecordBtn.setAttribute('class',JsonData.Next_Btn.class)
 }

  //Selection de la web-cam
   const webcamScreen=document.getElementById('web-cam');
   
   //Initialisation des contraintes
   const mediaContraint={
      audio:true,
      video:true
   }

   //Function chargé de l'enregistrement
   startRecordBtn.onclick=function(){
   
     //Récupération du flux
     navigator.mediaDevices.getUserMedia(mediaContraint)
     .then(mediaStream=>{
     
     //Initialisation de l'objet MediaRecord
     const mediaRecorder=new MediaRecorder(mediaStream)
     
     window.mediaStream = mediaStream;
     window.mediaRecorder = mediaRecorder;
     
     //Démarre l'enregistrement
     mediaRecorder.start();

     //Enrégistrment de faction de vidéo dans le tableau
     mediaRecorder.ondataavailable=(e)=>{

      videoData.push(e.data);
     };
     
      //Ecouteur (event onstop record)
      mediaRecorder.onstop=()=>{
      const videFile= new Blob(videoData, {type :"video/mp4"});
      videoData=[];

     const recordedVideo=document.createElement("video");
     recordedVideo.controls=true;
     const recordedVideoURL=URL.createObjectURL(videFile);
     recordedVideo.src=recordedVideoURL

    
    //Création du lien de téléchargement 
     const br=document.createElement('br')
     const DownloadBtn=document.createElement("a");
     DownloadBtn.download="RecordJs";
     DownloadBtn.href=recordedVideoURL;
     DownloadBtn.innerHTML="Télécharger la vidéo";
     // Pour faire l'enregistrement en ligne
     if(JsonData.Download==false) {
     const input=document.querySelector('#Url_video');
     input.setAttribute("value", recordedVideoURL);
      }
     DownloadBtn.onclick=()=>{
      URL.revokeObjetURL(mediaRecorder)
     }
     
     if(JsonData.Download) {
          document.getElementById('recodeVide_Download').append(recordedVideo,br,DownloadBtn);
     }
      
    }
     
     //Affichage de l'enrégistement en temps réel
     webcamScreen.srcObject = mediaStream;
     //Activité du boutton d'arrêt.
     document.getElementById('start-rec').setAttribute("disabled", "");
     document.getElementById('stop-rec').removeAttribute("disabled");

     if(JsonData.Download==false){document.getElementById('next-rec').setAttribute("disabled", "") }
     
     document.getElementById('message').innerHTML=JsonData.Message.in_html
     }) 
     .catch(erreur=>{
      alert(JsonData.Message.erreur_text)
       })


   }
   
   //Function d'arrêt d'enrégistrement
   stopRecordBtn.onclick=function(){
    window.mediaRecorder.stop();

     document.getElementById('stop-rec').setAttribute("disabled", "");
     document.getElementById('start-rec').removeAttribute("disabled");
     window.mediaStream.getTracks().forEach(track=>{ track.stop()})
     document.getElementById('message').innerHTML=(JsonData.Message.after_html);
    if(JsonData.Download==false){ 
      document.getElementById('next-rec').removeAttribute("disabled") ;
      
     }
 
   }
 }
  else{
    alert("RecordJS dont no work. Please, create <div> with id value is 'RecordJs' ( <div id='RecordJs'></div> )")
  }

}
