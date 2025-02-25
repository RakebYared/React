import coffee from './assets/Screenshot 2024-07-13 111537.png';
function Card(){
    return(
        <div className="card">
            <img id='snapchat' src={coffee} alt="my snapchat avatar" />
            <h3>Rakeb Yared</h3>
            <p> I love this pattern and I love coffee.</p>
        </div>
        
    );
}

export default Card