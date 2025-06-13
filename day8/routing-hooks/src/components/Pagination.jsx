

function Pagination({totalPages, currPage, onPageChange}){

    const pages = Array.from({length: totalPages} , (_,i) => i+1) ;
    
    return(<>
    
    <button disabled={currPage == 1} onClick={() => onPageChange(parseInt(currPage) - 1)}>Previous</button>
        {pages.map(page => (
            <button key={page} onClick={() => onPageChange(page)} style={{margin: "5px"}}>
                {page}
            </button>
        ))}
    <button disabled={currPage == totalPages} onClick={() => onPageChange(parseInt(currPage) + 1)}>Next</button>
    </>)

}

export default Pagination ;

// pre 1 2 3 4 next

// currPage = 3 

// function onPageChange(page){
//     doing someting here 
// }