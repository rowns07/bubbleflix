
import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import ButtonFlix from '../../../components/ButtonFlix';


function CadastroVideo() {
    return (
        <PageDefault >
            <div style={{ fontSize: 25 }}>
                <h1>Cadastro de Video</h1>

                <Link to="/cadastro/categoria">
                    <ButtonFlix>
                        Cadastrar Categoria
                    </ButtonFlix>
                </Link>

            </div>
        </PageDefault>
    );
}

export default CadastroVideo;
