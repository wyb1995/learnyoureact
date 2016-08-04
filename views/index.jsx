import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList data = {this.props.data} />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
        return (
            <div className = "todoList">
                <table style={{border: "2px solid black"}}>
                    <tbody>
                    {todo}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    // Omitted
}
Todo.propTypes = {
    // Omitted
};

class TodoForm extends React.Component {
    // Omitted
}

let style = {
    // Omitted
};
