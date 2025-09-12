export default function getUsersHandler(request, h) {

    console.log(request.app.context);
    

    return {
        message: 'user'
    }
}