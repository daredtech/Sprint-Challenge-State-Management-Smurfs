1. What problem does the context API help solve?
It allows all elements to have access to the data without passing it from parent to a child.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions serve as transporters of information from the application to the store.
Reducers specify how the state changes based on the actions that were sent to the store. 
The store is storage for application state.
The store is known as a 'single source of truth' because each component can access it and retrieve the state regardless of the hierarchy.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
With complex applications, it is better to use Application state. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It is a middleware that allows action creators to return functions instead of the objects.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
I liked Redux. It makes the most sense to me. 
