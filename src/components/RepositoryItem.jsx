export function RepositoryItem(props){
return(
    <li>
        <strong>{props.repository.name ?? "Undefined"}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.link}>Link to repository</a>
    </li>
);
}