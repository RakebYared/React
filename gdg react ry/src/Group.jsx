function Group(){
    const memebers = ["stu 1", "stu 2", "stu 3", "stu 4", "stu 5"];
    return(
        <ul className="group">
            {memebers.map((member, index) =>(
                <li key={index}>{member}</li>
                
            ))}
        </ul>
        
    );
}
export default Group