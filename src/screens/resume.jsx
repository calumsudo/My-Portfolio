import BasicMenu from "../components/menu";
const Resume = ({handlePageChange}) => {
    const handlePage = (page) => {
        handlePageChange(page);
      }
    return(
        <div>
                    <div>
         <BasicMenu handlePage={handlePage}/>
        </div>
            Resume
        </div>
    );
}

export default Resume;