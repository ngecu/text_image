import { useState, useEffect } from 'react'
import { Configuration,OpenAIApi
 } from 'openai'
 
import axios from 'axios';
import { Accordion } from 'react-bootstrap-accordion'
import Account from '../components/Account'

import { supabase } from '../supabaseClient';
import Image from 'next/image';

export default function Trial({ session }) {
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
      apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
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
      fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
    
      axios.post('api/Image/download/', { url})
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
        setLoading(false)
        // setLoading(false);
        
      })

      
      
      
    };




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
        
        setTexts(data); //
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
          user_id:session.user.id,
          
        })
        .single()
        
      if (error) throw error;
    
    } catch (error) {
      alert(error.message);
    }
  }
  

            



          

  return (
<div className="app-main">

<div class="row clearfix">
    <div class="col-lg-12 xy" style={{width:"90%",margin:"0 10%"}}>
        <div class="card chat-app">
        
            <div class="chat">
         


        
            <div class="chat-header clearfix">
                    <div class="row">
                        <div class="col-6">
                            
                            <div class="chat-about">
                            <Accordion title={session.user.email} >
                            <Account session={session} />
                              </Accordion> 
                            
                            </div>
                        </div>
                        <div class="col-6 hidden-sm text-right">
                            <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                        </div>
                    </div>
                </div>

                <div class="chat-history">
              
        <ul class="m-b-0">

                    {texts.map((t) => (
                      <>
                      <li class="clearfix">
            <div class="message-data text-right">
               
               
            </div>
            <div class="message other-message float-right"> {t.name} <span> <small> <sub></sub></small> </span> </div>
        </li>

                      <li class="clearfix">
                            <div class="message-data">
                              
                            </div>
                            <div class="message my-message"><Image alt="message" width={230} height={150} style={{"borderRadius":"5%"}} src={t.link} /></div>                                    
                        </li> 

                      </>
            
        
          ))}
            
                    </ul>

                    {loading ? (
      <li class="clearfix">
      <div class="message-data text-right">
         
         
      </div>
      <div class="message other-message float-right"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      <span> <small> <sub></sub></small> </span> </div>
  </li>
      ) :(
        <>
        </>
      )}

                    
                </div>
                <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                        <div class="input-group-prepend">
                       
                        </div>
                        <input type="text" 
                        class="form-control" 
                        placeholder={placeholder}
                        onChange={(e) => setPrompt(e.target.value)}
                        />  
                        <button onClick={generateImage}>Send</button>                                  
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    
    </div>
  )
}
