import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Login';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;
