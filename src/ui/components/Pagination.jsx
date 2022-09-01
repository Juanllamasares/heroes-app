export const Pagination = ({page, increment, decrement, lastPage}) => {
    const prevPage = () => {
        if(page>1){
            decrement()
        }
    }

    const nextPage = () => {
        if(page<lastPage){
            increment()
        }
    }

    return (
        <>
            <div className="container d-flex m4 justify-content-center">
                <button onClick={prevPage}> Prev </button>
                
                <div className="page m-2">Page <span className='page_color'>{page} of {lastPage}</span></div>
                <button onClick={nextPage}> Next </button>
            </div>
        
        </>
    )
}