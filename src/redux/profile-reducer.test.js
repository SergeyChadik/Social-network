import React from 'react'
import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";




it('length of posts should be incremented', () => {
    let action = addPostActionCreator('It-it')
    let state = {
        postData: [
            { id: 1, message: 'What happend?', likes: 'like: 54' },
            { id: 2, message: 'Where my eggs?', likes: 'like: 15' }
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3);
});

it('message of posts should be incremented', () => {
    let action = addPostActionCreator('It-it')
    let state = {
        postData: [
            { id: 1, message: 'What happend?', likes: 'like: 54' },
            { id: 2, message: 'Where my eggs?', likes: 'like: 15' }
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.postData[2].message).toBe('It-it');
});

it('deleted length of message should be incremented', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(2);
});

it('deleted Id length of message should be incremented', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3);
});



