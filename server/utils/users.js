[{
  id:'/#dsgsd235',
  name:'Surya',
  room:'evl'
}]


class Users{
  constructor (){
    this.users = [];
  }
   addUser(id ,name,room){
     var user = {id,name,room};
     this.users.push(user);
     return user;
   }

removeUser(id){
    var user=this.getUser(id);
    if(user){
      this.users=this.users.filter((user)=>user.id!==id);
    }else {

    }
    return user;
  }
  getUser(id){
    return this.users.filter((user)=>user.id ===id)[0];
  }
   getUserList (room){
     var users=this.users.filter((user)=> user.room === room);
     var namesArray =users.map((user) => user.name);
     return namesArray;
     }
}
module.exports ={Users};


//
// class Person {
//  constructor (name ,age){
//  this.name=name;
//  this.age=age;
// ///console.log(name,age);
//  }
//  getUserDescription(){
//    return  `${this.name} is ${this.age} years old`;
//  }
//
// }

// var me = new Person('Surya',24);
// console.log(me.name);
// console.log(me.age);
// console.log(me.getUserDescription());



//
// var users =[];
//
// var addUser = (id,name,room) =>{
//   users.push({
//
//   })
// }
//
// module.exports =addUser;
