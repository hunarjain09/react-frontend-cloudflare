import React, { useEffect, useState } from "react";
import { CardHeader } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      let resp = await fetch(
        "https://broad-star-50cd.hunar-jain.workers.dev/posts",{method:'GET'}
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <Stack spacing={2}>
      <CardHeader title="Posts" titleTypographyProps={{ variant: "h2", align: "center" }}>
      </CardHeader>
    {posts.map((post,index) => (
        <Card sx={{ minWidth: 275 }} key={index}>
        <CardContent>
          <Typography variant="h4" component="div">
            {post.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {post.username}
          </Typography>
          <Typography variant="body2">
            {post.content}
          </Typography>
        </CardContent>
      </Card>
      ))}
  </Stack>
  );
};

export default Posts;