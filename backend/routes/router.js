const express = require("express");
const router = express.Router();
const users = require("../models/userSchma");

// Register user

router.post("/register", async (req, res) => {
  const { userid, fname, lname, address, mobilenumber, department } = req.body;

  if (!fname || !lname || !userid || !address || !mobilenumber || !department) {
    res.status(422).json("Please Fill the Data");
  }
  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      res.status(422).json("this is user is alreay Registered");
    } else {
      const adduser = new users({
        userid,
        fname,
        lname,
        address,
        mobilenumber,
        department,
      });
      await adduser.save();
      res.status(201).json("Registered Successfully");
    }
  } catch (error) {
    res.status(422).json("Not Register");
  }
});

// update user data

router.put("/updateduser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateduser);
    res.status(200).json("User Updated Successfully");
  } catch (error) {
    res.status(422).json("User Not Updated ");
  }
});

// delete user

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteuser = await users.findByIdAndDelete({ _id: id });
    console.log(deleteuser);
    res.status(201).json("User Deleted Sucessfully");
  } catch (error) {
    res.status(500).json("Something Went Wrong");
  }
});

// Get List of All Employee

router.get("/getallemployee", async (req, res) => {
  try {
    const userdata = await users.find();
    console.log(userdata);
    res.status(200).json(userdata);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
