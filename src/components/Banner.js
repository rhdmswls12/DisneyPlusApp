import instance from "../api/axios";
import axios from "../api/axios";
import request from "../api/request";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영 중인 영화 정보를 가져오기
    const response = await axios.get(request.fetchNowPlaying);

    // 여러 영화 중 영화 하나의 id 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      append_to_response: "videos",
    });
    setMovie(movieDetail);
    console.log(movieDetail);
  };
  return <div>Banner</div>;
};

export default Banner;
