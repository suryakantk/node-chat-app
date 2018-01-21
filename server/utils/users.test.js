// const expect = require('expect');
//
// const {Users} = require('./users');
//
//
// describe('Users' , () => {
//   var users;
// beforeEach(()=>{
//   users =new Users();
//   Users.users =[{
//     id:'1',
//     name:'prashant',
//     room:'evol'
//   },
//   {
//     id:'2',
//     name:'surya',
//     room:'evol'
//   },
//   {
//     id:'3',
//     name:'faizan',
//     room:'evl'
//   }]
// });
//
// it('Should add new user ',() =>{
//   var users = new Users();
//   var user ={
//     id:'123',
//     name:'Surya',
//     room:'evls'
//   };
//   var resUser = users.addUser(user.id,user.name,user.room);
//   expect(users.users).toEqual([user]);
// });
//
// it('Should return names for evol',()=>{
//   var userList = users.getUserList('evol');
//   console.log('list',userList);
//     expect(userList).toEqual(['surya','prashant']);
// });
//
// })


const {Users} =  require('./users');
const expect = require('expect');




describe('Users', () => {
 var users;
 beforeEach(()=>{
   users = new Users();
   users.users=[{id:'1',name:'Mike',room:'Node Course'},
                {id:'2',name:'Jen',room:'React Course'},
                {id:'3',name:'Julse',room:'Node Course'}];
 })

 it('should add new user',()=>{
   var users = new Users();
   var user = {id:'1001',name:'Shriman',room:'The Office Fans'};
   var res = users.addUser(user.id,user.name,user.room);

   expect(users.users).toEqual([user]);
 });

 it('should return names for node course',()=>{
   var userList = users.getUserList('Node Course');
   expect(userList).toEqual(['Mike','Julse']);
 });

 it('should return names for react course',()=>{
   var userList = users.getUserList('React Course');
   expect(userList).toEqual(['Jen']);
 });

 it('should remove  user',()=>{

 });

 it('should not remove user',()=>{

 });

 it('should find  user',()=>{
   var userId='2';
   var user = users.getUser(userId);
   expect(user.id).toBe(userId);
 });

 it('should not find user',()=>{
   var userId='4';
   var user = users.getUser(userId);
   expect(user).toNotExist();
 });

});
