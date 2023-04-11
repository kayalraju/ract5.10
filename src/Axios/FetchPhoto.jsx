import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Loading from './Loading'


const FetchPhoto = () => {
    const[photo,setPhoto]=useState([])
    const[loading,setLoading]=useState(true)

    const BaseUrl='https://jsonplaceholder.typicode.com'

    const getApi = async () => {

        try{
            const reaponse = await axios.get(`${BaseUrl}/photos`);
        //console.log(data);
        setPhoto(reaponse.data)
        setLoading(false)
        }catch(error){
            console.log("error",error);
        }
        
    }
    useEffect(()=>{
        getApi()
    },[])
    console.log(photo);

    if(loading){  
      return  <Loading/>
    }
  return (
    <>
      <h1>FEtch photo</h1>
      <div className="container">
                <div className="row">
                    {
                        photo.map((p, index) => {
                            return (
                                <>
                                    <div className="col-md-4">
                                        <div class="card" style={{ width: "18rem" }}>
                                            <div class="card-body">
                                                <h5 class="card-title">Title: {p.title}</h5>
                                                <img src={p.thumbnailUrl} height="50px" width="80px"/>
                                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                               
                                                <a href="#" class="card-link">Another link</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
    </>
  )
}

export default FetchPhoto
