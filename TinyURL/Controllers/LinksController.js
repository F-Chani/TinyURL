// import LinkModell from '../modells/LinkModell.js';

// const LinksController = {
//     getLinks: async (req, res) => {
//         try {
//             const links = await LinkModell.find();
//             res.json(links);
//         } catch (e) {
//             res.status(400).json({ message: e.message });
//         }
//     },
//     getLinkById: async (req, res) => {
//         try {
//             const link = await LinkModell.findById(req.params.id);
//             res.json(link);
//         } catch (e) {
//             res.status(400).json({ message: e.message });
//         }
//     },
//     createLink: async (req, res) => {
//         const { originalUrl } = req.body;
//     try {
//       const newLink = await LinkModell.create({ originalUrl });
//       res.json(newLink);
//     } catch (e) {
//       res.status(400).json({ message: e.message });
//     }
//     },
//     updateLink: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const updatedLink = await LinkModell.findByIdAndUpdate(id, req.body, { new: true });
//             res.json(updatedLink);
//         } catch (e) {
//             res.status(400).json({ message: e.message });
//         }
//     },
//     deleteLink: async (req, res) => {
//         const { id } = req.params;
//         try {
//             const deletedLink = await LinkModell.findByIdAndDelete(id);
//             res.json(deletedLink);
//         } catch (e) {
//             res.status(400).json({ message: e.message });
//         }
//     },
//     redirect: async (req, res) => {
//         const { id } = req.params;
//         const ipAddress = req.ip; // ניתן לקבל את כתובת ה-IP מהבקשה
//         const targetParamValue = req.query[req.targetParamName] || ""; 
    
//         try {
//           const link = await LinkModell.findById(id);
//           if (!link) {
//             return res.status(404).json({ message: "Link not found" });
//           }
    
//           link.clicks.push({ ipAddress, targetParamValue });
//           await link.save();
    
//           res.redirect(link.originalUrl);
//         } catch (e) {
//           res.status(400).json({ message: e.message });
//         }
//       },
// };

// export default LinksController;
import LinkModell from '../modells/LinkModell.js';

const LinksController = {
    getLinks: async (req, res) => {
        try {
            const links = await LinkModell.find();
            res.json(links);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    getLinkById: async (req, res) => {
        try {
            const link = await LinkModell.findById(req.params.id);
            res.json(link);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    createLink: async (req, res) => {
        const { originalUrl } = req.body;
        try {
            const newLink = await LinkModell.create({ originalUrl });
            res.json(newLink);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    updateLink: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedLink = await LinkModell.findByIdAndUpdate(id, req.body, { new: true });
            res.json(updatedLink);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    deleteLink: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedLink = await LinkModell.findByIdAndDelete(id);
            res.json(deletedLink);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    redirectLink: async (req, res) => {
        const { id } = req.params;
        const ipAddress = req.ip; // ניתן לקבל את כתובת ה-IP מהבקשה
        const targetParamValue = req.query[req.targetParamName] || ""; 

        try {
            const link = await LinkModell.findById(id);
            if (!link) {
                return res.status(404).json({ message: "Link not found" });
            }

            link.clicks.push({ ipAddress, targetParamValue });
            await link.save();

            res.redirect(link.originalUrl);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    getClicksByTarget: async (req, res) => {
        const { id } = req.params;
        try {
            const link = await LinkModell.findById(id);
            if (!link) {
                return res.status(404).json({ message: "Link not found" });
            }

            const targetClicks = link.clicks.reduce((acc, click) => {
                const target = click.targetParamValue || 'unknown';
                if (!acc[target]) {
                    acc[target] = 0;
                }
                acc[target]++;
                return acc;
            }, {});

            res.json(targetClicks);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
};

export default LinksController;

