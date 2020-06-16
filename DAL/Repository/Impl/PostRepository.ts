import IPostRepository from '../Interfaces/IPostRepository';
import { Post } from '../../Entities/Post';
const PostModel = require('../../Models/PostModel');

export default class PostRepository implements IPostRepository{
    constructor(){}
    public async GetAll(): Promise<Post[]>{
        const posts = await PostModel.find({});
        return posts;
    }
    public async Add(value: Post): Promise<void> {
        await PostModel.create(value);
    }
    public async Remove(id: number): Promise<void> {
        await PostModel.findByIdAndDelete(id);
    }
    public async GetById(id: number): Promise<Post> {
        const post = await PostModel.findById(id);
        return post;
    }
}