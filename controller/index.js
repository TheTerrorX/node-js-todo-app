import Todo from '../models/todo.js'

export async function getIndex(req, res, next) {

    try {
        const todos = await Todo.find(); 
        res.render('index', { todos })
    } catch (error) {
        console.log(error);
    }
    
}

export function postIndex(req, res, next) {
    const data = req.body.data;
    const todo = new Todo({
        data: data
    })

    todo.save()
    .then(() => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err);
    });
}


export async function deleteTodo(req, res, next) {
    try {
        const todoID = req.params.id;
        await Todo.findByIdAndDelete(todoID);
        res.redirect('/') 
    } catch (error) {
        console.log(error);
    }

}

export async function  getEditTodo(req, res, next) {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);
        res.render('edit', { todo });
    } catch (error) {
        console.log(error);
    }
}


export async function postEditTodo(req, res, next) {
    try {
        const todoId = req.params.id;
        const updatedTodo = req.body.data;
        await Todo.findByIdAndUpdate(todoId, { data: updatedTodo});
        res.redirect('/')
    } catch (error) {
        console.log(err);
    }
}