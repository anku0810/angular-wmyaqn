import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Seat grid (rows 1-8 and seats 1-7)
  totalSeats = [
    { row: 1, seat: 1, booked: false }, { row: 1, seat: 2, booked: false }, { row: 1, seat: 3, booked: false }, { row: 1, seat: 4, booked: false }, { row: 1, seat: 5, booked: false }, { row: 1, seat: 6, booked: false }, { row: 1, seat: 7, booked: false },
    { row: 2, seat: 1, booked: false }, { row: 2, seat: 2, booked: false }, { row: 2, seat: 3, booked: false }, { row: 2, seat: 4, booked: false }, { row: 2, seat: 5, booked: false }, { row: 2, seat: 6, booked: false }, { row: 2, seat: 7, booked: false },
    { row: 3, seat: 1, booked: false }, { row: 3, seat: 2, booked: false }, { row: 3, seat: 3, booked: false }, { row: 3, seat: 4, booked: false }, { row: 3, seat: 5, booked: false }, { row: 3, seat: 6, booked: false }, { row: 3, seat: 7, booked: false },
    { row: 4, seat: 1, booked: false }, { row: 4, seat: 2, booked: false }, { row: 4, seat: 3, booked: false }, { row: 4, seat: 4, booked: false }, { row: 4, seat: 5, booked: false }, { row: 4, seat: 6, booked: false }, { row: 4, seat: 7, booked: false },
    { row: 5, seat: 1, booked: false }, { row: 5, seat: 2, booked: false }, { row: 5, seat: 3, booked: false }, { row: 5, seat: 4, booked: false }, { row: 5, seat: 5, booked: false }, { row: 5, seat: 6, booked: false }, { row: 5, seat: 7, booked: false },
    { row: 6, seat: 1, booked: false }, { row: 6, seat: 2, booked: false }, { row: 6, seat: 3, booked: false }, { row: 6, seat: 4, booked: false }, { row: 6, seat: 5, booked: false }, { row: 6, seat: 6, booked: false }, { row: 6, seat: 7, booked: false },
    { row: 7, seat: 1, booked: false }, { row: 7, seat: 2, booked: false }, { row: 7, seat: 3, booked: false }, { row: 7, seat: 4, booked: false }, { row: 7, seat: 5, booked: false }, { row: 7, seat: 6, booked: false }, { row: 7, seat: 7, booked: false },
    { row: 8, seat: 1, booked: false }, { row: 8, seat: 2, booked: false }, { row: 8, seat: 3, booked: false }, { row: 8, seat: 4, booked: false }, { row: 8, seat: 5, booked: false }, { row: 8, seat: 6, booked: false }, { row: 8, seat: 7, booked: false }
  ];

  selectedSeats: any[] = [];

  bookSeats(numSeats: number) {
    let availableSeats = this.totalSeats.filter(seat => !seat.booked);

    if (availableSeats.length < numSeats) {
      alert('Not enough available seats!');
      return;
    }

    this.selectedSeats = availableSeats.slice(0, numSeats);
    this.selectedSeats.forEach(seat => seat.booked = true);
  }

  cancelSeat(seat: any) {
    seat.booked = false;
    this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
  }

  toggleSeat(seat: any) {
    if (seat.booked) {
      this.cancelSeat(seat);
    } else {
      this.selectedSeats.push(seat);
      seat.booked = true;
    }
  }

  getBookedSeatsString() {
    return this.selectedSeats.map(seat => `${seat.row}-${seat.seat}`).join(', ');
  }
}
