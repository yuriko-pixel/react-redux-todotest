import reducer, {addTodo, deleteTodo, completeTodo} from '../features/todoSlice'

describe("Reducer test", ()=> {
    it("addTodo", ()=> {
        let initialState = {
        count: 0,
        todo: []
        }

    const action = {type: addTodo.type, payload: 'walk the dog'}
    const state = reducer(initialState, action);
    expect(state.todo).toEqual([{id: 0, text: 'walk the dog', completed: false}])
    })

    it("deleteTodo", ()=> {
        let initialState = {
            count: 0,
            todo: [{id: 0, text: 'walk the dog', completed: false}]
            }
    
        const action = {type: deleteTodo.type, payload: 0}
        const state = reducer(initialState, action);
        expect(state.todo).toEqual([])
    })

    it("completeTodo", ()=> {
        let initialState = {
            count: 0,
            todo: [{id: 0, text: 'walk the dog', completed: false}]
            }
    
        const action = {type: completeTodo.type, payload: 0}
        const state = reducer(initialState, action);
        expect(state.todo).toEqual([{id: 0, text: 'walk the dog', completed: true}])
    })
})