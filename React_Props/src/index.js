import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
           <ApprovalCard>
                <CommentDetail 
                    author = "Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentBlog="Nice post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Alex"  
                    timeAgo ="Today at 12:OOAM" 
                    commentBlog="good luck with it"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Jane" 
                    timeAgo=" at 2:00PM" 
                    commentBlog="Great job, keep it up"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
          
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))
