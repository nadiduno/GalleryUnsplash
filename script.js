const input=document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

window.addEventListener('load',dayNightMode)

input.addEventListener('keydown',function(event){
  if(event.key === 'Enter')
  loadImg();
})

function loadImg(){
  removeImages();
  const url='https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=30&client_id=WHf1TvNXtSIPLF5hoq5OtHFqDmUWE5MNNgsADWXj2qE';
  fetch(url)
    .then(response => {
      if(response.ok)
        return response.json();
      else
        alert(response.status);
    })
    .then(data =>{
      const imageNodes=[];
      for(let i=0;i< data.results.length;i++){
        imageNodes[i] = document.createElement('div');
        imageNodes[i].className='img';
        imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
        imageNodes[i].addEventListener('dblclick',function(){
          window.open(data.results[i].links.download,'_blank');
        })
        grid.appendChild(imageNodes[i]);
      }
    })
}

function removeImages(){
  grid.innerHTML='';
}

function dayNightMode(){
  const date = new Date();
  const hour = date.getHours;

  if (hour >=7 && hour <= 19){
    document.body.style.backgroundColor='whitesmoke';
    document.body.style.color='black';
  }
  else{
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
  }
}


// async function bucarDados(){
//   try{
//     const response = await fetch ('https://api.unsplash.com/photos/wtZgw1nQ3FI?client_id=WHf1TvNXtSIPLF5hoq5OtHFqDmUWE5MNNgsADWXj2qE');
//   const body = await response.json();
//   return body;
//   } catch (err){
//     console.log("Erro")
//   } finally{
//     console.log("Deu")
//   }
// }
// bucarDados().then(body => {
  // console.log(body);
  // document.querySelector(body).innerHTML = body;
  // var avatar_url=body.avatar_url;
  // var name=body.name;
  // var bio=body.bio; 
  // var created_at=body.created_at; 
  // var public_repos=body.public_repos; 
  // var followers=body.followers; 
  // var following=body.following; 
  // var received_events_url=body.received_events_url; 
  // document.querySelector(".avatar_url").src = avatar_url;
  // document.querySelector(".name").innerHTML = name;
  // document.querySelector(".bio").innerHTML = bio;
  // document.querySelector(".created_at").innerHTML = created_at;
  // document.querySelector(".public_repos").innerHTML = public_repos;
  // document.querySelector(".followers").innerHTML = followers;
  // document.querySelector(".following").innerHTML = following;
  // document.querySelector(".received_events_url").innerHTML = received_events_url;
// });