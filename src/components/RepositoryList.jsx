import { useState } from 'react';
import { RepositoryItem } from './RepositoryItem';


//Api github with repos url
//https://api.github.com/users/AlanPoveda/repos

//scss
import '../styles/repositories.scss'

//Um objeto com várias informaçõesß

const repository = {
    name: "uunform",
    description: "Forms in React",
    link: "google.com"
}


export function RepositoryList(){
    //Listagem do repositórios
    const [ repositories, setRepositories ] = useState([])

    //Fazendo uma chamda teste
    useState(()=>{
        fetch('https://api.github.com/users/AlanPoveda/repos')
        .then( response => response.json())
        .then( data =>console.log(data))
    },[])


    return(
        <section className="respository-list">
            <h1>Lista de respositorios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>

        </section>
    );
}