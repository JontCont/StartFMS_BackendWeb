import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Wow so easy!");

const BDP000A = () => {
    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        </div>
    );
}

export default BDP000A;