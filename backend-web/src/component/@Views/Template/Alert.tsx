import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Wow so easy!");

const  Alert = () => {
    return (
        <div>
            Alert : 
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        </div>
    );
}

export default Alert;