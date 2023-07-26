import BasicMenu from "../components/menu";
const AboutMe = ({handlePageChange}) => {

    const handlePage = (page) => {
        handlePageChange(page);
      }
    return(
        <div>
                    <div>
         <BasicMenu handlePage={handlePage}/>
        </div>
            AboutMe
        </div>
    );
}

export default AboutMe;