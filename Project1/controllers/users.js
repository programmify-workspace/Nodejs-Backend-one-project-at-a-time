import { v4 as uuidv4 } from 'uuid';
uuidv4();

let users = [];

// Create a user

export const createUser = (req, res) => {
    const user = req.body;


    users.push({...user, id: uuidv4()});
    
    res.send(`User with the name ${user.firstName} added to the database`);
}

// all routes in here are starting with "/users"

export const getUsers = (req, res) => {

    res.send(users);
}

// Find user details

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id); 

    res.send(foundUser);
}

// Delete a user

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`Users with the id ${id} deleted from the database`);
}


// Update a user

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName;

    if(lastName) user.lastName = lastName;

    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);

}