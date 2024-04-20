// ! pixabay-api.js

// export function createPost(post) {
//   const url = '...'; // some url
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(post),
//   };
// }

// ! pixabay-api.js

// ! render-functions.js

// export function userTemplate() {
//   return `...`; // some markup
// }

// export function usersTemplate(arr) {
//   return arr.map(userTemplate).join();
// }

// ! render-functions.js

// ! main.js

// import { createPost } from './post-api.js';
// import { userTemplate, usersTemplate } from './render-functions.js';

// const createPostForm = document.querySelector('.js-create-post');

// createPostForm.addEventListener('submit', onCreatePost);

// function onCreatePost(e) {
//   e.preventDefault();

//   const myData = {
//     email: e.target.elements.userEmail.value,
//     name: e.target.elements.userName.value,
//     phone: e.target.elements.userPhone.value,
//   };

//   createUser(myData).then(newPost => {
//     const markup = userTemplate(newPost);
//     postListElem.insertAdjacentHTML('afterbegin', markup);
//     e.target.reset();
//   });
// }

// ! main.js
