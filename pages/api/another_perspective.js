import connectDb from "middleware/connectDB";
import Users from "models/User";

const handler = async (req, res) => {
  let { name, email, work, topic } = req.body;

  //   have to work on it
  if (req.method == "GET") {
    let all_users = await Users.find();
    all_users = all_users.filter((a) => !a.is_deleted && a.message.length > 0);
    res.status(200).json(all_users);
  } else if (req.method == "POST") {
    let exist = await Users.findOne({ email });
    if (exist) {
      let allMessages = [...exist.message, message];
      await Users.findOneAndUpdate(
        { email },
        {
          messgae: allMessages,
        }
      );
      res.status(200).json({ success: "Updated Queries" });
    } else {
      let newuser = new Users({
        email,
        message: [message],
      });
      await newuser.save();
      res.status(200).json({ success: "Query Registered!" });
    }
  } else {
    res.status(500).json({ error: "Invalid Method!" });
  }
};

export default connectDb(handler);
