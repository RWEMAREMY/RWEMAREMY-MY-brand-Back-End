import { test, it, describe, expect, beforeAll, afterAll } from '@jest/globals';
import app from '../src/index'
import superApp, {Request, Response} from 'supertest'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import supertest from 'supertest';
import { ObjectId } from 'mongodb';

dotenv.config();
const DB_URL = process.env.MONGODB_URL|| '';

beforeAll(async() =>{
    await mongoose.connect(DB_URL);
},100000);

afterAll(async() =>{
    await mongoose.connection.close();
});

describe('routes', () =>{
    it('/api/ for 404', async()=>{
        const result  = await supertest(app).get('/api/');
        expect(result.status).toBe(404);
    })
    it('/api/ for 404', async()=>{
        const show  = await supertest(app).get('/api/blog');
        expect(show.status).toBe(404);
    })
    it('/api/ for 200', async()=>{
        const show  = await supertest(app).get('/api/query');
        expect(show.status).toBe(200);
    })
    it('/api/ for 404', async()=>{
        const show  = await supertest(app).get('/api/signup');
        expect(show.status).toBe(404);
    })
    it('/api/ for 404', async()=>{
        const show  = await supertest(app).get('/api/login');
        expect(show.status).toBe(404);
    })

    it('login authentication', async() =>{
        const show  = await supertest(app).post('/api/login');
            expect(show.status).toBe(400);
    })
    it('login authentication', async() =>{
        const show  = await supertest(app).post("/api/signup");
            expect(show.status).toBe(400);
    })
    it('add likes', async() =>{
        const show  = await supertest(app).post("/api/blogs/:id/like");
            expect(show.status).toBe(500);
    })
    it('querry', async() =>{
        const show  = await supertest(app).post("/api/query");
            expect(show.status).toBe(400);
    })
    it('querry', async() =>{
        const show  = await supertest(app).get("/api/query");
            expect(show.status).toBe(200);
    })
    it('querry', async() =>{
        const show  = await supertest(app).get("/api/query/:id");
            expect(show.status).toBe(500);
    })
    it('querry', async() =>{
        const show  = await supertest(app).patch("/api/query/:id");
            expect(show.status).toBe(404);
    })
    it('blogs', async() =>{
        const show  = await supertest(app).post("/api/blogs");
            expect(show.status).toBe(400);
    })
    it('blogs', async() =>{
        const show  = await supertest(app).get("/api/blogs");
            expect(show.status).toBe(200);
    })
    it('controller', async() =>{
        const show  = await supertest(app).get("/api/blogs/:id");
            expect(show.status).toBe(500);
    })
    it('controller', async() =>{
        const show  = await supertest(app).patch("/api/blogs/:id");
            expect(show.status).toBe(400);
    })
    it('comment', async() =>{
        const show  = await supertest(app).post("/api/blogs/:id/comments");
            expect(show.status).toBe(500);
    })
    it('comment', async() =>{
        const show  = await supertest(app).get("/api/blogs/:id/comments");
            expect(show.status).toBe(200);
    })
    it('comment', async() =>{
        const show  = await supertest(app).patch("/api/blogs/:id/comments/:id");
            expect(show.status).toBe(400);
    })
    it('comment', async() =>{
        const show  = await supertest(app).delete("/api/blogs/:id/comments/:id");
            expect(show.status).toBe(400);
    })
    it('like', async() =>{
        const show  = await supertest(app).delete("/api/blogs/likes");
            expect(show.status).toBe(500);
    })



});


describe('check out authentication',()=>{

    // it('new account',async()=>{
    //     const create  = await supertest(app).post("/api/signup")
    //     .send({userName:"rwema", email:"rwemaremy21@gmail.com",password:'Remyzo@21'})
    //     expect(create.status).toBe(200);
    // })
    const id = '65dc2e9f2bc9e70903b2487b';
describe("Logging in", () => {
  let token: { token: string } = { token: '' };
  it("should login in", async () => {
    const response = await supertest(app).post("/api/login")
      .send({ email: "rwemaremy21@gmail.com", password: 'Remyzo@21' });
    token.token = response.body.token;
    expect(response.status).toBe(200);
  },5000)
})
it('should not register with wrong password',async ()=>{
const res=await supertest(app).post('/api/users/register')
.send({
    userName:"james",
    email:"james24@gmail.com",
    password:"james@24!"
})
expect(res.status).toBe(404)
})
it('should be created',async ()=>{
    const id= "65dd9f7d6c9d4e6708a23b3b"
const res=await supertest(app).post('/api/blogs/65d48af2180f82e73b6aa5c1/comments')
.send({
    name:"james",
    email:"james24@gmail.com",
   content:"we have been using typescript",
   blog:"65d48af2180f82e73b6aa5c1"
})
console.log(res.body)
expect(res.status).toBe(201)
})

 });

