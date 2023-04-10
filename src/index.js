// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

import ReactDOM from "react-dom";
// import paintings from "./user.json";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
     
// const data = painting[0];
const data = {
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
};

const painting = (
  <div class="profile">
    <div class="description">
      <img
        src={data.avatar}
        alt={data.username}
        class="avatar"
      />
      <p class="name">{data.username}</p>
      <p class="tag">{data.tag}</p>
      <p class="location">{data.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{data.stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{data.stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{data.stats.likes}</span>
      </li>
    </ul>
  </div>
);

ReactDOM.render(painting, document.querySelector('#root'));
