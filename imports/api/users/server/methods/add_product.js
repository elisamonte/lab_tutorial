import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';
Meteor.methods({
  addProduct: function(product) {
    let insertId = Products.insert(product);
    console.log('insertId', insertId);
    if(insertId){
      return "success";
    }
    else{
      return "error";
    }

  },
})
