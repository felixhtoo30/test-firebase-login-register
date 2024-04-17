# ===== Test Firebase Login Register =====
This project is about testing the Firebase Login Register (a.k.a) TFLR

<br/>

## Technologies
### Frontend: <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" /> &nbsp; <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"> <br/>
### Backend: <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" /><br />
### Database: <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres">

<br/>

## === Instructions to Setup ===

## - Frontend -

- Go to `/frontend` folder
- Run the following npm command to install `node_modules`:
```bash
npm install
```
- Run the following docker command to execute the file `docker-compose.yml`:
```bash
docker compose up

# If you have changes in code contents, use the '--build' flag:
docker compose up --build
```
  
### Available Pages to view:
- `localhost:8003/login/`
- `localhost:8003/register/`
- `localhost:8003/home`

<br/>

## - Backend -

- Go to `/backend` folder
- Run the following npm command to install `node_modules`:
```bash
npm install
```
- Run the following docker command to execute the file `docker-compose.yml`:
```bash
  docker compose up

  # If you have changes in code contents, use the '--build' flag:
  docker compose up --build
```

### Available API Endpoints to check:
- `http://localhost:8002/user/save` [method: `POST`]
  - which will save the user record at database. Here is the Request `body` sample:
  ```JSON
  {
      "email": "abc@def.com",
      "firebase_uid": "4Eqtw1gTiKh47ULBREzvlVi5Vzj1"
  }
  ```
- `http://localhost:8001/user` [method: `GET`]
  - which will show the user record (recommends to test at **POSTMAN**).

<!-- (See the `UserController` class file [here](./backend/src/user/user.controller.ts) to know more.) -->