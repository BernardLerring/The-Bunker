import { rest } from "msw"

const baseURL = "https://golf-drf-api.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`,(req,res,ctx) => {
        return res(
            ctx.json({
                "pk":1,
                "username":"Tim",
                "email":"",
                "first_name":"",
                "last_name":"",
                "profile_id":1,
                "profile_image":"https://res.cloudinary.com/timwright/image/upload/v1/media/../default_profile_oecbh9_pdmll9"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];