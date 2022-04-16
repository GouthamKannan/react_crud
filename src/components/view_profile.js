
import '../static/sb-admin-2.min.css';
import '../static/vendor/fontawesome-free/css/all.min.css';
import '../static/styles.css';
import {Component} from 'react';
import configs from '../config';

class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : "",
            user_id: "",
            name : "",
            email : "",
            designation : "",
            department : "",
            experience: "",
            salary: "",
            mobile_number: ""
        }
    }

    componentDidMount = async() => {
        const windowUrl = window.location
        var id = windowUrl.toString().split('/').pop().replace("?", "").replace("#", "")

        const response = await fetch(configs.api_url + "/profile_data/" + id, {
            method: "GET",
            headers: {"Content-Type":"Application/json"}
        })

        var profile_data = await response.json()
        console.log(profile_data)

        this.setState({
            id : profile_data.id,
            user_id : profile_data.user_id,
            name : profile_data.name,
            email : profile_data.email,
            designation : profile_data.designation,
            department : profile_data.department,
            experience : profile_data.experience,
            salary : profile_data.salary,
            mobile_number : profile_data.mobile_number
        })
    }

    // Handle changes in input fields and store them in state
    handleChange = ({ target: { name, value } }) => {
        this.setState({ ...this.state, [name]: value });
    };

    onEdit = async(e) => {
        e.preventDefault()
        window.location = "/edit-profile/" + this.state.id
    }

    render() {
        return (
            <div class="container">

                {/* // <!-- Outer Row --> */}
                <div class="row justify-content-center">

                    <div class="col-xl-10 col-lg-12 col-md-9">

                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                {/* // <!-- Nested Row within Card Body --> */}
                                <div class="row">
                                    {/* <div class="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                                    <div class="col-lg-12">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">User Profile</h1>
                                            </div>
                                            <form class="user" onSubmit={this.onEdit}>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">User ID</label>
                                                    <label class="form-control">{this.state.user_id}</label>
                                                </div>
                                                <div class="form-group">
                                                <label className="m-0 mx-3 my-2 font-weight-bold text-primary">User Name</label>
                                                    <label class="form-control">{this.state.name}</label>
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">User Email</label>
                                                    <label class="form-control">{this.state.email}</label>
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Designation</label>
                                                    <label class="form-control">{this.state.designation}</label>
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Department</label>
                                                    <label class="form-control">{this.state.department}</label>
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Experience</label>
                                                    <label class="form-control">{this.state.experience}</label>
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Salary</label>
                                                    <label class="form-control">{this.state.salary}</label>
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Mobile Number</label>
                                                    <label class="form-control">{this.state.mobile_number}</label>
                                                </div>
                                                <button class="btn btn-primary btn-user btn-block">
                                                    Edit profile
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditUser;
