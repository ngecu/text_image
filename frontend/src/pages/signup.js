
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
export default function Signup() {
    const session = useSession()
    const supabase = useSupabaseClient()
    const [wants,useWants] = useState(false)
  
    return(

        <div className="dark">
        <Container>
       <Auth 
        providers={["google"]}
        supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
     </Container>
        </div>
        
    )

}