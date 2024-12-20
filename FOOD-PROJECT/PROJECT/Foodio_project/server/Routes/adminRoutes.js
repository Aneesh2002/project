import { Router, json } from "express";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { authenticate } from "../Middleware/auth.js";
import mongoose from "mongoose";


dotenv.config()
const Route = Router();
// const user = new Map();
// const food = new Map();

const SecretKey = process.env.SecretKey
const userSchema = new mongoose.Schema({

  email: String,

  username: { type: String, unique: true },
  password: String,
  role: String

})
const foodSchema = new mongoose.Schema({
  iD: { type: String, unique: true },
  dishName: String,
  type: String,
  price: String,
  restuarant: String,
  quantity: String

})

const User = mongoose.model('userdetails', userSchema);

const Food = mongoose.model('FoodItems', foodSchema)
const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      foodId: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 }
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      foodId: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  paymentMethod: { type: String, required: true, enum: ['UPI', 'COD'] },
  status: { type: String, default: 'Pending' },  // The order status
  orderDate: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);



mongoose.connect('mongodb://localhost:27017/Foodio_Project')

Route.use(json())



Route.post('/signup', async (req, res) => {
  const data = req.body

  const { UserName, Email, Password, Role } = data;

  const existingEmail = await User.findOne({ username: UserName })

  try {
    if (existingEmail) {
      res.status(400).json({ message: "Username Already exist" })
    } else {

      const newP = await bcrypt.hash(Password, 10)

      const newUser = new User({
        username: UserName,
        email: Email,
        password: newP,
        role: Role
      })

      await newUser.save();

      res.status(201).json({ message: "Register Successfull" })
    }
  } catch (error) {
    res.status(500).json(error)
    console.log(error);


  }



})

Route.post('/login', async (req, res) => {
  const data = req.body;
  const { UserName, Password } = data;

  const result = await User.findOne({ username: UserName })
  console.log(result);

  if (result) {
    console.log(Password)
    const invalid = await bcrypt.compare(Password, result.password);
    console.log(invalid);
    if (invalid) {

      const token = jwt.sign({ UserName: UserName, Role: result.role }, SecretKey, { expiresIn: "1h" })
      console.log(token)
      res.cookie('authToken', token, {
        httpOnly: true
      });
      res.status(200).json({ message: "Success" })
    }
    else {
      res.status(403).json({ Message: "Password Is Correct" })
    }

  }
  else {
    res.status(403).json({ message: "User is not exisit" })
  }



})


Route.post('/addFood', authenticate, async (req, res) => {
  try {
    if (req.UserName) {


      console.log('Hello')
      console.log(req.UserName);
      console.log(req.Role);

      const { ID,
        DishName,
        Type,
        Price,
        Restaurant,
        Quantity } = req.body
      console.log(ID);
      const existingItem = await Food.findOne({ iD: ID })

      if (req.Role == "admin") {
        if (existingItem) {
          res.status(400).json({ message: "this item  already exsist" })
        }

        else {
          const newItem = new Food({
            iD: ID,
            dishName: DishName,
            type: Type,
            price: Price,
            restuarant: Restaurant,
            quantity: Quantity



          })
          await newItem.save()
          res.status(200).json({ message: 'Item Addedd Successfully' })
          console.log(newItem);


          // food.set(ID, {DishName,Type,Price,Restaurant,Time })
          // res.status(200).json({ message: 'itrem Added Successfully' })
          // console.log(food.get(ID))
        }


      }
      else {
        res.status(400).json({ message: 'User Is Not Admin' })
        console.log("User Is Not Admin")

      }
    } else {
      console.log("Invalid User");
    }
  }
  catch (error) {
    res.status(400).json(error)

  }
})

Route.patch('/update', authenticate, async (req, res) => {
  const { ID,
    newDishName,
    newType,
    newPrice,
    newRestaurant,
    newTime } = req.body
  try {
    if (req.Role == "admin") {

      const result = await Food.findOneAndUpdate(
        { iD: ID }, {

        $set: {
          dishName: newDishName,
          type: newType,
          price: newPrice,
          restuarant: newRestaurant,
          time: newTime

        }

      }, { new: true });

      if (result.matchedCount == 0) {
        return res.status(400).json({ message: "item not found" });
      }
      res.status(200).json({ message: "item updated", UpdateClass: result })
    } else {
      res.status(400).json({ message: "Unauthorized Access" });
    }

  } catch (error) {
    res.status(500).json({ message: "An error occurred. Please check the class details." });
  }

})
Route.get('/search/:name', async (req, res) => {
  const name = req.params.name;

  try {
    const response = await Food.findOne({ dishName: name });
    if (response) {
      res.status(200).json({ item: response });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error occurred" });
  }
});

Route.delete('/delete/:id', authenticate, async (req, res) => {
  const ID = req.params.id;
  console.log(ID)
  try {

    const result = await Food.findOneAndDelete({ iD: ID })

    if (!result) {

      return res.status(400).json({ message: "No item name" });

    }
    if (req.Role === "admin") {
      res.status(200).json({ message: "item deleted successfully" });
    } else {
      res.status(404).json({ message: "User is no an admin" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
Route.post('/logout', (req, res) => {
  res.clearCookie("authToken");
  res.status(200).json({ message: "Logout successful" });
});
Route.get('/items', async (req, res) => {
  const fooditems = await Food.find()
  if (fooditems.length != 0) {
    console.log("list of food added")
    res.send(fooditems)
    console.log(fooditems)


  }
  else {
    console.log("no food added")
    res.send("  no food added")
  }
})

Route.post('/add', async (req, res) => {
  const body = req.body;

  const { userId, foodId, dishName, price } = body

  console.log(userId, foodId, dishName, price);


  if (!userId || !foodId || !dishName || !price) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    if (!Array.isArray(cart.items)) {
      cart.items = [];
    }

    const itemIndex = cart.items.findIndex(item => item.foodId === foodId);

    if (itemIndex >= 0) {
      cart.items[itemIndex].quantity += 1;
      // cart.items[itemIndex].price = price * cart.items[itemIndex].quantity;
    } else {
      cart.items.push({ foodId, name: dishName, price:price, quantity: 1 });
    }

    await cart.save();

    res.status(200).json(cart);
    console.log(cart);

  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

Route.post('/remove', async (req, res) => {
  try {
    const { userId, foodId } = req.body;
    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = cart.items.filter(item => item.foodId !== foodId);
      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
});

Route.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Cart is empty' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

Route.post('/placeOrder', async (req, res) => {
  const { userId, address, phoneNumber, paymentMethod } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty, please add items to your cart' });
    }

    const totalAmount = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const newOrder = new Order({
      userId,
      items: cart.items,
      totalAmount,
      address,
      phoneNumber,
      paymentMethod,
      status: 'Pending', 
    });

    await newOrder.save();

    await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } });

    res.status(200).json({ message: 'Order placed successfully', orderId: newOrder._id });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// Route.get('/orderdetails',async (req,res)=>{
//   const details=await Order.find({})
//   if(details){
//     res.status(200).json(details)
//   }else{
//     res.status(400).json({message:'error'})
//   }
// })




export { Route }