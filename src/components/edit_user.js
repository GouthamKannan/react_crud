
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
            email : ""
        }
    }

    componentDidMount = async() => {
        const windowUrl = window.location
        var id = windowUrl.toString().split('/').pop().replace("?", "").replace("#", "")

        const response = await fetch(configs.api_url + "/profile_data/" + id, {
            method: "GET",
            headers: {"Content-Type":"Application/json"}
        })

        var admin_data = await response.json()

        this.setState({
            id : admin_data.id,
            user_id : admin_data.user_id,
            name : admin_data.name,
            email : admin_data.email
        })
    }

    // Handle changes in input fields and store them in state
    handleChange = ({ target: { name, value } }) => {
        this.setState({ ...this.state, [name]: value });
    };

    onEdit = async(e) => {
        e.preventDefault()

        await fetch(configs.api_url + "/profile_data/" + this.state.id, {
            method: "PUT",
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify({
                user_id : this.state.user_id,
                name : this.state.name,
                email : this.state.email
            })
        })

        window.location = "/users"
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
                                                <h1 class="h4 text-gray-900 mb-4">Edit User Details</h1>
                                            </div>
                                            <form class="user" onSubmit={this.onEdit}>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">User ID</label>
                                                    <input type="text" class="mb-3 form-control form-control-user"
                                                        name="user_id" value={this.state.user_id} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter ID" />
                                                </div>
                                                <div class="form-group">
                                                <label className="m-0 mx-3 my-2 font-weight-bold text-primary">User Name</label>
                                                    <input type="text" class="mb-3 form-control form-control-user"
                                                        name="name" value={this.state.name} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter user name" />
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">User Email</label>
                                                    <input type="email" class="mb-3 form-control form-control-user"
                                                        name="email" value={this.state.email} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter email" />
                                                </div>
                                                <button class="btn btn-primary btn-user btn-block">
                                                    Edit user
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
