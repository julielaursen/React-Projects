import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className = "ui container comments">
          <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAge="Today at 4:55pm" 
                    post="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
                author="Alex" 
                timeAge="Today at 2:00am" 
                post="Thanks for the post"
                avatar={faker.image.avatar()}
                />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
                author="Jaime" 
                timeAge="Yesterday at 7:19am" 
                post="I agree"
                avatar={faker.image.avatar()}
                />
        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));