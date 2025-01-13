import { createContext, useState, useContext } from "react";
import { Blog } from "../types";

type BlogContextType = {
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    updateBlog: (blog: Blog) => void;
    deleteBlog: (id: number) => void; 
}

const BlogContext = createContext<BlogContextType | undefined>(undefined)