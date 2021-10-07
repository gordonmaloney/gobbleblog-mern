export const socketUsers = [];

export const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = socketUsers.find((user) => user.room === room && user.name === name);


    if(!name || !room) return { error: 'Username and room are required.' };
    //if (existingUser) { return {error: 'Username is taken'} };

    const user = {id, name, room};

    socketUsers.push(user);

    return { user }
}

export const removeUser = (id) => {
    const index = socketUsers.findIndex(user => user.id === id);

    if (index !== -1) {
        return socketUsers.splice(index,1)[0]
    }
}

export const getUser = (id) => socketUsers.find((user) => user.id === id)

export const getUsersInRoom = (room) => socketUsers.filter((user) => user.room  === room)