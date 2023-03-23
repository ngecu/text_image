import { useState, useEffect } from 'react'
import { Configuration,OpenAIApi
 } from 'openai'
 import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
 
import {app,database} from '../services/firebase';
import { collection,addDoc } from "firebase/firestore";
import { getStorage, ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import photo from './photo.png'
import { saveAs } from 'file-saver'
import { storage } from '../services/firebase';
import Messages from './Messages';
import axios from 'axios';

import path from 'path';



import { Card, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { supabase } from '../supabaseClient';
import { async } from '@firebase/util';

export default function Trial({ session }) {

  console.log(session.user.id);
  const [name, setName] = useState('');
  const [ text, setText ] = useState("");
  const [ link, setLink ] = useState("");
  const [ texts, setTexts] = useState([]);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  );


  useEffect(() => {
    getTexts();
  }, [])


 


    // Get image url from OPEN AI - frontend
    const generate_image_url = async() =>{

        // open ai setup 
    const configuration = new Configuration({
      apiKey: "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",
    });

  const openai = new OpenAIApi(configuration);

      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      });

      const d = res.data.data[0].url
      console.log("d id " ,d)
      return d
    }

    // Download Image - backend
    const download_image = (url)=>{
      console.log("sending signal to backend");
      axios.post('http://localhost:5000/api/Image/download/', { url})
      .then(function (response) {
        if(response){
          
          createText(response.data)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }



    const generateImage = async () => {
      setPlaceholder(`Search ${prompt}..`);
      setLoading(true);

      generate_image_url()
      .then(data=>{
        setLoading(true);
        download_image(data)
        // setLoading(false);
        
      })

      
      
      
    };


      // firebase configuration 
    //   const dbInstance = collection(database, session.user.email);
      
    //   const saveText = (promptText,userEmail,image_url) => {
    //     addDoc(dbInstance, {
    //         prompt: promptText,
    //         time: new Date().toISOString(),
    //         user_email:userEmail,
    //         image:image_url
    //     })
    // }


    // load data from supabase
  async function getTexts() {
    try {
      console.log("getting texts")
      const { data, error } = await supabase
        .from("texts")
        .select()
        .eq('user_id',session.user.id)
        .limit(10)
      if (error) throw error;
      if (data != null) {
        
        setTexts(data); // [product1,product2,product3]
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // add data to database 
  async function createText(link) {
    try {
      const { data, error } = await supabase
        .from("texts")
        .insert({
          name:prompt,
          link,
          user_id:session.user.id
        })
        .single()
        
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }
  

            



          

  return (
<div className="app-main">

      {loading ? (
        <>
          <h2>Generating..Please Wait..</h2>
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          <h2>Generate an Image using Open AI API</h2>

          <textarea
            className="app-input"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />

          <Row>
          {texts.map((t) => (
            <Row>
              <Col style={{disply:'flex', justifyContent:'left'}}>
              {t.name}
              </Col>
              <Col md={6} sm={12} xl={6}>
              
              </Col>
              <Card style={{disply:'flex', justifyContent:'right' }}>
              <Col>
              <img style={{width:"100%"}} src={t.link}/>       
             </Col>
             </Card>
              </Row>
          ))}
          </Row>





{/* <input type="file" onChange={handleChange} accept="/image/*" /> */}

          <button onClick={generateImage}>Generate an Image</button>
          {result.length > 0 ? (
            <img className="result-image" src={result} alt="result" />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  )
}
