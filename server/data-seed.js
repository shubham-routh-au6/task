import User from "./model/User.js";
import mongoose from 'mongoose';
import dotenv  from "dotenv"
dotenv.config();

mongoose
  .connect(process.env.MongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true,
  })
  .then(function () {
    console.log("Database connected successfully to seed data");
  })
  .catch(function (err) {
    console.log(err.message);
  });

var users = [
  new User({
    name: "Kartik",
    email: "kartik@gmail.com",
    department: "Back End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Ganesh",
    email: "ganesh@gmail.com",
    department: "Front End",
    skills: {
      Javascript: 20,
      Python: 10,
      Angular: 20,
    }
  }),
  new User({
    name: "Krishna",
    email: "krishna@gmail.com",
    department: "Front End",
    skills: {
      Javascript: 40,
      React: 25,
      Typescript: 20,
      Angular: 30,
    }
  }),
  new User({
    name: "Vishnu",
    email: "vishnu@gmail.com",
    department: "Front End",
    skills: {
      Javascript: 20,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Narayan",
    email: "narayan@gmail.com",
    department: "Back End",
    skills: {
      Node: 20,
      Javascript: 20,
      Python: 30,
      express: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Mohammad",
    email: "mohammad@gmail.com",
    department: "Front End",
    skills: {
      Javascript: 28,
      Vue: 30,
      React: 40,
      Typescript: 30,
    }
  }),
  new User({
    name: "Danny",
    email: "danny@gmail.com",
    department: "Front End",
    skills: {
      Javascript: 28,
      Angular: 30,
      React: 40,
      Typescript: 30,
    }
  }),
  new User({
    name: "Meera",
    email: "meera@gmail.com",
    department: "Front End",
    skills: {
      Javascript: 40,
      Vue: 30,
      React: 30,
      Typescript: 30,
    }
  }),
  new User({
    name: "Owas",
    email: "owas@gmail.com",
    department: "Back End",
    skills: {
      Node: 10,
      Javascript: 30,
      Python: 30,
      Express: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Britney",
    email: "britney@gmail.com",
    department: "Back End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      Typescript: 20,
    }
  }),
  new User({
    name: "Mervick",
    email: "mervick@gmail.com",
    department: "Back End",
    skills: {
      Node: 30,
      Javascript: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Many",
    email: "many@gmail.com",
    department: "Front End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Christinia",
    email: "christinia@gmail.com",
    department: "Front End",
    skills: {
      Javascript: 28,
      Vue: 30,
      React: 40,
      Typescript: 30,
    }
  }),
  new User({
    name: "Emanuel",
    email: "emanuel@gmail.com",
    department: "Front End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Fedrick",
    email: "fedrick@gmail.com",
    department: "Front End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Amie",
    email: "amie@gmail.com",
    department: "Front End",
    skills: {
      Javascript: 28,
      Vue: 30,
      React: 40,
      Typescript: 30,
    }
  }),
  new User({
    name: "Coper",
    email: "coper@gmail.com",
    department: "Back End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Brian",
    email: "brian@gmail.com",
    department: "Back End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Twinkle",
    email: "twinkle@gmail.com",
    department: "Front End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Mickey",
    email: "mickey@gmail.com",
    department: "Front End",
    skills: {
      Javascript: 28,
      Vue: 30,
      React: 50,
      Typescript: 30,
    }
  }),
  new User({
    name: "Priya",
    email: "priya@gmail.com",
    department: "Front End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Michael",
    email: "michael@gmail.com",
    department: "Back End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Tony",
    email: "tony@gmail.com",
    department: "Back End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      React: 40,
      Typescript: 20,
    }
  }),
  new User({
    name: "Dhanush",
    email: "dhanush@gmail.com",
    department: "Back End",
    skills: {
      Node: 10,
      Javascript: 20,
      Python: 30,
      Typescript: 20,
    }
  }),
];

var count = 0;
for (var i = 0; i < users.length; i++) {
  users[i].save((err, result) => {
    if(err) return 'Something went wrong';
    count++;
    if (count === users.length) {
      console.log('Data seeded successfully')
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
