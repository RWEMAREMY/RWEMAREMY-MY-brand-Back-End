import { test, it, describe, expect, beforeAll, afterAll } from '@jest/globals';
import app from '../src/index'
import superApp, {Request, Response} from 'supertest'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import supertest from 'supertest';
import { ObjectId } from 'mongodb';
import { title } from 'process';

dotenv.config();
const DB_URL = process.env.MONGODB_URL|| '';

beforeAll(async() =>{
    await mongoose.connect(DB_URL);
},80000);

afterAll(async() =>{
    await mongoose.connection.close();
});

const token2: { token2: string } = { token2: '' };

describe('routes', () =>{
    it('/api/ for 404', async()=>{
        const result  = await supertest(app).get('/api/');
        expect(result.status).toBe(404);
    })
    it('/api/ for 200', async()=>{
        const show  = await supertest(app).get('/api/blogs');
        expect(show.status).toBe(200);
    })
    it('/api/ for 200', async()=>{
        const show  = await supertest(app).get('/api/queries');
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

    it('login',async()=>{
        const show= await supertest(app).post('/api/login').send({
email:"rwemaremy21@gmail.com",
password:"Remyzo@21",
});
token2.token2 = show.body.token;
expect(show.statusCode).toBe(200)
    })

    it('signup not authentication', async() =>{
        const show  = await supertest(app).post("/api/signup");
            expect(show.status).toBe(400);
    })
    it('login  authentication', async() =>{
        const show  = await supertest(app).post("/api/login").send({
            email:"rwemaremy21@gmail.com",
            password:"Remyzo@21"
        })
            expect(show.status).toBe(200);
    })

    
    it('add likes', async() =>{
        const show  = await supertest(app).post("/api/blogs/:id/like");
            expect(show.status).toBe(500);
    })
    it('querry', async() =>{
        const show  = await supertest(app).post("/api/queries").send({
            title:"",
            content:"",
        })
            expect(show.status).toBe(400);
    })
    it('querry', async() =>{
        const show  = await supertest(app).post("/api/queries").send({
            author:"remy",
            content:"i had a queries",
            email:"rwe@gmail.com"
        })
            expect(show.status).toBe(200);
    })
    it('querry', async() =>{
        const show  = await supertest(app).get("/api/queries");
            expect(show.status).toBe(200);
    })
    it('querry by id', async() =>{
        const show  = await supertest(app).get("/api/queries/65d1edeba3794c2b6215d9aa");
            expect(show.status).toBe(200);
    })
    it('querry with unexisting id', async() =>{
        const show  = await supertest(app).get("/api/queries/65d1edeba3794c2b6215d9aa!!!!!!!!");
            expect(show.status).toBe(400);
    })
    
    it('querry', async() =>{
        const show  = await supertest(app).patch("/api/queries/:id");
            expect(show.status).toBe(404);
    })
    it('blogs', async() =>{
        const show  = await supertest(app).post("/api/blogs").send({
            
            content:"we are having",
            image:""
        })
            expect(show.status).toBe(400);
    })
    it('blogs post', async() =>{
        const show  = await supertest(app).get("/api/blogs").send({
            title:"reymon",
            content:"he was  asong writer back in 90's & 80's" 
        })
            expect(show.status).toBe(200);
    })

    it('get blog by id', async() =>{
        const show  = await supertest(app).get("/api/blogs/65e0dbaf746b0571c53d042b").send({
            title:"reymon",
            content:"he was  asong writer back in 90's & 80's"  
        })
                    expect(show.status).toBe(200);
    })

    it('blog patched with no content', async() =>{
        const show  = await supertest(app).patch("/api/blogs/65e0dbaf746b0571c53d042b")
                    expect(show.status).toBe(400);
    })
   

    it('editing a blog', async () => {
        const res = await supertest(app)
          .patch('/api/blogs/65d5ce903db137226ca0025c')
          .send({
          
            content: "Testing 1",
          })
          .set('Authorization', 'Bearer ' + token2.token2);
        expect(res.statusCode).toBe(400)
      });

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
  



});

// should be created
describe('check out authentication',()=>{

    // it('new account',async()=>{
    //     const create  = await supertest(app).post("/api/signup")
    //     .send({userName:"rwema", email:"rwemaremy21@gmail.com",password:'Remyzo@21'})
    //     expect(create.status).toBe(200);
    // })
    const id = '65dc2e9f2bc9e70903b2487b';
describe("Logging in", () => {
  const token: { token: string } = { token: '' };
  it("should login in", async () => {
    const response = await supertest(app).post("/api/login")
      .send({ email: "rwemaremy21@gmail.com", password: 'Remyzo@21' });
    token.token = response.body.token;
    expect(response.status).toBe(200);
  })
})
// should be created
it('should not register with wrong password',async ()=>{
const res=await supertest(app).post('/api/users/register')
.send({
    userName:"james",
    email:"james24@gmail.com",
    password:"james@24!"
})
expect(res.status).toBe(404)
})
// should be created
it('should be created',async ()=>{
    const id= "65dd9f7d6c9d4e6708a23b3b"
const res=await supertest(app).post('/api/blogs/65e0dbaf746b0571c53d042b/comments')
.send({
    name:"james",
    email:"james24@gmail.com",
   content:"we have been using typescript",

})

expect(res.status).toBe(201)
})

 });


