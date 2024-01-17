/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.result = [];
  }

  add(todo){
    this.result.push(todo);
   
  }

  remove(index){
    this.result.splice(index,1);
  }

  update(index, updatedTodo){
    console.log(index);
    console.log(updatedTodo);
    console.log(this.result.length);
    if((index+1) > this.result.length){
      
    }else{
      this.result.splice(index, 1,updatedTodo);
    }
    console.log(this.result);
  }

  getAll(){
    return this.result;
  }

  get(indexOfTodo){
    if((indexOfTodo+1) > this.result.length){
      return null;
    }else{
      return this.result[indexOfTodo];
    }
  }

  clear(){
    return this.result.splice(0, this.result.length);
  }

}

module.exports = Todo;
