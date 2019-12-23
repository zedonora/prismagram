export const COMMENT_FRAGMENT= `
    fragment CommentPargs on Comment{
        id
        text
        user {
            username
        }
    }
`;  