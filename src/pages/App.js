import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/input";
import Button from "../components/button";
import ItemRepo from "../components/itemRepo";
import { Container } from "./styles";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo('');
        return;
      }
    }
    alert("Nada encontrado ou item já existe");
  };


  //Uma const newListRepos que recebe todos os ids diferentes do parämetro e depois manda os valores para o setRepos.

  const handleRemoveRepo = (id) => {
    const newListRepos = repos.filter((repo) => repo.id !== id);
    setRepos(newListRepos);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
