import { deletePost, getById, updatePost } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const id = req.url.split("blog/")[1];
    console.log(id);
    const post = getById(id);
    if (!post) {
      return NextResponse.json({ message: "Error" }, { status: 404 });
    }
    return NextResponse.json({ message: "Okay", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};

export const PUT = async (req, res) => {
  try {
    const { title, desc } = await req.json();
    const id = req.url.split("blog/")[1];
    updatePost(id, title, desc);

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};

export const DELETE = async (req, res) => {
    try{
        const id = req.url.split("blog/")[1]
        deletePost(id)
        return NextResponse.json({ message: "OK" }, { status: 200 });
    }catch(err){
        return NextResponse.json({ message: "ERROR" }, { status: 500 });
    }
};
