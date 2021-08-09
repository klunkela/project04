import React from 'react';
import Post from './Post/Post';
import {Field, Form, Formik} from "formik";

const Posts = (props) => {
    return (
        <div>
            <div>My Posts</div>

            <PostsForm addPost={props.addPost}/>

            {props.posts.map(
                e => <Post msg={e.post}/>
            )}
        </div>
    )
}
const PostsForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    message: '',
                }}
                onSubmit={
                    async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        props.addPost(values.post);
                    }}
            >
                <Form>
                    <Field id="post" name="post" placeholder="" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </div>
    )
}
export default Posts;