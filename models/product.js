const { STRING } = require('mysql2/lib/constants/types.js');
const Sequelize=require('sequelize');
const sequelize=require('../util/database.js');
const Product=sequelize.define('product',{
  id:{
type:Sequelize.INTEGER,
autoIncrement:true,
allowNull:false,
primaryKey:true,
  },
  title:Sequelize.STRING,
price:{
  type:Sequelize.DOUBLE,
  allowNull:false
},
imageUrl:{
  type:Sequelize.STRING,
  allowNull:false
},
descriptions:Sequelize.STRING

})
module.exports=Product;