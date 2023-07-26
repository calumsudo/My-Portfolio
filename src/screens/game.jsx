import BasicMenu from "../components/menu";
const Game = ({handlePageChange}) => {

    const handlePage = (page) => {
        handlePageChange(page);
      }
    return(
        <div>
                    <div>
         <BasicMenu handlePage={handlePage} />
        </div>
        Game
        </div>
    );
}

export default Game;