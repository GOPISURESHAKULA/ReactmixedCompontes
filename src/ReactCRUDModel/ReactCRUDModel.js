import React, { Component } from 'react'
import { Input, Card, Button,Icon,message } from 'antd'

class ReactCRUDModel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newtodo: '',
            Editing:false,
            EditIndex:null,  
            todos: [
                {
                    id: 1,
                    name: 'GOPISURESH'
                },
                {
                    id: 2,
                    name: 'RAMKUMAR'
                },
                {
                    id: 3,
                    name: 'SAIKUMAR'
                },

            ]
        }
    }

    handleChage = (event) => {
        this.setState({ newtodo: event.target.value });
    }

    Setupid=()=>{
        const lasttodo=this.state.todos[this.state.todos.length -1];
        if(lasttodo){
            return lasttodo.id+1
        }
        return 1;
    }

    AddTodo =(event)=>{
        const newtodo={
            name:this.state.newtodo,
            id:this.Setupid()
        }
        const Oldtodos=this.state.todos;
         Oldtodos.push(newtodo)
         this.setState({ todos:Oldtodos  });
         message.success('AddTodo successfully')
    }
    deleteTodo=(index)=>{
        const deletetodo=this.state.todos
        delete deletetodo[index]
       this.setState({ todos:deletetodo  });
       message.success('deleteTodo successfully')

    }

      EditTodo=(index)=>{
const Updatetodos=this.state.todos[index]
        this.setState({
             Editing:true,
            newtodo:Updatetodos.name,
            EditIndex:index
          });
    }

    UpdateTodo =()=>{

        const todo=this.state.todos[this.state.EditIndex]
        todo.name=this.state.newtodo;
         const settodos=this.state.todos
         settodos[this.state.EditIndex]=todo

        this.setState({ todos:settodos,EditIndex:null,Editing:false });
        message.success('UpdateTodo successfully')

    }

    render() {
        return (
            <div style={{ position: 'absolute', top: "30%", left: '35%' }}>
                <div style={{ display: 'flex' }}>
                    <Input placeholder="ADD NAME" onChange={this.handleChage} value={this.state.newtodo} style={{ borderRight: 'none' }} />
                    <Button style={{ backgroundColor: 'skyblue', borderRadius: 'none' }}
                    
                    disabled={this.state.newtodo.length < 3}
                    onClick={this.state.Editing ? this.UpdateTodo :  this.AddTodo}>
                         {this.state.Editing ? <span>Update Todo</span>: <span>ADD NAME</span>}
                         
                         
                         </Button>
                </div>
                { !this.state.Editing &&

                <div>
                {this.state.todos.map((item, i) =>
                    <Card key={i}   style={{ width: '25vw', margin: 20, backgroundColor: 'skyblue' }}>
                        <div style={{ backgroundColor: 'skyblue', display:'flex',justifyContent:'space-around' }}>
                        <div><h2>{item.name}</h2></div>
                        <div onClick={()=>this.deleteTodo(i)}><Icon type="delete" /></div>
                        <div onClick={()=>this.EditTodo(i)}><Icon type="edit" /></div>
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

export default ReactCRUDModel
