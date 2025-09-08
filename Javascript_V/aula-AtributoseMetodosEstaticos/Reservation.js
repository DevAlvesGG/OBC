class Reservation {
    constructor (guest, room, days) {
        this.guest = guest;
        this.room = room;
        this.days = days;
        this.total = days * Reservation.baseFee;
    }

    static baseFee = 150;

    static showBaseFee (instance) {
        console.table({instance})
    }
}

const reservation = new Reservation('John Doe', 'Room 101', 5);

console.log(Reservation.showBaseFee(reservation))

