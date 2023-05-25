import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./movie.css";
import axios from "axios";

export default function Movie() {
  const location = useLocation();
  const movie = location.movie;
  const history = useHistory();

  const [title, setTitle] = useState(movie ? movie.title : "");
  const [desc, setDesc] = useState(movie ? movie.desc : "");
  const [creatorFirstName, setCreatorFirstName] = useState(
    movie ? movie.creatorFirstName : ""
  );
  const [creatorLastName, setCreatorLastName] = useState(
    movie ? movie.creatorLastName : ""
  );
  const [Email, setEmail] = useState(movie ? movie.Email : "");
  const [img, setImg] = useState(movie ? movie.Email : "");
  const [trailer, setTrailer] = useState(movie ? movie.Email : "");

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDesc(movie.desc);
      setCreatorFirstName(movie.creatorFirstName);
      setCreatorLastName(movie.creatorLastName);
      setEmail(movie.Email);
      setImg(movie.img);
      setTrailer(movie.trailer);
    } else {
      setTitle("");
      setDesc("");
      setCreatorFirstName("");
      setCreatorLastName("");
      setEmail("");
      setImg("");
      setTrailer("");
    }
  }, [
    movie,
    setTitle,
    setDesc,
    setCreatorFirstName,
    setCreatorLastName,
    setEmail,
    setImg,
    setTrailer,
  ]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      history.push("/movies");
      if (movie) {
        await axios.put("http://localhost:8800/api/movies/" + movie._id, {
          title,
          desc,
          creatorFirstName,
          creatorLastName,
          Email,
          img,
          trailer,
        });
      }
    },
    [movie, title, desc, creatorFirstName, creatorLastName, Email, img, trailer]
  );

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Update Education Video</h1>
        <div className="createbtn">
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
        </div>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div>
            <span className="label">Education Video and Thumbnail</span>
          </div>

          <div className="detailsleft">
            <div className="productUpload">
            <video controls style={{ width: '200px', height: '100px' }}>
               <source src={movie.trailer}
              
                alt=""
                className="productUploadImg"
                placeholder={movie.trailer}
                value={movie.trailer}
                name="trailer"
                id="trailer"
              />
              </video>
            </div>
            <div className="productUpload2">
              <img
                src={movie.img}
                alt=""
                className="productUploadImg"
                id="img"
                width={10}
                height={20}
                value={movie.img}
                name="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" onSubmit={onSubmit}>
          <div className="productFormLeft">
            <div className="inputubx">
              <label>Full Name</label>
              <div className="fullname">
                <div className="firstname">
                  <input
                    type="text"
                    name="creatorFirstName"
                    placeholder={movie.creatorFirstName}
                    onChange={(e) => setCreatorFirstName(e.target.value)}
                  />
                </div>

                <div className="lastname">
                  <input
                    type="text"
                    name="creatorLastName"
                    placeholder={movie.creatorLastName}
                    onChange={(e) => setCreatorLastName(e.target.value)}
                  />
                </div>
              </div>
              <label>Email Address</label>
              <input
                type="email"
                name="Email"
                placeholder={movie.Email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Video Title</label>
              <input
                type="text"
                name="title"
                placeholder={movie.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Video Description</label>
              <textarea
                name="desc"
                placeholder={movie.desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
          <div className="productFormRight">
            <div className="dABtn">
              <button type="submit">UPDATE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
