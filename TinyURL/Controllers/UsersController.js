import UserModell from "../modells/UserModell.js";

const UsersController = {
    getList: async (req, res) => {
        try {
            const users = await UserModell.find();
            res.json(users);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await UserModell.findById(req.params.id);
            res.json(user);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    addUser: async (req, res) => {
      const { name, email, password, links } = req.body;
      try {
        const newUser = await UserModell.create({ name, email, password, links });
        res.json(newUser);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
    updateUser: async (req, res) => {
        const { id } = req.params;
        try {
            const updateUser = await UserModell.findByIdAndUpdate(id, req.body, { new: true });
            res.json(updateUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await UserModell.findByIdAndDelete(id);
            res.json(deleted);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    // getLinks: async (req, res) => {
    //     const { id } = req.params;
    //     try {
    //         const user = await UserModell.findById(id).populate('links');
    //         const links = user.links;
    //         res.json(links);
    //     } catch (e) {
    //         res.status(400).json({ message: e.message });
    //     }
    // }
};
export default UsersController;
