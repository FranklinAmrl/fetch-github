import axios from 'axios';
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import * as C from './styles';

type Branches = {
  name: string;
  commit: string;
  default_branch: string;
  
}

const api = axios.create({
    baseURL: 'https://api.github.com'
  })

const branches_url = '/repos/franklinamrl/ocorrencia-gov/branches'

export function Branches() {
    const { data : branches, error } = useQuery<Branches[]>('branch', async () => {
      const response = await api.get(`${branches_url}`)
  
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
              <C.Text>Branches result</C.Text>
            <C.Card className='card-body'>
              <C.Table className='table table-hover table-striped'>
                  <thead>
                      <tr>
                          <th>Branch</th>
                      </tr>
                  </thead>
                  {branches?.map(branch => {
                    return (
                      <tbody key={branch.name}>
                      <tr>
                          <td><Link to={`commit/${branch.name}`}>{branch.name}</Link></td>
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

// https://api.github.com/repos/FranklinAmrl/ocorrencia-gov/branches