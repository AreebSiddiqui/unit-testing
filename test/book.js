let mongoose = require('mongoose')
let bookModel = require('../book/book.model')
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server')
let should  = chai.should()
chai.use(chaiHttp);

// Book collection would be deleted 
describe('Books', () => {
    beforeEach((done)=> {
        bookModel.deleteMany({}, (err)=>{
            done();
        })
    })
    
    // test for get books api
    describe('/GET BOOK', () => {
        it('Get all books', async()=> {
            let res = await chai.request(server)
            .get('/book')
            .send();
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
        })
    })
    
// test fro getting a single book
    describe('/GET/:id book', () => {
        it('it should GET a book by the given id', async() => {
            let book = new bookModel({ name: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1170 });
            let res = await chai.request(server)
              .get('/book/' + book.id)
              .send(book)
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('author');
                    res.body.should.have.property('pages');
                    res.body.should.have.property('_id').eql(book.id);
            });
    });
  });
   
    //test for creating a book
    describe('/POST/', ()=> {
        it('Post Book', async()=> {
            let book = {
                name: 'Harry Potter',
                author: 'J.K',
                pages: '200'
            };
            let res = await chai.request(server)
            .post('/book')
            .send(book)
            res.should.have.status(201);           
        })
    })


// test for updating a book
describe('/PUT/:id', () => {
    it('Update Book', async()=>{
        let book = {
            name: 'Harry Potter',
            author: 'J.K',
            pages: '250'
        };
        let res = await chai.request(server)
        .put(`/book/${book._id}`)
        .send(book)
            res.should.have.status(200);
            res.body.should.be.a('object');        
    })
})


describe('/DELETE', () => {
    it('Delete book', async()=> {
        let book = new bookModel ({name:"Harry Potter", author:'J.K',pages:'200'})
        let res  = await chai.request(server)
        .delete(`/book/${book._id}`)
        .send(book)
        res.should.have.status(201)
        res.body.should.be.a('object')        
    })
})