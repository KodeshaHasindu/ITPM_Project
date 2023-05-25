import { useContext, useState } from "react";
import "./newMovie.scss";
import storage from "../../firebase";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: trailer, label: "trailer" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">Edcation Video Upload</h1>
      <form className="addMovieForm">
        <label className="fullnamelabel">Lecture Full Name</label>
        <div className="fullname">
          <div className="firstname">
            <input
              type="text"
              placeholder="Enter Your First Name"
              name="creatorFirstName"
              className="inputtext"
              required
              onChange={handleChange}
            />
          </div>

          <div className="lastname">
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="creatorLastName"
              className="inputtext"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="addMovieItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="Email"
            className="inputtext"
            required
            onChange={handleChange}
          />
        </div>
        <div className="uploadItems">
          <div className="firstname">
            <label>Edcation Thumbnail</label>
            <input
              type="file"
              id="img"
              name="img"
              required
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>

          <div className="lastname">
            <label>Edcation Video</label>
            <input
              type="file"
              name="trailer"
              required
              onChange={(e) => setTrailer(e.target.files[0])}
            />
          </div>
        </div>
        <div className="addMovieItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Your Video Title"
            name="title"
            className="inputtext"
            required
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Description</label>
          <textarea
            type="text"
            placeholder="Enter Your Video Description"
            name="desc"
            required
            onChange={handleChange}
          />
        </div>

        {uploaded === 2 ? (
          <button className="addMovieButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="addMovieButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
