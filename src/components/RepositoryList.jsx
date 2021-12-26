const respositoryName = "unform";
import { RepositoryItem } from './RepositoryItem'


//Um objeto com várias informações

const repository = {
    name: "uunform",
    description: "Forms in React",
    link: "google.com"
}


export function RepositoryList(){
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