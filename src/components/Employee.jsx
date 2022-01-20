import MockData from '../MOCK_DATA.json';
import Header from "./Header";

function Employee(){
    const data = MockData;
    return(
        <div>
        <Header />
        <div class="col-xs-1 text-center"><br/>
            <h1>Employee Data</h1>
        </div>
            <table class="container table table-striped">
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>~
                </thead>
                <tbody>
                    {data.map((d)=>(
                        <tr key={d.id}>
                            <td>{d.first_name}</td>
                            <td>{d.last_name}</td>
                            <td>{d.email}</td>
                            <td>{d.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Employee;