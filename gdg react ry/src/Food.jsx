/*
In the return statement there is onlt html code 
and to incluse js we put it insider {}
but outside of the return stm we dont need to use {}
*/
function Food(){
    const food1 = "pie";
    const food2 = "banana cake";
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food
