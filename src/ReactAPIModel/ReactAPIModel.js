import React, { Component } from 'react'
import { Input, Card, Button, Icon, message, Spin } from 'antd'
import axios from 'axios'

class ReactAPIModel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newtodo: '',
            Editing: false,
            EditIndex: null,
            todos: [],
            LOADING: true
        }
        this.APIURL = "https://5e484130d9636d0014a1e14d.mockapi.io"
        // this.deleteTodo=this.deleteTodo.bind(this)
    }
    async componentDidMount() {
        const response = await axios.get(`${this.APIURL}/todoscrud`)
        console.log(response)

        setTimeout(() => {
            this.setState({ todos: response.data, LOADING: false });
        }, 3000);

    }

    handleChage = (event) => {
        this.setState({ newtodo: event.target.value });
    }



    AddTodo = async (event) => {

        const response = await axios.post(`${this.APIURL}/todoscrud`, {
            name: this.state.newtodo
        })

        const Oldtodos = this.state.todos;
        Oldtodos.push(response.data)
        this.setState({ todos: Oldtodos });
        message.success('AddTodo successfully')
    }
    deleteTodo = async (index) => {
        const todos = this.state.todos
        const todo = todos[index];
        await axios.delete(`${this.APIURL}/todoscrud/${todo.id}`)

        delete todos[index]
        this.setState({ todos });
        message.success('deleteTodo successfully')

    }

    EditTodo = (index) => {
        const Updatetodos = this.state.todos[index]
        this.setState({
            Editing: true,
            newtodo: Updatetodos.name,
            EditIndex: index
        });
    }

    UpdateTodo = async () => {

        const todo = this.state.todos[this.state.EditIndex]
        const res = await axios.put(`${this.APIURL}/todoscrud/${todo.id}`
            , {
                name: this.state.newtodo
            });

        console.log(res)
        const settodos = this.state.todos
        settodos[this.state.EditIndex] = res.data

        this.setState({ todos: settodos, EditIndex: null, Editing: false });
        message.success('UpdateTodo succ essfully')

    }

    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 100 }} spin />
        return (
            <div style={{ position: 'absolute', top: "30%", left: '35%' }}>
                <div style={{ display: 'flex' }}>
                    <Input placeholder="ADD NAME" onChange={this.handleChage} value={this.state.newtodo} style={{ borderRight: 'none' }} />
                    <Button style={{ backgroundColor: 'skyblue', borderRadius: 'none' }}

                        // disabled={this.state.newtodo.length < 5}
                        onClick={this.state.Editing ? this.UpdateTodo : this.AddTodo}>
                        {this.state.Editing ? <span>Update Todo</span> : <span>ADD NAME</span>}


                    </Button>
                </div>


                {
                    this.state.LOADING &&
                    <Spin indicator={antIcon} style={{ position: 'relative', top: "10%", left: '35%', marginTop: 100 }} />
                }
                {(!this.state.Editing || this.state.LOADING) &&

                    <div>
                        {this.state.todos.map((item, i) =>
                            <Card key={i} style={{ width: '25vw', margin: 20, backgroundColor: 'skyblue' }}>
                                <div style={{ backgroundColor: 'skyblue', display: 'flex', justifyContent: 'space-around' }}>
                                    <div><h2>{item.name}</h2></div>
                                    <div onClick={() => this.deleteTodo(i)}><Icon type="delete" /></div>
                                    <div onClick={() => this.EditTodo(i)}><Icon type="edit" /></div>
                                </div>
                            </Card>

                        )
                        }
                    </div>
                }
            </div>
        )
    }
}

export default ReactAPIModel
