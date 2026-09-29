import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Root = () => {
    return (
        <div>
            <Header></Header>
           <main>
             <Outlet></Outlet>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default Root;