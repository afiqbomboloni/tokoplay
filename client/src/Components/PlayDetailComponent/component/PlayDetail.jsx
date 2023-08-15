import ProductList from "../blocks/ProductList";
import Comment from "../blocks/Comment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageNotFound from "../../../Page/PageNotFound";
import { Link } from "react-router-dom";

import axios from "axios";
const PlayDetail = () => {

  const {videoId} = useParams()
  const baseurl = process.env.REACT_APP_API_BASE_URI
  const [message, setMessage] = useState("")
  const [products, setProducts] = useState([])
  const [comments, setComments] = useState([])
  const [errorMessage, setErrorMessage] = useState("");

  const getProducts = () => {
    axios.get(baseurl+`/channel?videoId=${videoId}`)
      .then((response) => {
        setProducts(response.data.products)
      })
      .catch(error => {
        console.error(`error: ${error}`);
        setErrorMessage("An error occurred while fetching data");
      });
  }

  const getComments = () => {
    axios.get(baseurl+`/channels/comments?videoId=${videoId}`)
      .then((response) => {
        setComments(response.data.comments)
        if(response.status === 404)
        {
          setMessage(response.data.message)
        }

      })
      .catch(error => {
        console.error(`error: ${error}`);
        setErrorMessage("An error occurred while fetching data");
      });
  }

  useEffect(() => {
    getProducts()
    getComments()
  }, [comments])
  return (
    <div>
      {errorMessage ? (
        
        <PageNotFound />
        
      ): (
        <>
        <ProductList products={products}  />
            <div className="md:p-4 sm:ml-64 sm:mr-72 md:mt-40">
              <Link to={'/'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"
              style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
              </Link>
            
            <div class="p-4 dark">
              <div className="relative h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Embedded Video`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        
      <Comment comments={comments} videoId={videoId} baseUrl={baseurl} message={message} />
        </>
      
      )}
      
    </div>
  );
};

export default PlayDetail;
