import axios from 'axios';
import { useQuery } from 'react-query';
import * as C from './styles';

type Commit = {
    message: string;
}

type Commits = {
    html_url: string;
    commit: Commit;
    name: string;  
}

const api = axios.create({
    baseURL: 'https://api.github.com'
  })

const commits_url = '/repos/franklinamrl/ocorrencia-gov/commits'

export function Commits() {
    const { data : commits, error } = useQuery<Commits[]>('commit', async () => {
      const response = await api.get(`${commits_url}`)
  
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
          <C.InputUser className='form-control mr-sm-2' type="search" placeholder="Search for username" aria-label="Search"></C.InputUser>
          <C.BtnInputUser className='btn my-2 my-sm-0' type="submit">Search</C.BtnInputUser>
          </C.Form>
          </C.Nav>
        <C.Container className='container'>
          <C.Text>Commits result</C.Text>
          <C.Card className='card-body'>
              <C.Table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th>Commit</th>
                    </tr>
                </thead>
                {commits?.map(commit => {
                  return (  
                    <tbody key={commit.name}>
                        <tr>
                            <td>{commit.commit.message}</td>
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


// https://api.github.com/repos/FranklinAmrl/ocorrencia-gov/commits/1eb6e04187c7e6f47b4339720cfe0a302859e128