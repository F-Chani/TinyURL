import express from 'express';
import LinksController from '../Controllers/linksController.js';

const LinksRouter = express.Router();

LinksRouter.get('/', LinksController.getLinks);
LinksRouter.get('/:id', LinksController.getLinkById);
LinksRouter.post('/', LinksController.createLink);
LinksRouter.put('/:id', LinksController.updateLink);
LinksRouter.delete('/:id', LinksController.deleteLink);


LinksRouter.get('/redirect/:id', LinksController.redirectLink);
LinksRouter.get('/clicks/:id', LinksController.getClicksByTarget);

export default LinksRouter;
