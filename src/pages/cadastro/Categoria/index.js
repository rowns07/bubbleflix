
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CadastroCategoria() {
    return (
        <PageDefault >
            <div style={{ fontSize: 25 }}>
                <h1>Cadastro de Categoria</h1>

                <Link to="/cadastro/categoria">
                        Cadastrar Categoria
                </Link>

            </div>
        </PageDefault>
    );
}

export default CadastroCategoria;
