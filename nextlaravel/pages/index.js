import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Demo extends React.Component
{
    //initialize array variable
  constructor() {
    //super is used to access the variables
    super();
    this.state = {
       data: []
    }
    }
    componentDidMount() {
    //API request
    axios.get("http://localhost/api/sample-restful-apis").then(response => {

    //getting and setting api data into variable
    this.setState({ data : response.data });

    })
    }
  render()
  {
    return (
        <div>
            <div className="jumbotron text-center mb-0">
                <h1>How to use Next.js as frontend and laravel 8 as backend?</h1>
            </div>
            <nav class="navbar navbar-expand-sm bg-dark">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
            </nav>
            <div className="container mt-5 mb-5">

                    <h1>Demo Data</h1>
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Website</th>

                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((result) => {
                        return (
                        <tr>
                        <td>{result.name}</td>
                        <td>{result.domain}</td>

                        </tr>
                        )})}

                    </tbody>
                    </table>

            </div>
            <div className="jumbotron text-center mb-0">
                <h1>Footer</h1>
            </div>
        </div>
    )
  }
}
export default Demo;