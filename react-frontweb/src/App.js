import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubImage from './github-mark.png';

function App() {

  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();


  const handleSubmit = (event) => {
    event.preventDefault();  
    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(useResponse => setUserData(useResponse));
    
  }

  console.log(userData);

  const handleChange = (event) =>{
      setSearch(event.target.value);
  }

  return (
    <div className="container text-center">
        <h1 className="py-5 text-uppercase"> Github profile</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <input type="text"
                  className="form-control"
                  required
                  value={search}
                  onChange={handleChange}

                />
                <span className="input-group-btn">

                  <button type="submit" className=" btn btn-success">
                    Search
                  </button>

                </span>
              </div>

            </div>

        </form>
          <div className="py-5">
            {!userData && (
              <img src={GithubImage} 
                className="responsive rounded-circle" 
                alt="" 
                height= "200px"  
              />
            )}
            {userData && (
                <div>
                <img src={userData.avatar_url} 
                    className="responsive rounded-circle" 
                    alt="" 
                    height= "200px"  
                  />
                  <h1 className="pt-5">
                    <a href="https://api.github.com/users/gcgonzo" target="_new">
                      {userData.name}
                      </a>
                  </h1>
                  <h4>{userData.location}</h4>
                  <p>
                    <a href={userData.url} 
                    target="_new" 
                    className="text-info" >
                      {userData.url}
                    </a>
                  </p>
                </div>

            )}
            
          </div>


    </div>
  );
}

export default App;
