import { Database as DB } from "@/lib/database.types";

type Tweet = DB["public"]["Tables"]["tweets"]["Row"];
type User = DB["public"]["Tables"]["users"]["Row"];

declare global {
  type Database = DB;
  type TweetWithAuthor = Tweet & {
    author: User;
    likes: number;
    user_has_liked_tweet: boolean;
  };
}
