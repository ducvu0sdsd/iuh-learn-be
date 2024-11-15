

const sortTimeForRooms = (rooms) => {
    rooms.sort((a, b) => b.updatedAt - a.updatedAt);
}

module.exports = sortTimeForRooms