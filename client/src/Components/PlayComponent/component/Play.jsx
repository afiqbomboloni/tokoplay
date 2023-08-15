import { useEffect, useState } from "react";
import Navbar from "../blocks/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSearch } from "../../../Contexts/SearchContext";


const Play = () => {
  const [videos, setVideos] = useState([]);
  const url = process.env.REACT_APP_API_BASE_URI
  const { searchKeyword } = useSearch();

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  console.log(url)

  const getThumbnails = () => {
    axios.get(url+'/channels')
      .then((response) => {
        console.log(response.data.videos)
        setVideos(response.data.videos)

        
      })
      .catch(error => console.error(`error: ${error}`));
  }


  useEffect(() => {
    getThumbnails();
    
  }, []);
  // console.log(videos[0].urlImageThumbnail)

  return (
    <div>
      <Navbar />
      <div className="h-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-6 pr-6">
          {filteredVideos.map((video, index) => (
            <div className="relative" key={index}>
              <Link to={`/play-detail/${video.videoId}`}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={video.urlImageThumbnail}
                alt={`Thumbnail ${index + 1}`}
              />
              <span className="font-semibold leading-none md:text-xl text-[10px]"
              style={{
                display: '-webkit-box',
                '-webkit-line-clamp': 2,
                '-webkit-box-orient': 'vertical',
                overflow: 'hidden',
                lineHeight: '1.2',
              }}
              >{video.title}</span>
              </Link>
              <span className="absolute top-3 left-3 md:text-xs text-[10px] font-medium mr-2 md:px-2.5 md:py-0.5 px-1 py-0.5 rounded bg-red-600 text-white">
                Live
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Play;
