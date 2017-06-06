# filter.pipe
This Angular pipeline allows the user to filtering an  **`Array<Object>`**.

## Usage it in your code
    <ul>
      <li *ngFor="let user of users | filter: query">{{ user.name }}</li>
    </ul>