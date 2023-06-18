import { useParams } from "react-router-dom";

const EditorForm = () => {
    let { key } = useParams();
    return (
        <form>
            <div>
                <h2>Edit Item {key}</h2>
                {/* 其他組件內容 */}
            </div>
        </form>
    );


}


export default EditorForm;