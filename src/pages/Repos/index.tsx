import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import * as C from './styles';



type Repository = {
  full_name: string;
  git_commits_url: string;
  name: string;
  id: number;

}

const api = axios.create({
  baseURL: 'https://api.github.com'
})

const repos_users_url = '/users/'

const branches_url = '/repos/franklinamrl/ocorrencia-gov/branches'

const commits_url = '/repos/FranklinAmrl/ocorrencia-gov/commits'

export function Repos() {
  const [user, setUser] = useState<string>("");
  console.log(user)
  const { data: repositories, error } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get(`https://api.github.com/users/${user}/repos`)
    return response.data;
  }, {
    staleTime: 1000 * 60, // armazena a requisição no cache por 60 segundos
  })





  return (
    <>
      <C.Container className='container'>
        <C.Nav className='navbar'>
          <C.NavText>Fetc.h Github.</C.NavText>
          <C.Form className='form-inline'>
            <C.InputUser className='form-control mr-sm-2' placeholder="Search for username" aria-label="Search" value={user} onChange={(e) => setUser(e.target.value)} />
            <C.BtnInputUser className='btn my-2 my-sm-0' type="submit">Search</C.BtnInputUser>
          </C.Form>
        </C.Nav>
        <C.Container className='container'>
          <C.Text>Repos result</C.Text>
          <C.Card className='card-body'>
            <C.Table className='table table-hover table-striped'>
              <thead>
                <tr>
                  <th>Repositories</th>
                </tr>
              </thead>
              {repositories?.map(repo => {
                return (
                  <tbody key={repo.id}>
                    <tr>
                      <td><Link to={`branch/${repo.id}`}>{repo.full_name}</Link></td>
                    </tr>
                  </tbody>
                )
              })}
            </C.Table>
          </C.Card>
        </C.Container>
      </C.Container>
    </>

  )
}
