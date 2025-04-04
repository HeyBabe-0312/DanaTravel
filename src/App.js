import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Interfaces/Main";
import Locations from "./Interfaces/Locations";
import Location from "./Interfaces/Location/Location";
import NotFound from "./Interfaces/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { data, topicData, reviewData } from "./constants/data";
import "./i18n";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  const [topic, setTopic] = useState(null);
  const [review, setReview] = useState(null);
  const [allDataLct, setAllDataLct] = useState(null);

  useEffect(() => {
    setAllDataLct(data);
    setTopic(topicData);
    setReview(reviewData);
  }, []);
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2001);
  }
  // useEffect(()=>{
  //   axios.get('/tag/list').then(res => {
  //     setTopic(res.data);
  //   })
  //   axios.get('/location/list').then(res => {
  //     setAllDataLct(res.data);
  //   })
  //   axios.get('/review/list').then(res => {
  //     setReview(res.data);
  //   })
  //   axios.get('/user/list').then(res => {
  //     setUser(res.data);
  //   })
  //   if(localStorage.getItem('iduser')!==null){
  //     axios.get(`/user/detail/${localStorage.getItem('iduser')}`).then(res => {
  //       setAuthor(res.data);
  //     })
  //   }else{
  //     setAuthor("")
  //   }
  // },[])
  // if(topic&&allDataLct&&review&&user){
  return (
    !loading && (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<MainPage allDataLct={allDataLct} topic={topic} />}
            />
            <Route
              path="/locations"
              element={
                <Locations
                  dataAllLct={allDataLct}
                  dataTopic={topic}
                  dataReview={review}
                />
              }
            />
            <Route
              path="/location/:id"
              element={
                <Location
                  dataReview={review}
                  dataAllLct={allDataLct}
                  dataTopic={topic}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </>
    )
  );
};
//}

export default App;
