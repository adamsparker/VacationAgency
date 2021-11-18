const DotsList = document.querySelector('.dots__grid');



auth.onAuthStateChanged(user => {
    if (user) {
        
     db.collection('blocks').onSnapshot(snapshot => {
         setupGuides(snapshot.docs);
     })
     console.log('user logged in: ', user);
     setupUI(user);   
     }
  });



// create new block
const createBlock = document.querySelector('#create__block__form');
createBlock.addEventListener('submit', (e) => {
    e.preventDefault();
    /*
    //image upload
    const ref = firebase.storage().ref()
    const file = document.querySelector("#dot-img").files[0]
    const name = new Date() + '-' + file.name
    const metadata = {
      contentType:file.type
    }
  
    const task = ref.child(name).put(file,metadata)
    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      document.getElementById("holder-id").setAttribute("value", url)
      console.log(url)
      console.log("Image uploaded") 
    })
    */



    db.collection('blocks').add({
        title: createBlock['create__block__title'].value,
        adress: createBlock['create__block__adress'].value,
        filter: createBlock['create__block__filter'].value,
        gps: createBlock['location-button'].value,
        content: createBlock['create__block__description'].value,
       // imgUrl: createBlock['holder-id'].value
       })

        

    }) 




// setup Block
const setupGuides = (data) => {
  
    if(data.length) {
  
      let html = '';
      data.forEach(doc => {
      const blocks = doc.data();
  
      // ${blocks.color} должно быть в <div class="block big-block">
  
      var blk = `
      <a onclick="test1()" data-modal="modal8" class="grid__img museum" style="background: url(assets/1.png) no-repeat center center / cover;">
                <div class="img__overlay overlay-red"> 
                    <div class="img__title"><div class="title__address">${blocks.adress}</div>${blocks.title}</div>
                    <div class="button__inner inner-short">
                </div>
                </div>
            </a>
          
          <div class="modal-holder" id="modal1">
          <div class="modal">
          <a onclick="test2()" class="modal__close">✖</a>
          <div class="modal-content__inner">
          <div class="modal__map">
          </div>
           
          <img src="/assets/1.png" alt="" class="modal__image">
    
            <div class="modal__info">
                <h3 class="info__title">${blocks.title}</h3>
                <p class="info__adress">${blocks.adress}</p>
                <div class="filter__inner" id="myBtnContainer">
                    <a class="filter__link hashtag-link">Хэштег</a>   <a class="filter__link hashtag-link">Мечеть</a>   <a class="filter__link hashtag-link">Место</a>
                    <a href="https://www.google.ru/maps/place/45%C2%B002'09.7%22N+38%C2%B058'28.5%22E/@45.036035,38.9723819,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xdc286c84a36eb87d!8m2!3d45.036035!4d38.9745706?hl=ru" class="filter__link hashtag-link">Перейти: ${blocks.gps}</a>
                </div>
                <p class="info__subtitle">${blocks.content}</p>
            </div>
            </div>
            </div>
            </div>



      `;
      html += blk
    });
  
    DotsList.innerHTML = html;
  
  } else
    {
     //guideList.innerHTML = '<h5 class ="blocks__status">Login to view content</h5>'
    }
  }
  
    