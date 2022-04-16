import {Component} from 'react'
import '../static/sb-admin-2.min.css';
import '../static/vendor/fontawesome-free/css/all.min.css';
import '../static/styles.css';
import configs from '../config';
import {Pie} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            admin_data : []
        }
    }

    componentDidMount = async() => {
        const response = await fetch(configs.api_url + "/profile_data/", {
            method: "GET",
            headers: {"Content-Type":"Application/json"}
        })

        var admin_data = await response.json()
        this.setState({admin_data : admin_data})
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6 ; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    get_chart_data() {
        var chart_data_department = {
            labels : [],
            datasets : [{
                label: '',
                backgroundColor : [],
                data: []
            }]
        }

        var chart_data_designation = {
            labels : [],
            datasets : [{
                label: '',
                backgroundColor : [],
                data: []
            }]
        }

        var department_count = {}
        var designation_count = {}
        for(var data in this.state.admin_data) {
            if(this.state.admin_data[data].department in department_count)
                department_count[this.state.admin_data[data].department]++
            else
                department_count[this.state.admin_data[data].department] = 1

            if(this.state.admin_data[data].department in designation_count)
                designation_count[this.state.admin_data[data].designation]++
            else
                designation_count[this.state.admin_data[data].designation] = 1
        }

        for(var department in department_count) {
            chart_data_department.labels.push(department);
            chart_data_department.datasets[0].data.push(department_count[department])
            chart_data_department.datasets[0].backgroundColor.push(this.getRandomColor())
        }

        for(var designation in designation_count) {
            chart_data_designation.labels.push(designation);
            chart_data_designation.datasets[0].data.push(designation_count[designation])
            chart_data_designation.datasets[0].backgroundColor.push(this.getRandomColor())
        }

        return [chart_data_department, chart_data_designation]
    }


    render() {
        return (
            <div  className="chart-area">
                <div className="text-center">
                    <h2>DEPARTMENT WISE COUNT</h2>
                    <Pie className='pie-chart' data={this.get_chart_data()[0]} />
                </div>
                <div className="text-center" >
                    <h2>DESIGNATION WISE COUNT</h2>
                    <Pie className='pie-chart' data={this.get_chart_data()[1]} />
                </div>
            </div>
        )
    }
}

export default Dashboard