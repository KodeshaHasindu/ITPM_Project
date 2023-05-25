import express from 'express';
import mongoose from 'mongoose';

import Movies from '../models/movie.js';
import Ads from '../models/ads.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 16;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await Movies.countDocuments({});
        const posts = await Movies.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags, page, language } = req.query;

    try {
        const LIMIT = 9999999;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await Movies.countDocuments({});
        
        const title = new RegExp(searchQuery, "i");

        const posts = await Movies.find({ $or: [ { title }, { tags: { $in: tags.split(',') } },{ language: { $in: language} } ]}).sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        posts.reverse();
        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}


export const getPostsByTags = async (req, res) => {
    const { searchQuery, actors, page, year,director, country, production } = req.query;

    try {
        const LIMIT = 9999999;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await Movies.countDocuments({});
        
        const title = new RegExp(searchQuery, "i");

        const posts = await Movies.find({ $or: [ { title }, { actors: { $in: actors.split(',') } },{ year: { $in: year} },{ director: { $in: director} }, { country: { $in: country} }, { production: { $in: production} } ]}).sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        posts.reverse();
        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}



export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Movies.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getAds = async (req, res) => { 

    try {
        const posts = await Ads.find();
        
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export default router;