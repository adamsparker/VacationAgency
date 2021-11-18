
// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        
     console.log('user logged in: ', user);
     setupUI(user);
     
     }
    else {
        setupUI(user);
       // console.log('user logged out');
    }
 });
 
 // signup
 const signupForm = document.querySelector('#signup-form');
 signupForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     const email = signupForm['signup-email'].value;
     const password = signupForm['signup-password'].value;
     
     // sign up the user 
     auth.createUserWithEmailAndPassword(email, password).then(cred => {
         return db.collection('users').doc(cred.user.uid).set({
             login: signupForm['signup-login'].value
            
         });
         
     }).then(() => {
        /* console.log(cred.user);*/
         const modal = document.querySelector('#signup');
      
         
       
     });
     //signupForm.reset();
     /*FirebaseUse=FirebaseAuth.getInstance().getCurrentUser();//DEFEND HER  [used to track userstate but it working without it lol how  ]  */
 })
 

 // logout
 const logout = document.querySelector('#logout');
 logout.addEventListener('click', (e) => {
     e.preventDefault();
         auth.signOut();
         console.log("user logged out");
 });
 // login
 const loginForm = document.querySelector('#login-form');
 loginForm.addEventListener('submit', (e) => {
     e.preventDefault();
 
     const email = loginForm['login-email'].value;
     const password = loginForm['login-password'].value;
 
     auth.signInWithEmailAndPassword(email, password).then(cred => {
   //  console.log(cred.user)
     });
     loginForm.reset();
 })
 