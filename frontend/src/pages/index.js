import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Trial from '@/components/Trial'
import { useState } from 'react'
import HomeComponent from '@/components/HomeComponent'
import {Container  } from "react-bootstrap";



const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [wants,useWants] = useState(false)

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <HomeComponent/>
        
      ) : (
        <>



        <Trial session={session}/>
       
        </>
        
      )}
    </div>
  )
}

export default Home
