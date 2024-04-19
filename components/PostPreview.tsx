import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-slate-200 p-4 rounded-md shadow-md
        bg-white">
         <p className="text-sm text-slate-400">{props.date}</p>
         <Link href={`/posts/${props.slug}`}>
          <h2 className=" text-2xl font-bold text-indigo-600 hover:underline">{props.title}</h2>
         </Link>
         <p className="text-slate-700">{props.subtitle}</p>
        </div>
    );
};
export default PostPreview;