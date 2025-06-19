# 📅 getDateAPI

**getDateAPI** is a lightweight RESTful API built using **Node.js** and **Express** that returns the current date and time. This API is ideal for learning purposes, backend practice, or as a utility microservice in larger applications.

---

## 🚀 Features

- Returns current server date and time
- Fast and lightweight (no database, no frontend)

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

---

## 📦 Installation

```bash
git clone https://github.com/sagargkunte/getDateAPI.git
cd getDateAPI
npm install
```

---

## ▶️ Running the Server

```bash
npm start OR node index.js

```

The server will start on `http://localhost:3000` by default.

---

## 📚 API Endpoints

Here are the available endpoints for the `getDateAPI`:

---

### 📅 `GET /year`

Returns the **current year**.

#### ✅ Example Response:
```html
<h1>Current year</h1>
<h1>2025</h1>
```

---

### 📆 `GET /month`

Returns the **current month name**.

#### ✅ Example Response:
```html
<h1>Current Month</h1>
<h1>June</h1>
```

---

### 📅 `GET /date`

Returns the **current date (day of the month)**.

#### ✅ Example Response:
```html
<h1>Current Date</h1>
<h1>19</h1>
```

---

### 📅 `GET /day`

Returns the **current weekday**.

#### ✅ Example Response:
```html
<h1>Today is Thursday</h1>
```

---

### 🕒 `GET /today`

Returns the **full current date and time** (localized).

#### ✅ Example Response:
```html
<h1>6/19/2025, 12:34:56 PM</h1>
```

---

## ⚠️ Notes

- All responses are in HTML format.
- The date and time are generated based on the server's local time zone.


---

## 🔧 Configuration

You can set the port using an environment variable:

```bash
PORT=4000 npm start
```

---

## 🧪 Testing the API

Use tools like:

- [Postman](https://www.postman.com/)
- [curl](https://curl.se/)
- Your browser (navigate to `http://localhost:8000`)

---

