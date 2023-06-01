import "../../styles/css/components/SearchBar.css";
import { useSearchBarLogic } from "./_SearchBarLogic";

function SearchBar(props) {
    const {
        refs: { searchBarRef },
        classes: { searchBarInputClass },
        handlers: { handleSubmit },
    } = useSearchBarLogic(props);

    return (
        <div className={"SearchBar"}>
            <textarea
                ref={searchBarRef}
                className={searchBarInputClass}
                rows='1'
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
            ></textarea>

            {!props.autoSubmitDelay && (
                <button className='submitButton' onMouseDown={handleSubmit}>
                    search
                </button>
            )}
        </div>
    );
}

export default SearchBar;
