import './App.css';
import './Components/songsList'

import React, { useState } from 'react';
let key = false;

function App() {
  const [count, setCount] = useState(45)
  function likeBtn() {
    if(key) {
      setCount(count-1);
      key = false;
    }
    else{
      setCount(count+1);
      key = true;
    }
  }
  <songsList />
  return (
    <>
      <div className="app">
        <div className="header">
          <div className="image">
            <img src="Radio.jpg" alt="" />
            <img src="Logo.png" alt="" />
            <img src="Sign-out.png" alt="" />
          </div>

          <div className="text">
            <span>React Tracks</span>
            <span className="h2">Dravin</span>
            <span>Sign Out</span>
          </div>
        </div>

        <div className="buttons">
          <div className="search">
            <button className="btn">
              <i class="fa fa-close"></i>
            </button>
            <input
              className="srch"
              type="text"
              placeholder="Search Songs Here"
            />
            <button className="btn" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>

        <div className="list">
          <div className="container">
            <div className="btns">
              <i onClick={likeBtn} class="fa fa-thumbs-up"></i>
              <span>{count}</span>
            </div>

            <div className="text">
              <span>Title</span>
              <span>Subtitle</span>
            </div>

            <div className="track">
              <i className="fas fa-play-circle" id="play" title="Play"></i>
              <div className="duration">
                <span>00:00</span>/<span>00:00</span>
              </div>
              <div className="slideContainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="50"
                  className="slider"
                  id="myRange"
                ></input>
              </div>
              <img src="Sound.png" alt="" />
              <img src="Dot.jpg" alt="" />
            </div>

            <button title="Collapse" type="button" class="collapse">
              v
            </button>
          </div>
          <div className="container">
            <div className="btns">
              <i onClick={likeBtn} class="fa fa-thumbs-up"></i>
              <span>{count}</span>
            </div>

            <div className="text">
              <span>Title</span>
              <span>Subtitle</span>
            </div>

            <div className="track">
              <i className="fas fa-play-circle" id="play" title="Play"></i>
              <div className="duration">
                <span>00:00</span>/<span>00:00</span>
              </div>
              <div className="slideContainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="50"
                  className="slider"
                  id="myRange"
                ></input>
              </div>
              <img src="Sound.png" alt="" />
              <img src="Dot.jpg" alt="" />
            </div>

            <button title="Collapse" type="button" class="collapse">
              v
            </button>
          </div>
          <div className="container">
            <div className="btns">
              <i onClick={likeBtn} class="fa fa-thumbs-up"></i>
              <span>{count}</span>
            </div>

            <div className="text">
              <span>Title</span>
              <span>Subtitle</span>
            </div>

            <div className="track">
              <i className="fas fa-play-circle" id="play" title="Play"></i>
              <div className="duration">
                <span>00:00</span>/<span>00:00</span>
              </div>
              <div className="slideContainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="50"
                  className="slider"
                  id="myRange"
                ></input>
              </div>
              <img src="Sound.png" alt="" />
              <img src="Dot.jpg" alt="" />
            </div>

            <button title="Collapse" type="button" class="collapse">
              v
            </button>
          </div>
          <div className="container">
            <div className="btns">
              <i onClick={likeBtn} class="fa fa-thumbs-up"></i>
              <span>{count}</span>
            </div>

            <div className="text">
              <span>Title</span>
              <span>Subtitle</span>
            </div>

            <div className="track">
              <i className="fas fa-play-circle" id="play" title="Play"></i>
              <div className="duration">
                <span>00:00</span>/<span>00:00</span>
              </div>
              <div className="slideContainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="50"
                  className="slider"
                  id="myRange"
                ></input>
              </div>
              <img src="Sound.png" alt="" />
              <img src="Dot.jpg" alt="" />
            </div>

            <button title="Collapse" type="button" class="collapse">
              v
            </button>
          </div>
          <div className="container">
            <div className="btns">
              <i onClick={likeBtn} class="fa fa-thumbs-up"></i>
              <span>{count}</span>
            </div>

            <div className="text">
              <span>Title</span>
              <span>Subtitle</span>
            </div>

            <div className="track">
              <i className="fas fa-play-circle" id="play" title="Play"></i>
              <div className="duration">
                <span>00:00</span>/<span>00:00</span>
              </div>
              <div className="slideContainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="50"
                  className="slider"
                  id="myRange"
                ></input>
              </div>
              <img src="Sound.png" alt="" />
              <img src="Dot.jpg" alt="" />
            </div>

            <button title="Collapse" type="button" class="collapse">
              v
            </button>
          </div>
        </div>
        <a href="/">
          <img src="Add.png" alt="" />
        </a>
      </div>
    </>
  );
}

export default App;
