export function Card({name, children}) {  
    return(
        <div className="card">
            <h3> {name} </h3>
            <div> {children} </div>
        </div>
        
    );
}