//const guideList = document.querySelector('.content__container')
//const workspaceLink = document.querySelectorAll('#workspace');
const loggedOutLinks = document.querySelectorAll('#logout');
const loggedInLInks = document.querySelectorAll('#loginbtn');
//const accountDetails = document.querySelector('.account-details');
//const titleinfo = document.querySelector('.block__title');
//const createLink = document.querySelectorAll('#block__create');

const setupUI = (user) => {
    if (user) {
          //account info
          db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
            <div>Hello!<br>${doc.data().username}</div>
            `;
         //   accountDetails.innerHTML = html;
        })
          //hide account info
         // accountDetails.innerHTML = '';

        //workspaceLink.forEach(item => item.style.display = 'block');
       // createLink.forEach(item => item.style.display = 'block');
        loggedInLInks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'inline');
       
    }
    else {
       // workspaceLink.forEach(item => item.style.display = 'none');
       // createLink.forEach(item => item.style.display = 'none');
        loggedInLInks.forEach(item => item.style.display = 'inline');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        
    }
  }
