import React from "react";
import { ItemContainer } from "./styled";

export const ItemRepo = ({ repo, handleRemoveRepo }) => {
const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <p>{repo.description}</p>
        <a href={repo.html_url} rel="noreferrer" className="verRepo" target="_blank">Ver repositório</a><br />
        <a href="#"  rel="noreferrer" className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
