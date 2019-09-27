import React, {Component} from 'react'
import axios from 'axios';
import 'datatables.net-dt/css/jquery.dataTables.css'
import 'datatables.net-bs/css/dataTables.bootstrap.css'

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class Table extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        //console.log(this.el);

        axios.get('/report.html').then(res => {
            const data = res.data;
            console.log(data)
            this.setState({data});
        });

        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.state.data
        })
    }

    componentWillUnmount() {
        this.$el.DataTable().destroy(true);
    }

    render() {
        return (
            <div>
                <table className="display"  ref = {el => this.el = el }>

                </table>
            </div>
        );
    }
}