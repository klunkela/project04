import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../redux/profile_selectors";
import {addPost} from "../../redux/profile_reducer";

const Posts = () => {
    const posts = useSelector(getPosts)

    const dispatch = useDispatch()
    const addPost_ = (post) => {
        dispatch(addPost(post))
    }

    console.log(dispatch);
    return (
        <div>
            <div>My Posts</div>

            <PostsForm addPost={addPost_}/>

            {posts.map(
                e => <Post msg={e.post}/>
            )}
        </div>
    )
}
const Post = (props) => {
    return (
        <div>
            <div>{props.msg}</div>
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
                onSubmit={values => {
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