import {Link} from 'react-router-dom';


function Home(){
    return(
        <div>
            <div>Welcome</div>
            <Link to='/about'>about us</Link>
            <br />
            <Link to= 'user-profile/:id'>user profile</Link>
       
        </div>

      
    );

}

export default Home