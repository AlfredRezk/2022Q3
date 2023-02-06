export default function Card({children}){
    return(
        <div className="card card-body shadow d-flex flex-row justify-content-between align-items-center my-2">
            {children}
        </div>
    )
}


